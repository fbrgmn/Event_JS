/****
  F1. Compteur de clic dans le footer
****/
let footerClick = document.getElementsByTagName('footer')[0];
//console.log(footerClick);
var clic = 0;
let footerCounter = document.querySelector("body > footer > div > p.float-right");

function changeFooter(){
  clic++;
  footerCounter.textContent = `Clic numéro ${clic}`;
  console.log(`Clic numéro ${clic}`);
}
footerClick.addEventListener("click", changeFooter);


/****
  F2. Hamburger Menu
****/
let hamburgerButton = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > button");
let navHeader = document.querySelector("#navbarHeader");
//console.log(hamburgerButton);

function hideButton(){
  navHeader.classList.toggle("collapse");
}
hamburgerButton.addEventListener("click", hideButton);


/****
  F3. CardText en rouge
****/
let targetCard = document.querySelector("body > main > div > div > div > div:nth-child(1) > div");
let targetEditBtn = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");
//console.log(targetCard);
//console.log(targetEditBtn);

function textCardRed(){
  targetCard.style.color = "red";
}
targetEditBtn.addEventListener("click", textCardRed);


/****
  F4. CardText2 en vert + toggle
****/
let targetCard2 = document.querySelector("body > main > div > div > div > div:nth-child(2)");
let targetEditBtn2 = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");
//console.log("targetCard2.style.color", targetCard2.style.color);
//console.log(targetEditBtn2);

function textCardToggle(){
  if (targetCard2.style.color === "green"){
    targetCard2.style.color = "";
  } else {
    targetCard2.style.color = "green";
  }
}
targetEditBtn2.addEventListener("click", textCardToggle);


/****
  F5. Nuclear - Double clique sur la navbar (fonctionne dans les deux sens!)
****/
let targetLink = document.querySelector("head > link");
let targetNavbar = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow");
//console.log(targetLink);

function disableLink() {
  if (targetLink.disabled === false) {
    targetLink.disabled = true;
  } else if (targetLink.disabled === true){
    targetLink.disabled = false;
  }
}
targetNavbar.addEventListener("dblclick", disableLink);


/****
  F6. réduire Card
****/
let targetAllCards = document.querySelectorAll(".col-md-4");
for (let i = 0; i < targetAllCards.length; i++) {
    let targetCardText = targetAllCards[i].querySelector('.card-text');
    //console.log("F6 targetCardText ", targetCardText);
    let targetCardImg = targetAllCards[i].querySelector('.card-img-top');
    //console.log("F6 targetCardImg ", targetCardImg);
    let viewButton = targetAllCards[i].querySelector('.btn-success');

    viewButton.addEventListener("mouseover", function () {
        targetCardText.classList.toggle("collapse");
        //console.log("F6 targetCardText toggle ", targetCardText);
        let imgStyle = document.createAttribute("style");
        imgStyle.value = "width: 20%;";
        //console.log("F6 imgStyle style ", imgStyle);

        if (targetCardImg.hasAttribute('style')) {
            targetCardImg.removeAttribute('style');
        } else {
            targetCardImg.setAttributeNode(imgStyle);
        }
      }
    );
}
