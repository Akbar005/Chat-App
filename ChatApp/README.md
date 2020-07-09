Chat App


Dependencies Used

* @react-native-community/masked-view

* firebase

* react-native

* react-native-gesture-handler

* react-native-gifted-chat

* react-native-reanimated

* react-native-safe-area-context

* react-native-screens

* react-native-vector-icons

* react-native-navigation

* react-navigation-stack





This App contains only 2 pages

ChatScreen.js

LoginScreen.js



Login Screen

LoginScreen takes only 1 value ‘Username’ and is set as SingInAnonymously.
Anyone can Login without any restriction.
It can be changed if required.

“React-native-vector-icon” is used as the Login button.



Chat Screen

“react-native-gifted-chat” is for Chat Screen. The messages that are sent contains the two values message and ID.
ID is the Username, the User used to Login. In the Chat Screen only the first letter of the Username is displayed with the message.

KeyboardAvoidingView is used to keep keyboard in sync to the message typed.



Firebase

Firebase is used for Authentication of the Login page.

Messages which are sent are stored in the firebase realtime database.





