import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'news-container',
  styleUrl: 'container.scss'
})
export class NewsContainer {

  @Element() el: HTMLElement;
  page: number;
  pageType: string;
  apiRootUrl: string = 'https://node-hnapi.herokuapp.com';

  @Prop({ context: 'isServer' }) private isServer: boolean;

  @State() stories: any;

  ionViewDidLoad() {
    if (this.isServer) {
      return;
    }
    // call to firebase function for first view
    // this is only for production
    this.page = 1;
    this.pageType = 'news';

    // un-comment for prod
    /*this.firstFetch('/hn').then((data) => {
      console.log(data);
      this.stories = data;
    });*/

    this.firstFetch(`${this.apiRootUrl}/${this.pageType}?page=${this.page}`).then((data) => {
      this.stories = data;
    })
  }

  firstFetch(url: string) {
    // This method can be removed once
    // this issue https://bugs.chromium.org/p/chromium/issues/detail?id=652228
    // has been fixed and deployed to stable chrome

    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.onerror = reject;
      request.onload = () => resolve(
        JSON.parse(request.responseText)
      )
      request.open('get', url);
      request.send();
    })
  }


  getStories(type: string, pageNum: number = 1) {
    if (type === 'news' && pageNum === 10) {
      return;
    }

    if (pageNum >= 1) {
      this.pageType = type;

      fetch(`${this.apiRootUrl}/${this.pageType}?page=${pageNum}`).then(rsp => {
        return rsp.json();

      }).then(data => {
        if (data.length !== 0) {
          this.page = pageNum;
          this.stories = data;
          console.log(data);
        }

      }).catch((err) => {
        console.error('Could not load data', err);
      });
    }
  }

  render() {

    return [
      <ion-header mdHeight='56px' iosHeight='61px'>
        <ion-toolbar color='primary'>

          <ion-buttons slot='left'>
            <ion-icon mode='md' name='ionic'></ion-icon>
          </ion-buttons>

          <div class='tabs-bar'>
            <ion-button
              class={{
                'header-button': true,
                'first-button': true,
                'header-button-selected': this.pageType === 'news'
              }}
              clear
              onClick={() => this.getStories('news', 1)}
            >
              News
              </ion-button>
            <ion-button
              class={{
                'header-button': true,
                'header-button-selected': this.pageType === 'show'
              }}
              clear
              onClick={() => this.getStories('show', 1)}
            >
              Show
              </ion-button>
            <ion-button
              class={{
                'header-button': true,
                'header-button-selected': this.pageType === 'jobs'
              }}
              clear
              onClick={() => this.getStories('jobs', 1)}
            >
              Jobs
              </ion-button>
            <ion-button
              class={{
                'header-button': true,
                'header-button-selected': this.pageType === 'ask'
              }}
              clear
              onClick={() => this.getStories('ask', 1)}
            >
              Ask
              </ion-button>
          </div>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <news-list storyList={this.stories}>
        </news-list>
      </ion-content>,

      <ion-footer>
        <ion-toolbar class='pager'>
          <ion-buttons slot='start'>
            <ion-button
              class={{ 'no-back': this.page === 1, 'yes-back': this.page > 1 }}
              clear={true}
              disabled={this.page === 1}
              onclick={() => this.getStories(this.pageType, this.page - 1)}
            >
              prev
              </ion-button>
          </ion-buttons>
          <span class='page-number'>
            page {this.page}
          </span>
          <ion-buttons slot='end'>
            <ion-button
              color='primary'
              clear={true}
              onclick={() => this.getStories(this.pageType, this.page + 1)}
            >
              next
              </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-footer>
    ];
  }
}
