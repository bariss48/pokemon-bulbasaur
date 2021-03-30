// const cardsElement = document.getElementById('cards');
const cardsElement = document.querySelector('#cards');

const apiUrl = 'https://api.pokemontcg.io/v1/cards?name=bulbasaur';

async function getBulbasaurCards() {
  const response = await fetch(apiUrl);
  const json = await response.json();
  json.cards.forEach((card) => {
    const image = document.createElement('img');
    //const name = document.createElement('name');
   // const id = document.createElement('id');
    image.src = card.imageUrl;
   // name.textContent = card.name;
   // id.textContent = card.id;
    cardsElement.append(image);
   // cardsElement.append(name);
   // cardsElement.append(id);
   // console.log(name);
  });
}
getBulbasaurCards();
