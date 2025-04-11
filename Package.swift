// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorWorkoutsConnectedAppsPlugin",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorWorkoutsConnectedAppsPlugin",
            targets: ["CapacitorWorkoutsConnectedAppsPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "CapacitorWorkoutsConnectedAppsPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorWorkoutsConnectedAppsPlugin"),
        .testTarget(
            name: "CapacitorWorkoutsConnectedAppsPluginTests",
            dependencies: ["CapacitorWorkoutsConnectedAppsPlugin"],
            path: "ios/Tests/CapacitorWorkoutsConnectedAppsPluginTests")
    ]
)