import { LitElement, html, css } from 'lit-element';
import Fontawesome from 'lit-fontawesome';

export class AppAnimeDetails extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      subTitle: { type: String },
      description: { type: String },
      imageUrl: { type: String },
    };
  }

  constructor() {
    super();
    console.log(this);
  }

  static get styles() {
    return [
      Fontawesome,
      css`
        .flex-container {
          display: flex;
          background-color: lightgray;
          margin-top: 10px;
          width: 100%;
          opacity: 0.9;
          margin-top: 75px;
        }
        .img-details {
          height: auto;
          margin: 10px;
          width: auto;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .div-layout {
          margin-left: 5px;
          margin-right: 100px;
        }

        h1.title {
          font-size: 50px;

        }

        h2.subtitle {
          font-size: 40px;
        }

        p.description {
          margin-top: 10px;
          font-size: 30px;
          line-height: 30px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="flex-container">
        <div>
          <img class="img-details" src=${this.imageUrl} alt="" />
        </div>
        <div class="div-layout">
          <h1 class="title">${this.title}</h1>
          <h2 class="subtitle">${this.subTitle}</h2>
          <p class="description">${this.description}</p>
          <rate-anime id = ${this.id}></rate-anime>
        </div>
      </div>
    `;
  }
}

customElements.define('app-anime-details', AppAnimeDetails);
