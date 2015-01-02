declare module "create-element" {

  interface VTree {}

  function createElement (tree: VTree): HTMLElement;

  export = createElement;
}