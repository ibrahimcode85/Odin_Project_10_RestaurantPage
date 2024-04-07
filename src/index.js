import { Home, Menu, Contact } from './page';
import './style.css';

const buttonHome = document.querySelector('.page-home');
buttonHome.addEventListener('click', Home);

const buttonMenu = document.querySelector('.page-menu');
buttonMenu.addEventListener('click', Menu);

const buttonContact = document.querySelector('.page-contact');
buttonContact.addEventListener('click', Contact);

