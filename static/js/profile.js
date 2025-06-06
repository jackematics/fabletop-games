const profileUsernameEl = document.getElementById("profile-username");

const adjectives = [
  "Tasty",
  "Sweet",
  "Sour",
  "Spicy",
  "Umami",
  "Nutty",
  "Bitter",
  "Savoury",
  "Earthy",
  "Fruity",
  "Salty",
  "Bittersweet",
  "Rich",
  "Acidic",
  "Robust",
  "Chalky",
  "Bland",
  "Buttery",
  "Herbal",
  "Smoky",
  "Tangy",
  "Creamy",
  "Acrid",
  "Burnt",
  "Caustic",
  "Delicate",
  "Jammy",
  "Pungent",
  "Tart",
  "Piquant",
  "Medicinal",
  "Lipid",
  "Chemical",
  "Astringent",
];

const cheeses = [
  "Gouda",
  "Brie",
  "Camembert",
  "Feta",
  "Mozzarella",
  "Cheddar",
  "Edam",
  "Cottage",
  "Emmental",
  "Parmesan",
  "Blue",
  "Burrata",
  "Cotija",
  "Cream",
  "Gruyere",
  "Manchego",
  "Mascarpone",
  "Monterey",
  "Provolone",
  "Ricotta",
  "Swiss",
  "Asiago",
  "Burgos",
  "Comte",
  "Paneer",
  "Khoa",
  "Feta",
  "Graviera",
  "Oscypek",
  "Stilton",
  "Halloumi",
  "Labneh",
  "Muenster",
  "Quesillo",
];

function initProfile() {
  let username = localStorage.getItem("username");

  if (!username) {
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomCheese = cheeses[Math.floor(Math.random() * cheeses.length)];

    username = `${randomAdjective} ${randomCheese}`;
    localStorage.setItem("username", username);
  }

  profileUsernameEl.textContent = username;
}

initProfile();
