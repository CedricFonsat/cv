
let more = document.getElementById('button-more');
let text = document.querySelector('#text-more');
let dots = document.querySelector('#dots');


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("text-more");
  var btnText = document.getElementById("button-more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Voir plus";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Voir moins";
    moreText.style.display = "inline";
  }
}






let isTrad = false

function traduction() {
  let tabElementH2 = document.querySelectorAll("h2")
  let navBar = document.querySelectorAll(".navTranslate")
  let experienceOne = document.querySelectorAll(".experience-translate-one")
  let experienceTwo = document.querySelectorAll(".experience-translate-two")
  let experienceThree = document.querySelectorAll(".experience-translate-three")
  let about = document.querySelectorAll(".about-translate")
  let formation = document.querySelectorAll(".formation-translate")
  let speak = document.querySelectorAll(".speak-translate")
  let form = document.querySelectorAll(".form-translate")
  let tabTraductionH2 = ["Junior Web Developer", "", "Professional experience", "Diploma and training", "Skills", "Spoken languages", "Contact"]
  let tabNavBar = ["Professional experience", "Skills", "Contact me", "About"]
  let tabExperienceOne = ["March 2022", "TECHNICIAN INTERNSHIP", "Shelving", "Computer diagnostics", "Fixed computer mount"]
  let tabExperienceTwo = ["June 2021", "WEB DEVELOPER INTERNSHIP", "Design of e-commerce site (Wordpress)", "Establishment of specifications", "Implementation of the responsive"]
  let tabExperienceThree = ["January - April 2020", "INTERNATIONAL CIVIC SERVICE", "Introduction to programming language (HTML, CSS, JS)", "Video editing - teamwork", "Exchange and discussion with young people (cultures and language)"]
  let tabAbout = ["About","Contact me","Download CV"]
  let tabFormation = ["PROFESSIONAL TITLE APPLICATION DEVELOPER DESIGNER","In progress","INTEGRATION AND WEB DEVELOPMENT TECHNICIAN TRAINING","Web Integration and Development Technician","BACCALAUREATE STI2D OPTION SIN","Sciences and technologies of industry and sustainable development","Information and digital system option"]
  let tabSpeak = ["TECHNICAL ENGLISH","FRENCH"]
  let tabForm = ["Name","Mail","Message","Send"]
  document.querySelector(".footer-translate").innerText = "Junior Web Developer"
  document.querySelector(".tl-about").innerText = "Passionate about computers since very young I decided to follow this path by doing an STI2D Option SIN baccalaureate, then I did a training Integrator and Web Developer. Currently, I am following a new training to deepen my knowledge."
  // H2
  for (let i = 0; i < 6; i++) {
    tabElementH2[i].innerText = tabTraductionH2[i]
  }
  //navBar
  //about
  for (let i = 0; i < 3; i++) {
    navBar[i].innerText = tabNavBar[i]
    about[i].innerText = tabAbout[i]
  }
  // experience-translate-one
  // experience-translate-two
  // experience-translate-three
  for (let i = 0; i < 5; i++) {
    experienceTwo[i].innerText = tabExperienceTwo[i]
    experienceThree[i].innerText = tabExperienceThree[i]
    experienceOne[i].innerText = tabExperienceOne[i]
  }

  // diplome and formation
  for (let i = 0; i < 7; i++) {
    formation[i].innerText = tabFormation[i]
  }
  // language
  for (let i = 0; i < 2; i++) {
    speak[i].innerText = tabSpeak[i]
  }
  // contact
  for (let i = 0; i < 4; i++) {
    form[i].innerText = tabForm[i]
  }

}