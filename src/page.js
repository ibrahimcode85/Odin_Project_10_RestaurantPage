function clearContent() {
    const content = document.querySelector('#content');
    return content.replaceChildren();
}

function clearButtonStyle() {
    
    const arrayButton = ['page-home', 'page-menu', 'page-contact'];

    for (let i in arrayButton) {
        let button = document.querySelector(`.${arrayButton[i]}`);
        button.style.backgroundColor = '';
    };
}

function createMenu(textCountry, arrayCountry) {

    // create country wrapper
    const elementCountry = document.createElement('div');
    elementCountry.setAttribute('class', 'country');
    
    // add country name
    let countryName = document.createElement('div');
    countryName.setAttribute('class', 'menu-country');
    countryName.textContent = textCountry;
    elementCountry.appendChild(countryName);
    
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
    clearButtonStyle();

    // update button style
    const button = document.querySelector('.page-home');
    button.style.backgroundColor = 'rgb(40, 59, 20, 0.3)'; // same style as hover

    // title page
    const content = document.querySelector('#content');
    content.textContent = 'Your favourite instant noodle made premium!';

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
    elementHours.textContent = 'Our opening hours:';

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
    elementLocation.textContent = 'Our location:';

    const loc1 = document.createElement('div');
    loc1.textContent = 'Shopping Mall AA, Kuala Lumpur.'

    const loc2 = document.createElement('div');
    loc2.textContent = 'Shopping Mall BB, Petaling Jaya.'

    elementLocation.appendChild(loc1);
    elementLocation.appendChild(loc2);


    // append components to content
    content.appendChild(elementIntro);
    content.appendChild(elementHours);
    content.appendChild(elementLocation);

}

function Menu() {
    // creating page content for Menu:
    clearContent();
    clearButtonStyle();

    // update button style
    const button = document.querySelector('.page-menu');
    button.style.backgroundColor = 'rgb(40, 59, 20, 0.3)'; // same style as hover

    // title page
    const content = document.querySelector('#content');
    content.textContent = 'Variety of noodle to choose from!';

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
    
 
    // create country content
    const japanContent = createMenu('Japan', japanMenu);
    const koreaContent = createMenu('Korea', koreaMenu);
    const seaContent   = createMenu('South East Asia', seaMenu);

    // append components to content
    content.appendChild(japanContent);
    content.appendChild(koreaContent);
    content.appendChild(seaContent);

}

function Contact() {
    // creating page content for Contact Us:
    clearContent();
    clearButtonStyle();

    // update button style
    const button = document.querySelector('.page-contact');
    button.style.backgroundColor = 'rgb(40, 59, 20, 0.3)'; // same style as hover

    // title page
    const content = document.querySelector('#content');
    content.textContent = 'We would love to hear from you!';

    // contact-wrapper
    const contactCard = document.createElement('div');
    contactCard.setAttribute('class', 'contact-card');

    // contact component
    const contactImg = document.createElement('img');
    contactImg.setAttribute('src', `../assets/avatar.png`);
    contactImg.setAttribute('width', '200px');

    const contactName = document.createElement('div');
    contactName.setAttribute('class', 'contact-name');
    contactName.textContent = 'Chef Alessandro of Lebanon';

    const contactDesc = document.createElement('div');
    contactDesc.setAttribute('class', 'contact-description');
    contactDesc.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eaque inventore officia molestiae esse, at temporibus maiores omnis est! Enim quae quis earum, tempora iste distinctio expedita placeat minima aut sed possimus recusandae ducimus commodi temporibus voluptate repudiandae! Nesciunt tempore, quo corrupti et doloribus beatae voluptatum veniam deleniti vitae provident sint rerum soluta vero, natus magnam voluptate ab ipsa harum eligendi quidem molestias maxime, ex ipsam. At sequi, impedit rem officia natus, voluptates quod quae eos sed itaque modi molestiae tempora dolorem repellendus deleniti rerum expedita temporibus nihil qui voluptate excepturi? Molestiae provident vel eligendi architecto quo. A, aperiam optio?'; 

    // append components to content
    contactCard.appendChild(contactImg);
    contactCard.appendChild(contactName);
    contactCard.appendChild(contactDesc);
    content.appendChild(contactCard);

    // create a second chef (clone for simplicity as this is just a dummy page)
    const contactCard2 = contactCard.cloneNode(true);
    content.appendChild(contactCard2);
}

export {Home, Menu, Contact}