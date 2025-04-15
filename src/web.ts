import { WebPlugin } from '@capacitor/core';

import type { CapacitorWorkoutsConnectedAppsPlugin, Workout } from './definitions';

export class CapacitorWorkoutsConnectedAppsWeb extends WebPlugin implements CapacitorWorkoutsConnectedAppsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async isConnectedAppsEnabled(): Promise<{ isEnabled: boolean }> {
    console.log('isConnectedAppsEnabled');
    return { isEnabled: true };
  }

  async saveWorkoutToConnectedApps(workout: Workout): Promise<{ savedSuccessfully: boolean }> {
    console.log('saveWorkoutToConnectedApps', workout);
    return { savedSuccessfully: true };
  }
}
