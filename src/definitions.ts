export interface CapacitorWorkoutsConnectedAppsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
