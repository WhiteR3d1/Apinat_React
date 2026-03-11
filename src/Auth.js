import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const {REACT_APP_APIKEY,REACT_APP_AUTHDOMAIN,REACT_APP_PRJID,REACT_APP_APPID} = process.env;

const firebaseConfig = {
    apiKey: REACT_APP_APIKEY,
    authDomain: REACT_APP_AUTHDOMAIN,
    projectId: REACT_APP_PRJID,
    appId: REACT_APP_APPID
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;