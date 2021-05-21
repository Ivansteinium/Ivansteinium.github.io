import { LitElement, html, css } from 'lit-element';
import Fontawesome from 'lit-fontawesome';

export class AppCard extends LitElement {
  static get properties() {
    return {
      cardTitle: { type: String },
      cardSubTitle: { type: String },
      cardDescription: { type: String },
      cardActionLink: { type: String },
      cardImageUrl: { type: String },
    };
  }

  static get styles() {
    return [
      Fontawesome,
      css`
        h1,
        h2,
        h3,
        h4 {
          margin: 0;
        }

        .card {
          padding-bottom: 10px;
          width: 300px;
          height: 350px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .card-image {
          width: 100%;
          object-fit: cover;
          height: 150px;
        }

        .card-header-text {
          padding: 0 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .card-title {
          display: inline;
          font-size: 20px;
          font-weight: 700;
          overflow: hidden;
        }

        .card-subtitle {
          display: block;
          font-size: 13px;
          font-weight: 500;
        }

        .card-content {
          padding: 0 5px;
          height: 100px;
          font-size: 14px;
          font-weight: bold;

          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-content p {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
          padding: 0 5px;
        }

        .card-footer a {
          padding: 10px 15px;
          text-decoration: none;
          text-transform: uppercase;
          color: black;
        }

        .card-footer a:hover {
          color: #292929;
          background-color: rgba(81, 81, 81, 0.3);
        }
      `,
    ];
  }

  render() {
    return html`
      <main class="card">
        <header class="card-header">
          <img class="card-image" src=${this.cardImageUrl} alt="" />

          <div class="card-header-text">
            <h2 title=${this.cardTitle} class="card-title">
              ${this.cardTitle}
            </h2>
            <h3 title=${this.cardSubTitle} class="card-subtitle">
              ${this.cardSubTitle}
            </h3>
          </div>
        </header>

        <section class="card-content">
          <p>${this.cardDescription}</p>
        </section>

        <footer class="card-footer">
          <a href=${this.cardActionLink}>SEE MORE</a>
        </footer>
      </main>
    `;
  }
}

customElements.define('app-card', AppCard);
