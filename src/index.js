console.log("I'm alive!")

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
content.appendChild(elementIntro);
content.appendChild(elementHours);
content.appendChild(elementLocation);
