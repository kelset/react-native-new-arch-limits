# Testing the new architecture's limits

Just a quick test app to validate a few doubts I have been having - basically, I'm starting with a fresh new RN app on latest stable (0.70.3) and throwing a bunch of libs at it to see what works and what doesn't when enabling the new architecture.

## Tests matrix

A few things to notice:

- technically, to turn on the new arch you have just one switch, [see here](https://reactnative.dev/docs/next/the-new-architecture/use-app-template#enable-the-new-architecture). This means both TM and Fabric ON at the same time.
  - there are "less known" ways to only switch ON one or the other. So we'll test all the options. (also: I'm not sure if this will work on >=71)
- ~At the end, when everything else is tested, I'll also try to switch on ConcurrentReact and see what goes kaboom.~ by default, when turning ON the new arch, concurrent is ON too - [read more](https://reactnative.dev/docs/next/react-18-and-react-native#react-18-enabled-by-default).
- I picked the libs pretty much on instinct, using [directory](https://reactnative.directory/) as a catalogue.
- I'm stickying with Hermes only for now just for time-related reasons

As base test, I'll:

- try to switch on new arch ✅
- try to switch on TM only 🟡
- try to switch on Fabric only 🟡

Then I'll move to the meat of this experiment: the idea is that I'll add all these libs into the code, and see what happens.

| What                                                         | which lib                                                                                  | old arch _(baseline)_ | new arch | only TM on | only Fabric on |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | --------------------- | -------- | ---------- | -------------- |
| a visual lib with "official support" for new arch            | [react-native-slider](https://github.com/callstack/react-native-slider)                    | 🟡                    | 🟡       | 🟡         | 🟡             |
| a visual lib without "official support" for new arch         | [react-native-webview](https://github.com/react-native-webview/react-native-webview)       | 🟡                    | 🟡       | 🟡         | 🟡             |
| a non-visual lib with "official support" for new arch        | couldn't find any                                                                          | 🟡                    | 🟡       | 🟡         | 🟡             |
| a non-visual lib without "official support" for the new arch | [react-native-get-random-values](https://github.com/LinusU/react-native-get-random-values) | 🟡                    | 🟡       | 🟡         | 🟡             |
| a js-only lib                                                | [react-native-bouncy-checkbox](https://github.com/WrathChaos/react-native-bouncy-checkbox) | 🟡                    | 🟡       | 🟡         | 🟡             |

## TODO

✅ add "status code" to show which state the thing is in (old/new arch, concurrent on/off) (hats off to [@tido64](https://github.com/tido64) for [this](https://github.com/microsoft/react-native-test-app/blob/trunk/example/App.js#L159-L169))
🟡 do basic tests
🟡 add libraries and sample code one by one, in old arch
🟡 do the tests (new arch on first)
🟡 get the app in shape for turning on in new arch proper
🟡 summarize the whole thing into some learnings
