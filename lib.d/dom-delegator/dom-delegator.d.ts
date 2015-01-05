declare module 'dom-delegator' {

  class Handle {
    type: String;
  }

  class DOMDelegator {
    target: HTMLElement;
    events: {};
    rawEventListeners: {};
    globalListeners: {};

    addEventListener(target, type, handler:()=>void): void;

    removeEventListener(target, type, handler:()=>void): void;

    static allocateHandle(func:(ev)=>void): Handle;

    static transformHandle(handle: Handle, broadcast: (ev, func: ()=>void )=> void ): Handle;

    addGlobalEventListener(eventName, fn: ()=>void): void;

    listenTo(eventName): void;

    unlistenTo(eventName): void;

  }

  export = DOMDelegator
}