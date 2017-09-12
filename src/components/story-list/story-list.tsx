import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'story-list',
  styleUrl: 'story-list.scss'
})
export class StoryList {

  @Prop() stories: any;

  render() {
    if (this.stories) {
      const stories = this.stories.map((story) => {
        return (
          <ion-item>
            <div class='points' slot='start'>
              {story.points || 0}
            </div>
            <ion-label>
              <h2 class='list-header'>
                <a href={story.url}>{story.title}</a>
              </h2>
              <stencil-route-link url={`/comments/${story.id}`}>
                <button class='comments-text' role='button'>
                  Posted by {story.user} {story.time_ago} | {story.comments_count} comments
                </button>
              </stencil-route-link>
            </ion-label>
          </ion-item>
        )
      });

      return (
        <ion-list>
          {stories}
        </ion-list>
      )
    } else {
      <ion-list>
        {Array.from(Array(10)).map(() =>
          <ion-item>
            <div class='points' slot='start'>
              <ion-skeleton-text width='20px'></ion-skeleton-text>
            </div>
            <ion-label>
              <h2 class='list-header'>
                <ion-skeleton-text width='90%'></ion-skeleton-text>
                <ion-skeleton-text width='85%'></ion-skeleton-text>
              </h2>
              <h3 class='comments-text'>
                <ion-skeleton-text width='60%'></ion-skeleton-text>
              </h3>
            </ion-label>
          </ion-item>
        )}
      </ion-list>
    }
  }
}