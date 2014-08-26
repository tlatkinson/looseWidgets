var ta = (function (my) {
    'use strict';

    my.widgetOne = function (selector) {
        if(!selector) return;

        var $ele = $(selector);
        $ele.append('<div style="width: 200px; height: 200px; background-color: lightblue; border: 1px solid blue"></div>');

        ta.widgetHandler.bindEvent('body', 'ta-custom-event', function (e) {
            console.log('rawer');
        });

        return {};
    };

    return my;
}(ta || {}));