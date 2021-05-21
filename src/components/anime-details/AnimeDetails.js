import { LitElement, html, css } from 'lit-element';

export class AnimeDetails extends LitElement {
  static get properties() {
    return {
      id : { type: Number },
      title: { type: String },
      subTitle: { type: String },
      description: { type: String },
      imageUrl: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'AnimeDetails';
    this.subTitle = 'Default Subtitle';
    this.description =
      'Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie';
    this.imageUrl =
      'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933';
  }

  render() {
    return html`
      <div>
        <app-anime-details
          title=${this.title}
          subTitle=${this.subTitle}
          description=${this.description}
          imageUrl=${this.imageUrl}
        ></app-anime-details>
      </div>
    `;
  }
}

customElements.define('anime-details', AnimeDetails);
