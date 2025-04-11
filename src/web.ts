import { WebPlugin } from '@capacitor/core';

import type { CapacitorWorkoutsConnectedAppsPlugin } from './definitions';

export class CapacitorWorkoutsConnectedAppsWeb extends WebPlugin implements CapacitorWorkoutsConnectedAppsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
