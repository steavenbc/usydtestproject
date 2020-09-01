## Test Mobile App for University of Sydney ##

Code base for University of Sydney- Mobile App Developer test project

## Steps to run

- 1. Run "npm install" from the home directory to install the dependencies. Then run a npm update to ensure that the latest packages are being used.
- 2. Run "npm i -g expo-cli" to install Expo CLI.
- 3. Run "expo install react-native-gesture-handler react-native-reanimated".
- 3. Run "npm start" from home directory to start the server.
- 4. Expo CLI should open a browser window. Choose the Local instead of LAN connection, and click to run on Mobile Emulator. Else, choose the LAN connection and scan the QR code using your Android device. Make sure that your Android device has Expo preinstalled and connected to the same LAN(can be same Wi-Fi).

## Technical issues and assumptions

- 1. All code has been tested for Android devices. However iOS was not possible due to lack of access to a Mac OS based system.
- 2. Maintaining visited link states, i.e. the checkbox ticking when a user visits the links has been achieved. However, restarting the app server will erase the data and bring it back to the initial state, where all check boxes are unticked.