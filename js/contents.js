


//HELP COMMANDS============================================

const helpCommands = [
  
  
  {
    command: "about",
    // description: "Couple of words about me",
  },
  {
    command: "skills",
    // description: "My Skills",
  },
  {
    command: "projects",
    // description: "My Projects",
  },
  {
    command: "certs",
    // description: "My Certifications",
  },
  // {
  //   command: "contact",
  //   // description: "Contact Me",
  // },
  
  {
    command: "github",
    // description: "Takes you to my github",
  },
  {
    command: "linkedin",
    // description: "Takes you to my linkedin",
  },
  {
    command: "tryhackme",
    
  },
  {
    command: "email",
    // description: "Change to hacker background",
  },
  // {
  //   command: "whoami",
    
  // }
  // ,
  {
    command:"history"
  }
  ,
  // {
  //   command:'ls',
    
  // },
  // {
  //   command:'pwd',
    
  // },
  {
    command:'clear',
    
  },
  {
    command:'exit'
  },
  {
    command:""
  }
  
];

// const certifications = [
//   {
//     cert: "CompTIA Pentest+ THM"
//   },
//   {
//     cert:"Complete Beginner THM"
//   }
  
  
// ];




//PROJEKTI================================================
const projects = [
  {
    name: "Amazon Scraper API",
    description:
      "Easiest way to get access to product, price, sales and reviews data from Amazon in JSON format.",
    stack: ["NodeJS", "Express", "Scraper API"],
    code:"https://github.com/trovcanin/amazon-scraper-api",
    project:"https://app-amazon-scraper-api.herokuapp.com/"
  },
  {
    name: "Movie Rental REST API",
    description:
      "Real movie rental rest api with users, clients, movies and rentals.",
    stack: ["NodeJS", "Express", "JWT", "bcrypt"],
    code:"https://github.com/trovcanin/movie_rental_restapi",
    project:"https://movie-rental-rest-api.herokuapp.com/"
  },
  {
    name: "Puppeteer Form Spammer",
    description:
      "Take a look at how to automate form submission using Puppeteer and how to use Puppeteer selectors to target form inputs.",
    stack: ["NodeJS", "Express", "Puppeteer"],
    code:"https://github.com/trovcanin/puppeteer-form-spammer",
    project:"https://github.com/trovcanin/puppeteer-form-spammer"
  },
  {
    name: "File Metadata Microservice",
    description:
      "File Metadata Microservice, with node and express.",
    stack: ["NodeJS", "Express"],
    code:"link",
    project:"link"
  }
];

//CONTACT ======================================================================
const contactMediums = [
  {
    medium: "github",
    username: "trovcanin",
    link: "https://github.com/trovcanin",
  },
  {
    medium: "email",
    username: "tarik@tarikrovcan.com",
    link: "mailto:tarik@tarikrovcan.com",
  },
  {
    medium: "linkedin",
    username: "tarik.rovcanin",
    link: "https://www.linkedin.com/in/tarik-rovcanin/",
  },
];

//HELP ==================================================================
const contents = {
  
  help: //'<br>'+//terminal.css
    helpCommands
      .map(
        (command) => `
       
       <div class="help-flex" style="color:#267CF7"> 
       
        <p class="command">${command.command}</p> 
     
      </div>`
      )
      .join("") +
    `<br>
      <div class="command">Type one of the commands above. For eg. <span style="color: var(--secondary)">about</span>
      
      </div> <br>`,
      
      about: ` 
    
    <div class="about">
    My name is Tarik Rovcanin and I\'m a self thought developer, tech enthusiast with a passion for cyber security, always trying to improve my skill set.
    <br /><br />
    </div>
    
  `,
    certifications: `
  
  <div class="certs">

  <div class="skill"><span style="color:#267CF7">TryHackMe </span>CompTIA Pentest+</div>
  <div class="skill"><span style="color:#267CF7">TryHackMe </span>Complete Beginner </div>
  <div class="skill"><span style="color:#267CF7">TryHackMe </span>Presecurity Learning Path</div>
  <div class="skill"><span style="color:#267CF7">TryHackMe </span>Web Fundamentals</div>
  <div class="skill"><span style="color:#267CF7">TryHackMe </span>Jr. Penetration Tester</div>
  <div class="skill"><span style="color:#267CF7">TryHackMe </span>Cyber Defense</div> </br>
  <div class="skill"><span style="color:#267CF7">freeCodeCamp </span>Responsive Web Design</div>
  <div class="skill"><span style="color:#267CF7">freeCodeCamp </span>Javascript Algorithms and Data Structures</div>
  <div class="skill"><span style="color:#267CF7">freeCodeCamp </span>Front End Development Libraries</div>
  <div class="skill"><span style="color:#267CF7">freeCodeCamp </span>Back End Development APIs</div>
  <div class="skill"><span style="color:#267CF7">freeCodeCamp </span>Scientific Computing with Python</div>
  
  <br />
  </div>
  `,
  linkedin:`
  <br />
  <div class="linkedin">linkedin: <a href="https://www.linkedin.com/in/tarik-rovcanin/" target="_blank" style="color:#267CF7">https://www.linkedin.com/in/tarik-rovcanin/</a></div>
  
  <br />
  `,
  whoami:`
  <br />
  <div class="whoami">guest</div>
  
  <br />
  `,
  github:`
  <br />
  <div class="github">github: <a href="https://github.com/trovcanin" target="_blank" style="color:#267CF7">https://github.com/trovcanin</a></div>
  
  <br />
  `,
  email:`
  <br />
  <div class="email">tarik@tarikrovcan.com</div>
  
  <br />
  `,
  tryhackme:`
  <br />
  <div class="tryhackme" >tryhackme: <a href="https://tryhackme.com/p/tarikr" target="_blank" style="color:#267CF7">https://tryhackme.com/p/tarikr</a></div>
  
  <br />
  `,
  empty:`<div class="enter"></div>
  `
  ,
  skills: `
  
  <div class="skills">
  <div class="skill"><span style="color:#267CF7">linux</span><br /></div>
  <div class="skill"><span style="color:#267CF7">security</span>: privesc, web exploitation, ctf<br /></div>
  
  <div class="skill"><span style="color:#267CF7">web</span>: HTML, CSS, Javascript and Node.js<br /></div>
  <div class="skill"><span style="color:#267CF7">frameworks</span>: Express, React, Pupeteer<br /></div>
  <div class="skill"><span style="color:#267CF7">database</span>: mongoose, basic sql<br /></div>
  <br />
  </div>
  `,
  

  projects:
    //`<h3>My Projects ↓</h3>` +
    projects
      .map(
        (project) => 
        `
        <div class="command">
        <span class="command" style="color:#267cf7
        ">${project.name}</span> - <span>${project.stack.join(", ")}</span> [<a href="${project.code}" target="_blank" style="color:#267cf7
        "><code><span class="command"></span>code</a>]
        [<a href="${project.project}" target="_blank" style="color:#267cf7
        "><span class="command"></span>website</a>]
          
        <br>
        <span class="meaning">${project.description}</span>
          
      </div> <br>`

      )
      .join(""),
  
  contact: '<br>'+ contactMediums
    .map(
      (contact) => `

      <div class="help-flex" style="color:#FFA500">
      
      <p class="command">${contact.medium}</p></b>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("") + '<br>',
  error: (input) =>
  
  //ERROR
    `<br><div class="help-command" style="color:red;">Command "${input.value}" not recognized. </div><div class="help-command" style="color:red">Type \`help\` for more info</div><br>`,
};
