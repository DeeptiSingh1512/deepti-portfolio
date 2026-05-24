// netlify/functions/contact.js
// Serverless function — runs on Netlify's edge, no server needed

exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    let body;
    try {
      body = JSON.parse(event.body);
    } catch {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid JSON in request body" }),
      };
    }

    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Name, email and message are required." }),
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Please enter a valid email address." }),
      };
    }

    // ─── Option A: Netlify Forms (zero config — recommended) ───────────────
    // Netlify automatically captures form submissions if you use
    // the built-in HTML form with data-netlify="true" (already in index.html).
    // This function is a fallback for the JS fetch approach.

    // ─── Option B: Send via EmailJS (add your keys in Netlify env vars) ───
    // To enable real email sending:
    // 1. Sign up at emailjs.com (free — 200 emails/month)
    // 2. Get your Service ID, Template ID, and Public Key
    // 3. Add these in Netlify → Site Settings → Environment Variables:
    //    EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY
    // 4. Uncomment the fetch block below

    /*
    const emailjsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: { from_name: name, from_email: email, subject, message },
      }),
    });
    if (!emailjsResponse.ok) throw new Error("EmailJS send failed");
    */

    // Log for Netlify function logs (visible in dashboard)
    console.log(`New contact from ${name} <${email}>: ${subject || '(no subject)'}`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Thanks! I'll get back to you within 24 hours.",
      }),
    };
  } catch (err) {
    console.error("Contact function error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Something went wrong. Please email me directly." }),
    };
  }
};
