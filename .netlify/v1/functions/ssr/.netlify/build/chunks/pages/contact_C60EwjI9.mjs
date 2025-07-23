import * as z from 'zod';

const API_KEY_MAILCHANNELS = z.coerce.string().parse("bDhs8jOg7dBAhkJ3N3t0ZVQrMFrdEqVv");
const DKIM_PRIVATE_KEY = z.coerce.string().parse("MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7oTC4yNRc0zym1BRQMWGwMNIYOsunPCazjVP6tpaKrpgPIyx0IBKy5xCe/xDOEfGukeUhgmyMZVvnjfnP0THHxb+PWX8CYlw8KCgOfbP+OHcsleBfusb0w8hNMl9hXKGdDLadyawEo1Y0wWlg0/EyunPQyDke60qn4DKzFnKAGhlhZ3DD/9fXRLIlFpaFni6Sl4j3iGK4CbzXdgexZqp58aSfI+JbtueDG+iOHb3BjcKxNN8Aity6jaZKwFeu0wdK/8KNqCXDhiyMV++jzKKYxUgdgyrHtbg7wCP6k28oX016QHBOB1aER8T7DhafuGLBBWENh1HAksG+xm3yv0VZAgMBAAECggEADljsMDcYKQx0jve44WxzQT0sdZKaY8x5U6HHFgzr/EkPQtoQUkVpFKHPXy8XJoDQA6avmBVAbmhqQ42zWGkxVqq4BBLGf+TMU4PJE1mYn8QK1d+Uj5FpWQpXCNMlIL1r9MXF+ZEULKseQoy3HYK7ZwMDq+eBmawJkoZ17gSVhxbGSff/bmG0YmRW60v+bSKZjioHU/bDhJrrYBaONLSvWS5y4OkI0sxf615uLGwzZBJ/eyWBeaa3UhWrMJsUMdRMDZWYbuOmOFi3og9YfNTbN9fUG9uB+n8l9GnateFkYnR9MgIOY6/NDaHdj+URCnTnm3JKwjqgfv6/l453cQjTsQKBgQDhRxsJvMjZ1+ilFoPHako68Ep3qo0A6y8pyT8kcrdiJyUmGStM0hfhHtDe2YcQ+IcbGEnOty3zgn6aJMB0Lb57ayThgyHqOt6JuGSeP4p+0/WH/GodzJ/gSut2O0DVvv791LRHlWP7Jp62HmptPbgIxVmhivMG8szs6YOt4cB9SQKBgQDVN7bl6eeqJRlbphRkCpPXZY7iD7Vq1gHkCsay9RQbOsscpcmz6/xUxhaCQ6e26vbNnzB+N51D5yLfg0IpMzDQgvU7JBMl4YFoQkyFQ7nYfJVDFFcRg6a+wnnBiWYCpUjoNWL3GZ+sSTY8wPVFcvA82O7EExnj7XbTa0cuj4DXkQKBgQCQE2PNdHmYKSfW/XFGRko3K5rUsbUAU2mUder2Ko/yLErr9Mjmlq9DAOxgugpR5kCyKXR6yliPFnRVrQ+QvfjHAh1SRQWZwhC1T8K6GrU+q9yqHdrYOBg/4Gp68SZkDYUTXcf2yCprY6W5n/Y8624Z3e2XDUCkvwAkvKvEt07eUQKBgCQS2Q7tFBTlUfT/lFOYtoqq1BHLNpZsvsUmTZfZfx1cRSEDq6yVMIvnN8eySp3YAwmm9T1li2YBpRTL0FXII2ojvfnTkKnIDWzmSqwBWWAXM+m1d0WvUHbV0GO+K1QnQr6Gycekvi8X8+UzgEvPtnWU/lCOKsM1WfVLIS/vd40BAoGBAKR3/WKDpcegXqFcf8RHM6e0dSfzLTqWS/TvMhaqRsL+RU+5m19RILqxlTv7NJyY2TY31FDzN6HVIDBmG97rcAgv3oYz7MqkgBQ4SLsSsYrgPGGUKDgh4cx7Dn+AexvsPgVXDhgJvB5jRovxhJqHj9EsWGczWxv9JiDQVeppIiF0");

const prerender = false;
const POST = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type") || "";
    let contactData;
    if (contentType.includes("application/json")) {
      const body = await request.json();
      contactData = {
        name: body.name,
        email: body.email,
        phone: body.phone || "",
        preferredCallTime: body.preferredCallTime || "",
        message: body.message
      };
    } else {
      const body = await request.text();
      const params = new URLSearchParams(body);
      contactData = {
        name: params.get("name"),
        email: params.get("email"),
        phone: params.get("phone") || "",
        preferredCallTime: params.get("preferredCallTime") || "",
        message: params.get("message")
      };
    }
    if (!contactData.name || !contactData.email || !contactData.message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
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
    const emailRequest = {
      personalizations: [
        {
          to: [{ email: "sportmeter.app@gmail.com", name: "SportMeter" }],
          dkim_domain: "sport-meter.nl",
          dkim_selector: "mc1",
          dkim_private_key: DKIM_PRIVATE_KEY
        }
      ],
      from: {
        email: "noreply@sport-meter.nl",
        name: "SportMeter Contact Form"
      },
      reply_to: {
        email: contactData.email,
        name: contactData.name
      },
      subject: `New Contact Form Submission from ${contactData.name}`,
      content: [
        {
          type: "text/plain",
          value: emailContent
        }
      ]
    };
    const mailResponse = await fetch(
      "https://api.mailchannels.net/tx/v1/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": API_KEY_MAILCHANNELS,
          "X-MailChannels-SenderId": "soothdev"
        },
        body: JSON.stringify(emailRequest)
      }
    );
    if (!mailResponse.ok) {
      console.error("MailChannels error:", mailResponse.text());
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
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
      headers: { "Content-Type": "application/json" }
    });
  }
};

export { POST, prerender };
