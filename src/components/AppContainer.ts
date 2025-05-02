import { store } from '../flux/Store';

class AppContainer extends HTMLElement {
  constructor() {
    super();
    store.subscribe(() => this.render());
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const characters = store.getState().characters;
    this.shadowRoot!.innerHTML = `
      <style>
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          gap: 2rem;
        }
      </style>
      <div class="container">
        ${characters
          .map(
            (pair, index) => `
            <character-card data-index="${index}" left='${JSON.stringify(pair[0])}' right='${JSON.stringify(pair[1])}'></character-card>
          `
          )
          .join('')}
        <vote-statistics></vote-statistics>
      </div>
    `;
  }
}

customElements.define('app-container', AppContainer);
