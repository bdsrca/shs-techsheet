const crypto = require('crypto');

function normalizeIp(raw) {
  return String(raw || '')
    .split(',')[0]
    .trim()
    .replace(/^::ffff:/, '') || 'unknown';
}

function stablePayloadHash(payload) {
  const normalized = JSON.stringify(payload, Object.keys(payload || {}).sort());
  return crypto.createHash('sha256').update(normalized).digest('hex');
}

function shouldBlockSubmission({ payload, honeypotValue = '', recentEvents = [], limit = 5, windowMs = 60_000, now = Date.now() }) {
  if (honeypotValue && String(honeypotValue).trim()) {
    return { blocked: true, reason: 'honeypot filled' };
  }

  const hash = stablePayloadHash(payload);
  const windowEvents = recentEvents.filter((event) => now - event.timestamp <= windowMs);
  const duplicates = windowEvents.filter((event) => event.hash === hash);

  if (duplicates.length > 0) {
    return { blocked: true, reason: 'duplicate payload' };
  }

  if (windowEvents.length >= limit) {
    return { blocked: true, reason: 'rate limit' };
  }

  return { blocked: false, reason: 'accepted', hash };
}

module.exports = { normalizeIp, stablePayloadHash, shouldBlockSubmission };
