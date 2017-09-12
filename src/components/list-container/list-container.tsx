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

  @State() stories: any[];

  apiRootUrl: string = 'https://hnpwa.com/api/v0';

  componentWillLoad() {
    // fetch without loading for the first run
    // so we dont pull in the loading controller 
    // for the first view
    fetch(`${this.apiRootUrl}/${this.type}.json?page=${this.pageNum}`).then(rsp => {
      return rsp.json();

    }).then(data => {
      if (data.length !== 0) {
        this.stories = data;
      }

    }).catch((err) => {
      console.error('Could not load data', err);
    });
  }

  @PropDidChange('pageNum')
  fetchNew() {
    this.loadingCtrl.create({ content: 'fetching articles...' }).then((loading) => {
      loading.present().then(() => {
        fetch(`${this.apiRootUrl}/${this.type}.json?page=${this.pageNum}`).then(rsp => {
          return rsp.json();

        }).then(data => {
          if (data.length !== 0) {
            this.stories = data;
            loading.dismiss();
            console.log(this.stories)
          }

        }).catch((err) => {
          console.error('Could not load data', err);
          loading.dismiss();
        });
      })
    })
  }

  render() {
    return [
      <story-list stories={this.stories}></story-list>
    ];
  }
}