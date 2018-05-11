import ReactDom from 'react-dom';
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from '../layouts/App';
import Main from '../pages/Main';
import Blog from '../pages/Blog';

module.exports = function (idRoot) {
    ReactDom.render(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Main} />
                <Route path="blog" component={Blog} />
                {/*<Route path="*" component={PageNotFound} />*/}
            </Route>
        </Router>, document.querySelector(idRoot))

    ;
};
