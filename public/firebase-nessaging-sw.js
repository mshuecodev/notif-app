importScripts("https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/10.5.0/firebase-messaging.js")

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB6nFBjOMX8uxa_QjI0wgw_AfMN2GTaRUg",
	authDomain: "notif-app-6814e.firebaseapp.com",
	projectId: "notif-app-6814e",
	storageBucket: "notif-app-6814e.appspot.com",
	messagingSenderId: "686312635639",
	appId: "1:686312635639:web:5efe69fdbdc3f1f90967f2",
	measurementId: "G-3W0M60Z73J"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
