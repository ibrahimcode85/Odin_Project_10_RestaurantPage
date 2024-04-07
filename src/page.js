function clearContent() {
    const content = document.querySelector('#content');
    return content.replaceChildren();
}

function createMenu(textCountry, arrayCountry) {

    // create country wrapper
    const elementCountry = document.createElement('div');
    elementCountry.setAttribute('class', 'country');
    elementCountry.textContent = textCountry;
    
    // create menu card
    for (let i in arrayCountry) {
        let arrayMenu = arrayCountry[i];

        let menuCard = document.createElement('div');
        menuCard.setAttribute('class', 'menu-card');

        let menuImg = document.createElement('img');
        menuImg.setAttribute('src', `../assets/${arrayMenu[1]}`);
        menuImg.setAttribute('width', '200px');

        let menuName = document.createElement('div');
        menuName.setAttribute('class', 'menu-name');
        menuName.textContent = arrayMenu[0];

        let menuText = document.createElement('div');
        menuText.setAttribute('class', 'menu-text');
        menuText.textContent = arrayMenu[2];

        // add content to card
        menuCard.appendChild(menuImg);
        menuCard.appendChild(menuName);
        menuCard.appendChild(menuText);

        // add card to country
        elementCountry.appendChild(menuCard);
    };

    return elementCountry;
}

function Home() {
    // creating page content for Home:
    clearContent();

    // title page
    const elementTitle = document.createElement('div');
    elementTitle.setAttribute('class', 'title');
    elementTitle.textContent = 'Your Premium Instant Noodle!';

    // home >> introduction 
    const elementIntro = document.createElement('div');
    elementIntro.setAttribute('class', 'intro');

    elementIntro.textContent = `Hey there noodle lovers! Get ready to take your favorite instant noodles 
                                on a wild gourmet ride! We're turning those everyday noodles into something 
                                straight outta foodie dreams. Picture this: your go-to ramen or noodles from Japan, 
                                Korea, or Malaysia, but with a twist that'll make your taste buds do a happy dance! 
                                It's like taking a trip through the best noodle joints in Asia, right from the comfort of our restaurant. 
                                So, what are you waiting for? Let's noodle it up and turn your mealtime into a flavor-packed adventure!`;

    // home >> opening hours
    const elementHours = document.createElement('div');
    elementHours.setAttribute('class', 'opening-hours');
    elementHours.textContent = 'Hours';

    const openHours = ["Monday:12pm - 6pm",
                        "Tuesday:12pm - 6pm",
                        "Wednesday:12pm - 6pm",
                        "Thursday:12pm - 6pm",
                        "Friday:12pm - 6pm",
                        "Weekend:12pm - 9pm"
                    ];

    const openList = document.createElement('ul');

    for (let i = 1; i < 7; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = openHours[i - 1];
        openList.appendChild(listItem);
    };

    elementHours.appendChild(openList);


    // home >> store location
    const elementLocation = document.createElement('div');
    elementLocation.setAttribute('class', 'location');

    const loc1 = document.createElement('div');
    loc1.textContent = 'Shopping Mall AA, Kuala Lumpur.'

    const loc2 = document.createElement('div');
    loc2.textContent = 'Shopping Mall BB, Petaling Jaya.'

    elementLocation.appendChild(loc1);
    elementLocation.appendChild(loc2);


    // append components to content
    const content = document.querySelector('#content');
    content.appendChild(elementTitle);
    content.appendChild(elementIntro);
    content.appendChild(elementHours);
    content.appendChild(elementLocation);

}

function Menu() {
    // creating page content for Menu:
    clearContent();

    // array menu content
    const japanMenu = [
        ['Nissin Roah', 'nissin.jpg', `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        At perferendis quibusdam quidem provident neque corporis atque, doloremque dolore illum tempora 
        omnis non suscipit debitis exercitationem impedit, possimus nobis, id voluptas. Minima minus nihil 
        molestiae corrupti esse ratione fugiat iste culpa amet earum, accusamus temporibus eum officiis, 
        recusandae, magnam at sunt.`],

        ['Maruchan Seimen', 'maruchan.jpg', `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        At perferendis quibusdam quidem provident neque corporis atque, doloremque dolore illum tempora 
        omnis non suscipit debitis exercitationem impedit, possimus nobis, id voluptas. Minima minus nihil 
        molestiae corrupti esse ratione fugiat iste culpa amet earum, accusamus temporibus eum officiis, 
        recusandae, magnam at sunt.`]
    ];

    const koreaMenu = [
        ['Nongshim Shin', 'nongshim.webp', `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        At perferendis quibusdam quidem provident neque corporis atque, doloremque dolore illum tempora 
        omnis non suscipit debitis exercitationem impedit, possimus nobis, id voluptas. Minima minus nihil 
        molestiae corrupti esse ratione fugiat iste culpa amet earum, accusamus temporibus eum officiis, 
        recusandae, magnam at sunt.`],

        ['Ottogi Jin Jjambbong', 'ottogi.webp', `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        At perferendis quibusdam quidem provident neque corporis atque, doloremque dolore illum tempora 
        omnis non suscipit debitis exercitationem impedit, possimus nobis, id voluptas. Minima minus nihil 
        molestiae corrupti esse ratione fugiat iste culpa amet earum, accusamus temporibus eum officiis, 
        recusandae, magnam at sunt.`]
    ];

    const seaMenu = [
        ['Indomie Mi Goreng', 'indomi.webp', `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        At perferendis quibusdam quidem provident neque corporis atque, doloremque dolore illum tempora 
        omnis non suscipit debitis exercitationem impedit, possimus nobis, id voluptas. Minima minus nihil 
        molestiae corrupti esse ratione fugiat iste culpa amet earum, accusamus temporibus eum officiis, 
        recusandae, magnam at sunt.`],

        ['MAMA Shrimp Creamy Tom Yum', 'mama.webp', `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        At perferendis quibusdam quidem provident neque corporis atque, doloremque dolore illum tempora 
        omnis non suscipit debitis exercitationem impedit, possimus nobis, id voluptas. Minima minus nihil 
        molestiae corrupti esse ratione fugiat iste culpa amet earum, accusamus temporibus eum officiis, 
        recusandae, magnam at sunt.`]
    ];
    
    // title page
    const elementTitle = document.createElement('div');
    elementTitle.setAttribute('class', 'title');
    elementTitle.textContent = 'Our Noodle Selection';

    // create country content
    const japanContent = createMenu('Japan', japanMenu);
    const koreaContent = createMenu('Korea', koreaMenu);
    const seaContent   = createMenu('South East Asia', seaMenu);

    // append components to content
    const content = document.querySelector('#content');
    content.appendChild(elementTitle);
    content.appendChild(japanContent);
    content.appendChild(koreaContent);
    content.appendChild(seaContent);

}

function Contact() {
    // creating page content for Contact Us:
    clearContent();

    // title page
    const elementTitle = document.createElement('div');
    elementTitle.setAttribute('class', 'title');
    elementTitle.textContent = 'Contact Us';

    // append components to content
    const content = document.querySelector('#content');
    content.appendChild(elementTitle);
}

export {Home, Menu, Contact}