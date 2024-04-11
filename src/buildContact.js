export default function createContactPage(){
  //get content
  const content = document.querySelector("#content");

  //append Contact Card
  content.appendChild(createContactCard());
}

function createContactCard(){

  const contactCard = document.createElement("div");
  contactCard.setAttribute("id", "contact-card");

  const contactBanner = document.createElement("div");
  contactBanner.setAttribute("id", "contact-banner");
  contactBanner.textContent = "Contact us";
  contactCard.appendChild(contactBanner);

  const contactFormContainer = document.createElement("div");
  contactFormContainer.setAttribute("id", "contact-form-container");

  const emailForm = document.createElement("form");
  emailForm.setAttribute("action", "");
  emailForm.setAttribute("id", "email-form");

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.setAttribute("id", "email-label");
  emailLabel.textContent = "Email Address (required)";
  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "email");
  //--
  const subjectLabel = document.createElement("label");
  subjectLabel.setAttribute("for", "subject");
  subjectLabel.setAttribute("id", "subject-label");
  subjectLabel.textContent = "Subject";
  const subjectInput = document.createElement("input");
  subjectInput.setAttribute("type", "text");
  subjectInput.setAttribute("id", "subject");
  subjectInput.setAttribute("name", "subject");
  //--
  const bodyLabel = document.createElement("label");
  bodyLabel.setAttribute("for", "body");
  bodyLabel.setAttribute("id", "body-label");
  bodyLabel.textContent = "Body";
  const bodyInput = document.createElement("textarea");
  bodyInput.setAttribute("type", "text");
  bodyInput.setAttribute("id", "body");
  bodyInput.setAttribute("name", "body");
  //--
  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "button");
  submitBtn.setAttribute("id", "submit-btn");
  submitBtn.textContent = "Submit";

  //appending
  emailForm.appendChild(emailLabel);
  emailForm.appendChild(emailInput);
  emailForm.appendChild(subjectLabel);
  emailForm.appendChild(subjectInput);
  emailForm.appendChild(bodyLabel);
  emailForm.appendChild(bodyInput);
  contactFormContainer.appendChild(emailForm);
  contactCard.appendChild(contactFormContainer);

  return contactCard;
}