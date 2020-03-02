// Compteur de clic dans le footer
let footerClick = document.getElementsByTagName('footer')[0];
  console.log(footerClick)
  var clic = 0
let footerCounter = document.querySelector("body > footer > div > p.float-right")

  function changeFooter(){
    clic++;
    footerCounter.textContent = `Clic numéro ${clic}`;
    console.log(`Clic numéro ${clic}`);
}

footerClick.addEventListener("click", changeFooter);

//Hamburger Menu
let hamburgerButton = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > button");
let navHeader = document.querySelector("#navbarHeader");
console.log(hamburgerButton);
  function hideButton(){
    navHeader.classList.toggle("collapse");
  }

hamburgerButton.addEventListener("click", hideButton);



//CardText en rouge
let targetCard = document.querySelector("body > main > div > div > div > div:nth-child(1) > div");
let targetEditBtn = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");

console.log(targetCard);
console.log(targetEditBtn);
function textCardRed(){
  targetCard.style.color = "red";

}
targetEditBtn.addEventListener("click", textCardRed);


//CardText2 en vert/rouge + toggle
let targetCard2 = document.querySelector("body > main > div > div > div > div:nth-child(2)");
let targetEditBtn2 = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");

console.log("targetCard2.style.color", targetCard2.style.color);
console.log(targetEditBtn2);


function textCardToggle(){
  if (targetCard2.style.color === "green"){
    targetCard2.style.color = "";
  } else {
    targetCard2.style.color = "green";
  }
}

targetEditBtn2.addEventListener("click", textCardToggle);



//Nuclear
// Double clique sur la navbar (fonctionne dans les deux sens!)
let targetLink = document.querySelector("head > link");
let targetNavbar = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow");
console.log(targetLink);

function disableLink() {
  if (targetLink.disabled === false){
    targetLink.disabled = true;
  }
  else
  if (targetLink.disabled === true){
    targetLink.disabled = false;
  }
}

targetNavbar.addEventListener("dblclick", disableLink);


//F6
let targetCardText = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > p");
let targetCardImg = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > img");
function minimiseCard(){

//WORK IN PROGRESS BELOW
// for (let i = 0; i = 5; pas++)
//Ce if en dessous fonctionne mais que pour une seule carte! Au survol de l'image!
//   if (targetCardText.style.display !== "none"){
//     targetCardText.style.display = "none";
//     targetCardImg.style.width = "50%";
//     targetCardImg.style.marginRight = "auto";
//     targetCardImg.style.marginLeft = "auto";
//   }
//   else {
//     targetCardText.style.display = "";
//     targetCardImg.style.width = "100%";
//   }
//
// }
// targetCardImg.addEventListener("mouseover", minimiseCard);
//

//TRYING TO MAKE LENGHT WORK.
let numberOfCards = document.querySelector("body > main > div > div > div > div:nth-child(1) > div");
console.log(numberOfCards);
}
minimiseCard();
