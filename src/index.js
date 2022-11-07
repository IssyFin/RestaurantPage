//IMPORTS HERE
import Icon from './waffles.jpg';
import './style.css';

//Import contact photos
import Truffles from './manager.jpg';
import Mung from './chef.jpg';
import Chowder from './host.jpg';

//Import food photos
import plainWaffle from './plainWaffle.jpg';//
import berryWaffle from './berryWaffle.jpg';//Added
import chocoWaffle from './chocoWaffle.jpg';//
import pbWaffle from './pbWaffle.jpg';//
import chickenWaffle from './chickenWaffle.jpg';//
import tallWaffle from './tallWaffle.jpg';//
import fruit from './fruit.jpg';//
import bacon from './bacon.jpg';//
import sausage from './sausage.jpg';//
import toast from './toast.jpg';//
import oatmeal from './oatmeal.jpg';//
import applesauce from './applesauce.jpg';//
import coffee from './coffee.jpg';//
import oj from './oj.jpg';//
import milk from './milk.jpg';//
import latte from './latte.jpg';//
import espresso from './espresso.jpg';//
import tea from './tea.jpg';//


//OBJECTS AND ELEMENTS FOR EACH PAGE TO BE LOADED
const menuElements = [];
const menuObjects = [];
const contactElements = [];
const contactObjects = [];
const reviewElements = [];
const reviewObjects = [];
const headerElements = [];

//INITIAL PAGE LOAD (Append commonly used elements to the page and initialize the other cards to be used)
function pageLoad(){
    //Appending children
    const element = document.createElement('div');
    addPageElements(element);

    const reviewQuotes = ["Brioche french toast piled up high with whipped cream and maple syrup? Why eat anything but breakfast?",
                        "Their fruit is so fresh, you'd think they have an orchard right out back!",
                        "I come here every Saturday to read with resident cat Snuffles. Their bottomless coffee can't be beat."];
    const reviewNames = ["-Al Waiseating","-Trina B. Helthee","-Happy Lee Reed"];

        for(let i=0;i<reviewNames.length;i++){
            let review = new newReview(reviewQuotes[i],reviewNames[i]);
        }

        for(let i=0;i<reviewObjects.length;i++){
            let reviewCard = document.createElement('div');
            reviewCard.classList.add("reviewCard");
            let quote = document.createElement('div');
            quote.textContent = reviewObjects[i].quote;
            quote.classList.add('review');
            let name = document.createElement('div');
            name.textContent = reviewObjects[i].name;
            name.classList.add('reviewCredit');
            reviewCard.appendChild(quote);
            reviewCard.appendChild(name);
            reviewElements.push(reviewCard);
        }

    const menuPhotos = [plainWaffle,berryWaffle,chocoWaffle,pbWaffle,chickenWaffle,tallWaffle,
                        fruit,bacon,sausage,toast,oatmeal,applesauce,
                        coffee,oj,milk,latte,espresso,tea];
    const menuTitles = ['Plain Waffles', 'Berry Waffles', 'Chocolate Waffles', 'Peanut Butter Waffles',
                        'Chicken and Waffles', 'The Big Stack',
                        'Fruit Cup','Bacon','Sausage','Toast','Oatmeal','Applesauce',
                        'Coffee','Orange Juice','Milk','Latte','Espresso','Tea'];
    const menuCredits = ['Photo by Joyful on Unsplash','Photo by Sheelah Brennan on Unsplash','Photo by chris panas on Unsplash',
                        'Photo by Kevin Woblick on Unsplash','Photo by Tim Toomey on Unsplash','Photo by Slashio Photography on Unsplash',
                        'Photo by Dane Deaner on Unsplash','Photo by Michelle @Shelly Captures It on Unsplash','Photo by LikeMeat on Unsplash',
                        'Photo by Yukiko Kanada on Unsplash','Photo by Margarita Zueva on Unsplash','Photo by Rachel Loughman on Unsplash',
                        'Photo by Nathan Dumlao on Unsplash','Photo by Greg Rosenke on Unsplash','Photo by an_vision on Unsplash',
                        'Photo by Joshua Hill on Unsplash','Photo by Jarek Ceborski on Unsplash','Photo by Drew Jemmett on Unsplash'];

        for(let i=0;i<menuPhotos.length;i++){
            let meal = new newMeal(menuTitles[i],menuCredits[i]);
        }

        for(let i=0;i<menuObjects.length;i++){
            let mealCard = document.createElement('div');
            let photo = new Image();
            photo.src = menuPhotos[i];
            photo.classList.add("foodPhoto");
            let title = document.createElement('div');
            title.textContent = menuObjects[i].title;
            title.classList.add('foodTitle');
            let credit = document.createElement('div');
            credit.textContent = menuObjects[i].credit;
            credit.classList.add('foodCredit');
            mealCard.appendChild(photo);
            mealCard.appendChild(title);
            mealCard.appendChild(credit);
            menuElements.push(mealCard);
        }

    const contactTitles = ["Host","Chef","Manager"];
    const contactPhotos = [Chowder,Mung,Truffles];
    const contactNames = ["Chowder","Mung Dahl","Truffles"];
    const contactNumbers = ["(555) 817-5309","(212) 664-7665","(311) 555-2368"];

        for(let i=0;i<contactPhotos.length;i++){
            let contact = new newContact(contactTitles[i],contactNames[i],contactNumbers[i]);
        }

        for(let i=0;i<contactObjects.length;i++){
            let contactCard = document.createElement('div');
            contactCard.classList.add("contactBlock");
            let photo = new Image();
            photo.src = contactPhotos[i];
            photo.classList.add("contactPhoto");
            let title = document.createElement('div');
            title.textContent = contactObjects[i].title;
            title.classList.add('contactTitle');
            let name = document.createElement('div');
            name.textContent = contactObjects[i].name;
            name.classList.add('contactName');
            let number =document.createElement('div');
            number.textContent = contactObjects[i].number;
            number.classList.add('contactNumber');
            contactCard.appendChild(title);
            contactCard.appendChild(name);
            contactCard.appendChild(photo);
            contactCard.appendChild(number);
            contactElements.push(contactCard);
        }
    return element;
}

