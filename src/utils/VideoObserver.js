import { EventImpl } from "./EventImpl.js";

function filterVideoNodes(e) {
  return Array.from(e).map((e) => {
    if (e instanceof HTMLVideoElement) return [e];
    if (e instanceof HTMLElement) {
      const t = e.querySelectorAll("video");
      return Array.from(t);
    }
    return [];
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
