// import "./style.css";

const cards = document.querySelector(".cards");

const animalsToAdopt = [
  {
    name: "Lucky",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tiffanie_at_cat_show.jpg/199px-Tiffanie_at_cat_show.jpg"
  },
  {
    name: "Symba",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tiffany4_%282018%3B_cropped_2023%29.jpg/240px-Tiffany4_%282018%3B_cropped_2023%29.jpg"
  },
  {
    name: "Léo",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Norskskogkatt_Evita_3.JPG/245px-Norskskogkatt_Evita_3.JPG"
  },
  {
    name: "Milo",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/CyprusShorthair.jpg/320px-CyprusShorthair.jpg"
  },
  {
    name: "Charly",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Highlander-7.jpg/293px-Highlander-7.jpg"
  }
];

function createCard(animal) {
    const { picture, name } = animal;

    const card = document.createElement("figure");
    card.classList.add("card");
    cards.appendChild(card);

    const cardImg = document.createElement("img");
    cardImg.src = picture;
    cardImg.alt = name;
    cardImg.classList.add("card-img");
    card.appendChild(cardImg);

    //crée fuguration
    figucaption = document.createElement('figcaption');
    figucaption.classList.add("card-body");
    card.appendChild(figucaption);

    //crée h2
    titreH2 = document.createElement('h2');
    titreH2.classList.add("card-title");
    figucaption.appendChild(titreH2);
    titreH2.innerHTML = name;

    //crée bouton
    bouton = document.createElement('button');
    bouton.classList.add("card-button");
    figucaption.appendChild(bouton);
    bouton.textContent = "Adopt Now";

    bouton.addEventListener("click", function(){
        alert(`${name} adopted !`);
    });



  // Step2:

  // Create the cardBody (figcaption), add the class card-body and add it to the card

  // Create the cardTitle h2, add the class card-title,
  // set the text inside the tag to the "title" parameter of this function
  // and add it to the cardBody

  // Create the cardButton button, add the class card-button,
  // set the text inside the tag to be "Adopt Now"
  // and add it to the cardBody

  // Step 3: Listen for click events on the cardButton button,
  // and run an alert when the button is clicked
}

/* Step 1: Use forEach instead of for-loop to iterate over animalsToAdopt and create cards */
// for (const animal of animalsToAdopt) {
//   createCard(animal);
// }

animalsToAdopt.forEach(function(animal, index){
    createCard(animal);
})