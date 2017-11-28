import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'story-list',
  styleUrl: 'story-list.scss'
})
export class StoryList {

  @Prop() stories: any;

  preLoadData: any[] = [{ "id": 15796943, "title": "Show HN: Golang DNS server, including DNSSEC and DNS-over-TLS", "points": 181, "user": "tenta", "time": 1511875266, "time_ago": "5 hours ago", "comments_count": 50, "type": "link", "url": "https://github.com/tenta-browser/tenta-dns", "domain": "github.com" }, { "id": 15799034, "title": "Lessons we learned while bootstrapping", "points": 26, "user": "brianjackson", "time": 1511888711, "time_ago": "an hour ago", "comments_count": 3, "type": "link", "url": "https://kinsta.com/blog/bootstrapping-startup/", "domain": "kinsta.com" }, { "id": 15797045, "title": "The Poor Man's 3D Camera", "points": 128, "user": "et1337", "time": 1511876037, "time_ago": "4 hours ago", "comments_count": 8, "type": "link", "url": "http://etodd.io/2017/11/28/poor-mans-3d-camera/", "domain": "etodd.io" }, { "id": 15798849, "title": "The Joy of Erlang; Or, How to Ride a Toruk (2011)", "points": 20, "user": "Tomte", "time": 1511887605, "time_ago": "an hour ago", "comments_count": 11, "type": "link", "url": "http://www.evanmiller.org/joy-of-erlang.html", "domain": "evanmiller.org" }, { "id": 15796039, "title": "A Library of Parallel Algorithms", "points": 47, "user": "federicoponzi", "time": 1511866031, "time_ago": "7 hours ago", "comments_count": 0, "type": "link", "url": "https://www.cs.cmu.edu/~scandal/nesl/algorithms.html", "domain": "cs.cmu.edu" }, { "id": 15798238, "title": "Tencent’s Just Getting Started on Online Advertising", "points": 30, "user": "JumpCrisscross", "time": 1511884005, "time_ago": "2 hours ago", "comments_count": 4, "type": "link", "url": "https://www.bloomberg.com/news/articles/2017-11-27/tencent-s-just-getting-started-on-online-advertising", "domain": "bloomberg.com" }, { "id": 15797429, "title": "HP installs system-slowing spyware on its PCs", "points": 253, "user": "artsandsci", "time": 1511878405, "time_ago": "4 hours ago", "comments_count": 152, "type": "link", "url": "https://www.engadget.com/2017/11/28/hp-quietly-installs-system-slowing-spyware-on-its-pcs/", "domain": "engadget.com" }, { "id": 15796769, "title": "Artificial muscle lifts objects 1000x its own weight", "points": 65, "user": "lithander", "time": 1511873750, "time_ago": "5 hours ago", "comments_count": 14, "type": "link", "url": "https://wyss.harvard.edu/artificial-muscles-give-soft-robots-superpowers/", "domain": "wyss.harvard.edu" }, { "id": 15797323, "title": "How Cybercriminals Can Abuse Chat Platform APIs as C&C Infrastructures [pdf]", "points": 51, "user": "lainon", "time": 1511877796, "time_ago": "4 hours ago", "comments_count": 19, "type": "link", "url": "https://documents.trendmicro.com/assets/wp/wp-how-cybercriminals-can-abuse-chat-platform-apis-as-cnc-infrastructures.pdf", "domain": "documents.trendmicro.com" }, { "id": 15797079, "title": "Meshkit", "points": 44, "user": "jdowner", "time": 1511876284, "time_ago": "4 hours ago", "comments_count": 12, "type": "link", "url": "https://www.opengarden.com/meshkit.html", "domain": "opengarden.com" }, { "id": 15798205, "title": "DASH playback of AV1 video in Firefox", "points": 14, "user": "slederer", "time": 1511883813, "time_ago": "2 hours ago", "comments_count": 2, "type": "link", "url": "https://hacks.mozilla.org/2017/11/dash-playback-of-av1-video/", "domain": "hacks.mozilla.org" }, { "id": 15797613, "title": "Brown University raising $120M to eliminate all student loans", "points": 142, "user": "champagnepapi", "time": 1511879987, "time_ago": "3 hours ago", "comments_count": 89, "type": "link", "url": "https://www.cnbc.com/2017/09/25/brown-university-raising-120-million-to-eliminate-all-student-loans.html", "domain": "cnbc.com" }, { "id": 15797184, "title": "A Conversation with John Knoll (1998)", "points": 33, "user": "wallflower", "time": 1511876875, "time_ago": "4 hours ago", "comments_count": 2, "type": "link", "url": "http://www.drdobbs.com/a-conversation-with-john-knoll/184410606", "domain": "drdobbs.com" }, { "id": 15795337, "title": "Disable transparent hugepages", "points": 148, "user": "wheresvic3", "time": 1511857155, "time_ago": "10 hours ago", "comments_count": 47, "type": "link", "url": "https://blog.nelhage.com/post/transparent-hugepages/", "domain": "blog.nelhage.com" }, { "id": 15798424, "title": "Kotlin 1.2 Released: Sharing Code Between Platforms", "points": 70, "user": "dayanruben", "time": 1511885126, "time_ago": "2 hours ago", "comments_count": 14, "type": "link", "url": "https://blog.jetbrains.com/kotlin/2017/11/kotlin-1-2-released/", "domain": "blog.jetbrains.com" }, { "id": 15798960, "title": "Ajit Pai is right", "points": 112, "user": "OberstKrueger", "time": 1511888259, "time_ago": "an hour ago", "comments_count": 98, "type": "link", "url": "https://stratechery.com/2017/why-ajit-pai-is-right/", "domain": "stratechery.com" }, { "id": 15795808, "title": "DRM’s Dead Canary: How We Lost the Web, What We Learned, and What to Do Next", "points": 486, "user": "mimi89999", "time": 1511862904, "time_ago": "8 hours ago", "comments_count": 168, "type": "link", "url": "https://www.eff.org/deeplinks/2017/10/drms-dead-canary-how-we-just-lost-web-what-we-learned-it-and-what-we-need-do-next", "domain": "eff.org" }, { "id": 15795281, "title": "Netherlands fishmongers accuse herring-tasters of erring", "points": 93, "user": "lnguyen", "time": 1511856208, "time_ago": "10 hours ago", "comments_count": 46, "type": "link", "url": "http://www.economist.com/news/europe/21731656-can-dutch-still-trust-their-herring-tasters-netherlands-fishmongers-accuse-herring-tasters", "domain": "economist.com" }, { "id": 15795724, "title": "Firefox Debugger", "points": 183, "user": "Vinnl", "time": 1511861858, "time_ago": "8 hours ago", "comments_count": 58, "type": "link", "url": "https://mozilladevelopers.github.io/playground/debugger", "domain": "mozilladevelopers.github.io" }];

  render() {
    if (this.stories) {
      const stories = this.stories.map((story) => {
        return (
          <ion-item>
            <div class='points' slot='start'>
              {story.points || 0}
            </div>
            <ion-label>
              <h2 class='list-header'>
                <a href={story.url}>{story.title}</a>
              </h2>
              <stencil-route-link url={`/comments/${story.id}`}>
                <button class='comments-text' role='button'>
                  Posted by {story.user} {story.time_ago} | {story.comments_count} comments
                </button>
              </stencil-route-link>
            </ion-label>
          </ion-item>
        )
      });

      return (
        <ion-list>
          {stories}
        </ion-list>
      )
    } else {
      return (
        <ion-list>
          {this.preLoadData.map((story) =>
            <ion-item>
            <div class='points' slot='start'>
              {story.points || 0}
            </div>
            <ion-label>
              <h2 class='list-header'>
                <a href={story.url}>{story.title}</a>
              </h2>
              <stencil-route-link url={`/comments/${story.id}`}>
                <button class='comments-text' role='button'>
                  Posted by {story.user} {story.time_ago} | {story.comments_count} comments
                </button>
              </stencil-route-link>
            </ion-label>
          </ion-item>
          )}
        </ion-list>
      )
    }
  }
}