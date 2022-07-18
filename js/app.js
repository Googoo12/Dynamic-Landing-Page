// Make the Landing Page load dynamically from the start
document.addEventListener('DomContentLoaded', navBar());
document.addEventListener('DOMContentLoaded', navBarStyle());


// Create the Navigation Menu on Top and activate current clicked item
function navBar() {
    const section = document.getElementsByTagName('section');

    for (let i = 0; i < section.length; i++) {
        let list = document.createElement('li');
        let anchor = document.createElement('a');
        let sectionName = section[i].getAttribute('data-nav');
        let sectionNameAttribute = sectionName.replace(/\s/g, '').toLowerCase();

        anchor.innerText = sectionName;
        anchor.setAttribute('href', `#${sectionNameAttribute}`);
        anchor.setAttribute('id', 'link_no' + (i + 1))
        list.appendChild(anchor);
        document.getElementById('navbar__list').appendChild(list);
        document.getElementById('link_no' + (i + 1)).addEventListener('click', function() {
            scrollEvent(i + 1);
            sectionActivate(i + 1);
            navActivate(i + 1);
        }) 
    }
}

// Scroll Event on Click
function scrollEvent(no) {
    let section = document.getElementById('section' + no);
    let position = section.offsetTop;
    event.preventDefault();
    window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth'
    })
}

//Dynamic Style for Navigation Menu
function navBarStyle () {
    let anchor = document.getElementsByTagName('a');
    let styles = `
        display: flex;
        flex-direction: row;
        color: #000;
        text-decoration: none;
        padding: 10px;
        background-color: rgb(220, 220, 220);
        font-size: larger;
        `
    for (i = 0; i < anchor.length; i++) {
        anchor[i].setAttribute('style', styles);
    }
}

// Activate section on click and deactivate previous one
function sectionActivate(no) {
    let activeClass = 'your-active-class';
    let newActiveSection = document.getElementById('section' + no);
    newActiveSection.setAttribute('class', activeClass);
}

// Activate clicked navigation menu element
function navActivate(no) {
    let activeNav = document.getElementById('link_no' + no);
    let otherNavs = document.getElementsByTagName('a');

    for (i = 0; i <otherNavs.length; i++) {
        if (otherNavs[i].style.backgroundColor == "black") {
            oldNav = otherNavs[i];
            oldNav.style.backgroundColor = "rgb(220, 220, 220)";
            oldNav.style.color = "#000";          
        }
    }
    activeNav.style.backgroundColor = "black";
    activeNav.style.color = "#fff";
} 

//  highlight the active section while scrolling
let sections =  document.querySelectorAll('section')
const navigationBar = document.getElementById("navbar__list")

window.onscroll = function() {
    sections.forEach(function(active) {
        if(active.getBoundingClientRect().top >= -300 && active.getBoundingClientRect().top <= 150){
            active.classList.add("your-active-class");
        }
        else{
            active.classList.remove("your-active-class");
        }
    });
}