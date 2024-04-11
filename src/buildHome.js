export default function createHomePage(){
  //get content
  const content = document.querySelector("#content");

  //append Welcome Card
  content.appendChild(createWelcomeCard());

  //append About Card
  content.appendChild(createAboutCard());

  //append Info Card
  content.appendChild(createInfoCard());

}

function createWelcomeCard(){
  const welcomeCard = document.createElement("div");
  welcomeCard.setAttribute("id", "welcome-card");
  welcomeCard.setAttribute("class", "card");

  const welcomeSpan = document.createElement("span");
  const italicSpan = document.createElement("span");
  welcomeSpan.setAttribute("class", "welcome");
  italicSpan.setAttribute("class", "italic");

  welcomeSpan.textContent = "Welcome to ";
  italicSpan.textContent = "Tomago Kitchen.";

  welcomeSpan.appendChild(italicSpan);
  welcomeCard.appendChild(welcomeSpan);

  return welcomeCard;
}

function createAboutCard(){
  const aboutCard = document.createElement("div");
  aboutCard.setAttribute("id", "about-card");
  aboutCard.setAttribute("class", "card");

  const aboutTitle = document.createElement("div");
  const aboutText = document.createElement("div");
  aboutTitle.setAttribute("id", "about-title");
  aboutText.setAttribute("id", "about-text");

  aboutTitle.textContent = "Hawaiian & Japanese Cuisine";
  aboutText.textContent = "We are proud to open our first location outside of Japan. Reasons abound for us to introduce our style of japanese cuisine to the Rose City, however Portland offered us something no other US city could; an exceptional food community that understands great, high quality food.";
  
  aboutCard.appendChild(aboutTitle);
  aboutCard.appendChild(aboutText);

  return aboutCard;
}

function createInfoCard(){
  const infoCard = document.createElement("div");
  infoCard.setAttribute("id", "info-card");
  infoCard.setAttribute("class", "card");

  const locationContainer = document.createElement("div");
  const locationTitle = document.createElement("div");
  const locationContent = document.createElement("div");

  locationContainer.setAttribute("id", "location-container");
  locationTitle.setAttribute("id", "loc-title");

  locationTitle.textContent = "Location";
  locationContent.innerHTML = "1234 SE Goodfood Dr<br>Porltand, OR, 97215";

  locationContainer.appendChild(locationTitle);
  locationContainer.appendChild(locationContent);

  const hoursContainer = document.createElement("div");
  const hoursTitle = document.createElement("div");
  const hoursContent = document.createElement("div");

  hoursContainer.setAttribute("id", "hours-container");
  hoursTitle.setAttribute("id", "hours-title");

  hoursTitle.textContent = "Hours";
  hoursContent.innerHTML = `Sunday: 8am - 8pm<br>Mon-Wed: 6am - 6pm<br>Thu-Fri: 6am - 10pm<br>Saturday: 8am - 10pm`;

  hoursContainer.appendChild(hoursTitle);
  hoursContainer.appendChild(hoursContent);

  //final append
  infoCard.appendChild(locationContainer);
  infoCard.appendChild(hoursContainer);

  return infoCard;
}