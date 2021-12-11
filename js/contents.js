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
  //   command: "colorful",
  //   description: "Change to colorful background",
  // },
  // {
  //   command:'retro',
  //   description: "Switch back to retro theme!",
  // },
  {
    command:'clear',
    
  }
  
];




//PROJEKTI================================================
const projects = [
  {
    name: "Amazon Scraper API",
    description:
      "Amazon Data Scraper is the easiest wat to get access to product, price, sales and reviews data from Amazon in JSON format.",
    stack: ["NodeJS", "Express", "Scraper API"],
    code:"https://github.com/trovcanin/amazon-scraper-api",
    project:"https://app-amazon-scraper-api.herokuapp.com/"
  },
  {
    name: "Movie Rental REST API",
    description:
      "Real movie rental rest api with users, clients, movies and rentals",
    stack: ["NodeJS", "Express", "JWT", "bcrypt"],
    code:"https://github.com/trovcanin/movie_rental_restapi",
    project:"https://movie-rental-rest-api.herokuapp.com/"
  },
  {
    name: "Puppeteer Form Spammer",
    description:
      "Take a look at how to automate form submission using Puppeteer and how to use Puppeteer selectors to target form inputs",
    stack: ["NodeJS", "Express", "Puppeteer"],
    code:"https://github.com/trovcanin/puppeteer-form-spammer",
    project:"https://github.com/trovcanin/puppeteer-form-spammer"
  },
  {
    name: "File Metadata Microservice",
    description:
      "File Metadata Microservice",
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
  
  help: '<br>'+//terminal.css
    helpCommands
      .map(
        (command) => `
       
       <div class="help-flex"> 
       
        <p class="command">${command.command}</p> 
     
      </div>`
      )
      .join("") +
    `<br>
      <div class="command">Type one of the commands above. For eg. <b><span style="color: var(--secondary)">about</span></b>
      
      </div> <br>`,
      
      about: ` <br/>
    My name is Tarik Rovcanin and I\'m a fullstack developer.
    <br/>
    I love coding in Javascript, and have worked with frameworks like ReactJS, NodeJS, Express, and Puppeteer.
    <br /><br />
    
  `,
    skills: `
  <br />
  <div class="skill"><b>core</b>: HTML, CSS, Javascript and Node.js<br /></div>
  <div class="skill"><b>frameworks</b>: Express, React, Pupeteer<br /></div>
  <div class="skill"><b>database</b>: MongoDB, mongoose<br /></div>
  <br />
  `,

  projects:
    `<h3>My Projects ↓</h3>` +
    projects
      .map(
        (project) => 
        `<br>
        <div class="command">
        <b class="command">${
          project.name
        }</b> - <b>${project.stack.join(", ")}</b> -> <<a href="${project.code}" target="_blank" style="color:blue"><code><b class="command"></b>code</a>>
        <<a href="${project.project}" target="_blank" style="color:blue"><b class="command"></b>website</a>>
          <p class="meaning">${project.description}</p>
          
      </div> <br>`

      )
      .join(""),
  
  contact: '<br>'+ contactMediums
    .map(
      (contact) => `

      <div class="help-flex">
      
      <p class="command">${contact.medium}</p></b>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("") + '<br>',
  error: (input) =>
  //ERROR
    `<br><div class="help-command" style="color:red;">sh: Unknown command: ${input.value}</div><div class="help-command" style="color:red">See \`help\` for more info</div><br>`,
};
