var express = require('express');
var router = express.Router();

let users = {
    allUsers: [
        {
            id: 1,
            name: 'Simple Name',
            profileImageSrc: 'https://c4.wallpaperflare.com/wallpaper/1003/863/810/anime-anime-girls-digital-art-artwork-vertical-hd-wallpaper-preview.jpg',
            location: {city: 'Moscow', country: 'Russia'},
            status: "I'm fast af boi",
            followed: false
        },
        {
            id: 2,
            name: 'Simple Name',
            profileImageSrc: 'https://i.pinimg.com/736x/20/20/21/2020210ba75b141693c2510a362c4384.jpg',
            location: {city: 'Moscow', country: 'Russia'},
            status: "I'm fast af boi",
            followed: false
        },
        {
            id: 3,
            name: 'Simple Name',
            profileImageSrc: 'https://c4.wallpaperflare.com/wallpaper/1003/863/810/anime-anime-girls-digital-art-artwork-vertical-hd-wallpaper-preview.jpg',
            location: {city: 'Moscow', country: 'Russia'},
            status: "I'm fast af boi",
            followed: false
        },
        {
            id: 4,
            name: 'Simple Name',
            profileImageSrc: 'https://c4.wallpaperflare.com/wallpaper/1003/863/810/anime-anime-girls-digital-art-artwork-vertical-hd-wallpaper-preview.jpg',
            location: {city: 'Moscow', country: 'Russia'},
            status: "I'm fast af boi",
            followed: false
        },
        {
            id: 5,
            name: 'Simple Name',
            profileImageSrc: 'https://c4.wallpaperflare.com/wallpaper/1003/863/810/anime-anime-girls-digital-art-artwork-vertical-hd-wallpaper-preview.jpg',
            location: {city: 'Moscow', country: 'Russia'},
            status: "I'm fast af boi",
            followed: false
        },
        {
            id: 6,
            name: 'Simple Name',
            profileImageSrc: null,
            location: {city: 'Moscow', country: 'Russia'},
            status: "I'm fast af boi",
            followed: false
        }
    ]
}

router.get('/', function (req, res, next) {
    // res.setHeader()
    res.send(JSON.stringify(users, null));
});

module.exports = router;
