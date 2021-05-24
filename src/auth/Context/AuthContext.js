import React,{createContext,useState} from 'react'
import {ToastAndroid} from 'react-native'
import {auth, provider } from  '../../../Firebase/index'
import * as firebase from "firebase";
export const AuthContext = createContext();

export const AuthContextProvider = ({children,navigation})=>{
   
const [linkSent,setLinkSent] = useState(false);
    const createAccount = async (email,password,username)=>{
 
        auth.createUserWithEmailAndPassword(email,password)
        .then(userCredential=>{
            userCredential.user.updateProfile({
                displayName: username
            }).then(()=>{
                alert("Updated Successfuly")
            }).catch(error => alert("Unable to update profile."))
            ToastAndroid.show("Account created sucessfully.", ToastAndroid.LONG)
            navigation.navigate('SignIn')
        }).catch(error=>{
            
            ToastAndroid.show(error.message, ToastAndroid.SHORT)
        })
    }

    const login = async (email,password)=>{
        auth.signInWithEmailAndPassword(email,password)
        .then(userCredential=>{
            ToastAndroid.show(`Logged in as ${userCredential.user.displayName}`,ToastAndroid.LONG)

        })
        .catch(error=>{
            ToastAndroid.show(error.message, ToastAndroid.LONG)
        })
    }

    const sendPasswordResetLink = async (email)=>{
   
        auth.sendPasswordResetEmail(email)
        .then(()=>{
            setLinkSent(true)
            setTimeout(()=>{
                navigation.navigate('SignIn')
                setLinkSent(false)
            },5000)
            ToastAndroid.show(`A reset link has been sent to your ${email}`,ToastAndroid.LONG)
        })
        .catch((error)=>{
            ToastAndroid.show(error.message, ToastAndroid.LONG)
        })
        // auth.sendPasswordResetEmail(email)
        // .then(result =>{
        //     ToastAndroid.show(`Password reset link was been sent to ${email}.`,ToastAndroid.LONG);
        // }).catch(error=>{
        //     ToastAndroid.show(error.message)
        // })
    }

    const sendEmailVerification = async ()=>{
        auth.currentUser.sendEmailVerification()
        .then(()=>{
            setLinkSent(true);
            setTimeout(()=>{
                navigation.navigate('SignIn')
                setLinkSent(false)
            },8000)
        }).catch(error => ToastAndroid.show(error.message))
    }

    return (
        <AuthContext.Provider value={{createAccount,login,sendPasswordResetLink, linkSent,sendEmailVerification}}>
            {children}
        </AuthContext.Provider>
    )
}