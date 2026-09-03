# Dashboard Expo App — Expo SDK 54

Three bottom-tab sections: Dashboard, History, Settings. Dashboard includes placeholder widgets 1, 2, 3 for future functionality.

## Run
npm install
npx expo start

Or: npm run android / npm run ios / npm run web

## EAS
npm install -g eas-cli
eas login
eas build:configure

Android preview APK:
eas build --platform android --profile preview

Production:
eas build --platform android --profile production
eas build --platform ios --profile production
eas build --platform all --profile production

The preview profile is configured for an installable Android APK. Production Android defaults to AAB for store distribution.

Before publishing, replace the example Android package and iOS bundle identifier in app.json with your own unique identifiers.
