import { API_KEY_MAILCHANNELS, DKIM_PRIVATE_KEY } from "@/environment";
import type { APIRoute } from "astro";

export const prerender = false;

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  preferredCallTime?: string;
  message: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type") || "";

    let contactData: ContactFormData;

    if (contentType.includes("application/json")) {
      const body = await request.json();
      contactData = {
        name: body.name,
        email: body.email,
        phone: body.phone || "",
        preferredCallTime: body.preferredCallTime || "",
        message: body.message,
      };
    } else {
      // Try to handle as form data
      const body = await request.text();
      const params = new URLSearchParams(body);

      contactData = {
        name: params.get("name") as string,
        email: params.get("email") as string,
        phone: params.get("phone") || "",
        preferredCallTime: params.get("preferredCallTime") || "",
        message: params.get("message") as string,
      };
    }

    // Basic validation
    if (!contactData.name || !contactData.email || !contactData.message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Prepare email content
    const emailContent = `
New contact form submission from SportMeter website:

Name: ${contactData.name}
Email: ${contactData.email}
Phone: ${contactData.phone || "Not provided"}
Preferred Call Time: ${contactData.preferredCallTime || "Not provided"}

Message:
${contactData.message}

---
Sent from SportMeter contact form
`;

    // Send email using MailChannels
    const emailRequest = {
      personalizations: [
        {
          to: [{ email: "sportmeter.app@gmail.com", name: "SportMeter" }],
          dkim_domain: "sport-meter.nl",
          dkim_selector: "mc1",
          dkim_private_key: DKIM_PRIVATE_KEY,
        },
      ],
      from: {
        email: "noreply@sport-meter.nl",
        name: "SportMeter Contact Form",
      },
      reply_to: {
        email: contactData.email,
        name: contactData.name,
      },
      subject: `New Contact Form Submission from ${contactData.name}`,
      content: [
        {
          type: "text/plain",
          value: emailContent,
        },
      ],
    };

    const mailResponse = await fetch(
      "https://api.mailchannels.net/tx/v1/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": API_KEY_MAILCHANNELS,
          "X-MailChannels-Auth-Id": "soothdev",
          "X-MailChannels-SenderId": "soothdev|x-authuser|soothdev",
        },
        body: JSON.stringify(emailRequest),
      }
    );
    if (!mailResponse.ok) {
      console.error("MailChannels error:", mailResponse.text());
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("Email sent successfully, status:", mailResponse.status);
    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
