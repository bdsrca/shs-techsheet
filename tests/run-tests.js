const assert = require('assert');
const { isPublicListing, isContactableListing } = require('../src/statusPolicy');
const { reviewListing } = require('../src/listingQuality');
const { canStartInquiry } = require('../src/inquiryPolicy');
const { normalizeIp, stablePayloadHash, shouldBlockSubmission } = require('../src/abuseGuard');

const goodListing = {
  id: 'lst_good',
  title: 'Graphing Calculator TI-84',
  description: 'Used for one semester. Works well. Can meet near the library.',
  price: 55,
  category: 'School supplies',
  meetupArea: 'Central Library Area',
  publicationStatus: 'published',
  moderationStatus: 'normal',
  saleStatus: 'available',
  sellerId: 'seller_1',
};

assert.strictEqual(isPublicListing(goodListing), true);
assert.strictEqual(isContactableListing(goodListing), true);

const onHold = { ...goodListing, saleStatus: 'on_hold' };
assert.strictEqual(isPublicListing(onHold), true);
assert.strictEqual(isContactableListing(onHold), false);

const removed = { ...goodListing, moderationStatus: 'removed' };
assert.strictEqual(isPublicListing(removed), false);

const risky = reviewListing({
  id: 'lst_risky',
  title: 'vape',
  description: 'Text me at 416-555-1212 and meet at my house',
  price: 0,
  category: 'Other',
  meetupArea: 'my house',
});
assert.strictEqual(risky.severity, 'high');
assert(risky.adminFlags.some((flag) => flag.includes('restricted')));
assert(risky.adminFlags.includes('possible direct contact detail'));

const inquiry = canStartInquiry({
  buyer: { id: 'buyer_1', emailVerified: true },
  listing: goodListing,
});
assert.deepStrictEqual(inquiry, { allowed: true, reasons: [] });

const ownListing = canStartInquiry({
  buyer: { id: 'seller_1', emailVerified: true },
  listing: goodListing,
});
assert.strictEqual(ownListing.allowed, false);
assert(ownListing.reasons.includes('buyer cannot contact their own listing'));

assert.strictEqual(normalizeIp('::ffff:127.0.0.1'), '127.0.0.1');
assert.strictEqual(stablePayloadHash({ b: 2, a: 1 }), stablePayloadHash({ a: 1, b: 2 }));

const accepted = shouldBlockSubmission({ payload: { message: 'hello' }, recentEvents: [] });
assert.strictEqual(accepted.blocked, false);
const duplicate = shouldBlockSubmission({
  payload: { message: 'hello' },
  recentEvents: [{ hash: accepted.hash, timestamp: Date.now() }],
});
assert.strictEqual(duplicate.blocked, true);
assert.strictEqual(duplicate.reason, 'duplicate payload');

console.log('All tests passed.');
