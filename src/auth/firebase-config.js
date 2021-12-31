import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBdFVALmyL_GlvY0uW9iK6BOsmrd-svxXU",
    authDomain: "movie-app1-b3951.firebaseapp.com",
    projectId: "movie-app1-b3951",
    storageBucket: "movie-app1-b3951.appspot.com",
    messagingSenderId: "143938452985",
    appId: "1:143938452985:web:11544e173542cf2b1c1128"
};

const app = initializeApp(firebaseConfig);// bunun ile uygulamayı açtım

export const auth = getAuth(app);//react projemle firebaseyi bagladım getauthla çeşitli fonk vb 
//ulaşabileceğim firebaseye ait olanlara. auth olarak kullanmak için başka dosyalarda export ettim