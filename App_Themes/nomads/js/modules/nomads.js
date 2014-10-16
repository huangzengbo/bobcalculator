"use strict";

App.calculator = (function () {
    var isFib = false;
    function init() {
        initEvents();
    }

    function initEvents() {
        calculator();
    }


    function calculator() {

        $("body").delegate("#calculator .submit:not('.disabled')", "click", function (e) {
            e.preventDefault();
            $(".js-calculator-result").removeClass("hide");
            addNumber();
            $("#Number").val("");
            $("#Number").parents(".form-field").removeClass("error");
            $("#Number").parents(".form-field").removeClass("correct");
            $("#calculator").find(".submit").addClass("disabled");
        });


    }

    function addNumber() {
        var number = $("#Number").val();
        //All numbers
        $(".js-calculator-result .js-cheque-result-all").append("<span>" + number + "</span>");

        //Odd
        if (isOdd(number)) {
            $(".js-calculator-result .js-cheque-result-odd").append("<span>" + number + "</span>");
        }

        //Even 
        if (isEven(number)) {
            $(".js-calculator-result .js-cheque-result-even").append("<span>" + number + "</span>");
        }

        //Replace
        if (isReplace(number)) {
            $(".js-calculator-result .js-cheque-result-replace").append("<span>" + replace(number) + "</span>");
        }
        
        //Fibonacci
        
        if (isFibonacci(number)) {
            $(".js-calculator-result .js-cheque-result-fibonacci").append("<span>" + number + "</span>");
        }

    }

    function isOdd(num) {
        if (num % 2 != 0) {
            return true;
        }
        else {
            return false;
        }
    }

    function isEven(num) {
        if (num % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    function isReplace(num) {
        if (num % 3 == 0 || num % 5 == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    function replace(num) {
        if (num % 3 == 0 && num % 5 != 0) {
            return "C";
        }
        else if (num % 5 == 0 && num % 3 != 0) {
            return "E";
        }
        else if (num % 3 == 0 && num % 5 == 0) {
            return "Z";
        }
        else {
            return "";
        }
    }

    function isFibonacci(num) {
        fib(1, 1, num);

        if (isFib) {
            isFib = false;
            return true;
        }
        else {
            return false;
        }
            
    }

    function fib(i, j, n) {
        if (i == n || j == n) {
            isFib = true;
            return false;
        }
        else {
            if(j > n){
                return false;
            }
            else {
                var t = j;
                j = i + j;
                i = t;
                fib(i, j, n);
            }
            
        }

    }

    function testInit() {
        $(".js-test-wrap").removeClass("hide");

        test('isOdd()', function () {
            ok(isOdd(1), '1 is odd integer');
            ok(!isOdd(2), '2 is NOT odd integer');
            ok(isOdd(3), '3 is odd integer');
        });

        test('isEven()', function () {
            ok(!isEven(1), '1 is NOT even integer');
            ok(isEven(2), '2 is even integer');
            ok(!isEven(3), '3 is NOT even integer');
        });

        test('isReplace()', function () {
            ok(!isReplace(1), '1 is NOT multiple of 3 or 5');
            ok(!isReplace(2), '2 is NOT multiple of 3 or 5');
            ok(isReplace(3), '3 is multiple of 3 or 5');
            ok(isReplace(5), '5 is multiple of 3 or 5');
            ok(isReplace(15), '15 is multiple of 3 or 5');
        });

        test('replace()', function () {
            ok(replace(1) == "", '1 returns empty');
            ok(replace(2) == "", '2 returns empty');
            ok(replace(3) == "C", '3 returns C');
            ok(replace(5) == "E", '5 returns E');
            ok(replace(15) == "Z", '15 returns Z');
        });

        test('isFibonacci()', function () {
            ok(isFibonacci(1), '1 is fibonacci');
            ok(isFibonacci(2), '2 is fibonacci');
            ok(isFibonacci(3), '3 is fibonacci');
            ok(!isFibonacci(4), '4 is NOT fibonacci');
            ok(isFibonacci(5), '5 is fibonacci');
            ok(!isFibonacci(6), '6 is NOT fibonacci');
            ok(!isFibonacci(7), '7 is NOT fibonacci');
            ok(isFibonacci(8), '8 is fibonacci');
            ok(!isFibonacci(9), '9 is NOT fibonacci');
            ok(!isFibonacci(10), '10 is NOT fibonacci');
            ok(!isFibonacci(11), '11 is NOT fibonacci');
            ok(!isFibonacci(12), '12 is NOT fibonacci');
            ok(isFibonacci(13), '13 is fibonacci');
            ok(!isFibonacci(14), '14 is NOT fibonacci');
            ok(!isFibonacci(15), '15 is NOT fibonacci');
        });

    }

    return {
        init : init,
        testInit: testInit
    }
})();