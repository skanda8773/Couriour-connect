# CourierConnect React Native Frontend

This project contains a runnable React Native frontend that mirrors the provided CourierConnect UI design as closely as possible using local React Native components.

## Run

Start Metro:

```zsh
cd "/Users/nagakumar/StudioProjects/Couriour_Connect"
npx react-native start --reset-cache
```

Run on Android:

```zsh
export ANDROID_HOME="$HOME/Library/Android/sdk"
export ANDROID_SDK_ROOT="$HOME/Library/Android/sdk"
export PATH="$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"
adb reverse tcp:8081 tcp:8081
cd "/Users/nagakumar/StudioProjects/Couriour_Connect"
npx react-native run-android --no-packager
```

## Notes

- The UI is implemented in `src/screens/DesignScreens.js`.
- Navigation routes are defined in `src/navigation/StackNavigator.js`.
- If you edit native Android settings, keep `android/local.properties` pointing to your SDK path.

## Troubleshooting

If you see:

- `Incompatible React versions ... react 19.2.5 vs react-native-renderer 19.2.3`
- `Cannot read property 'default' of undefined` from gesture handler stack

run:

```zsh
pkill -f "react-native/cli.js start" || true
watchman watch-del-all || true
rm -rf "$TMPDIR/metro-*" "$TMPDIR/haste-map-*" /tmp/metro-* /tmp/haste-map-*
cd "/Users/nagakumar/StudioProjects/Couriour_Connect"
npm install
npx react-native start --reset-cache
```

Then in another terminal:

```zsh
export ANDROID_HOME="$HOME/Library/Android/sdk"
export ANDROID_SDK_ROOT="$HOME/Library/Android/sdk"
export PATH="$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"
adb reverse tcp:8081 tcp:8081
cd "/Users/nagakumar/StudioProjects/Couriour_Connect"
npx react-native run-android --no-packager
```

