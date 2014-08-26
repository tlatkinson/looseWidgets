var ta = (function (my) {
    'use strict';

    var widgetHandler = function () {

        function bindEvent (element, eventName, eventFunc) {
            $(element).bind(eventName, function (e) {
                eventFunc(e);
            });
        }

        return {
            bindEvent : bindEvent
        };
    }();

    my.widgetHandler = widgetHandler;
    return my;
}(ta || {}));