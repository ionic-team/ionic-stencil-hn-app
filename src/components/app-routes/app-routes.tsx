import { Component } from '@stencil/core';

@Component({
  tag: 'app-routes'
})
export class AppRoutes {
  render() {
    return (
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
    );
  }
}
