import { Component, Prop, PropDidChange, State } from '@stencil/core';
import { LoadingController } from '@ionic/core';


@Component({
  tag: 'list-container',
  styleUrl: 'list-container.scss'
})
export class NewsPage {

  @Prop() pageNum: number;
  @Prop() type: string;
  @Prop({ connect: 'ion-loading-controller' }) loadingCtrl: LoadingController;
  @Prop({ context: 'isServer' }) private isServer: boolean;

  @State() stories: any[];

  apiRootUrl: string = 'https://node-hnapi.herokuapp.com';

  componentWillLoad() {
    // fetch without loading for the first run
    // so we dont pull in the loading controller 
    // for the first view
    console.log('fetching');

    if (!this.isServer) {
      fetch(`${this.apiRootUrl}/${this.type}?page=${this.pageNum}`).then(rsp => {
        return rsp.json();

      }).then(data => {
        console.log('have data', data);
        this.stories = data;

      }).catch((err) => {
        console.error('Could not load data', err);
      });
    }
  }

  @PropDidChange('pageNum')
  fetchNew() {
    fetch(`${this.apiRootUrl}/${this.type}?page=${this.pageNum}`).then(rsp => {
      return rsp.json();
    }).then(data => {
      if (data.length !== 0) {
        this.stories = data;
      }

    }).catch((err) => {
      console.error('Could not load data', err);
    });
  }

  render() {
    return [
      <story-list stories={this.stories}></story-list>
    ];
  }
}