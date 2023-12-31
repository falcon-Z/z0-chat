import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyATTz323y61cdRtTnEpj3tGJvrVH5ztu5Q",
	authDomain: "z0-chat.firebaseapp.com",
	projectId: "z0-chat",
	storageBucket: "z0-chat.appspot.com",
	messagingSenderId: "685909105625",
	appId: "1:685909105625:web:0c3a7892268fd3e27d97c8",
};

export const app = initializeApp(firebaseConfig);
