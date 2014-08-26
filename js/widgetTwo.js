var ta = (function (my) {
    'use strict';

    my.widgetTwo = function (selector) {
        if(!selector) return;

        var $ele = $(selector),
            width = 200;

        $ele.append($('<div>').css({
            width: width + 'px',
            height: '200px',
            'background-color': 'lightgreen',
            border: '1px solid green'
        }));

        ta.eventHandler.bindEvent('body', 'ta-custom-event', function (e) {
            width -= 20;
            $ele.find('div').css({'width' : Math.abs(width) + 'px'})
        });

        return {};
    };

    return my;
}(ta || {}));