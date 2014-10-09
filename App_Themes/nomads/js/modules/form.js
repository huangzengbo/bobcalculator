"use strict";

App.form = (function () {

    function init() {
        dateField();
    }

    function dateField() {
        
        $("body").delegate(".date-field input", "click", function () {
            $('.date-field input').pickadate({
                format: 'dd/mm/yyyy'
            });
        });
    }

    return {
        init: init
    }
})();