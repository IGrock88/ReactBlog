import ReactDom from 'react-dom';
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from "../layouts/App";
import Main from "../pages/Main";
import Blog from "../pages/Blog";
import SinglePost from "../pages/SinglePost";
import Comments from "../pages/Comments";
import Users from "../pages/Users";
import SingleUser from "../pages/SingleUser";
import Error404 from "../pages/error/Error404";

module.exports = function (idRoot) {
    ReactDom.render(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Main} />
                <Route path="blog" component={Blog} />
                <Route path="post/view/:idPost" component={SinglePost}/>

                <Route path="comments" component={Comments}/>

                <Route path="users" component={Users}/>
                <Route path="user/show/:idUser" component={SingleUser}/>

                <Route path="*" component={Error404} />
            </Route>
        </Router>, document.querySelector(idRoot))

    ;
};
