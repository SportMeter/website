import type { APIRoute } from 'astro';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  preferredCallTime?: string;
  message: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    
    const contactData: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || '',
      preferredCallTime: formData.get('preferredCallTime') as string || '',
      message: formData.get('message') as string,
    };

    // Basic validation
    if (!contactData.name || !contactData.email || !contactData.message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
      return new Response(
        JSON.stringify({ error: 'Please provide a valid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Prepare email content
    const emailContent = `
New contact form submission from SportMeter website:

Name: ${contactData.name}
Email: ${contactData.email}
Phone: ${contactData.phone || 'Not provided'}
Preferred Call Time: ${contactData.preferredCallTime || 'Not provided'}

Message:
${contactData.message}

---
Sent from SportMeter contact form
`;

    // Send email using MailChannels
    const emailRequest = {
      personalizations: [
        {
          to: [{ email: 'sportmeter.app@gmail.com', name: 'SportMeter' }],
          dkim_domain: 'sportmeter.nl',
          dkim_selector: 'mailchannels',
          dkim_private_key: '',
        },
      ],
      from: {
        email: 'noreply@sportmeter.nl',
        name: 'SportMeter Contact Form',
      },
      reply_to: {
        email: contactData.email,
        name: contactData.name,
      },
      subject: `New Contact Form Submission from ${contactData.name}`,
      content: [
        {
          type: 'text/plain',
          value: emailContent,
        },
      ],
    };

    const mailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailRequest),
    });

    if (!mailResponse.ok) {
      console.error('MailChannels error:', await mailResponse.text());
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};