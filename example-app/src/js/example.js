import { CapacitorWorkoutsConnectedApps } from 'capacitor-workouts-connected-apps-plugin';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    CapacitorWorkoutsConnectedApps.echo({ value: inputValue })
}
