//Custom plugin that adds extra stuff
var detailsPlugin = function () {
    return {
        wrapComponents: {
            // add text above InfoContainer - same effect as above title
            Models: function (Original, _a) {
                var React = _a.React;
                return function (props) {
                    var request = new XMLHttpRequest();
                    request.open('GET', window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + '/api/documentation/template.html', false);
                    request.send(null);
                    if (request.status === 200) {
                        return React.createElement("div", null, React.createElement(Original, props), React.createElement("div", { dangerouslySetInnerHTML: { __html: request.response } }));
                    }
                };
            },
            // and/or add text above API description
            InfoDescription: function (Original, _a) {
                var React = _a.React;
                return function (props) {
                    return React.createElement("div", null, React.createElement("p", null, "I'm above the API description"), React.createElement(Original, props));
                };
            }
        }
    };
};
