var ta = (function (my) {
    'use strict';

    var eventHandler = function () {

        function bindEvent (element, eventName, eventFunc) {
            $(element).bind(eventName, function (e) {
                eventFunc(e);
            });
        }

        return {
            bindEvent : bindEvent
        };
    }();

    my.eventHandler = eventHandler;
    return my;
}(ta || {}));