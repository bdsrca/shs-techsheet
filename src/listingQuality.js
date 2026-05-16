const CONTACT_PATTERNS = [
  /\b\+?1?[-.\s]?(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})\b/,
  /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
  /\b(?:instagram|snapchat|discord)\b/i,
];

const RESTRICTED_TERMS = [
  'weapon', 'knife', 'vape', 'nicotine', 'alcohol', 'ticket', 'gift card',
  'medication', 'prescription', 'password', 'account login', 'home address',
];

function normalizeText(value) {
  return String(value || '').trim().replace(/\s+/g, ' ');
}

function reviewListing(listing) {
  const title = normalizeText(listing.title);
  const description = normalizeText(listing.description);
  const meetupArea = normalizeText(listing.meetupArea);
  const combined = `${title} ${description} ${meetupArea}`.toLowerCase();

  const suggestions = [];
  const adminFlags = [];

  if (title.length < 8) suggestions.push('Use a clearer title so students can scan the listing quickly.');
  if (!Number.isFinite(Number(listing.price)) || Number(listing.price) < 0) suggestions.push('Add a valid price, even if the item is free.');
  if (!listing.category) suggestions.push('Choose a category so the listing appears in the right browse lane.');
  if (description.length < 24) suggestions.push('Add a short condition note or useful detail.');
  if (!meetupArea || meetupArea.length < 4) suggestions.push('Use a broad public meetup area, not an exact address.');

  for (const pattern of CONTACT_PATTERNS) {
    if (pattern.test(combined)) {
      adminFlags.push('possible direct contact detail');
      suggestions.push('Keep phone numbers, personal emails, and handles out of the public listing.');
      break;
    }
  }

  for (const term of RESTRICTED_TERMS) {
    if (combined.includes(term)) {
      adminFlags.push(`restricted or risky term: ${term}`);
    }
  }

  if (/\b(home|my house|apartment|unit)\b/i.test(meetupArea)) {
    adminFlags.push('meetup area may be too private');
    suggestions.push('Use a public place such as a library, school common area, or community centre.');
  }

  const severity = adminFlags.length >= 2 ? 'high' : adminFlags.length === 1 ? 'medium' : 'low';

  return {
    listingId: listing.id || null,
    severity,
    sellerSafeSuggestions: [...new Set(suggestions)],
    adminFlags: [...new Set(adminFlags)],
  };
}

module.exports = { reviewListing };
