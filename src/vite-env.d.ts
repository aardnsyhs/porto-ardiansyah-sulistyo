/// <reference types="vite/client" />

declare module "*.webp" {
  const src: string;
  export default src;
}

// View Transitions API type definitions
interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
  skipTransition(): void;
}

interface Document {
  startViewTransition(
    updateCallback: () => void | Promise<void>,
  ): ViewTransition;
}
