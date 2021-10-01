//HELP COMMANDS============================================

const helpCommands = [
  {
    command: "about",
    description: "Couple of words about me",
  },
  {
    command: "skills",
    description: "My Skills",
  },
  {
    command: "projects",
    description: "My Projects",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command: "github",
    description: "Takes you to my github",
  },
  {
    command: "linkedin",
    description: "Takes you to my linkedin",
  },
  {
    command: "resume",
    description: "Check out my resume",
  },
  {
    command: "hacker",
    description: "Change to hacker background",
  },
  {
    command: "colorful",
    description: "Change to colorful background",
  },
  {
    command:'retro',
    description: "Switch back to retro theme!",
  },
  {
    command:'clear',
    description: "Clear the terminal",
  }
  
];




//PROJEKTI================================================
const projects = [
  {
    name: "REST API Users",
    description:
      "REST API Users",
    stack: ["NodeJS", "Express", "EJS"],
    link: "https://github.com/trovcanin",
    image: "enship.jpeg",
    // largeImage: "enship-lg.png",
    code:"link",
    project:"link"
  },
  {
    name: "Puppeteer Form Spammer",
    description:
      "Puppeteer Form Spammer",
    stack: ["NodeJS", "Express"],
    link: "https://github.com/trovcanin",
    image: "ndss.png",
    // largeImage: "ndss-lg.png",
    code:"link",
    project:"link"
  },
  {
    name: "File Metadata Microservice",
    description:
      "File Metadata Microservice",
    stack: ["NodeJS", "Express"],
    link: "https://github.com/trovcanin",
    // image: "cognizer.png",
    code:"link",
    project:"link"
  },
  {
    name: "Node Internet Speed Test",
    description:
      "Node Internet Speed Test",
    stack: ["NodeJS", "speedtest-npm"],
    link: "https://github.com/trovcanin",
    // image: "exun.png",
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
  
  help: //terminal.css
    helpCommands
      .map(
        (command) => `<div class="help-flex"> 
       <b> <p class="command">${command.command}</p> </b>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
        <p class="meaning">${command.description}</p>
      </div>`
      )
      .join("") +
    `<br />
      <div class="command">Type one of the above commands. For eg. <b><span style="color: var(--secondary)">about</span></b></div>`,
  
      about: ` <br/>
    My name is Tarik Rovcanin and I\'m a fullstack web developer.
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
        (project) => `<div class="command">
        <b class="command">${
          project.name
        }</b> - <b>${project.stack.join(", ")}</b> -> <<a href="https://www.linkedin.com/in/tarik-rovcanin/" target="_blank" style="color:blue"><code><b class="command"></b>code</a>>
        <<a href="https://www.linkedin.com/in/tarik-rovcanin/" target="_blank" style="color:blue"><project><b class="command"></b>project</a>>
          <p class="meaning">${project.description}</p>
          
        

      </div>`

      )
      .join(""),

  contact: contactMediums
    .map(
      (contact) => `<div class="help-flex">
      <p class="command">${contact.medium}</p></b>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join(""),
  error: (input) =>
  //ERROR
    `<div class="help-command">sh: Unknown command: ${input.value}</div><div class="help-command">See \`help\` for info`,
};
