var ta = (function (my) {
    'use strict';

    my.widgetTwo = function (selector) {
        if(!selector) return;

        var $ele = $(selector);
        $ele.append('<div style="width: 200px; height: 200px; background-color: lightgreen; border: 1px solid green"></div>');

        ta.widgetHandler.bindEvent('body', 'ta-custom-event', function (e) {
            console.log('rawr');
        });

        return {};
    };

    return my;
}(ta || {}));