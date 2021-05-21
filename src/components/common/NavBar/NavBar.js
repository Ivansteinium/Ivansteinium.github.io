import { css, html, LitElement } from 'lit-element';

export class NavBar extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
    };
  }

  static get styles() {
    return css`
      ul {
        position: fixed;
        width: 100%;
        height: 50px;
        list-style-type: none;
        margin: 0 50px 0 0;
        padding-top: 5px;
        padding-bottom: 5px;
        box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.75);
        background-color: white;
      }

      li {
        float: left;
      }

      .logo {
        position: relative;
        left: -40px;
      }

      .google-sign-in {
        float: right;
        position: relative;
        right: 55px;
        top: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.items = [
      { name: 'Link 1', link: '#' },
      { name: 'Link 2', link: '#' },
    ];
  }

  render() {
    return html`
      <nav>
        <ul>
          <li class="logo-container">
            <img class="logo" src="assets/images/logo.png" alt="" />
          </li>
          <li class="google-sign-in">
            <slot></slot>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
