'use strict';

describe('Bob\'s Number Calculator - End to end test', function () {
    beforeEach(function () {
        browser().navigateTo('../index.html');
    });

    it('Input: null', function () {

        
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        expect(repeater('.js-cheque-result-all span').count()).toBe(0);
        expect(element('label.error').text()).toMatch("Please enter your number");
    });

    it('Input: not number', function () {

        input('number').enter('a');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('abcde');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        expect(repeater('.js-cheque-result-all span').count()).toBe(0);
        expect(element('label.error').text()).toMatch("Please enter number");
    });

    it('Input: non integer', function () {

        input('number').enter('-1');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('0');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('1.5');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        expect(repeater('.js-cheque-result-all span').count()).toBe(0);
        expect(element('label.error').text()).toMatch("Please enter integer");
    });

    it('Input: integer', function () {

        input('number').enter('1');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('2');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('3');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('4');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('5');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('6');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('7');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('8');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('9');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('10');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('11');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('12');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('13');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('14');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        input('number').enter('15');
        element('#submit').query(function ($el, done) {
            $el.click();
            done();
        });

        expect(repeater('.js-cheque-result-all span').count()).toBe(15);
        expect(repeater('.js-cheque-result-odd span').count()).toBe(8);
        expect(repeater('.js-cheque-result-even span').count()).toBe(7);

        expect(repeater('.js-cheque-result-replace span').count()).toBe(7);
        expect(element('.js-cheque-result-replace span:nth-child(1)').text()).toMatch("C");
        expect(element('.js-cheque-result-replace span:nth-child(2)').text()).toMatch("E");
        expect(element('.js-cheque-result-replace span:nth-child(3)').text()).toMatch("C");
        expect(element('.js-cheque-result-replace span:nth-child(4)').text()).toMatch("C");
        expect(element('.js-cheque-result-replace span:nth-child(5)').text()).toMatch("E");
        expect(element('.js-cheque-result-replace span:nth-child(6)').text()).toMatch("C");
        expect(element('.js-cheque-result-replace span:nth-child(7)').text()).toMatch("Z");

        expect(repeater('.js-cheque-result-fibonacci span').count()).toBe(6);
    });

});
