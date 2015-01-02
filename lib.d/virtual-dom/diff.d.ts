
declare module "diff" {

  interface VTree {}
  interface VPatch {}

  function diff (left: VTree, right: VTree): Array<VPatch>;

  export = diff;
}