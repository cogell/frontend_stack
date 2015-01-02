declare module "patch" {

  interface VPatch {}

  function patch (rootNode: HTMLElement, patches: Array<VPatch>): HTMLElement;

  export = patch;
}