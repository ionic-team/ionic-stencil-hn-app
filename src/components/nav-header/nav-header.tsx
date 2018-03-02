import { Component } from '@stencil/core';


@Component({
  tag: 'nav-header',
  styleUrl: 'nav-header.scss'
})
export class Navheader {

  render() {
    return (
      <ion-header>
        <ion-toolbar color='primary'>

          <ion-buttons slot='start'>
            <ion-icon id='ionic-icon' name='logo-ionic'></ion-icon>
          </ion-buttons>

          <div class='tabs-bar'>
            <stencil-route-link url='/news/1' urlMatch={['/', '/news/:pageNum', '/news/:pageNum/']} activeClass='active' exact={true}>
              <ion-button
                class={{
                  'header-button': true,
                  'first-button': true,
                }}
                fill='clear'>
                News
                </ion-button>
            </stencil-route-link>

            <stencil-route-link url='/show/1' activeClass='active' >
              <ion-button
                class={{
                  'header-button': true,
                }}
                fill='clear'>
                Show
                </ion-button>
            </stencil-route-link>

            <stencil-route-link url='/jobs/1' activeClass='active'>
              <ion-button
                class={{
                  'header-button': true
                }}
                fill='clear'>
                Jobs
                </ion-button>
            </stencil-route-link>

            <stencil-route-link url='/ask/1' activeClass='active'>
              <ion-button
                class={{
                  'header-button': true
                }}
                fill='clear'>
                Ask
                </ion-button>
            </stencil-route-link>
          </div>
        </ion-toolbar>
      </ion-header>
    );
  }
}