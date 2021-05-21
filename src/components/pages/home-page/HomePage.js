import { LitElement, html } from 'lit-element';

export class HomePage extends LitElement {
  render() {
    return html` <anime-lister id="anime-lister"> </anime-lister> `;
  }
}

customElements.define('home-page', HomePage);
