import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDJftmW5C4Hy9XS3biLfLvgmJU1sVN1Sxs",
    authDomain: "apinat-react.firebaseapp.com",
    projectId: "apinat-react",
    appId: "1:268156421352:web:4564d0690fb3dbade7f55d"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;