import ReactDom from 'react-dom';
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from "../layouts/App";
import Main from "../pages/Main";
import Blogs from "../pages/Blogs";
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
                <Route path="blog" component={Blogs} />
                <Route path="blog/view/:idPost" component={SinglePost}/>
                <Route path="comments" component={Comments}/>
                <Route path="users" component={Users}/>
                <Route path="users/show/:idUser" component={SingleUser}/>
                <Route path="*" component={Error404} />
            </Route>
        </Router>, document.querySelector(idRoot)
    );
};
