// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js")

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
	apiKey: "AIzaSyB6nFBjOMX8uxa_QjI0wgw_AfMN2GTaRUg",
	authDomain: "notif-app-6814e.firebaseapp.com",
	projectId: "notif-app-6814e",
	storageBucket: "notif-app-6814e.appspot.com",
	messagingSenderId: "686312635639",
	appId: "1:686312635639:web:5efe69fdbdc3f1f90967f2",
	measurementId: "G-3W0M60Z73J"
}

firebase.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
	console.log("Received background message ", payload)

	const notificationTitle = payload.notification.title
	const notificationOptions = {
		body: payload.notification.body
	}

	self.registration.showNotification(notificationTitle, notificationOptions)
})
