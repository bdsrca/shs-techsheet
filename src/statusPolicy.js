const PUBLICATION = Object.freeze({
  DRAFT: 'draft',
  PUBLISHED: 'published',
  PAUSED: 'paused',
  ARCHIVED: 'archived',
});

const MODERATION = Object.freeze({
  NORMAL: 'normal',
  FLAGGED: 'flagged',
  UNDER_REVIEW: 'under_review',
  REMOVED: 'removed',
});

const SALE = Object.freeze({
  AVAILABLE: 'available',
  ON_HOLD: 'on_hold',
  SOLD: 'sold',
});

function isPublicListing(listing) {
  return listing.publicationStatus === PUBLICATION.PUBLISHED &&
    listing.moderationStatus === MODERATION.NORMAL &&
    (listing.saleStatus === SALE.AVAILABLE || listing.saleStatus === SALE.ON_HOLD);
}

function isContactableListing(listing) {
  return isPublicListing(listing) && listing.saleStatus === SALE.AVAILABLE;
}

function explainListingState(listing) {
  const reasons = [];
  if (listing.publicationStatus !== PUBLICATION.PUBLISHED) reasons.push('not published');
  if (listing.moderationStatus !== MODERATION.NORMAL) reasons.push(`moderation: ${listing.moderationStatus}`);
  if (listing.saleStatus === SALE.SOLD) reasons.push('already sold');
  if (listing.saleStatus === SALE.ON_HOLD) reasons.push('currently on hold');
  return reasons.length ? reasons : ['public and available'];
}

module.exports = {
  PUBLICATION,
  MODERATION,
  SALE,
  isPublicListing,
  isContactableListing,
  explainListingState,
};
