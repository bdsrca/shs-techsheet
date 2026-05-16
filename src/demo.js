const listings = require('../data/sample-listings.json');
const { isPublicListing, isContactableListing } = require('./statusPolicy');
const { buildReviewPackage } = require('./answerSafetySummary');

for (const listing of listings) {
  const package = buildReviewPackage(listing);
  console.log('---');
  console.log(`${listing.title}`);
  console.log(`public: ${isPublicListing(listing)} | contactable: ${isContactableListing(listing)}`);
  console.log(JSON.stringify(package, null, 2));
}
