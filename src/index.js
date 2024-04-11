import './style/normalize.css'
import './style/style.css'
import './img/banner.jpg'

import createHomePage from './buildHome';
import createContactPage from './buildContact';

console.log("Everything is working! 😍");

//initial load
createHomePage();

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const contactBtn = document.querySelector("#contact-btn");

homeBtn.addEventListener("click", ()=>{
  content.querySelectorAll('*').forEach(n => n.remove());
  createHomePage();
})

contactBtn.addEventListener("click", ()=>{
  content.querySelectorAll('*').forEach(n => n.remove());
  createContactPage();
})