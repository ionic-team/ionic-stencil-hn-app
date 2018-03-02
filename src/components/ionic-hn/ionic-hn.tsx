import { Component } from '@stencil/core';


@Component({
  tag: 'ionic-hn',
  styleUrl: 'ionic-hn.scss'
})
export class IonicHn {

  render() {
    return (
      <ion-app>
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