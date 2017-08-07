import { Component, Prop, State } from '@stencil/core';
// import { Ionic } from '@ionic/core';
// import { fakeFetch } from '../../utils';

@Component({
  tag: 'news-list'
})
export class NewsList {

  apiRootUrl: string = 'https://node-hnapi.herokuapp.com';

  @Prop() storyList: any[];
  @State() fakeData: any[] = [];

  comments(story: any) {
    // if (Ionic.isServer) return;

    /*Ionic.controller('loading', { content: 'fetching comments...' }).then(loading => {
      loading.present();

      fakeFetch(`${this.apiRootUrl}/item/${story.id}`).then((data: any) => {
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
    const items = this.storyList.map((story: any) => {
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
