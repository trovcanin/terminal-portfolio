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
    command:'clear',
    description: "Clear the terminal",
  },
  {
    command:'retro',
    description: "Switch back to retro theme!",
  },
];




//PROJEKTI================================================
const projects = [
  {
    name: "Project1",
    description:
      "Project1 description",
    stack: ["Stack1", "Stack2"],
    link: "https://github.com/trovcanin",
    image: "enship.jpeg",
    // largeImage: "enship-lg.png",
    code:"link",
    project:"link"
  },
  {
    name: "Project2",
    description:
      "Project2 description",
    stack: ["Stack1", "Stack2"],
    link: "https://github.com/trovcanin",
    image: "ndss.png",
    // largeImage: "ndss-lg.png",
    code:"link",
    project:"link"
  },
  {
    name: "Project3",
    description:
      "Project3 description",
    stack: ["Stack1", "Stack2", "Stack3", "Stack4"],
    link: "https://github.com/trovcanin",
    // image: "cognizer.png",
    code:"link",
    project:"link"
  },
  {
    name: "Project4",
    description:
      "Project4 description",
    stack: ["Stack1", "Stack2", "Stack3"],
    link: "https://github.com/trovcanin",
    // image: "exun.png",
    code:"link",
    project:"link"
  },
  {
    name: "Project5",
    description:
      "Project5 description",
    stack: ["Stack1", "Stack2", "Stack3"],
    link: "https://github.com/trovcanin",
    // image: "cbse.png",
    code:"link",
    project:"link"
  },
  {
    name: "Project6",
    description:
      "Project6 description",
    stack: ["Stack1", "Stack2"],
    link: "https://github.com/trovcanin",
    // image: "task-bot.png",
    code:"link",
    project:"link"
  },
  {
    name: "Project7",
    description:
      "Project7 description",
    stack: ["Stack1", "Stack2"],
    link: "https://github.com/trovcanin",
    // image: "kke.jpeg",
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
  // {
  //   medium: "facebook",
  //   username: "tarik.rovcan",
  //   link: "https://www.facebook.com/kavin.valli.25/",
  // },
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
  
  // education: `I am a Grade 11 student at <a href="https://dpsrkp.net" target="_blank">Delhi Public School, R.K. Puram<\a>
  //   <br />
  //   I am a member of <a href="https://enship-club.github.io" target="_blank">Enship</a> and <a href="https://exunclan.com">Exun Clan</a>, the Tech Club.`,
  
    skills: `
  <br />
  <div class="skill"><b>core</b>: HTML, CSS, Javascript and Node.js<br /></div>
  <div class="skill"><b>frameworks</b>: Express, React, Pupeteer<br /></div>
  <div class="skill"><b>database</b>: MongoDB, mongoose<br /></div>
  <br />
  `,

  projects:
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
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
