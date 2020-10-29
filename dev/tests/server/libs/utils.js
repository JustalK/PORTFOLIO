var test = require('ava');
var m = require('../../../server/libs/utils');
test('[STATIC] Testing is_value_exist with correct value', function (t) {
    var result = m.is_value_exist('value');
    t.is(typeof result, 'boolean');
    t.is(result, true);
});
test('[STATIC] Testing is_value_exist with bad value', function (t) {
    var result = m.is_value_exist(undefined);
    t.is(typeof result, 'boolean');
    t.is(result, false);
});
test('[STATIC] Testing add_filter with correct value', function (t) {
    var filters = {};
    m.add_filter(filters, 'test_key', 'test_value');
    t.is(typeof filters, 'object');
    t.is(filters.test_key, 'test_value');
});
test('[STATIC] Testing add_tags_filter with correct value', function (t) {
    var filters = {};
    m.add_tags_filter(filters, 'test_key', 'test_value');
    t.is(typeof filters, 'object');
    t.not(filters.test_key, undefined);
});
test('[STATIC] Testing add_tags_filter with bad value', function (t) {
    var filters = {};
    m.add_tags_filter(filters, 'test_key', undefined);
    t.is(typeof filters, 'object');
    t.is(filters.test_key, undefined);
});
