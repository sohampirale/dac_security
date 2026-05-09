import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const phone = String(formData.get('phone') || '');
    const location = String(formData.get('location') || '');
    const domain = String(formData.get('domain') || '');
    const interest = String(formData.get('interest') || '');
    const message = String(formData.get('message') || '');
    const requirements = formData.get('requirements');

    const attachments = [] as { filename: string; content: string; content_type?: string }[];

    if (requirements && requirements instanceof File && requirements.size > 0) {
      const buffer = Buffer.from(await requirements.arrayBuffer());
      attachments.push({
        filename: requirements.name,
        content: buffer.toString('base64'),
        content_type: requirements.type || undefined,
      });
    }

    const html = `
      <h2>New Contact Request</h2>
      <p><strong>Name / Organisation:</strong> ${name || 'N/A'}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Location:</strong> ${location || 'N/A'}</p>
      <p><strong>Domain / Category:</strong> ${domain || 'N/A'}</p>
      <p><strong>Interested In:</strong> ${interest || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message || 'N/A'}</p>
    `;

    const { error } = await resend.emails.send({
      from: 'DAK Security <info@daksecurity.com>',
      to: ['info@daksecurity.com'],
      replyTo: email ? [email] : undefined,
      subject: `New contact request from ${name || 'Website Visitor'}`,
      html,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
