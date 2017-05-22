const apiRootUrl = 'https://node-hnapi.herokuapp.com';
let page = 1;
let pageType: string;

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

        .nextButton {
          float: right;
          margin-right: 10px;
        }

        .previousButton {
          margin-left: 10px;
        }

        @media(min-width: 850px) {
          .listWrapper {
            margin-left: 23%;
            margin-right: 23%;
          }
			  }
      </style>

      <div class="listWrapper">
        <ion-list>
        </ion-list>

        <ion-button class="previousButton">Previous</ion-button>
        <ion-button class="nextButton">Next</ion-button>
      </div>
    `;

    shadowRoot.querySelector('.previousButton').addEventListener('click', () => {
      this.previous();
    });
    shadowRoot.querySelector('.nextButton').addEventListener('click', () => {
      this.next();
    });
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

        // tslint:disable-next-line:max-line-length
        Ionic.overlay('modal', { component: 'comments-modal', componentProps: { comments: `${apiRootUrl}/item/${story.id}`, storyId: story.id } }).then((modal: any) => {
          console.log('modal created');

          modal.present().then(() => {
            console.log('modal finished transitioning in, commments: ', modal.componentProps.comments);
          });
        });
      });

      newListItem.appendChild(commentsButton);

      list.appendChild(newListItem);
    });
  }

  private attributeChangedCallback(name: string, oldValue: boolean, newValue: string) {
    if (this.type) {
      fetch(`${apiRootUrl}/${newValue}?page=${page}`).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
        this.initList(data);
      });

      pageType = newValue;
    }
  }

  private previous() {
    page = page--;
    console.log(page--);

    fetch(`${apiRootUrl}/${pageType}?page=${page}`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      this.initList(data);
    });
  }

  private next() {
    page = page++;
    console.log(page++);

    console.log(`${apiRootUrl}/${pageType}?page=${page}`);
    fetch(`${apiRootUrl}/${pageType}?page=${page}`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      this.initList(data);
    });
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
          <ion-button clear class="ask">Ask</ion-button>
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

    shadowRoot.querySelector('.ask').addEventListener('click', () => {
      this.loadStories('ask');
    });
  }

  private loadStories(type: string) {
    const newsList = document.querySelector('news-list');
    newsList.setAttribute('type', type);
  }
}

customElements.define('button-bar', ButtonBar);


// comments-modal component
class CommentsModal extends HTMLElement {
  public comments: string;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        :host {
          background-color: #EDEDED;
        }

        .replyCard {
          width: 80%;
          margin-left: 6rem;
          box-shadow: none;
        }
      </style>

      <ion-header>
        <ion-toolbar>
          <ion-button class="closeButton" clear>
            Close
          </ion-button>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
        </ion-list>
      </ion-content>
    `;

    this.shadowRoot.querySelector('.closeButton').addEventListener('click', (uiEvent) => {
      const ev = new (CustomEvent as any)('ionDismiss', { composed: true, bubbles: true });
      uiEvent.target.dispatchEvent(ev);
    });
  }

  private fetchComments(): Promise<any> {
    return fetch(this.comments).then((response) => {
      return response.json();
    });
  }

  private generateComments(comments: any) {
    const list = this.shadowRoot.querySelector('ion-list');

    while (list.hasChildNodes()) {
      list.removeChild(list.lastChild);
    }

    comments.forEach((story: any) => {
      console.log(story);
      const newListItem = document.createElement('ion-card');

      // card content
      const listItemContent = document.createElement('ion-card-content');

      // posted by
      const postedByDiv = document.createElement('h4');
      const postedByTextNode = document.createTextNode(`Posted by ${story.user} ${story.time_ago}`);
      postedByDiv.appendChild(postedByTextNode);

      listItemContent.appendChild(postedByDiv);

      const commentContent = document.createElement('div');
      commentContent.innerHTML = story.content;

      listItemContent.appendChild(commentContent);

      newListItem.appendChild(listItemContent);

      list.appendChild(newListItem);

      // comment replies
      this.generateLevelComments(newListItem, story.comments);
    });
  }

  private generateLevelComments(rootCard: any, comments: any[]) {
    comments.forEach((story: any) => {
      console.log(story);
      const newListItem = document.createElement('ion-card');
      newListItem.setAttribute('class', 'replyCard');

      // card content
      const listItemContent = document.createElement('ion-card-content');

      // posted by
      const postedByDiv = document.createElement('h4');
      const postedByTextNode = document.createTextNode(`Reply by ${story.user} ${story.time_ago}`);
      // const postedByTextNode = document.createTextNode('secondary comment');
      postedByDiv.appendChild(postedByTextNode);

      listItemContent.appendChild(postedByDiv);

      const commentContent = document.createElement('div');
      commentContent.innerHTML = story.content;

      listItemContent.appendChild(commentContent);

      newListItem.appendChild(listItemContent);

      rootCard.appendChild(newListItem);

    });
  }

  private connectedCallback() {
    this.fetchComments().then((data) => {
      this.generateComments(data.comments);

      /*data.comments.forEach((comment: any) => {
        console.log('inside', comment);
        this.generateComments(comment.comments);
      });*/
    });
  }
}

customElements.define('comments-modal', CommentsModal);