//Page Function
function addPageElements(element){
    //ELEMENTS TO BE USED ON EACH PAGE (Banner, Header, Content, and Credit)
    element.classList.add("pageLayout");
    const banner = document.createElement('div');
    banner.classList.add("banner");
    addBanner(banner);
    const spacer = document.createElement('div');
    const headerBlock = document.createElement('div');
    addHeader(headerBlock);
    headerBlock.setAttribute('id','headerBlock');
    const content = document.createElement('div');
    content.setAttribute('id','contentBlock');
    const credit = document.createElement('div');
    credit.textContent = "Photo by Mae Mu on Unsplash";
    credit.classList.add("credit");
    element.appendChild(banner);
    element.appendChild(spacer);
    element.appendChild(headerBlock);
    element.appendChild(content);
    element.appendChild(credit);
}

//Banner Function
function addBanner(banner){
    const homeLink = document.createElement('button');
    homeLink.addEventListener("click",mainLoad);
    homeLink.textContent = ("Home");
    homeLink.classList.add("bannerLink");
    const menuLink = document.createElement('button');
    menuLink.addEventListener("click",menuLoad);
    menuLink.textContent = ("Menu");
    menuLink.classList.add("bannerLink");
    const contactLink =document.createElement('button');
    contactLink.addEventListener("click",contactLoad);
    contactLink.textContent = ("Contact");
    contactLink.classList.add("bannerLink");
    const spacer2 = document.createElement('div');
    banner.appendChild(spacer2);
    banner.appendChild(homeLink);
    banner.appendChild(menuLink);
    banner.appendChild(contactLink);
}

//Header Function
function addHeader(headerBlock){
    const smallHeading = document.createElement('div');
    smallHeading.textContent = "All Stacked Up!";
    smallHeading.setAttribute('id','smallHeading');
    const heading = document.createElement('div');
    heading.textContent = "All Stacked Up!";
    heading.setAttribute('id','heading');
    const tagline = document.createElement('div');
    tagline.textContent = "Serving the best meal of the day, all day, every day";
    tagline.setAttribute('id','tagline');
    headerElements.push(heading);
    headerElements.push(tagline);
    headerElements.push(smallHeading);
}

function smallHeader(){
    const headerBlock = document.getElementById("headerBlock");
    headerBlock.appendChild(headerElements[2]);
}

function bigHeader(){
    const headerBlock = document.getElementById("headerBlock");
    headerBlock.appendChild(headerElements[0]);
    headerBlock.appendChild(headerElements[1]);
}


//OBJECT CREATORS
function newReview(quote,name){
    this.quote = quote;
    this.name = name;
    reviewObjects.push(this);
}

function newMeal(title,credit){
    this.title = title;
    this.credit = credit;
    menuObjects.push(this);
}

function newContact(title,name,number){
    this.title = title;
    this.name = name;
    this.number = number;
    contactObjects.push(this);
}


//PAGE LOADERS
function mainLoad(){
    clearPage();
    const content = document.getElementById("contentBlock");
    bigHeader();
    for(let i=0;i<3;i++){
        content.appendChild(reviewElements[i]);
    }
}

function contactLoad(){
    clearPage();
    smallHeader();
    const content = document.getElementById("contentBlock");
    for(let i=0;i<3;i++){
        content.appendChild(contactElements[i]);
    }
}

function menuLoad(){
    clearPage();
    smallHeader();
    const content = document.getElementById("contentBlock");
    const waffleCategory = document.createElement('div');
    waffleCategory.classList.add("menuBlock");
    const sideCategory = document.createElement('div');
    sideCategory.classList.add("menuBlock");
    const drinkCategory = document.createElement('div');
    drinkCategory.classList.add("menuBlock");
    content.appendChild(waffleCategory);
    for(let i=0;i<6;i++){
        waffleCategory.appendChild(menuElements[i]);
    }
    content.appendChild(sideCategory);
    for(let i=6;i<12;i++){
        sideCategory.appendChild(menuElements[i]);
    }
    content.appendChild(drinkCategory);
    for(let i=12;i<menuElements.length;i++){
        drinkCategory.appendChild(menuElements[i]);
    }
}

function clearPage(){
    const content = document.getElementById("contentBlock");
    const headerBlock = document.getElementById("headerBlock");
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    while(headerBlock.firstChild){
        headerBlock.removeChild(headerBlock.firstChild);
    }
}


//ON START
document.body.appendChild(pageLoad());
mainLoad();