/**
 * Copyright (C) 2016 yanni4night.com
 * index.js
 *
 * changelog
 * 2016-07-05[13:07:33]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const extend = require('lodash/extend');
const defineFrozenProperty = require('define-frozen-property');

class Options {
    constructor(opts) {
        defineFrozenProperty(this, '_options', extend({}, opts));
    }
    extend(extendable) {
        extend(this._options, extendable);
        return this;
    }
    has(key) {
        return key in this._options;
    }
    get(key, defaultValue) {
        return this.has(key) ? this._options[key] : defaultValue;
    }
    set(key, value) {
        return (this._options[key] = value);
    }
    rm(key) {
        return delete this._options[key];
    }
}

module.exports = Options;