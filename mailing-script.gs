const senderEmail = "technicallifts@gmail.com";

function sendFreePassEmails() {
  const labelName = "TRIAL_SENT";

  const label =
    GmailApp.getUserLabelByName(labelName) ||
    GmailApp.createLabel(labelName);

  const threads = GmailApp.search(
    'from:notifications@tally.so subject:"New Tally Form Submission for Technical Lifts" -label:TRIAL_SENT',
    0,
    20
  );

  threads.forEach(thread => {
    const messages = thread.getMessages();

    messages.forEach(message => {
      const body = message.getPlainBody();

      const customerName = extractField(body, "Name");
      const customerEmail = extractField(body, "Email address");
      const customerPhone = extractField(body, "Phone number");

      if (!customerEmail) return;

      const passId = generatePassIdFromPhone(customerPhone);

      MailApp.sendEmail({
        from: senderEmail,
        to: customerEmail,
        name: "Technical Lifts",
        subject: "Your Free 1-Day Pass Is Ready",
        htmlBody: buildEmail(
          customerName || "there",
          passId
        )
      });
    });

    thread.addLabel(label);
  });
}

function extractField(body, fieldName) {
  const lines = body
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === fieldName && lines[i + 1]) {
      return lines[i + 1];
    }
  }

  return null;
}

function generatePassIdFromPhone(phone) {
  if (!phone) return "TL-GUEST";

  const digits = phone.replace(/\D/g, "");

  if (digits.length < 4) return "TL-GUEST";

  const lastFour = digits.slice(-4);

  return `TL-${lastFour
    .split("")
    .reverse()
    .join("")}-24H`;
}

