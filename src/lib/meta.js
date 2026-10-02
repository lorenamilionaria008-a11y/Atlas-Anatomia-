// Meta Pixel + Conversions API helper.
const PIXEL_ID = '1293312906244999';

function eventId(name) {
  return `atlas_${name}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function sendCapi(eventName, id, params = {}) {
  try {
    fetch('/api/meta-capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({
        event_name: eventName,
        event_id: id,
        event_source_url: window.location.href,
        custom_data: params,
      }),
    }).catch(() => {});
  } catch {}
}

export function trackMeta(eventName, params = {}) {
  const id = eventId(eventName);
  try {
    if (typeof window.fbq === 'function') window.fbq('track', eventName, params, { eventID: id });
  } catch {}
  sendCapi(eventName, id, params);
}

export function initMeta() {
  try {
    if (typeof window.fbq === 'function') {
      const id = eventId('PageView');
      window.fbq('track', 'PageView', {}, { eventID: id });
      sendCapi('PageView', id);
    }
  } catch {}
}

export { PIXEL_ID };
