import { Component, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';


@Component({
  tag: 'jobs-page',
  styleUrl: 'jobs-page.scss'
})
export class jobsPage {

  @Prop() match: any;
  @Prop() history: RouterHistory;

  @State() page: number;

  componentWillLoad() {
    if (this.match.params.pageNum) {
      this.page = parseInt(this.match.params.pageNum);
    } else {
      this.page = 1;
    }
  }

  forward() {
    console.log('updating page');
    this.page = this.page + 1;
    console.log(this.page);
    this.history.push(`/jobs/${this.page}`, {});
  }

  back() {
    console.log('updating page');
    this.page = this.page - 1;
    console.log(this.page);
    this.history.push(`/jobs/${this.page}`, {});
  }

  render() {
    console.log('render');
    return (
      <ion-page class='show-page'>
        <ion-content>
          <list-container pageNum={this.page} type='jobs'></list-container>
        </ion-content>
        <ion-footer>
          <ion-toolbar>
            <ion-buttons slot='start'>
              <ion-button  onClick={() => this.back()} clear color='primary'>
                Prev
              </ion-button>
            </ion-buttons>

            <span class='page-number'>
              page {this.page}
            </span>
            
            <ion-buttons slot='end'>
              <ion-button onClick={() => this.forward()} clear color='primary'>
                Next
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-footer>
      </ion-page>
    );
  }
}