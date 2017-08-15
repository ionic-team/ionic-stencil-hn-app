import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'comments-page',
  styleUrl: 'comments-page.scss'
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
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-buttons slot='end'>
            <ion-button class='close-button' clear on-click={() => this.close(event)}>
              <ion-icon slot='icon-only' name='close' style={{ fill: 'white' }} />
            </ion-button>
          </ion-buttons>
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
