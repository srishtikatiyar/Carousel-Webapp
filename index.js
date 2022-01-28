const cards=document.getElementsByClassName('card');
const list=document.getElementsByClassName('list')[0];
const nextbtn=document.getElementsByClassName('next');
const previousbtn=document.getElementsByClassName('previous');


const data=
[
    {
      "cid": 7,
      "lastposttime": 1641304544416,
      "mainPid": 15,
      "postcount": 2,
      "slug": "14/delhi-hc-junks-future-group-s-plea-over-ending-arbitration-with-amazon",
      "tid": 14,
      "timestamp": 1641304452847,
      "title": "Delhi HC junks Future group&#x27;s plea over ending arbitration with Amazon",
      "uid": 1,
      "viewcount": 1,
      "postercount": 1,
      "teaserPid": 16,
      "description": "In a significant setback to the Future group, the Delhi High Court has dismissed the pleas filed by the Future group companies relating...",
      "readTime": 3,
      "deleted": 0,
      "locked": 0,
      "pinned": 0,
      "pinExpiry": 0,
      "upvotes": 0,
      "downvotes": 0,
      "deleterUid": 0,
      "titleRaw": "Delhi HC junks Future group's plea over ending arbitration with Amazon",
      "timestampISO": "2022-01-04T13:54:12.847Z",
      "lastposttimeISO": "2022-01-04T13:55:44.416Z",
      "pinExpiryISO": "",
      "votes": 0,
      "thumbs": [
        {
          "id": 14,
          "name": "wallpaperflare.com_wallpaper-1.jpg",
          "url": "/assets/uploads/files/1641304493554-wallpaperflare.com_wallpaper-1.jpg"
        }
      ],
      "thumb": "/assets/uploads/files/1641304493554-wallpaperflare.com_wallpaper-1.jpg",
      "category": {
        "cid": 7,
        "name": "Leadership",
        "slug": "7/leadership",
        "icon": "fa-comments",
        "backgroundImage": null,
        "imageClass": "cover",
        "bgColor": "#86C1B9",
        "color": "#333333",
        "disabled": 0
      },
      "user": {
        "uid": 1,
        "username": "superadmin",
        "userslug": "superadmin",
        "reputation": 0,
        "postcount": 9,
        "picture": null,
        "signature": null,
        "banned": 0,
        "status": "online",
        "displayname": "superadmin",
        "icon:text": "S",
        "icon:bgColor": "#9c27b0",
        "banned_until_readable": "Not Banned"
      },
      "teaser": {
        "pid": 16,
        "uid": 1,
        "timestamp": 1641304544416,
        "tid": 14,
        "content": "<p dir=\"auto\"><a class=\"plugin-mentions-user plugin-mentions-a\" href=\"http://localhost:8055/uid/1\">@superadmin</a> Disclaimer: Moneycontrol is a part of the Network18 group. Network18 is controlled by Independent Media Trust, of which Reliance Industries is the sole beneficiary.</p>\n",
        "timestampISO": "2022-01-04T13:55:44.416Z",
        "user": {
          "uid": 1,
          "username": "superadmin",
          "userslug": "superadmin",
          "picture": null,
          "displayname": "superadmin",
          "icon:text": "S",
          "icon:bgColor": "#9c27b0"
        },
        "index": 2
      },
      "tags": [],
      "isOwner": true,
      "ignored": false,
      "unread": false,
      "bookmark": 1,
      "unreplied": false,
      "icons": [],
      "index": 0
    },
    {
      "cid": 7,
      "lastposttime": 1640939081203,
      "mainPid": 14,
      "postcount": 1,
      "slug": "13/memoization-and-react",
      "tid": 13,
      "timestamp": 1640939081203,
      "title": "Memoization and React",
      "uid": 1,
      "viewcount": 4,
      "postercount": 1,
      "description": "The basic idea is: hang on to the input and their associated output and return that output again if called with the same input.\n\nThe po...",
      "readTime": 1,
      "deleted": 0,
      "locked": 0,
      "pinned": 0,
      "pinExpiry": 0,
      "upvotes": 0,
      "downvotes": 0,
      "deleterUid": 0,
      "titleRaw": "Memoization and React",
      "timestampISO": "2021-12-31T08:24:41.203Z",
      "lastposttimeISO": "2021-12-31T08:24:41.203Z",
      "pinExpiryISO": "",
      "votes": 0,
      "teaserPid": null,
      "thumbs": [
        {
          "id": 13,
          "name": "untitled-2-01.png",
          "url": "/assets/uploads/files/1640939527065-untitled-2-01.png"
        }
      ],
      "thumb": "/assets/uploads/files/1640939527065-untitled-2-01.png",
      "category": {
        "cid": 7,
        "name": "Leadership",
        "slug": "7/leadership",
        "icon": "fa-comments",
        "backgroundImage": null,
        "imageClass": "cover",
        "bgColor": "#86C1B9",
        "color": "#333333",
        "disabled": 0
      },
      "user": {
        "uid": 1,
        "username": "superadmin",
        "userslug": "superadmin",
        "reputation": 0,
        "postcount": 9,
        "picture": null,
        "signature": null,
        "banned": 0,
        "status": "online",
        "displayname": "superadmin",
        "icon:text": "S",
        "icon:bgColor": "#9c27b0",
        "banned_until_readable": "Not Banned"
      },
      "teaser": null,
      "tags": [],
      "isOwner": true,
      "ignored": false,
      "unread": false,
      "bookmark": 1,
      "unreplied": true,
      "icons": [],
      "index": 1
    },
    {
      "cid": 7,
      "lastposttime": 1640343458138,
      "mainPid": 13,
      "postcount": 1,
      "slug": "12/family-ghosts-in-the-executive-suite",
      "tid": 12,
      "timestamp": 1640343458138,
      "title": "Family Ghosts in the Executive Suite",
      "uid": 4,
      "viewcount": 3,
      "postercount": 1,
      "description": "In practice, it’s not that simple. Even if you know exactly how you want to change at work, you often find you can’t. And it’s not clea...",
      "readTime": 1,
      "deleted": 0,
      "locked": 0,
      "pinned": 0,
      "pinExpiry": 0,
      "upvotes": 0,
      "downvotes": 0,
      "deleterUid": 0,
      "titleRaw": "Family Ghosts in the Executive Suite",
      "timestampISO": "2021-12-24T10:57:38.138Z",
      "lastposttimeISO": "2021-12-24T10:57:38.138Z",
      "pinExpiryISO": "",
      "votes": 0,
      "teaserPid": null,
      "thumbs": [
        {
          "id": 12,
          "name": "wallpaperflare.com_wallpaper.jpg",
          "url": "/assets/uploads/files/1640939702480-wallpaperflare.com_wallpaper.jpg"
        }
      ],
      "thumb": "/assets/uploads/files/1640939702480-wallpaperflare.com_wallpaper.jpg",
      "category": {
        "cid": 7,
        "name": "Leadership",
        "slug": "7/leadership",
        "icon": "fa-comments",
        "backgroundImage": null,
        "imageClass": "cover",
        "bgColor": "#86C1B9",
        "color": "#333333",
        "disabled": 0
      },
      "user": {
        "uid": 4,
        "username": "O&#x27;brain",
        "userslug": "o-brain",
        "reputation": 0,
        "postcount": 2,
        "picture": "/assets/uploads/profile/4-profileavatar-1640355878533.jpeg",
        "signature": null,
        "banned": 0,
        "status": "offline",
        "displayname": "O&#x27;brain",
        "icon:text": "O",
        "icon:bgColor": "#33691e",
        "banned_until_readable": "Not Banned"
      },
      "teaser": null,
      "tags": [],
      "isOwner": false,
      "ignored": false,
      "unread": false,
      "bookmark": 1,
      "unreplied": true,
      "icons": [],
      "index": 2
    },
    {
      "cid": 7,
      "lastposttime": 1640342407378,
      "mainPid": 12,
      "postcount": 1,
      "slug": "11/how-to-sell-your-ideas-up-the-chain-of-command",
      "tid": 11,
      "timestamp": 1640342407378,
      "title": "How to Sell Your Ideas up the Chain of Command",
      "uid": 4,
      "viewcount": 4,
      "postercount": 1,
      "description": "You have a great idea—a product tweak that will save your company money, a process change to increase your team’s productivity, or a pl...",
      "readTime": 1,
      "deleted": 0,
      "locked": 0,
      "pinned": 0,
      "pinExpiry": 0,
      "upvotes": 0,
      "downvotes": 0,
      "deleterUid": 0,
      "titleRaw": "How to Sell Your Ideas up the Chain of Command",
      "timestampISO": "2021-12-24T10:40:07.378Z",
      "lastposttimeISO": "2021-12-24T10:40:07.378Z",
      "pinExpiryISO": "",
      "votes": 0,
      "teaserPid": null,
      "thumbs": [],
      "category": {
        "cid": 7,
        "name": "Leadership",
        "slug": "7/leadership",
        "icon": "fa-comments",
        "backgroundImage": null,
        "imageClass": "cover",
        "bgColor": "#86C1B9",
        "color": "#333333",
        "disabled": 0
      },
      "user": {
        "uid": 4,
        "username": "O&#x27;brain",
        "userslug": "o-brain",
        "reputation": 0,
        "postcount": 2,
        "picture": "/assets/uploads/profile/4-profileavatar-1640355878533.jpeg",
        "signature": null,
        "banned": 0,
        "status": "offline",
        "displayname": "O&#x27;brain",
        "icon:text": "O",
        "icon:bgColor": "#33691e",
        "banned_until_readable": "Not Banned"
      },
      "teaser": null,
      "tags": [],
      "isOwner": false,
      "ignored": false,
      "unread": false,
      "bookmark": 1,
      "unreplied": true,
      "icons": [],
      "index": 3
    },
    {
      "cid": 7,
      "lastposttime": 1640342158263,
      "mainPid": 11,
      "postcount": 1,
      "slug": "10/crucibles-of-leadership",
      "tid": 10,
      "timestamp": 1640342158263,
      "title": "Crucibles of Leadership",
      "uid": 1,
      "viewcount": 2,
      "postercount": 1,
      "description": "As lifelong students of leadership, we are fascinated with the notion of what makes a leader. Why is it that certain people seem to nat...",
      "readTime": 2,
      "deleted": 0,
      "locked": 0,
      "pinned": 0,
      "pinExpiry": 0,
      "upvotes": 0,
      "downvotes": 0,
      "deleterUid": 0,
      "titleRaw": "Crucibles of Leadership",
      "timestampISO": "2021-12-24T10:35:58.263Z",
      "lastposttimeISO": "2021-12-24T10:35:58.263Z",
      "pinExpiryISO": "",
      "votes": 0,
      "teaserPid": null,
      "thumbs": [],
      "category": {
        "cid": 7,
        "name": "Leadership",
        "slug": "7/leadership",
        "icon": "fa-comments",
        "backgroundImage": null,
        "imageClass": "cover",
        "bgColor": "#86C1B9",
        "color": "#333333",
        "disabled": 0
      },
      "user": {
        "uid": 1,
        "username": "superadmin",
        "userslug": "superadmin",
        "reputation": 0,
        "postcount": 9,
        "picture": null,
        "signature": null,
        "banned": 0,
        "status": "online",
        "displayname": "superadmin",
        "icon:text": "S",
        "icon:bgColor": "#9c27b0",
        "banned_until_readable": "Not Banned"
      },
      "teaser": null,
      "tags": [],
      "isOwner": true,
      "ignored": false,
      "unread": false,
      "bookmark": 1,
      "unreplied": true,
      "icons": [],
      "index": 4
    },
    {
      "cid": 6,
      "lastposttime": 1640255574150,
      "mainPid": 10,
      "postcount": 1,
      "slug": "9/history-s-myths",
      "tid": 9,
      "timestamp": 1640255574150,
      "title": "History&#x27;s Myths",
      "uid": 3,
      "viewcount": 5,
      "postercount": 1,
      "description": "One of our biggest myths — maybe the biggest — is the story of progress. It’s difficult for us to see the full sweep of human history a...",
      "readTime": 2,
      "deleted": 0,
      "locked": 0,
      "pinned": 0,
      "pinExpiry": 0,
      "upvotes": 0,
      "downvotes": 0,
      "deleterUid": 0,
      "titleRaw": "History's Myths",
      "timestampISO": "2021-12-23T10:32:54.150Z",
      "lastposttimeISO": "2021-12-23T10:32:54.150Z",
      "pinExpiryISO": "",
      "votes": 0,
      "teaserPid": null,
      "thumbs": [],
      "category": {
        "cid": 6,
        "name": "Learnability",
        "slug": "6/learnability",
        "icon": "fa-comments",
        "backgroundImage": null,
        "imageClass": "cover",
        "bgColor": "#7CAFC2",
        "color": "#ffffff",
        "disabled": 0
      },
      "user": {
        "uid": 3,
        "username": "Wayne",
        "userslug": "wayne",
        "reputation": 0,
        "postcount": 1,
        "picture": null,
        "signature": null,
        "banned": 0,
        "status": "offline",
        "displayname": "Wayne",
        "icon:text": "W",
        "icon:bgColor": "#795548",
        "banned_until_readable": "Not Banned"
      },
      "teaser": null,
      "tags": [],
      "isOwner": false,
      "ignored": false,
      "unread": false,
      "bookmark": 1,
      "unreplied": true,
      "icons": [],
      "index": 5
    },
    {
      "cid": 6,
      "lastposttime": 1640182030239,
      "mainPid": 9,
      "postcount": 1,
      "slug": "8/how-are-function-components-different-from-classes",
      "tid": 8,
      "timestamp": 1640182030239,
      "title": "How Are Function Components Different from Classes?",
      "uid": 1,
      "viewcount": 4,
      "postercount": 1,
      "description": "How do React function components differ from React classes?\n\nFor a while, the canonical answer has been that classes provide access to ...",
      "readTime": 1,
      "deleted": 0,
      "locked": 0,
      "pinned": 0,
      "pinExpiry": 0,
      "upvotes": 0,
      "downvotes": 0,
      "deleterUid": 0,
      "titleRaw": "How Are Function Components Different from Classes?",
      "timestampISO": "2021-12-22T14:07:10.239Z",
      "lastposttimeISO": "2021-12-22T14:07:10.239Z",
      "pinExpiryISO": "",
      "votes": 0,
      "teaserPid": null,
      "thumbs": [],
      "category": {
        "cid": 6,
        "name": "Learnability",
        "slug": "6/learnability",
        "icon": "fa-comments",
        "backgroundImage": null,
        "imageClass": "cover",
        "bgColor": "#7CAFC2",
        "color": "#ffffff",
        "disabled": 0
      },
      "user": {
        "uid": 1,
        "username": "superadmin",
        "userslug": "superadmin",
        "reputation": 0,
        "postcount": 9,
        "picture": null,
        "signature": null,
        "banned": 0,
        "status": "online",
        "displayname": "superadmin",
        "icon:text": "S",
        "icon:bgColor": "#9c27b0",
        "banned_until_readable": "Not Banned"
      },
      "teaser": null,
      "tags": [],
      "isOwner": true,
      "ignored": false,
      "unread": false,
      "bookmark": 1,
      "unreplied": true,
      "icons": [],
      "index": 6
    },
    {
      "cid": 6,
      "lastposttime": 1640181995371,
      "mainPid": 8,
      "postcount": 1,
      "slug": "7/writing-resilient-components",
      "tid": 7,
      "timestamp": 1640181995371,
      "title": "Writing Resilient Components",
      "uid": 1,
      "viewcount": 2,
      "postercount": 1,
      "description": "When people start learning React, they often ask for a style guide. While it’s a good idea to have some consistent rules applied across...",
      "readTime": 1,
      "deleted": 0,
      "locked": 0,
      "pinned": 0,
      "pinExpiry": 0,
      "upvotes": 0,
      "downvotes": 0,
      "deleterUid": 0,
      "titleRaw": "Writing Resilient Components",
      "timestampISO": "2021-12-22T14:06:35.371Z",
      "lastposttimeISO": "2021-12-22T14:06:35.371Z",
      "pinExpiryISO": "",
      "votes": 0,
      "teaserPid": null,
      "thumbs": [],
      "category": {
        "cid": 6,
        "name": "Learnability",
        "slug": "6/learnability",
        "icon": "fa-comments",
        "backgroundImage": null,
        "imageClass": "cover",
        "bgColor": "#7CAFC2",
        "color": "#ffffff",
        "disabled": 0
      },
      "user": {
        "uid": 1,
        "username": "superadmin",
        "userslug": "superadmin",
        "reputation": 0,
        "postcount": 9,
        "picture": null,
        "signature": null,
        "banned": 0,
        "status": "online",
        "displayname": "superadmin",
        "icon:text": "S",
        "icon:bgColor": "#9c27b0",
        "banned_until_readable": "Not Banned"
      },
      "teaser": null,
      "tags": [],
      "isOwner": true,
      "ignored": false,
      "unread": false,
      "bookmark": 1,
      "unreplied": true,
      "icons": [],
      "index": 7
    },
    {
      "cid": 6,
      "lastposttime": 1640181952211,
      "mainPid": 7,
      "postcount": 1,
      "slug": "6/how-to-type-a-react-form-onsubmit-handler",
      "tid": 6,
      "timestamp": 1640181952211,
      "title": "How to type a React form onSubmit handler",
      "uid": 1,
      "viewcount": 1,
      "postercount": 1,
      "description": "Incidentally, at the time of this writing, there's no substantive difference in those types, but I prefer to be more clear and accurate...",
      "readTime": 2,
      "deleted": 0,
      "locked": 0,
      "pinned": 0,
      "pinExpiry": 0,
      "upvotes": 0,
      "downvotes": 0,
      "deleterUid": 0,
      "titleRaw": "How to type a React form onSubmit handler",
      "timestampISO": "2021-12-22T14:05:52.211Z",
      "lastposttimeISO": "2021-12-22T14:05:52.211Z",
      "pinExpiryISO": "",
      "votes": 0,
      "teaserPid": null,
      "thumbs": [],
      "category": {
        "cid": 6,
        "name": "Learnability",
        "slug": "6/learnability",
        "icon": "fa-comments",
        "backgroundImage": null,
        "imageClass": "cover",
        "bgColor": "#7CAFC2",
        "color": "#ffffff",
        "disabled": 0
      },
      "user": {
        "uid": 1,
        "username": "superadmin",
        "userslug": "superadmin",
        "reputation": 0,
        "postcount": 9,
        "picture": null,
        "signature": null,
        "banned": 0,
        "status": "online",
        "displayname": "superadmin",
        "icon:text": "S",
        "icon:bgColor": "#9c27b0",
        "banned_until_readable": "Not Banned"
      },
      "teaser": null,
      "tags": [],
      "isOwner": true,
      "ignored": false,
      "unread": false,
      "bookmark": 1,
      "unreplied": true,
      "icons": [],
      "index": 8
    },
    {
      "cid": 6,
      "lastposttime": 1640168581188,
      "mainPid": 6,
      "postcount": 1,
      "slug": "5/why-you-shouldn-t-put-refs-in-a-dependency-array",
      "tid": 5,
      "timestamp": 1640168581188,
      "title": "Why you shouldn&#x27;t put refs in a dependency array",
      "uid": 1,
      "viewcount": 1,
      "postercount": 1,
      "description": "Let's say we've got a form that allows you to specify a username. When you try to submit an invalid value, it will show an error messag...",
      "readTime": 3,
      "deleted": 0,
      "locked": 0,
      "pinned": 0,
      "pinExpiry": 0,
      "upvotes": 0,
      "downvotes": 0,
      "deleterUid": 0,
      "titleRaw": "Why you shouldn't put refs in a dependency array",
      "timestampISO": "2021-12-22T10:23:01.188Z",
      "lastposttimeISO": "2021-12-22T10:23:01.188Z",
      "pinExpiryISO": "",
      "votes": 0,
      "teaserPid": null,
      "thumbs": [],
      "category": {
        "cid": 6,
        "name": "Learnability",
        "slug": "6/learnability",
        "icon": "fa-comments",
        "backgroundImage": null,
        "imageClass": "cover",
        "bgColor": "#7CAFC2",
        "color": "#ffffff",
        "disabled": 0
      },
      "user": {
        "uid": 1,
        "username": "superadmin",
        "userslug": "superadmin",
        "reputation": 0,
        "postcount": 9,
        "picture": null,
        "signature": null,
        "banned": 0,
        "status": "online",
        "displayname": "superadmin",
        "icon:text": "S",
        "icon:bgColor": "#9c27b0",
        "banned_until_readable": "Not Banned"
      },
      "teaser": null,
      "tags": [],
      "isOwner": true,
      "ignored": false,
      "unread": false,
      "bookmark": 1,
      "unreplied": true,
      "icons": [],
      "index": 9
    },
    {
      "cid": 6,
      "lastposttime": 1640168451077,
      "mainPid": 5,
      "postcount": 1,
      "slug": "4/wrangler-2-0",
      "tid": 4,
      "timestamp": 1640168451077,
      "title": "wrangler 2.0",
      "uid": 1,
      "viewcount": 2,
      "postercount": 1,
      "description": "Much of a developer’s work is about making trade-offs: consistency versus availability, speed over correctness, you name it. While ther...",
      "readTime": 1,
      "deleted": 0,
      "locked": 0,
      "pinned": 0,
      "pinExpiry": 0,
      "upvotes": 0,
      "downvotes": 0,
      "deleterUid": 0,
      "titleRaw": "wrangler 2.0",
      "timestampISO": "2021-12-22T10:20:51.077Z",
      "lastposttimeISO": "2021-12-22T10:20:51.077Z",
      "pinExpiryISO": "",
      "votes": 0,
      "teaserPid": null,
      "thumbs": [],
      "category": {
        "cid": 6,
        "name": "Learnability",
        "slug": "6/learnability",
        "icon": "fa-comments",
        "backgroundImage": null,
        "imageClass": "cover",
        "bgColor": "#7CAFC2",
        "color": "#ffffff",
        "disabled": 0
      },
      "user": {
        "uid": 1,
        "username": "superadmin",
        "userslug": "superadmin",
        "reputation": 0,
        "postcount": 9,
        "picture": null,
        "signature": null,
        "banned": 0,
        "status": "online",
        "displayname": "superadmin",
        "icon:text": "S",
        "icon:bgColor": "#9c27b0",
        "banned_until_readable": "Not Banned"
      },
      "teaser": null,
      "tags": [],
      "isOwner": true,
      "ignored": false,
      "unread": false,
      "bookmark": 1,
      "unreplied": true,
      "icons": [],
      "index": 10
    }
  ]
  for(let i=0;i<data.length;i++){
      const div=document.createElement('div');
      if(i%2===0)
      div.classList.add('even');
      else div.classList.add('odd');
      div.classList.add('card');
      div.innerHTML=`<div>TITLE : ${data[i].title}</div><div>DESCRIPTION : ${data[i].description}</div><div>CATEGORY : ${data[i].category.name}</div><div>AUTHOR : ${data[i].user.username}</div>`;
      list.appendChild(div);
  }
  let val=0;
nextbtn[0].addEventListener('click',()=>{
   
list.scroll({
    left:val+448,
    behavior:"smooth",
    
})
val+=448;
});

previousbtn[0].addEventListener('click',()=>{
list.scroll({
    left:val-448,
    behavior:"smooth",
    
})
val-=448;
});