'use strict';

jQuery(function ($) {

    $('.compare-go a').click(function () {
        $(this).attr('href', '/compare/' + encodeURIComponent($.map($('.compare-items .compare-block'), function (v) {
            return $(v).data('postname');
        }).join('-vs-')));

        return true;
    });

    $('.ec-filter-block form').submit(function () {
        window.location.href = window.location.pathname + '?' + $(this).serialize() + '#comments';
        return false;
    });

});