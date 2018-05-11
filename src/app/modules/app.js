import ReactDom from 'react-dom';
import React from "react";
import App from "../layouts/App";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

module.exports = function (data, idRoot) {
    ReactDom.render(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                {/*<IndexRoute component={Main} />*/}
                {/*<Route path="users" component={Users} />*/}
                {/*<Route path="*" component={PageNotFound} />*/}
            </Route>
        </Router>, document.querySelector(idRoot))

    ;
};
