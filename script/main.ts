const apiRootUrl = 'https://node-hnapi.herokuapp.com';


// todo: convert these vanilla v1 web components
// into ionic-core web components once our compiler
// is ready to use on external web components

// Also, remember all this code is still a work in progress
// and is kinda ugly, but hey, it works
class NewsList extends HTMLElement {

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        :host {
        };
      </style>

      <ion-list>
      </ion-list>
    `;
  }

  static get observedAttributes() {
    return ['type'];
  }

  get type() {
    return this.hasAttribute('type');
  }

  set type(val: boolean) {
    if (val) {
      this.setAttribute('type', '');
    } else {
      this.removeAttribute('type');
    }
  }

  private initList(data: any) {
    const list = this.shadowRoot.querySelector('ion-list');

    // clear list so we can re-init if needed
    while (list.hasChildNodes()) {
      console.log('im here');
      list.removeChild(list.lastChild);
    }

    data.forEach((story: any) => {
      (window as any).requestIdleCallback(() => {
        const newListItem = document.createElement('ion-item');

        newListItem.addEventListener('click', () => {
          window.open(story.url);
        });

        // item title
        const newListTitle = document.createElement('div');

        newListTitle.appendChild(document.createTextNode(story.title));
        newListItem.appendChild(newListTitle);

        // item points
        /*const newListPoints = document.createElement('div');
        newListPoints.className = 'points';
        newListPoints.appendChild(document.createTextNode(story.points));
        newListItem.appendChild(newListPoints);*/

        list.appendChild(newListItem);
      });
    });
  }

  private attributeChangedCallback(name: string, oldValue: boolean, newValue: boolean) {
    if (this.type) {
      fetch(`${apiRootUrl}/${newValue}?page=1`).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
        this.initList(data);
      });
    }
  }
}

customElements.define('news-list', NewsList);


class ButtonBar extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        :host {

        };
      </style>

        <ion-toolbar>
          <ion-button clear class="news">News</ion-button>
          <ion-button clear class="show">Show</ion-button>
          <ion-button clear class="jobs">Jobs</ion-button>
        </ion-toolbar>
    `;


    // init event listeners
    shadowRoot.querySelector('.news').addEventListener('click', () => {
      this.loadStories('news');
    });

    shadowRoot.querySelector('.show').addEventListener('click', () => {
      this.loadStories('show');
    });

    shadowRoot.querySelector('.jobs').addEventListener('click', () => {
      this.loadStories('jobs');
    });
  }

  private connectedCallback() {
    console.log(document.querySelector('news-list'));
  }

  private loadStories(type: string) {
    const newsList = document.querySelector('news-list');
    newsList.setAttribute('type', type);
  }
}

customElements.define('button-bar', ButtonBar);
