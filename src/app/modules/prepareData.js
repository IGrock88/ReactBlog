module.exports = function () {
    let data = {};
    data.menuItems = [{link: '/', text: 'Home'},
        {link: '/about', text: 'About'}, {link: '/contacts', text: 'Contact'}];
    data.tabs = [{link: 'posts.json', title: 'Blog'}, {link: 'news.json', title: 'News'}];
    return data;
};

