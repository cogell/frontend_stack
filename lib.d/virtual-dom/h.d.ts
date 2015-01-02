declare module 'h' {

  // interface VTree extends VText, VNode, Widget, Thunk {}
  interface VTree {}

  interface VNode {
    tagName: String;
    properties: any;
    children: Array<any>;
    // properties: VProperties;
    // children: Array<VTree>;
    key: any; // String | undefined,
    namespace: any; // String | null
  }

  function h(tagSelector: String, properties?: {}, children?: Array<VTree>): VNode;

  export = h;
}