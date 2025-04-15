export interface CapacitorWorkoutsConnectedAppsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  isConnectedAppsEnabled(): Promise<{ isEnabled: boolean }>;
  saveWorkoutToConnectedApps(workout: Workout): Promise<{ savedSuccessfully: boolean }>;
}

export interface Workout {
  id: string;
  name: string;
  type: string;
  duration: number;
  distance: number;
  calories: number;
  heartRate: number;
}
