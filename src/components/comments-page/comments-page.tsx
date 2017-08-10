import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'comments-page'
})
export class CommentsPage {

  @Prop() comments: any[];
  @Event() modalDismiss: EventEmitter;

  close(ev) {
    console.log('close');
     // this.modalDismiss.emit('ionDismiss');
     var event = new CustomEvent('ionDismiss', { bubbles: true });
     ev.target.dispatchEvent(event);
  }

  render() {
    if (this.comments) {
      return [
        <ion-header>
          <ion-toolbar color='primary'>
            <ion-button class='close-button' clear slot='start' on-click={() => this.close(event)}>
              <ion-icon slot='icon-only' name='close' style={{ fill: 'white' }} />
            </ion-button>
            <ion-title class='comments-title' slot='end'>
              Comments
          </ion-title>
          </ion-toolbar>
        </ion-header>,

        <ion-content>
          <comments-list commentList={this.comments}></comments-list>
        </ion-content>
      ];
    }
  }
}
