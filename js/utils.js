// date
//document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));
//

function renderNewForm() {
  const newForm = document.createElement("form");
  newForm.id = "command";
  const span = document.createElement("span");
  span.className = "prompt";
  // span.style.color = "white"
  // span.style.backgroundColor = "#9714DE"
  
  span.innerHTML = `<span style="color:red">guest@terminalio<span style="color:white">:</span><span style="color:blue">~</span><span style="color:white">$</span></span>`; //ovo sam promijenio
  
 
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
  
  if(obrisiOstalo != null){
    obrisiOstalo.remove()
  }
  
  if(vrh != null){
    vrh.remove()
  }

  if(sve_iznad_inputa != null){
    sve_iznad_inputa.remove()
  }

  if(datumcic != null){
    datumcic.remove()
  }

  if(badge != null){
    badge.remove()
  }

  if(verzija_portfolio != null){
    verzija_portfolio.remove()
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

