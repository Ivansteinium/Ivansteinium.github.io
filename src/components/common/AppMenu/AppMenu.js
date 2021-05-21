import { LitElement, html, css } from 'lit-element';
import Fontawesome from 'lit-fontawesome';

export class AppMenu extends LitElement {
  static get styles() {
    return [
      Fontawesome,
      css`
        .dropdown-button {
          color: black;
          padding: 4px 8px;
          font-size: 32px;
          border: none;
          cursor: pointer;
        }

        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          font-size: 16px;
          min-width: 100px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
        }

        .dropdown-content a {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }

        .dropdown-content a:hover {
          background-color: rgba(179, 179, 179, 0.47);
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        .dropdown:hover .dropdown-button {
          background-color: rgba(184, 184, 184, 0.28);
        }
      `,
    ];
  }

  static get properties() {
    return {
      menuItems: { type: Array },
    };
  }

  render() {
    return html`
      <div class="dropdown">
        <button class="dropdown-button"><i class="fas fa-bars"></i></button>

        <div class="dropdown-content">
          ${this.menuItems.map(
            item => html`<a href=${item.link}>${item.name}</a>`
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('app-menu', AppMenu);
