import { Component, Prop, State } from '@stencil/core';
import { Ionic } from '@ionic/core';

@Component({
  tag: 'news-list'
})
export class NewsList {

  apiRootUrl: string = 'https://node-hnapi.herokuapp.com';

  @Prop() type: any[];
  @State() fakeData: any[] = [];


  fakeFetch(url: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.addEventListener('load', function () {
        resolve(JSON.parse(this.responseText));
      });

      request.addEventListener('error', function () {
        reject(`error: ${this.statusText} / ${this.status}`);
      });

      request.open('GET', url, true);
      request.send();
    });
  }

  comments(story: any) {
    // if (Ionic.isServer) return;

    /*Ionic.controller('loading', { content: 'fetching comments...' }).then(loading => {
      loading.present();

      this.fakeFetch(`${this.apiRootUrl}/item/${story.id}`).then((data: any) => {
        setTimeout(() => {
          loading.dismiss().then(() => {
            Ionic.controller('modal', { component: 'comments-page', componentProps: { comments: data.comments, storyId: story.id } }).then(modal => {
              console.log('modal created');

              modal.present().then(() => {
                console.log('modal finished transitioning in, commments: ', modal.componentProps.comments);
              });
            });
          });
        }, 300);
      });

    });*/
  }

  render() {
    const items = this.type.map((story: any) => {
      return (
        <ion-item>
          <div class='points' slot='start'>
            {story.points || 0}
          </div>
          <ion-label>
            <h2 class='list-header'>
              <a href={story.url}>{story.title}</a>
            </h2>
            <h3 class='comments-text' onClick={() => this.comments(story)}>
              Posted by {story.user} {story.time_ago} | {story.comments_count} comments
            </h3>
          </ion-label>
        </ion-item>
      )
    });

    return (
      <ion-list>
        {items}
      </ion-list>
    )
  }
}
