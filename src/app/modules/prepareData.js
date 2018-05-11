module.exports = function () {
    let data = {};
    data.menuItems = [{link: '/', text: 'Home'},
        {link: 'blog', text: 'Blog'}, {link: 'comments', text: 'Comments'}, {link: 'users', text: 'Users'}];
    data.tabs = [{link: 'posts.json', title: 'Blog'}, {link: 'news.json', title: 'News'}];
    return data;
};

