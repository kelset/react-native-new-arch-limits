# Testing the new architecture's limits

Just a quick test app to validate a few doubts I have been having - basically, I'm starting with a fresh new RN app on latest stable (0.70.4) and throwing a bunch of libs at it to see what works and what doesn't when enabling the new architecture.

## Tests matrix

A few things to notice:

- technically, to turn on the new arch you have just one switch, [see here](https://reactnative.dev/docs/next/the-new-architecture/use-app-template#enable-the-new-architecture). This means both TM and Fabric ON at the same time.
  - there should be ways to only switch ON one or the other.I'll test all the options I can find. (also: from >=71, [Android switches](https://github.com/facebook/react-native/pull/35091), [iOS switches](https://github.com/facebook/react-native/pull/35117) )
    - TM on Android: ~based on [this guide](https://reactnative.dev/docs/new-architecture-app-modules-android#6-enable-the-useturbomodules-flag-in-your-application-oncreate), changing [this line](https://github.com/kelset/react-native-new-arch-limits/blob/main/android/app/src/main/java/com/testnewarchmatrix/MainApplication.java#L56) should do the trick~ nvm that, it looks like the easiest way of doing that is actually to switch on new arch as expected, via `gradle.properties`, and manually switch off [Fabric](https://github.com/kelset/react-native-new-arch-limits/blob/main/android/app/src/main/java/com/testnewarchmatrix/MainActivity.java#L37) and [Concurrent](https://github.com/kelset/react-native-new-arch-limits/blob/main/android/app/src/main/java/com/testnewarchmatrix/MainActivity.java#L45). Looks weird, but seems to be working.
    - TM on iOS: ~based on [this guide](https://reactnative.dev/docs/new-architecture-app-modules-ios#3-enable-turbo-native-module-system), adding `RCTEnableTurboModule(YES);` on [this line](https://github.com/kelset/react-native-new-arch-limits/blob/main/ios/TestNewArchMatrix/AppDelegate.mm#L34) **AND** removing this [if statement](https://github.com/kelset/react-native-new-arch-limits/blob/main/ios/TestNewArchMatrix/AppDelegate.mm#L94)...should do the trick~ I can't seem to figure out a way to make it happen.
- ~At the end, when everything else is tested, I'll also try to switch on ConcurrentReact and see what goes kaboom.~ by default, when turning ON the new arch, concurrent is ON too - [read more](https://reactnative.dev/docs/next/react-18-and-react-native#react-18-enabled-by-default).
- I picked the libs pretty much on instinct, using [directory](https://reactnative.directory/) as a catalogue.
- I'm sticking with Hermes only for now just for time-related reasons

As base test, I'll:

- try to switch on new arch: ✅
- try to switch on TM only: (android)✅ (ios)❌
- try to switch on Fabric only: ❌
  - this is not viable, because Fabric is a TurboModule (basically) so it would go kaboom without TM enabled

Then I'll move to the meat of this experiment: the idea is that I'll add all these libs into the code, and see what happens.

| What                                                                                                                        | which lib                                                                                  | old arch _(baseline)_ | new arch | only TM on |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------------- | -------- | ---------- |
| a visual lib with "official support" for new arch                                                                           | [react-native-slider](https://github.com/callstack/react-native-slider)                    | ✅                    | ✅       | ✅         |
| a visual lib without "official support" for new arch                                                                        | [react-native-webview](https://github.com/react-native-webview/react-native-webview)       | ✅                    | ❌ (as expected)       | ✅         |
| a non-visual lib with "official support" for new arch                                                                       | couldn't find any                                                                          | 🤷‍♂️                    | 🤷‍♂️       | 🤷‍♂️         |
| a non-visual lib without "official support" for the new arch                                                                | [react-native-get-random-values](https://github.com/LinusU/react-native-get-random-values) | ✅                    | ✅       | ✅         |
| a js-only lib                                                                                                               | [react-native-bouncy-checkbox](https://github.com/WrathChaos/react-native-bouncy-checkbox) | ✅                    | ✅       | ✅         |
| a new-arch only lib                                                                                                         | [react-native-gradient](https://github.com/FyndX/react-native-gradient)                    | ❌ (as expected)      | ✅ (ios) ❌ (android - unexpected)       | ❌ (as expected)         |
| a new-arch only lib with [backward compatibility](https://reactnative.dev/docs/the-new-architecture/backward-compatibility) | need to find one                                                                           | 🤷‍♂️                    | 🤷‍♂️       | 🤷‍♂️         |

### Specific libs comments or notes

- the fact that `FyndX/react-native-gradient` fails on `pod install` when on old arch is expected, it errors because the pod itself depends on `React-RCTFabric` which is new arch specific
- non-Fabric compatible libraries have this nice fallback of a red box (see screenshot v1 in `/docs`); it all build fine but simply it won't get loaded
- I think `FyndX/react-native-gradient` erroring in Android is probably because of the lib itself, not my doing. I already added [patch-package](https://github.com/ds300/patch-package) to handle the Folly bump (see the patch in `/patches`)

## TODO

- ✅ add "status code" to show which state the thing is in (old/new arch, concurrent on/off) (hats off to [@tido64](https://github.com/tido64) for [this](https://github.com/microsoft/react-native-test-app/blob/trunk/example/App.js#L159-L169))
- ✅ do basic tests
- ✅ add libraries and sample code one by one, in old arch
- ✅ do the tests (new arch on first)
- ✅ get the app in shape for turning on in new arch proper
- ✅ test the TM only mode in Android
- 🟡 summarize the whole thing into some learnings
