const { isContactableListing } = require('./statusPolicy');

function canStartInquiry({ buyer, listing, existingInquiry, now = new Date() }) {
  const reasons = [];

  if (!buyer || !buyer.id) reasons.push('buyer must be signed in');
  if (buyer && buyer.emailVerified !== true) reasons.push('buyer email must be verified');
  if (!listing || !listing.id) reasons.push('listing is missing');
  if (listing && buyer && listing.sellerId === buyer.id) reasons.push('buyer cannot contact their own listing');
  if (listing && !isContactableListing(listing)) reasons.push('listing is not contactable');

  if (existingInquiry && existingInquiry.createdAt) {
    const created = new Date(existingInquiry.createdAt).getTime();
    const deltaMinutes = (now.getTime() - created) / 60000;
    if (deltaMinutes < 10) reasons.push('recent duplicate inquiry cooldown');
  }

  return {
    allowed: reasons.length === 0,
    reasons,
  };
}

module.exports = { canStartInquiry };
