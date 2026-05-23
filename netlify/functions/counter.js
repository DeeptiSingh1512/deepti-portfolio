// netlify/functions/counter.js
// Simple visitor counter using Netlify Blobs (free KV store)
// Falls back gracefully if not configured

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    // To enable persistent counting, add COUNTER_API_KEY in Netlify env vars
    // and use Netlify Blobs or a free KV like Upstash Redis.
    // For now, returns a static count — replace with your real integration.

    // Example with Upstash Redis (free tier):
    // const res = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/incr/portfolio_visits`, {
    //   headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` }
    // });
    // const data = await res.json();
    // return { statusCode: 200, headers, body: JSON.stringify({ count: data.result }) };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ count: null }), // Replace with real count when configured
    };
  } catch (err) {
    return { statusCode: 200, headers, body: JSON.stringify({ count: null }) };
  }
};
