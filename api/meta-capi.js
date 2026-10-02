// Meta Conversions API endpoint (Vercel-compatible serverless function).
// Configure these as server environment variables; NEVER commit the access token.
const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!PIXEL_ID || !ACCESS_TOKEN) return res.status(500).json({ error: 'Meta CAPI is not configured' });
  try {
    const { event_name, event_id, event_source_url, user_data = {}, custom_data = {} } = req.body || {};
    if (!event_name || !event_id) return res.status(400).json({ error: 'event_name and event_id are required' });
    const payload = {
      data: [{
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id,
        action_source: 'website',
        event_source_url,
        user_data,
        custom_data,
      }],
    };
    if (TEST_EVENT_CODE) payload.test_event_code = TEST_EVENT_CODE;
    const response = await fetch(`https://graph.facebook.com/v24.0/${PIXEL_ID}/events?access_token=${encodeURIComponent(ACCESS_TOKEN)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return res.status(response.ok ? 200 : response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Meta CAPI request failed' });
  }
}
