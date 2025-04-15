# capacitor-workouts-connected-apps-plugin

custom capacitor plugins to sync workouts data to native apps

## Install

```bash
npm install capacitor-workouts-connected-apps-plugin
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`isConnectedAppsEnabled()`](#isconnectedappsenabled)
* [`saveWorkoutToConnectedApps(...)`](#saveworkouttoconnectedapps)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### isConnectedAppsEnabled()

```typescript
isConnectedAppsEnabled() => Promise<{ isEnabled: boolean; }>
```

**Returns:** <code>Promise&lt;{ isEnabled: boolean; }&gt;</code>

--------------------


### saveWorkoutToConnectedApps(...)

```typescript
saveWorkoutToConnectedApps(workout: Workout) => Promise<{ savedSuccessfully: boolean; }>
```

| Param         | Type                                        |
| ------------- | ------------------------------------------- |
| **`workout`** | <code><a href="#workout">Workout</a></code> |

**Returns:** <code>Promise&lt;{ savedSuccessfully: boolean; }&gt;</code>

--------------------


### Interfaces


#### Workout

| Prop            | Type                |
| --------------- | ------------------- |
| **`id`**        | <code>string</code> |
| **`name`**      | <code>string</code> |
| **`type`**      | <code>string</code> |
| **`duration`**  | <code>number</code> |
| **`distance`**  | <code>number</code> |
| **`calories`**  | <code>number</code> |
| **`heartRate`** | <code>number</code> |

</docgen-api>
