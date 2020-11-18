
/********
 * Display drop-down notification window when bell clicked
 ********/

 let notices = [
    'Notice 1: Your post has been liked!', 
    'Notice 2: Update your password now'
];

//Display drop down and remove green notification dot
let dropDown = document.querySelector('.notification-drop-down');
let box = document.querySelector('.notificationBox')
let xBox = document.createElement('div');
xBox.setAttribute('class', 'notification-x');
xBox.innerHTML = `&times;`
dropDown.style.display = "none";
let bell = document.querySelector('.alert-bell');
bell.onclick = function makeNotifications() {
    let notificationHTML = "";
    (document.querySelector('.green-dot')).style.display = "none";
    dropDown.insertBefore(xBox, box);
            //Close drop down and empty notification box when "x" is clicked
            let notificationX = document.querySelector('.notification-x');
            notificationX.addEventListener('click', () => {
                dropDown.style.display = "none";
                box.innerHTML = "";
            }); 
    dropDown.style.display = "block";
    for (let i=0; i<notices.length; i++) {
        notificationHTML += `<div class="notification">${notices[i]}</div>`;
    }
    box.innerHTML = notificationHTML;
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
 * Insert new member notices into New Members section 
 * and activity notices into Recent Activity section
 ********/

let members = [
    {
        name: 'Victoria Chambers',
        email: 'victoria.chambers80 @ example.com',
        dateAdded: '10/15/15',
        picture: 'img/avatars/member-1.jpg'
    },
    {
        name: 'Dale Byrd',
        email: 'dale.byrd52 @ example.com',
        dateAdded: '10/15/15',
        picture: 'img/avatars/member-2.jpg'
    },
    {
        name: 'Dawn Wood',
        email: 'dawn.wood16 @ example.com',
        dateAdded: '10/15/15',
        picture: 'img/avatars/member-3.jpg'
    },
    {
        name: 'Dan Oliver',
        email: 'dan.oliver82 @ example.com',
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

//Insert code for new member notices into HTML
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

//Insert code for new activity notices into HTML
let activitySection = document.querySelector('.activity-notices');
let html2 = "";
for (let i=0; i<members.length; i++) {
let pic = members.find(member => member.name == activities[i].member);
html2 +=      `<div class="activity">
                <div class="left">
                    <div class="pic"><img src="${pic.picture}" alt="${pic.name}"></div>
                    <div class="info">
                        <div class="activityNotification">${activities[i].member} ${activities[i].action} ${activities[i].postTitle}</div>
                        <div class="time-ago">${activities[i].timeAgo} ago</div>
                    </div>
                </div>
                <div class="arrow"><i class="fa fa-chevron-right"></i></div>
            </div>`;
        }
activitySection.innerHTML = html2;

/********
 * Autocomplete for user messages
 ********/

 //Utilizes Datalist but adjusts so only matches from beginning of string appear
let input = document.querySelector('#search-user');
input.addEventListener("input", (e) => {
    let value = e.target.value;
    document.querySelector('.autocomplete').innerHTML = "";
    let searchHTML = `<datalist id="names">`;
    for (let i=0; i<members.length; i++) {
        if (members[i].name.substr(0, value.length).toUpperCase() == value.toUpperCase()) {
        searchHTML += `<option value="${members[i].name}">`
        }
    }
    searchHTML += `</datalist>`;
    document.querySelector('.autocomplete').innerHTML = searchHTML;
});
input.addEventListener("blur", () => {
    document.querySelector('.autocomplete').innerHTML = "";
});

/********
 * Message user form validation and confirmation popup
 ********/

//Create error message and hide
let messageHeader = document.querySelector('.message-user div.section-header');
let nameWarning = document.createElement('div');
nameWarning.setAttribute('id', 'error');
nameWarning.innerHTML = "Enter valid user and message";
messageHeader.insertAdjacentElement('afterend', nameWarning);
document.querySelector('#error').style.display = "none";

//Validate fields and display error message when invalid
document.querySelector('.message-user-form').addEventListener('submit', function (e) {
    let validUser = false;
    for (let i=0; i<members.length; i++) {
        if (document.querySelector("#search-user").value == members[i].name) {
            validUser = true;
        }
    }
    if (validUser && document.querySelector('#message').value !=="") {
        confirm("Do you want to send this message?");
    }
    else {
        document.querySelector('#error').style.display = "block";
        e.preventDefault();
    }

});

/********
 * Save settings in local storage
 ********/

 //Check for local storage ability
function supportLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e) {
        return false;
    }
}

if(supportLocalStorage) {

    //Save settings to local storage when form submitted
    document.querySelector('.settings-form').addEventListener('submit', function (e) {
        if (document.querySelector('#slider1').checked) {
            localStorage.setItem('sendEmail', "on");
        }else {
            localStorage.setItem('sendEmail', "off");
        }
        if (document.querySelector('#slider2').checked) {
            localStorage.setItem('setProfile', "on");
        }else {
            localStorage.setItem('setProfile', "off");
        }
        let t = document.querySelector('.timezones').value;
        localStorage.setItem('timeZone', t);
    });

    //Retrieve saved settings from local storage and display on page load
    let sendEmailNotification = localStorage.getItem('sendEmail');
    let setProfileToPublic = localStorage.getItem('setProfile');
    let timeZoneSelected = localStorage.getItem('timeZone');
    if (sendEmailNotification === "on") {
        document.querySelector('#slider1').checked = true;
    }
    else {
        document.querySelector('#slider1').checked = false;
    }
    if (setProfileToPublic === "on") {
        document.querySelector('#slider2').checked = true;
    }
    if (timeZoneSelected) {
        let drop = document.querySelectorAll('.timezones option');
        for (let i=0; i<drop.length; i++) {
            if(timeZoneSelected === drop[i].value) {
                drop[i].selected = true;
            } else {
                drop[i].selected = false;
            }
        }
    }

    //Reset settings when cancel button clicked
    document.querySelector('.settings-form').addEventListener('reset', function (e) {
        localStorage.setItem('sendEmail', "off");
        localStorage.setItem('setProfile', "off");
        localStorage.setItem('timeZone', 'none');
    });
}