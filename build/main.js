const apiRootUrl = 'https://node-hnapi.herokuapp.com';
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
    set type(val) {
        if (val) {
            this.setAttribute('type', '');
        }
        else {
            this.removeAttribute('type');
        }
    }
    initList(data) {
        const list = this.shadowRoot.querySelector('ion-list');
        while (list.hasChildNodes()) {
            console.log('im here');
            list.removeChild(list.lastChild);
        }
        data.forEach((story) => {
            window.requestIdleCallback(() => {
                const newListItem = document.createElement('ion-item');
                newListItem.addEventListener('click', () => {
                    window.open(story.url);
                });
                const newListTitle = document.createElement('div');
                newListTitle.style.width = '90%';
                newListTitle.appendChild(document.createTextNode(story.title));
                newListItem.appendChild(newListTitle);
                list.appendChild(newListItem);
            });
        });
    }
    attributeChangedCallback(name, oldValue, newValue) {
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
          position: fixed;
          bottom: 0;
          width: 100%;
        };
      </style>

      <ion-toolbar>
        <ion-button clear class="news">News</ion-button>
        <ion-button clear class="show">Show</ion-button>
        <ion-button clear class="jobs">Jobs</ion-button>
      </ion-toolbar>
    `;
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
    connectedCallback() {
        console.log(document.querySelector('news-list'));
    }
    loadStories(type) {
        const newsList = document.querySelector('news-list');
        newsList.setAttribute('type', type);
    }
}
customElements.define('button-bar', ButtonBar);
