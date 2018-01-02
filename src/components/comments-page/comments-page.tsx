import { Component, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { LoadingController } from '@ionic/core';

@Component({
  tag: 'comments-page',
  styleUrl: 'comments-page.scss'
})
export class CommentsPage {

  @Prop() match: any;
  @Prop() history: RouterHistory;
  @Prop({ connect: 'ion-loading-controller' }) loadingCtrl: LoadingController;

  @State() comments: any[] = [];

  apiRootUrl: string = 'https://hnpwa.com/api/v0';

  componentWillLoad() {
    if (this.match && this.match.params.id) {
      fetch(`${this.apiRootUrl}/item/${this.match.params.id}.json`).then((response: any) => {
        return response.json()
      }).then((data) => {
        this.comments = data.comments;
      });
    }
  }

  close() {
    console.log(this.history);
    this.history.goBack();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-title class='comments-title' slot='start'>
            Comments
          </ion-title>

          <ion-buttons slot='end'>
            <ion-button class='close-button' clear onClick={() => this.close()}>
              <ion-icon slot='icon-only' name='close' style={{ fill: 'white' }} />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <comments-list commentList={this.comments}></comments-list>
      </ion-content>
    ];
  }
}
