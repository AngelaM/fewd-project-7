
//when alert "x" is clicked, hide alert and decrease alert area height
let x = document.querySelector('.alert-x');
x.addEventListener('click', () => {
    let alertBar = document.querySelector('.alert-bar');
    let alertArea = document.querySelector('.alert');
    alertBar.style.display = "none";
    alertArea.style.height = "10px";
});              

//insert new member notices into New Members section

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

let memberSection = document.querySelector('.new-member-notices');
let html = "";
for (let i=0; i<members.length; i++) {
html +=      `<div class="new-member">
                <div class="left">
                    <div class="pic"><img src="${members[i].picture}" alt="${members[i].name}"></div>
                    <div class="info">
                        <div class="name">${members[i].name}</div>
                        <div class="email">${members[i].email}</div>
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
console.log(pic);
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
        console.log(html2);
activitySection.innerHTML = html2;