import { Component, Method } from '@stencil/core';

@Component({
  tag: 'fake-fetch'
})
export class FakeFetch {

  @Method()
  fetch(url: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.addEventListener('load', function () {
        resolve(JSON.parse(this.responseText));
      });

      request.addEventListener('error', function () {
        reject(`error: ${this.statusText} / ${this.status}`);
      });

      request.open('GET', url, true);
      request.send();
    });
  }
}
