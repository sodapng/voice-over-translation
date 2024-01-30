import "requestidlecallback-polyfill";
import { EventImpl } from "./EventImpl.js";

function filterVideoNodes(nodes) {
  return Array.from(nodes).flatMap((node) => {
    if (node instanceof HTMLVideoElement) {
      return [node];
    }
    if (node instanceof HTMLElement) {
      return Array.from(node.querySelectorAll("video"));
    }
    return node.shadowRoot
      ? Array.from(node.shadowRoot.querySelectorAll("video"))
      : [];
  });
}

export class VideoObserver {
  constructor() {
    this.onVideoAdded = new EventImpl();
    this.onVideoRemoved = new EventImpl();
    this.handleVideoAddedBound = this.handleVideoAdded.bind(this);
    this.handleVideoRemovedBound = this.handleVideoRemoved.bind(this);
    this.observer = new MutationObserver((mutationsList) => {
      window.requestIdleCallback(
        () => {
          mutationsList.forEach((mutation) => {
            if (mutation.type !== "childList") return;

            filterVideoNodes(mutation.addedNodes).forEach(
              this.handleVideoAddedBound,
            );
            filterVideoNodes(mutation.removedNodes).forEach(
              this.handleVideoRemovedBound,
            );
          });
        },
        { timeout: 1000 },
      );
    });
  }
  enable() {
    this.observer.observe(document, {
      childList: true,
      subtree: true,
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
    if (!document.contains(video)) {
      this.onVideoRemoved.dispatch(video);
    }
  }
}
