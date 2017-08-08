import { Component, State, Element } from '@stencil/core';

@Component({
  tag: 'news-container',
  styleUrl: '../main.scss'
})
export class NewsContainer {
  
  @Element() el: HTMLElement;
  page: number;
  pageType: string;
  apiRootUrl: string = 'https://node-hnapi.herokuapp.com';
  
  @State() stories: any[];

  ionViewDidLoad() {
    // call to firebase function for first view
    this.getStories('news', 1);
  }


  getStories(type: string, pageNum: number = 1) {
    this.page = pageNum;
    this.pageType = type;

    const fakeFetch: any = this.el.querySelector('fake-fetch');

    fakeFetch.fetch(`${this.apiRootUrl}/${this.pageType}?page=${this.page}`).then((data) => {
      this.stories = data;
    }).catch((err) => {
      console.error('Could not load data', err);
    });
  }

  render() {
    console.log('rendering');

    return [
      <ion-header mdHeight='56px' iosHeight='61px'>
        <ion-toolbar color='primary'>

          <ion-buttons slot='left'>
            <ion-icon name='ionic'></ion-icon>
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

      (this.stories !== undefined) ?
        <ion-content>
          <news-list storyList={this.stories}>
          </news-list>
        </ion-content>
        : null,

      <ion-footer>
        <ion-toolbar class='pager'>
          <ion-buttons slot='start'>
            <ion-button
              class={{ 'no-back': this.page === 1, 'yes-back': this.page > 1 }}
              clear={true}
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
      </ion-footer>,
      
      <fake-fetch></fake-fetch>
    ];
  }
}
