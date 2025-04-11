import { registerPlugin } from '@capacitor/core';

import type { CapacitorWorkoutsConnectedAppsPlugin } from './definitions';

const CapacitorWorkoutsConnectedApps = registerPlugin<CapacitorWorkoutsConnectedAppsPlugin>(
  'CapacitorWorkoutsConnectedApps',
  {
    web: () => import('./web').then((m) => new m.CapacitorWorkoutsConnectedAppsWeb()),
  },
);

export * from './definitions';
export { CapacitorWorkoutsConnectedApps };
