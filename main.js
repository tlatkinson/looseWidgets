/*global $, document, window*/
/*jslint browser : true, devel: true */
(function () {
    'use strict';

    $(document).ready(function () {
        ta.widgetOne('#widget1');
        ta.widgetTwo('#widget2');

        setInterval(function () {
            $('body').trigger('ta-custom-event');
        }, 2000);
    });
}());