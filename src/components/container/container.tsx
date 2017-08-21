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

  ionViewWillLoad() {
    if (this.isServer) {
      return;
    }

    this.page = 1;
    this.pageType = 'news';

    this.firstFetch('data.json').then((data) => {
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
        }

      }).catch((err) => {
        console.error('Could not load data', err);
      });
    }
  }

  render() {

    return (
      <ion-page>
        <ion-header mdHeight='56px' iosHeight='61px'>
          <ion-toolbar color='primary'>

            <ion-buttons slot='left'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 164.3c-50.6 0-91.7 41.1-91.7 91.7s41.1 91.7 91.7 91.7 91.7-41.1 91.7-91.7-41.1-91.7-91.7-91.7z" /><circle cx="394" cy="124.6" r="43.8" /><path d="M445.3 169.8c-7.4 8.4-16.9 15-27.6 19 8.6 20.7 13.4 43.4 13.4 67.2 0 96.6-78.6 175.2-175.2 175.2S80.7 352.6 80.7 256 159.3 80.8 255.9 80.8c26.9 0 52.3 6.1 75.1 16.9 4.5-10.5 11.5-19.6 20.3-26.6C322.8 56.4 290.4 48 256 48 141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208c0-30.7-6.7-59.9-18.7-86.2z" /></svg>
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
        </ion-header>

        <ion-content>
          <news-list storyList={this.stories}>
          </news-list>
        </ion-content>

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
      </ion-page>
    );
  }
}
