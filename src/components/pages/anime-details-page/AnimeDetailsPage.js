import { LitElement, html, css } from 'lit-element';

export class AnimeDetailsPage extends LitElement {
  async onBeforeEnter(context) {
    const { id } = context.params;
    const response = await fetch(
      `https://anime-test.herokuapp.com/animedata/${id}`
    );
    const [data] = await response.json();

    // this.id = data.animeid;
    this.imageUrl = data.imageurl;
    this.title = data.title;
    this.subtitle = data.studio;
    this.description = data.description;
    this.backgroundUrl = data.backgroundurl;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        position:absolute;
        padding-top: 75px;
      }

      .img-background {
        height: 100%;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(8px);
        -webkit-filter: blur(8px);
        background-image: var(--bgimg);

      }

      .page-content {
        position: absolute;
        max-width: 100%;
        margin: 10px 50px;
      }
    `;
  }

  render() {
    return html`
      <div
        style="--bgimg: url(${this.backgroundUrl})"
        class="img-background"
      ></div>
      <div class="page-content">
        <anime-details
          id = ${this.id}
          imageUrl=${this.imageUrl}
          title=${this.title}
          subTitle=${this.subtitle}
          description=${this.description}
        >
        </anime-details>
      </div>
    `;
  }
}

customElements.define('anime-details-page', AnimeDetailsPage);
