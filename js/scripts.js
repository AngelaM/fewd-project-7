
/********
 * Change color and border of active navigation link
 ********/

let list = document.querySelectorAll('.main-nav li');

let nav = document.querySelector('li div.nav-settings').parentElement;
nav.addEventListener('click', () => {
    for (let i=0; i<list.length; i++) {
        list[i].removeAttribute('id');
    }
    nav.setAttribute('id', 'current');
});

let nav2 = document.querySelector('li div.nav-members').parentElement;
nav2.addEventListener('click', () => {
    for (let i=0; i<list.length; i++) {
        list[i].removeAttribute('id');
    }
    nav2.setAttribute('id', 'current');
});

let nav3 = document.querySelector('li div.nav-visits').parentElement;
nav3.addEventListener('click', () => {
    for (let i=0; i<list.length; i++) {
        list[i].removeAttribute('id');
    }
    nav3.setAttribute('id', 'current');
});

/********
 * Drop-down notification window when bell clicked
 ********/

 let notices = [
     'Notice 1: Your post has been liked!', 
    'Notice 2: Update your password'
];

let dropDown = document.querySelector('.notification-drop-down');
let bell = document.querySelector('.alert-bell');
bell.onclick = function makeNotifications() {
    console.log('success');
};

/********
 * When alert "x" is clicked, hide alert and decrease alert area height
 ********/

let x = document.querySelector('.alert-x');
x.addEventListener('click', () => {
    let alertBar = document.querySelector('.alert-bar');
    let alertArea = document.querySelector('.alert');
    alertBar.style.display = "none";
    alertArea.style.height = "10px";
});              

/********
 * Insert new member notices into New Members section and activity notices into Recent Activity section
 ********/

 //data
let members = [
    {
        name: 'Victoria Chambers',
        email: 'victoria.chambers80@example.com',
        dateAdded: '10/15/15',
        picture: 'img/avatars/member-1.jpg'
    },
    {
        name: 'Dale Byrd',
        email: 'dale.byrd52@example.com',
        dateAdded: '10/15/15',
        picture: 'img/avatars/member-2.jpg'
    },
    {
        name: 'Dawn Wood',
        email: 'dawn.wood16@example.com',
        dateAdded: '10/15/15',
        picture: 'img/avatars/member-3.jpg'
    },
    {
        name: 'Dan Oliver',
        email: 'dan.oliver82@example.com',
        dateAdded: '10/15/15',
        picture: 'img/avatars/member-4.jpg'
    }
];
let activities = [
    {
        member: 'Victoria Chambers',
        timeAgo: '4 hours',
        action: 'commented on',
        postTitle: 'YourApps\'s SEO Tips'
    },
    {
        member: 'Dale Byrd',
        timeAgo: '5 hours',
        action: 'liked the post',
        postTitle: 'Facebook\s Changes for 2016'
    },
    {
        member: 'Dawn Wood',
        timeAgo: '5 hours',
        action: 'commented on',
        postTitle: 'Facebook\s Changes for 2016'
    },
    {
        member: 'Dan Oliver',
        timeAgo: '1 day',
        action: 'posted',
        postTitle: 'YourApps\'s SEO Tips'
    }
];

//
let memberSection = document.querySelector('.new-member-notices');
let html = "";
for (let i=0; i<members.length; i++) {
html +=      `<div class="new-member">
                <div class="left">
                    <div class="pic"><img src="${members[i].picture}" alt="${members[i].name}"></div>
                    <div class="info">
                        <div class="name">${members[i].name}</div>
                        <div class="email"><a href = "mailto: ${members[i].email}">${members[i].email}</a></div>
                    </div>
                </div>
                <div class="date-added">${members[i].dateAdded}</div>
            </div>`;
        }
memberSection.innerHTML = html;

let activitySection = document.querySelector('.activity-notices');
let html2 = "";
for (let i=0; i<members.length; i++) {
let pic = members.find(member => member.name == activities[i].member);
html2 +=      `<div class="activity">
                <div class="left">
                    <div class="pic"><img src="${pic.picture}" alt="${pic.name}"></div>
                    <div class="info">
                        <div class="notification">${activities[i].member} ${activities[i].action} ${activities[i].postTitle}</div>
                        <div class="time-ago">${activities[i].timeAgo} ago</div>
                    </div>
                </div>
                <div class="arrow"><i class="fa fa-chevron-right"></i></div>
            </div>`;
        }
activitySection.innerHTML = html2;

/********
 * Confirmation when Send button clicked
 ********/

function confirmation() {
    alert("Your message has been sent!");
}

/********
 * Message user form validation
 ********/

//Create error message and hide
let messageHeader = document.querySelector('.message-user div.section-header');
let nameWarning = document.createElement('div');
nameWarning.setAttribute('id', 'error');
nameWarning.innerHTML = "Enter valid user and message";
messageHeader.insertAdjacentElement('afterend', nameWarning);
document.querySelector('#error').style.display = "none";

//Validate fields and display error message when needed
document.querySelector('.message-user-form').addEventListener('submit', function (e) {
    if (document.querySelector("#search-user").value !== ""&& document.querySelector('#message').value !=="") {
        confirm("Do you want to send this message?");
    }
    else {
        document.querySelector('#error').style.display = "block";
        e.preventDefault();
    }

});
