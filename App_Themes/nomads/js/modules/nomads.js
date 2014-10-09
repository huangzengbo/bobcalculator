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
        if (number % 2 != 0) {
            $(".js-calculator-result .js-cheque-result-odd").append("<span>" + number + "</span>");
        }
            //Even 
        else {
            $(".js-calculator-result .js-cheque-result-even").append("<span>" + number + "</span>");
        }

        //Replace
        if (number % 3 == 0 && number % 5 != 0) {
            $(".js-calculator-result .js-cheque-result-replace").append("<span>C</span>");
        }
        if (number % 5 == 0 && number % 3 != 0) {
            $(".js-calculator-result .js-cheque-result-replace").append("<span>E</span>");
        }
        if (number % 3 == 0 && number % 5 == 0) {
            $(".js-calculator-result .js-cheque-result-replace").append("<span>Z</span>");
        }

        //Fibonacci
        fib(1,1,number);
        if (isFib) {
            $(".js-calculator-result .js-cheque-result-fibonacci").append("<span>" + number + "</span>");
            isFib = false;
        }

    }

    function fib(i, j, n) {
        //console.log(i+ " "+ j + " " + n);
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



    return {

        init: init

    }
})();