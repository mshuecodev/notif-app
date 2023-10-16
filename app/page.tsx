"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { getMessaging, getToken } from "firebase/messaging"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import firebase from "firebase/app"

export default function Home() {
	const [show, setShow] = useState(false)

	// const onMessageListener = () =>
	// 	new Promise((resolve) => {
	// 		onMessage(messaging, (payload) => {
	// 			resolve(payload)
	// 		})
	// 	})

	useEffect(() => {
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker.register("/firebase-messaging-sw.js").then((registration) => console.log("scope is: ", registration.scope))
		}

		// onMessageListener()
		// 	.then((payload) => {
		// 		setShow(true)
		// 		// setNotification({title: payload.notification.title, body: payload.notification.body})
		// 		console.log("payload", payload)
		// 	})
		// 	.catch((err) => console.log("failed: ", err))
	}, [])

	useEffect(() => {
		const firebaseConfig = {
			apiKey: "AIzaSyB6nFBjOMX8uxa_QjI0wgw_AfMN2GTaRUg",
			authDomain: "notif-app-6814e.firebaseapp.com",
			projectId: "notif-app-6814e",
			storageBucket: "notif-app-6814e.appspot.com",
			messagingSenderId: "686312635639",
			appId: "1:686312635639:web:5efe69fdbdc3f1f90967f2",
			measurementId: "G-3W0M60Z73J"
		}

		const app = initializeApp(firebaseConfig)

		const messaging = getMessaging(app)

		console.log("messging", messaging)

		function requestPermission() {
			const currentPermission = Notification.permission
			console.log("Requesting permission...")
			if (currentPermission === "default") {
				Notification.requestPermission().then((permission) => {
					if (permission === "granted") {
						console.log("permission granted")
						getToken(messaging, { vapidKey: "BJCMAMtTFQgFa6kHgdKnUYQ7WgBIzZ99LnNgQExEXHKIUYNfmKmfUpg0js1FSd39LnrI4ce-SWx0dYeaZrSSuFY" })
							.then((token) => {
								console.log("token", token)
							})
							.catch((err) => {
								alert(err)
							})
					} else {
						console.log("permission denied")
					}
				})
			} else if (currentPermission === "granted") {
				getToken(messaging, { vapidKey: "BJCMAMtTFQgFa6kHgdKnUYQ7WgBIzZ99LnNgQExEXHKIUYNfmKmfUpg0js1FSd39LnrI4ce-SWx0dYeaZrSSuFY" })
					.then((token) => {
						console.log("token", token)
					})
					.catch((err) => {
						alert(err)
					})
				console.log("permission granted 2")
			} else {
				console.log("Notification permission denied.")
			}
		}
		requestPermission()
	}, [])

	return <div>Notif Page</div>
}
