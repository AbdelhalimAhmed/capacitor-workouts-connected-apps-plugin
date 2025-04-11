import XCTest
@testable import CapacitorWorkoutsConnectedAppsPlugin

class CapacitorWorkoutsConnectedAppsTests: XCTestCase {
    func testEcho() {
        // This is an example of a functional test case for a plugin.
        // Use XCTAssert and related functions to verify your tests produce the correct results.

        let implementation = CapacitorWorkoutsConnectedApps()
        let value = "Hello, World!"
        let result = implementation.echo(value)

        XCTAssertEqual(value, result)
    }
}
