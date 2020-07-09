import firebase from 'firebase'

class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyA5SKR2pJx2VMnwiKl3bfJZk-diVR8LWD0",
                authDomain: "chatapp-e97a6.firebaseapp.com",
                databaseURL: "https://chatapp-e97a6.firebaseio.com",
                projectId: "chatapp-e97a6",
                storageBucket: "chatapp-e97a6.appspot.com",
                messagingSenderId: "767463439588",
                appId: "1:767463439588:web:bf55a19187beec793600f1",
                measurementId: "G-0GYN9LQL5R"
            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            };

            this.db.push(message);
        });
    };

    parse = message => {
        const { user, text, timestamp} = message.val();
        const { key: _id } = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off();
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new Fire();