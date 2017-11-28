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
              <ion-icon name='ionic'></ion-icon>
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
          <stencil-route url={['/', '/news/:pageNum', '/news/:pageNum/']} component='news-page'>
          </stencil-route>

          <stencil-route url={['/show/:pageNum', '/show/:pageNum/']} component='show-page'>
          </stencil-route>

          <stencil-route url={['/jobs/:pageNum', '/jobs/:pageNum/']} component='jobs-page'>
          </stencil-route>

          <stencil-route url={['/ask/:pageNum', '/ask/:pageNum/']} component='ask-page'>
          </stencil-route>

          <stencil-route url='/comments/:id' component='comments-page'>
          </stencil-route>
        </stencil-router>
      </ion-app>
    );
  }
}