function buildEmail(firstName, passId) {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>Technical Lifts Pass</title>
</head>

<body style="
margin:0;
padding:0;
background:#0a0a0a;
font-family:Inter,'Helvetica Neue',Arial,sans-serif;
">

<table width="100%" cellpadding="0" cellspacing="0" bgcolor="#0a0a0a">
<tr>
<td align="center" style="padding:40px 16px;">

<!-- Main Card -->
<table width="600" cellpadding="0" cellspacing="0" style="
background:#141414;
border-radius:24px;
overflow:hidden;
max-width:600px;
border:1px solid rgba(255,255,255,0.08);
">

<!-- Header -->
<tr>
<td align="center" style="
padding:56px 48px 40px;
background:#141414;
">

<div style="
color:#a0a0a0;
font-size:11px;
font-weight:700;
letter-spacing:2.5px;
text-transform:uppercase;
">
WHERE TECH MEETS THE LIFT
</div>

<h1 style="
margin:20px 0 0;
font-size:40px;
line-height:1.1;
color:#f5f5f5;
font-weight:700;
letter-spacing:-0.02em;
">
Technical Lifts
</h1>

<div style="
display:inline-block;
background:#e8ff00;
padding:8px 18px;
border-radius:999px;
font-size:12px;
font-weight:700;
color:#0a0a0a;
letter-spacing:1px;
text-transform:uppercase;
margin-top:20px;
">
Free 1-Day Pass
</div>

</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:0 48px 48px;">

<p style="
font-size:18px;
color:#f5f5f5;
margin:0 0 8px;
font-weight:600;
">
Hello ${firstName},
</p>

<p style="
font-size:15px;
line-height:1.7;
color:#a0a0a0;
margin:0 0 16px;
">
Thank you for your interest in <strong style="color:#f5f5f5;">Technical Lifts</strong>. Your complimentary 1-Day Pass is now active.
</p>

<p style="
font-size:15px;
line-height:1.7;
color:#a0a0a0;
margin:0 0 40px;
">
Come experience our equipment, training environment, and community firsthand.
</p>

<!-- Pass ID Card -->
<table width="100%" cellpadding="0" cellspacing="0" style="
background:#0a0a0a;
border-radius:24px;
border:1px solid rgba(255,255,255,0.08);
margin-bottom:40px;
">
<tr>
<td align="center" style="padding:32px;">

<div style="
font-size:11px;
letter-spacing:2.5px;
font-weight:700;
color:#e8ff00;
text-transform:uppercase;
">
Pass Id
</div>

<div style="
font-size:36px;
font-weight:700;
margin-top:12px;
color:#f5f5f5;
letter-spacing:0.04em;

">
${passId}
</div>

<div style="
margin-top:16px;
font-size:13px;
color:#a0a0a0;
line-height:1.6;
">
Valid for one complimentary visit &middot; Redeem within 7 days
</div>

</td>
</tr>
</table>

<!-- CTA Buttons -->
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding-bottom:40px;">

<table cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:0 4px 8px;">

<a
href="https://wa.me/918920576059?text=Hi%20Technical%20Lifts%2C%20I%20received%20my%20Free%201-Day%20Pass%20(ID:%20${passId})%20and%20would%20like%20to%20visit."
style="
display:inline-block;
background:#e8ff00;
color:#0a0a0a;
padding:14px 32px;
border-radius:8px;
text-decoration:none;
font-weight:600;
font-size:14px;
letter-spacing:0.01em;
"
>
Schedule Your Visit
</a>

</td>
</tr>
<tr>
<td align="center" style="padding:0 4px;">

<a
href="tel:+918920576059"
style="
display:inline-block;
color:#a0a0a0;
padding:12px 24px;
border-radius:8px;
text-decoration:none;
font-weight:500;
font-size:14px;
border:1px solid rgba(255,255,255,0.08);
margin:0 4px;
"
>
Call +91 89205 76059
</a>

<a
href="https://share.google/NEvGaP2XWNLfYDD6k"
style="
display:inline-block;
color:#a0a0a0;
padding:12px 24px;
border-radius:8px;
text-decoration:none;
font-weight:500;
font-size:14px;
border:1px solid rgba(255,255,255,0.08);
margin:0 4px;
"
>
Google Maps
</a>

</td>
</tr>
</table>

</td>
</tr>
</table>

<!-- Pass Includes -->
<table width="100%" cellpadding="20" cellspacing="0" style="
background:#0a0a0a;
border:1px solid rgba(255,255,255,0.08);
border-radius:24px;
margin-bottom:40px;
">

<tr>
<td style="padding:24px 28px;">

<h3 style="
margin:0 0 16px;
color:#f5f5f5;
font-size:15px;
font-weight:600;
">
Your Pass Includes
</h3>

<div style="
line-height:2.2;
color:#a0a0a0;
font-size:14px;
">
&#10003; Free 1-Day Access<br>
&#10003; Full Facility Access<br>
&#10003; Open 7 Days &middot; 5AM to Midnight<br>
&#10003; Meet Our Coaches
</div>

</td>
</tr>

</table>

<!-- Visit Info -->
<table width="100%" cellpadding="0" cellspacing="0" style="
background:#0a0a0a;
border:1px solid rgba(255,255,255,0.08);
border-radius:24px;
margin-bottom:40px;
">

<tr>
<td style="padding:28px;">

<h3 style="
margin:0 0 20px;
color:#f5f5f5;
font-size:15px;
font-weight:600;
">
Visit Information
</h3>

<div style="
line-height:2;
color:#a0a0a0;
font-size:14px;
">

<strong style="color:#f5f5f5;">Location</strong><br>
C-596, Vikas Puri, Near PVR Cinema<br>
New Delhi - 110018

<br><br>

<strong style="color:#f5f5f5;">Hours</strong><br>
Monday &ndash; Sunday &middot; 5:00 AM &ndash; 12:00 AM

</div>

</td>
</tr>

</table>

<!-- Bottom CTA -->
<table width="100%" cellpadding="0" cellspacing="0" style="
background:#0a0a0a;
border:1px solid rgba(232,255,0,0.15);
border-radius:24px;
margin-bottom:40px;
">

<tr>
<td align="center" style="padding:28px;">

<div style="
font-size:16px;
font-weight:600;
color:#f5f5f5;
margin-bottom:8px;
">
Ready To Train?
</div>

<div style="
font-size:14px;
line-height:1.7;
color:#a0a0a0;
">
Reply to this email, call us, or send a WhatsApp message.<br>
We'll help schedule your first visit.
</div>

</td>
</tr>

</table>

<p style="
font-size:15px;
line-height:1.7;
color:#a0a0a0;
margin:0;
">
See you soon,<br>
<strong style="color:#f5f5f5;">Technical Lifts Team</strong>
</p>

</td>
</tr>

<!-- Footer -->
<tr>
<td align="center" style="
padding:32px 48px;
background:#0a0a0a;
border-top:1px solid rgba(255,255,255,0.08);
">

<div style="
font-weight:700;
color:#f5f5f5;
font-size:13px;
letter-spacing:1.5px;
text-transform:uppercase;
">
Technical Lifts
</div>

<div style="
margin-top:6px;
font-size:12px;
color:#a0a0a0;
">
Where Tech Meets the Lift
</div>

<div style="margin-top:16px;">

<a
href="https://instagram.com/technicallifts_gym"
style="
color:#a0a0a0;
font-weight:500;
text-decoration:none;
font-size:13px;
">
Instagram
</a>

</div>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
}
