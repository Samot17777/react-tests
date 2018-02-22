'use strict';

import 'core-js/fn/string/starts-with';
import 'core-js/fn/string/includes';

import 'core-js/fn/array/includes';
import 'core-js/fn/array/find';
import 'core-js/fn/array/from';

import 'core-js/fn/object/entries';

import 'core-js/es6/map';
import 'core-js/es6/set';

if (typeof Promise === 'undefined') {
    // Rejection tracking prevents a common issue where React gets into an
    // inconsistent state due to an error, but it gets swallowed by a Promise,
    // and the user has no idea what causes React's erratic future behavior.
    require('promise/lib/rejection-tracking').enable();
    window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

// URLSearchParams for working with query strings
window.URLSearchParams = require('url-search-params');

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (process.env.NODE_ENV === 'test') {
    require('raf').polyfill(global);
}
