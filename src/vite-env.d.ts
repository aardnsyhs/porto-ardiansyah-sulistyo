/// <reference types="vite/client" />

// View Transitions API type definitions
interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
  skipTransition(): void;
}

interface Document {
  startViewTransition(updateCallback: () => void | Promise<void>): ViewTransition;
}
