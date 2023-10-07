import 'requestidlecallback-polyfill';
import { EventImpl } from "./EventImpl.js";

function filterVideoNodes(e) {
  return Array.from(e).map((e) => {
    const result = [];
    if (e instanceof HTMLVideoElement) {
      result.push(e);
    }
    if (e instanceof HTMLElement) {
      result.push(...Array.from(e.querySelectorAll("video")));
    }
    if (e?.shadowRoot?.querySelectorAll) {
      result.push(...Array.from(e.shadowRoot.querySelectorAll("video")));
    }
    return result;
  }).flat();
}

export class VideoObserver {
  constructor() {
    this.onVideoAdded = new EventImpl();
    this.onVideoRemoved = new EventImpl();
    this.handleVideoAddedBound = this.handleVideoAdded.bind(this);
    this.handleVideoRemovedBound = this.handleVideoRemoved.bind(this);
    this.observer = new MutationObserver((mutationsList) => {
      window.requestIdleCallback(() => {
        mutationsList.forEach(mutation => {
          if ("childList" !== mutation.type) return;

          filterVideoNodes(mutation.addedNodes).forEach(this.handleVideoAddedBound);
          filterVideoNodes(mutation.removedNodes).forEach(this.handleVideoRemovedBound);
        });
      }, { timeout: 1e3 });
    });
  }
  enable() {
    this.observer.observe(document, {
      childList: true,
      subtree: true
    });
    document.querySelectorAll("video").forEach(this.handleVideoAddedBound);
  }
  disable() {
    this.observer.disconnect();
  }
  handleVideoAdded(video) {
    this.onVideoAdded.dispatch(video);
  }
  handleVideoRemoved(video) {
    document.contains(video) || this.onVideoRemoved.dispatch(video);
  }
}
