import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorWorkoutsConnectedAppsPlugin)
public class CapacitorWorkoutsConnectedAppsPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "CapacitorWorkoutsConnectedAppsPlugin"
    public let jsName = "CapacitorWorkoutsConnectedApps"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = CapacitorWorkoutsConnectedApps()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
}
