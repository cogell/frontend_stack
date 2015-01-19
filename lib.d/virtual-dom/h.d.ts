declare module 'h' {

  interface VText {
    text: String;
    type: String;
  }

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


  function h(tagSelector?: String, properties?: {}, children?: Array<VTree>): VNode;
  function h(tagSelector?: String, properties?: {}, children?: VTree): VNode;
  function h(tagSelector?: String, properties?: {}, children?: String): VNode;

  export = h;
}
