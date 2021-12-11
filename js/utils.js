// date
var dt = new Date();
document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));
//

function renderNewForm() {
  const newForm = document.createElement("form");
  newForm.id = "command";
  const span = document.createElement("span");
  span.className = "prompt";
  span.innerText = "[user@tarik ~]$ ➜"; //ovo sam promijenio
  
 
  const newInput = document.createElement("input");
    
    //moj kod
    // old input ce biti readonly nakon dodavanja novog input jer mi smeta! - ne moze vise da se edituje old input
  let oldInput = document.getElementsByTagName('input');
    
  for (let i = 0; i < oldInput.length; i++) {
    oldInput[i].readOnly = "readonly";
  }

//====================================================================

  newInput.id = "command-input";// mijenjao sam
  
  newForm.appendChild(span);
  newForm.appendChild(newInput);
  newInput.autocomplete = "off";
  newForm.addEventListener("submit", submitListener);
  mainElement.appendChild(newForm);
  newInput.focus();
  newInput.addEventListener("keyup", checkCtrlL);
  form = newForm;
  input = newInput; 
}

function removeAllMainNodes() {
  while (mainElement.firstChild) {
    mainElement.removeChild(mainElement.firstChild);
  }
}

const checkCtrlL = (e) => {
  if (e.getModifierState("Control") && e.key === "l") {
    removeAllMainNodes();
    renderNewForm();
  }
};

const output = (el) => {
  mainElement.appendChild(el);
};

const createContentElement = (content) => {
  const div = document.createElement("div");
  div.className = "command";
  div.innerHTML = content;

  return div;
};

