module.exports = function () {
    let data = {};
    data.menuItems = [{link: '/', text: 'Home'},
        {link: '/about', text: 'About'}, {link: '/contacts', text: 'Contact'}];
    data.posts = [{
        id: 1,
        title: 'Subheading',
        text: 'Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.Morbi leo risus, porta' +
        ' ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta' +
        ' ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.'
    },
        {
            id: 2,
            title: 'Subheading 2',
            text: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet' +
            ' fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit' +
            ' amet fermentum.'
        },
        {
            id: 3,
            title: 'Subheading 3',
            text: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur' +
            ' ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.'
        }];
    data.tabs = ['Blogs', 'News', 'Message'];
    return data;
};

