function clearContent() {
    const content = document.querySelector('#content');
    return content.replaceChildren();
};

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

};

function Menu() {
    // creating page content for Menu:
    clearContent();

    // menu content
    japanMenu = [
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

    koreaMenu = [
        ['Nongshim Shin', 'nongshim.jpg', `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        At perferendis quibusdam quidem provident neque corporis atque, doloremque dolore illum tempora 
        omnis non suscipit debitis exercitationem impedit, possimus nobis, id voluptas. Minima minus nihil 
        molestiae corrupti esse ratione fugiat iste culpa amet earum, accusamus temporibus eum officiis, 
        recusandae, magnam at sunt.`],

        ['Ottogi Jin Jjambbong', 'ottogi.jpg', `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        At perferendis quibusdam quidem provident neque corporis atque, doloremque dolore illum tempora 
        omnis non suscipit debitis exercitationem impedit, possimus nobis, id voluptas. Minima minus nihil 
        molestiae corrupti esse ratione fugiat iste culpa amet earum, accusamus temporibus eum officiis, 
        recusandae, magnam at sunt.`]
    ];

    seasiaMenu = [
        ['Indomie Mi Goreng', 'indomi.jpg', `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        At perferendis quibusdam quidem provident neque corporis atque, doloremque dolore illum tempora 
        omnis non suscipit debitis exercitationem impedit, possimus nobis, id voluptas. Minima minus nihil 
        molestiae corrupti esse ratione fugiat iste culpa amet earum, accusamus temporibus eum officiis, 
        recusandae, magnam at sunt.`],

        ['MAMA Shrimp Creamy Tom Yum', 'mama.jpg', `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        At perferendis quibusdam quidem provident neque corporis atque, doloremque dolore illum tempora 
        omnis non suscipit debitis exercitationem impedit, possimus nobis, id voluptas. Minima minus nihil 
        molestiae corrupti esse ratione fugiat iste culpa amet earum, accusamus temporibus eum officiis, 
        recusandae, magnam at sunt.`]
    ];
    
    // title page
    const elementTitle = document.createElement('div');
    elementTitle.setAttribute('class', 'title');
    elementTitle.textContent = 'Our Noodle Selection';

    // append components to content
    const content = document.querySelector('#content');
    content.appendChild(elementTitle);

};

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

export {Home, Menu, Contact};