let form = document.getElementById("command");
let input = document.getElementById("command-input");
const mainElement = document.querySelector("main"); // ako hoces da vratis na prethodno ubaci main umjesto body

//


const obrisiOstalo = document.querySelector("pre")
const vrh = document.getElementById("vrh")
const sve_iznad_inputa = document.getElementById("sve_iznad_inputa")
const badge = document.getElementById("badge")
const home_welcome = document.getElementById("datetime")

const datumcic = document.getElementById("datumcic")
const verzija_portfolio = document.getElementById("verzija_portfolio")
//const home_welcome = document.getElementById("datetime")

//
const changeTypeButton = document.getElementById("change-type");

//dodatno naknadno -> terminal
const terminal = document.getElementById("terminal");
let body = document.body;

const head = document.querySelector("head");
const link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = `css/terminal.css`;
head.appendChild(link);

form.addEventListener("submit", submitListener);
input.addEventListener("keyup", checkCtrlL);


const renderHelp = () => {
  const helpDiv = createContentElement(contents.help);
  output(helpDiv);
};

const renderAbout = () => {
  const aboutDiv = createContentElement(contents.about);
  output(aboutDiv);
};

const renderEducation = () => {
  const educationDiv = createContentElement(contents.education);
  output(educationDiv);
};

const renderSkills = () => {
  const skillsDiv = createContentElement(contents.skills);
  output(skillsDiv);
};

const renderProjects = () => {
  const projectsDiv = createContentElement(contents.projects);
  output(projectsDiv);
};

const renderContact = () => {
  const contactDiv = createContentElement(contents.contact);
  output(contactDiv);
};

const renderCommandNotFound = () => {
  const errorDiv = createContentElement(contents.error(input));
  output(errorDiv);
};

//certifications
const renderCertifications = () => {
  const certificationsDiv = createContentElement(contents.certifications);
  output(certificationsDiv);
};

//linkedin
const renderLinkedin = () => {
  const linkedinDiv = createContentElement(contents.linkedin);
  output(linkedinDiv);
};

//email
const renderEmail = () => {
  const emailDiv = createContentElement(contents.email);
  output(emailDiv);
};

//github
const renderGithub = () => {
  const githubDiv = createContentElement(contents.github);
  output(githubDiv);
};

//tryhackme
const renderTryhackme = () => {
  const tryhackmeDiv = createContentElement(contents.tryhackme);
  output(tryhackmeDiv);
};

//whoami
const renderWhoami = () => {
  const whoamiDiv = createContentElement(contents.whoami);
  output(whoamiDiv);
};


//enter
const renderEmpty = () => {
  const empty = "";
  const emptyDiv = createContentElement(contents.empty);
  output(emptyDiv);
};

//toggle theme
//================================================
// const toggleThemeHacker = () => {
//   body.classList.remove("colorful-theme");
//   body.classList.add("hacker-theme");
// }
// const toggleThemeColorful = () => {
  
//   body.classList.remove("hacker-theme");
//   body.classList.add("colorful-theme");
// }
// const retroTheme = () => {
  
//   if(body.classList[0] === ("hacker-theme")){
    
//     body.classList.remove("hacker-theme");
//   }
//   else if(body.classList[0] === ("colorful-theme")) {
//     body.classList.remove("colorful-theme");
//   }
// }
//==================================================


const exitScreen = () => {
  const terminal = document.querySelector("body")
  terminal.classList.add('collapse');  
}
//==================================================
// const downloadCV = () => {
  
//   window.location = "assets/tarikcv.pdf"
// }
let historija = [] 
const renderHistory = () => {

  historija = historija.filter(v=>v!=''); //remove empty inputs
  const historyDiv = createContentElement(historija.map((element, index) => 
  `
  <div class="history" style="color:#cfd5bd"> 
      <span>${index} &nbsp${element}</span> 
  </div>
  
  
  ` ).join(""));

  output(historyDiv);

  

}



function submitListener(e) {


historija.push(input.value) // ubaceno vezano za historiju
// console.log(historija) //ubaceno vezano za historiju
  e.preventDefault();
  switch (input.value.toLowerCase()) {
      case "help":
      renderHelp();
      break;
      case "exit":
      exitScreen();
      break;
      case "clear":
      removeAllMainNodes();
      break;
      case "about":
      renderAbout();
      break;
      case "education":
      renderEducation();
      break;
      case "skills":
      renderSkills();
      break;
      case "contact":
      renderContact();
      break;
      case "hacker":
      toggleThemeHacker();
      break;
      case "colorful":
      toggleThemeColorful();
      break;
      case "linkedin":
      // window.open("https://www.linkedin.com/in/tarik-rovcanin/", "_blank");
      renderLinkedin();
      break;
      case "github":
      // window.open("https://github.com/trovcanin", "_blank");
      renderGithub();
      
      break;
      case "projects":
      renderProjects();
      break;
      case "resume":
      downloadCV();
      break;
      case "retro":
      retroTheme();
      break;
     

      case"certs":
      renderCertifications();
      break;
      case "email":
      renderEmail();
      break;
      case "github":
      renderGithub();
      break;
      case "tryhackme":
      // window.open("https://tryhackme.com/p/tarikr", "_blank");
      renderTryhackme();
      break;
      // case "whoami":
      // renderWhoami();
      // break;
      case "":
      renderEmpty();
      break;
      case "history":
      renderHistory();
      
      break;
      default:
      renderCommandNotFound();
      

  }
  renderNewForm();
}



