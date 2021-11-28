import {webArticle, webOpening } from "./components.js";

// opening start animations
const tl = gsap.timeline({defaults: {ease: 'power1out'}});
webOpening();

class Nav{
    constructor(){
        this.nav = document.querySelector('.nav');
        this.menu = document.querySelector('.menu');
        this.menuIcon = document.querySelector('.nav__menuIcon');
    }
    activeMenu(){
        this.menuIcon.addEventListener('click', (e) => {
            this.menu.classList.toggle('active');
        })
    }
}

class Page{
    constructor(){
        this.counter = 0;
        this.array = [];
        this.arrayIndex = 0;
        this.headline = document.querySelector('.left-container-article .headline');
        this.text = document.querySelector('.text');
        this.nextPageIcon = document.querySelector('.nextpage');
        this.nextPageIconMobile = document.querySelector('.next_page');
        this.previousPageIcon = document.querySelector('.previouspage');
        this.pageNumber = document.querySelector('.pagenumber');
        this.mainImage = document.querySelector('.top-image img');
        this.leftImage = document.querySelector('.left-image img');
        this.rightBox = document.querySelector('.right-image');
        this.menuLinks = [...document.querySelectorAll('.menu__link')];
    }
    articleUpdate(type){
        if(type === '+') ++this.counter;
        if(type === '-') --this.counter;
        this.headline.textContent = webArticle[this.counter].headline;
        this.text.textContent = webArticle[this.counter].text;
        this.pageNumber.textContent = this.counter + 1;
        this.mainImage.src = webArticle[this.counter].src[0];
        this.leftImage.src = webArticle[this.counter].src[1];
    }
    contactFormFlow(direction, from, to, order){
        tl.to('.contact', {transform: direction, duration: '1.5'});
        tl.fromTo('.contact__form', {opacity: from}, {opacity: to, duration: '2', stagger: '0.3'}, `-=${order}`);
    }
    nextPageFunc(e){
        tl.fromTo('.slider', {left: '-100%'}, {display: 'block', transform: 'translateX(200%)', duration: '1.8', stagger: '0.5', clearProps:'all'});
        page.articleUpdate('+');
        if(page.counter >= 2) page.rightBox.style.background = 'linear-gradient(-240deg,rgb(3,3,3), rgb(5, 5, 5))';
        if(page.counter === 3){
            window.innerWidth > 1079 ? page.contactFormFlow('translateX(166.6%)', '0', '1', '0') : page.contactFormFlow('translateX(100%)', '0', '1', '0');
        }
        else if(page.counter >= 1) page.previousPageIcon.style.display = 'block';
    }
    previousPageFunc(){
        if(page.counter === 3 || page.array[page.arrayIndex - 1] === 3) page.contactFormFlow('translateX(0)', '1', '0', '3.5');
        page.articleUpdate('-');
        tl.fromTo('.slider', {right: '-100%'}, {display: 'block', transform: 'translateX(-200%)', duration: '1.8', stagger: '0.5', clearProps: 'all'});
        if(page.counter === 1) page.rightBox.style.background = 'linear-gradient(rgb(23, 40, 75), rgb(172, 141, 202))';
        if(page.counter === 0) page.previousPageIcon.style.display = 'none';
    }
    move(prop){
        page.counter = prop;
        page.nextPageFunc();
    }
    out(prop){
        page.previousPageFunc();
        page.counter = prop;
    }
    changePage(e){
        let selectedIndex = e.target.dataset.pagenumber;
        page.array.push(selectedIndex);
        page.arrayIndex++;
        if(page.array[page.arrayIndex - 1] === page.array[page.arrayIndex - 2]) return;
        console.log(page.counter);
        if(page.array.length >= 2)
        {
            page.array[page.arrayIndex - 1] > page.array[page.arrayIndex - 2] ? page.move(--selectedIndex) : page.out(--selectedIndex);
        }
        else{
            page.counter = selectedIndex - 1;
            page.nextPageFunc();
        }
    }
}

const nav = new Nav();
const page = new Page();
// show or hide menu
nav.activeMenu();
page.nextPageIcon.addEventListener('click', page.nextPageFunc);
page.nextPageIconMobile.addEventListener('click', page.nextPageFunc);
page.previousPageIcon.addEventListener('click', page.previousPageFunc);
page.menuLinks.map(menuLink => menuLink.addEventListener('click', page.changePage));