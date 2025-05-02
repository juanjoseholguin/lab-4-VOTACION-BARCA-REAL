import { store, vote } from '../flux/Store';

class CharacterCard extends HTMLElement {
  index: number = 0;

  connectedCallback() {
    this.index = Number(this.getAttribute('data-index'));
    const left = JSON.parse(this.getAttribute('left')!);
    const right = JSON.parse(this.getAttribute('right')!);

    this.innerHTML = `
<style>
  .card {
    display: flex;
    justify-content: space-around;
    background: linear-gradient(135deg, #a50044, #004d98);
    color: white;
    padding: 2rem;
    border-radius: 20px;
    width: 100%;
    max-width: 900px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    gap: 2rem;
  }

  .player {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .player img {
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  button {
    background-color: white;
    color: #004d98;
    font-weight: bold;
    border: none;
    padding: 0.7rem 1.2rem;
    margin-top: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .player img {
  border-radius: 10px;
  margin-bottom: 1rem;
  width: 150px;
  height: 150px;
  object-fit: cover;
}


  button:hover {
    background-color: #ddd;
    transform: scale(1.05);
  }
</style>
<div class="card">
  <div class="player">
    <img src="${left.image}" width="120" />
    <span>${left.name}</span>
    <button class="vote-left">Votar</button>
  </div>
  <div class="player">
    <img src="${right.image}" width="120" />
    <span>${right.name}</span>
    <button class="vote-right">Votar</button>
  </div>
</div>
    `;

    this.querySelector('.vote-left')!.addEventListener('click', () => vote(this.index, 0));
    this.querySelector('.vote-right')!.addEventListener('click', () => vote(this.index, 1));
  }
}

customElements.define('character-card', CharacterCard);