import { Component } from '@stencil/core';


@Component({
  tag: 'ionic-hn',
  styleUrl: 'ionic-hn.scss'
})
export class IonicHn {

  render() {
    return (
      <ion-app>
        <ion-header>
          <ion-toolbar color='primary'>
            <ion-buttons slot='start'>
              <svg id='ionic-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 164.3c-50.6 0-91.7 41.1-91.7 91.7s41.1 91.7 91.7 91.7 91.7-41.1 91.7-91.7-41.1-91.7-91.7-91.7z" /><circle cx="394" cy="124.6" r="43.8" /><path d="M445.3 169.8c-7.4 8.4-16.9 15-27.6 19 8.6 20.7 13.4 43.4 13.4 67.2 0 96.6-78.6 175.2-175.2 175.2S80.7 352.6 80.7 256 159.3 80.8 255.9 80.8c26.9 0 52.3 6.1 75.1 16.9 4.5-10.5 11.5-19.6 20.3-26.6C322.8 56.4 290.4 48 256 48 141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208c0-30.7-6.7-59.9-18.7-86.2z" /></svg>
            </ion-buttons>

            <div class='tabs-bar'>
              <stencil-route-link url='/news/1' urlMatch={['/', '/news/:pageNum', '/news/:pageNum/']} activeClass='active' exact={true}>
                <ion-button
                  class={{
                    'header-button': true,
                    'first-button': true,
                  }}
                  clear>
                  News
                </ion-button>
              </stencil-route-link>

              <stencil-route-link url='/show/1' activeClass='active' >
                <ion-button
                  class={{
                    'header-button': true,
                  }}
                  clear>
                  Show
                </ion-button>
              </stencil-route-link>

              <stencil-route-link url='/jobs/1' activeClass='active'>
                <ion-button
                  class={{
                    'header-button': true
                  }}
                  clear>
                  Jobs
                </ion-button>
              </stencil-route-link>

              <stencil-route-link url='/ask/1' activeClass='active'>
                <ion-button
                  class={{
                    'header-button': true
                  }}
                  clear>
                  Ask
                </ion-button>
              </stencil-route-link>
            </div>
          </ion-toolbar>
        </ion-header>

        <stencil-router id='router'>
          <stencil-route url={['/', '/news/:pageNum', '/news/:pageNum/']} component='news-page' exact={true}>
          </stencil-route>

          <stencil-route url='/show/:pageNum' component='show-page'>
          </stencil-route>

          <stencil-route url='/jobs/:pageNum' component='jobs-page'>
          </stencil-route>

          <stencil-route url='/ask/:pageNum' component='ask-page'>
          </stencil-route>

          <stencil-route url='/comments/:id' component='comments-page'>
          </stencil-route>
        </stencil-router>
      </ion-app>
    );
  }
}