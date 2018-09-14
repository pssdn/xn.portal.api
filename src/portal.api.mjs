import { loadClientPortal } from "./core/loadClientPortal.mjs";

export const loadPortal = async ({ clientID }) => {
  const portal = await loadClientPortal({ clientID });

  return portal;
};
