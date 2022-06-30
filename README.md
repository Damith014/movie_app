# movie_app
Assignment react native app 

## How to build demo application
1. Download or clone this repository using the command `https://github.com/Damith014/movie_app`.
2. Run the following commands in Terminal:
```bash
$ cd movie_app
$ npm install
$ cd ios
$ pod install
```

**Note**: make sure that Metro Bundler is running when you run your app. Otherwise, run `npx react-native start` command. If it fails to start, run `git init` from Project root, then `npx react-native start`.

3. Android:
  * Run `npx react-native run-android` inside `movie_app` folder - this is just one way to run the app. You can also run it directly from within Android Studio. **Note**: `npx react-native log-android` is used to view logs.

4. iOS:
  * Run `npx react-native run-ios` inside `movie_app` folder - this is just one way to run the app. You can also run it directly from within Xcode.
