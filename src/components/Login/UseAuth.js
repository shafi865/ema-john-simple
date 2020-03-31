import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import { useState } from "react";


firebase.initializeApp(firebaseConfig);


const Auth = () => {

    const [user, setUser] = useState(null);

   
    const signInWithGoogle = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            console.log(res);
            const {displayName, photoURL, email} = res.user;
            const signedInUser = {
            //isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL
          }
          setUser(signedInUser);
        //console.log(displayName, email, photoURL);
        return res.user;
        })
        .catch(err => {
          //console.log(err);
          //console.log(err.message);
          return err.message;
        })

      }
      const signOut = () => {
        firebase.auth().signOut()
        .then(res => {
            setUser(null);
            
          }
        ) 
        .catch( err => {
    
        })
      }
    

      return {
        user,
        signInWithGoogle,
        signOut
      }
}

export default Auth;