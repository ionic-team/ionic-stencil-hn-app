const apiRootUrl = 'https://node-hnapi.herokuapp.com';

declare var Ionic: any;


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
        .card-header {
          white-space: normal;
        }
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
      list.removeChild(list.lastChild);
    }

    data.forEach((story: any) => {
      (window as any).requestIdleCallback(() => {
        const newListItem = document.createElement('ion-card');

        // card header
        const listItemHeader = document.createElement('ion-card-header');
        const listItemTitle = document.createElement('ion-card-title');

        listItemTitle.appendChild(document.createTextNode(story.title));
        listItemHeader.appendChild(listItemTitle);

        newListItem.appendChild(listItemHeader);

        // card content
        const listItemContent = document.createElement('ion-card-content');

        // posted by
        const postedByDiv = document.createElement('div');
        const postedByTextNode = document.createTextNode(`Posted by ${story.user} ${story.time_ago}`);
        postedByDiv.appendChild(postedByTextNode);

        listItemContent.appendChild(postedByDiv);

        // points
        if (story.points !== null) {
          const pointsDiv = document.createElement('div');
          const pointsTextNode = document.createTextNode(`${story.points} points`);
          pointsDiv.appendChild(pointsTextNode);

          listItemContent.appendChild(pointsDiv);
        }

        newListItem.appendChild(listItemContent);

        // visit button
        const visitButton = document.createElement('ion-button');
        visitButton.appendChild(document.createTextNode('visit'));
        visitButton.setAttribute('clear', 'true');

        visitButton.addEventListener('click', () => {
          window.open(story.url);
        });

        newListItem.appendChild(visitButton);

        // comments button
        const commentsButton = document.createElement('ion-button');
        commentsButton.appendChild(document.createTextNode('comments'));
        commentsButton.setAttribute('clear', 'true');

        commentsButton.addEventListener('click', () => {

          Ionic.modal.create('comments-modal').then((modal: any) => {
            console.log('modal created');

            const commentsModal = document.querySelector('comments-modal');
            commentsModal.setAttribute('comments', `${apiRootUrl}/item/${story.id}`);

            modal.present().then(() => {
              console.info('modal open');
            });
          });
        });

        newListItem.appendChild(commentsButton);

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


// button-bar component
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


// comments-modal component
class CommentsModal extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        :host {
          background: white;
        }
      </style>

      <ion-header>
        <ion-toolbar>
          <ion-button class="closeButton" clear>
            close
          </ion-button>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
        </ion-list>
      </ion-content>
    `;

    this.shadowRoot.querySelector('.closeButton').addEventListener('click', (uiEvent) => {
      const ev = new (CustomEvent as any)('ionModalDismiss', { composed: true, bubbles: true });
      uiEvent.target.dispatchEvent(ev);
    });
  }

  static get observedAttributes() {
    return ['comments'];
  }

  get comments() {
    return this.hasAttribute('comments');
  }

  set comments(val: boolean) {
    if (val) {
      this.setAttribute('comments', '');
    } else {
      this.removeAttribute('comments');
    }
  }

  private attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log(newValue);
    fetch(newValue).then((response) => {
      return response.json();
    }).then((itemData: any) => {
      const list = this.shadowRoot.querySelector('ion-list');

      while (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
      }

      itemData.comments.forEach((story: any) => {
        (window as any).requestIdleCallback(() => {
          const newListItem = document.createElement('ion-card');

          // card content
          const listItemContent = document.createElement('ion-card-content');

          // posted by
          const postedByDiv = document.createElement('div');
          const postedByTextNode = document.createTextNode(`Posted by ${story.user} ${story.time_ago}`);
          postedByDiv.appendChild(postedByTextNode);

          listItemContent.appendChild(postedByDiv);

          const commentContent = document.createElement('div');
          commentContent.innerHTML = story.content;

          listItemContent.appendChild(commentContent);

          newListItem.appendChild(listItemContent);

          list.appendChild(newListItem);
        });
      });
    });
  }
}

customElements.define('comments-modal', CommentsModal);
