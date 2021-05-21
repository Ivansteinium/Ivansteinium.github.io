/* eslint-disable class-methods-use-this */
/* eslint-disable lit-a11y/click-events-have-key-events */
import { css, html, LitElement } from 'lit-element';
import Fontawesome from 'lit-fontawesome';
import { AnimeController } from '../../controllers/animeController.js';

const createAnimeModel = responseObject => ({
  cardTitle: responseObject.title,
  cardSubTitle: responseObject.studio,
  cardDescription: responseObject.description,
  cardActionLink: `anime/${responseObject.animeid}`,
  cardImageUrl: responseObject.imageurl,
  cardRating: responseObject.Rating ?? 0,
});

export class AnimeLister extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      cards: { type: Array },
      filterIcons: { type: Object },
      sortOrder: { type: String },
    };
  }

  static get styles() {
    return [
      Fontawesome,
      css`
        :host {
          display: flex;
          flex-direction: column;
          max-width: 100%;
          padding-top: 75px;
          padding-bottom: 50px;
        }

        @media screen and (max-width: 1920px) {
          :host {
            margin: 0 200px;
          }
        }

        @media screen and (max-width: 600px) {
          :host {
            margin: 0 10vw;
          }
        }

        main {
          flex-grow: 1;
        }

        .search-and-filter-container {
          margin-bottom: 30px;
        }

        .grid-container {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-column-gap: 50px;
          grid-row-gap: 50px;
        }

        .sorting-container {
          position: relative;
          left: -35px;
          list-style-type: none;
          display: flex;
        }

        .sorting-item {
          user-select: none;
          cursor: pointer;
        }

        .sorting-item i {
          padding-right: 5px;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.title = 'AnimeLister';
    AnimeController.get().then(animes => {
      this.cards = animes.map(anime => createAnimeModel(anime)).sort((a, b) => {
        if (a.cardTitle < b.cardTitle) return -1;
        if (a.cardTitle > b.cardTitle) return 1;
        return 0;
      })
    });
    this.sortOrder = 'Descending';
    this.filterIcons = {
      descending: 'chevron-down',
      ascending: 'chevron-up',
    };
    this.sortIcon = this.filterIcons.descending;
    this.addEventListener('search', e => {
      this.onSearch(e.detail.searchTerm);
    });
  }

  onSearch(searchTerm) {
    if (!searchTerm.length) {
      AnimeController.get().then(animes => {
        this.cards = animes.map(anime => createAnimeModel(anime));
      });
      return;
    }
    AnimeController.get().then(animes => {
      this.cards = animes
        .filter(anime =>
          anime.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map(anime => createAnimeModel(anime));
    });
  }

  render() {
    return html`
      <body>
        <section class="search-and-filter-container">
          <app-search-bar></app-search-bar>

          <ul class="sorting-container">
            <li class="sorting-item" @click="${() => this.handleSortEvent()}">
              <i class="fas fa-${this.sortIcon}"></i>
              Name
            </li>
          </ul>
        </section>

        <section class="grid-container">
          ${this.cards.map(
            card =>
              html`
                <app-card
                  cardTitle="${card.cardTitle}"
                  cardSubTitle="${card.cardSubTitle}"
                  cardDescription="${card.cardDescription}"
                  cardActionLink="${card.cardActionLink}"
                  cardImageUrl="${card.cardImageUrl}"
                ></app-card>
              `
          )}
        </section>
      </body>
    `;
  }

  handleSortEvent() {
    this.sortOrder =
      this.sortOrder === 'Descending' ? 'Ascending' : 'Descending';
    this.sortIcon =
      this.sortOrder === 'Descending'
        ? this.filterIcons.ascending
        : this.filterIcons.descending;

    this.cards = this.cards.sort((a, b) => {
      if (this.sortOrder === 'Ascending') {
        if (a.cardTitle < b.cardTitle) return -1;
        if (a.cardTitle > b.cardTitle) return 1;
        return 0;
      } else {
        if (a.cardTitle > b.cardTitle) return -1;
        if (a.cardTitle < b.cardTitle) return 1;
        return 0;
      }
    });
  }
}

customElements.define('anime-lister', AnimeLister);
