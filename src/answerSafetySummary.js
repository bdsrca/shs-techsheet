const { reviewListing } = require('./listingQuality');
const { explainListingState } = require('./statusPolicy');

function buildReviewPackage(listing) {
  const quality = reviewListing(listing);
  const stateReasons = explainListingState(listing);

  return {
    listingId: listing.id,
    title: listing.title,
    state: stateReasons,
    qualitySeverity: quality.severity,
    sellerSafeSuggestions: quality.sellerSafeSuggestions,
    adminFlags: quality.adminFlags,
    recommendedAdminAction: quality.severity === 'high'
      ? 'review before public promotion'
      : quality.severity === 'medium'
        ? 'keep visible but add to review queue'
        : 'no action needed',
  };
}

module.exports = { buildReviewPackage };
