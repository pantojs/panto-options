/**
 * Copyright (C) 2016 yanni4night.com
 * test.js
 *
 * changelog
 * 2016-07-05[13:09:24]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.1
 * @since 0.1.0
 */
'use strict';
const assert = require('assert');
const Options = require('../');

describe('Options', function () {
    describe('#has', function () {
        it('should return true', function () {
            const o = new Options({
                undefined: undefined,
                null: null,
                NaN: NaN,
                '': '',
                '0': 0
            });
            assert.ok(o.has(''));
            assert.ok(o.has('undefined'));
            assert.ok(o.has('null'));
            assert.ok(o.has('NaN'));
            assert.ok(o.has('0'));
        });
    });
    describe('#get#set#extend', function () {
        it('should get name in constructor', function () {
            const o = new Options({
                name: 'Kate'
            });
            assert.deepEqual(o.get('name'), 'Kate');
        });
        it('should get name in extend', function () {
            const o = new Options();
            o.extend({
                name: 'Kate'
            });
            assert.deepEqual(o.get('name'), 'Kate');
        });
        it('should get name in set', function () {
            const o = new Options();
            o.set('name', 'Kate');
            assert.deepEqual(o.get('name'), 'Kate');
        });
        it('should get default value', function () {
            const o = new Options({
                age: '',
                tag: NaN,
                profile: undefined
            });
            assert.deepEqual(o.get('age'), '');
            assert.deepEqual(o.get('profile'), undefined);
            assert.ok(Number.isNaN(o.get('tag')));
            assert.deepEqual(o.get('name', 'Kate'), 'Kate');
        });
        it('should get all', function () {
            const f = {
                age: 29
            };
            const o = new Options(f);
            const f1 = o.get();
            assert.deepEqual(f1, f);
            f1.age = 30;
            assert.deepEqual(f.age, 29)
        });
    });
    describe('#rm', function () {
        it('should remove', function () {
            const o = new Options();
            o.set('name', 'Kate');
            o.rm('name');
            assert.deepEqual(o.get('name'), undefined);
        });
    });
});