import React, { createContext, useState, useEffect, useLayoutEffect } from 'react'
// import { Toast } from 'react-native'
import { auth, provider } from '../../../Firebase/index'
import * as firebase from "firebase";
import TrackPlayer, { STATE_PLAYING } from 'react-native-track-player';
import { LogBox } from 'react-native';
import Toast from 'react-native-simple-toast';
export const AuthContext = createContext();

export const AuthContextProvider = ({ children, navigation }) => {

    const [linkSent, setLinkSent] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [showSearchInput, setShowSearchInput] = useState(false);

    const toggleSearch= ()=>{
        setShowSearchInput(!showSearchInput)
        
      }

    useEffect(()=>{

      auth.onAuthStateChanged(authState =>{
          if(authState){
              setIsLoggedIn(true)
          }
      })

    },[])
  
    // const [song,setSong] = useState(null)
    const [music, setMusic] = useState([])
   const [filteredMusic,setFilteredMusic] =  useState([])
    const [songInfo,setSongInfo] = useState(null)
    const [playing,setPlaying] =  useState(false)
const [eventModal,setEventModal] =  useState(false)
const [eventDetails,setEventDetails] = useState(null)
    const data = [
        {
            title: "Lit Music",
            url: require("./music/test.mp3"),
            artist: "Lit Programmer",

            artwork:
                "https://yt3.ggpht.com/ytc/AAUvwnhdclmrnN0BlBH9oLvp40Ltzu5AZYENcgnPcymuzQ=s900-c-k-c0x00ffffff-no-rj",

            id: "Lit Music",
        },
        {
            title: "bad liar",
            url: require("./music/test2.mp3"),
            artist: "Imagine Dragons",
            artwork:
                "https://yt3.ggpht.com/ytc/AAUvwnhdclmrnN0BlBH9oLvp40Ltzu5AZYENcgnPcymuzQ=s900-c-k-c0x00ffffff-no-rj",
            id: "bad liar",
        },
        {
            title: "faded",
            url: require("./music/test3.mp3"),
            artist: "Alan Walker",
            artwork:
                "data:image/jpeg;base64,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",
            id: "faded",
        },
        {
            title: "hate me",
            url: require("./music/test4.mp3"),
            artist: "Ellie Goulding",
            artwork:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUAAAD///8qKiohISEmJiYnJycZGRkcHBwJCQkjIyMXFxcMDAweHh4FBQUQEBAaGhrm5uY3NzdjY2NoaGjMzMzx8fGPj4+tra2kpKTU1NRUVFS8vLx6enqZmZng4OCxsbGCgoJISEh9fX3BwcFFRUVbW1ufn5/i4uJPT0+SkpJxcXE4ODhHR0ft7e0wMDCHh4cMhhjNAAAM5UlEQVR4nO2cC3PavBKGhSVZlizbCblBSSEkIU3pl/D//93ZlXyRjU2aQluXs+9MZoKRJT3WbbVawxiJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSifT/rKzU367H71KWpV7J367J71KWGqc8PdNGTFKjrM2K2BwmzFxvTqCt80FBP0hG19mhBZUW7Htu47y3bkDllGF3znMTK6t6Za0qDFAm40KEFrQ6YrMJ06qXEFrNN0+CgKawWgxKa1uMrLNDpR3gy+SGCWt6qgaAMERjhRXPcqM4NOGgVBErNTLCChAIIx7vT6ZZkhtrOcutyeH/gsurg9qu0w+G8x8Vto8VDhAJtdkjdIBCsKdnq/IkAdgvk4NaZsWY2tBNMhH7Ohki9ICSrSaX3JokjTV/PQg4Z6PqpVB/5bvoAKEDhBSryeRS8zhNleAH2/CaWT0qQuijsgTsI6wAFxMk1EWa28OEc8YlrDnjWS0yaELfRXsJQ8CfIpwzK2FCGg8gywDgfTJMmLox6ABLwoO9FFpQjAuQJYaLy2FCHKUVoCdMCz08l15jFx0XIIOp8QAhNCGvAUtCwwcJr7EFxzQGUTA1HiLEUVoBesIETPT/5tdey/pO/LRgdnyAQHiwDWFeYZM2IUw9efX9pmk9FNdj66LsQ0LDow4hWN6x5UJGoHjaEMJHgSb32AA/IExi3SZUKW4zTAxmqogi1SIUaJmPDvDzhLBE4lbKoDFrQ0Jp3ebqr5EM6fOErHRagS3UItQ9u5Ix6JcInWASahHyvp3lCHQEoSLCcYgIz5AwPjvCQpw9YacNA4azIZQ2IBQ2dAmfA2GbQYsItgdofGU93/6jhLh7uKkqOmPlDgGd2+w8CGEHKNlTDbEBRNkcPJwJocgfaojJlFnNrYWNEM6pZ0GIjpq8IZwsvqzXr+9KnQ0hDETopneTtm4TbpDlLAizvNDa3LQJd4mOz4cQfb7JtkOYCoXuprMghEaMuWSzDqG0Z0To/dqr8yWswhS+/gxh8U8S+mNuyTZvNcttUo5DdOqHhMHOA/ZdIaG0/VEc41DizoFzdlsx7hLu5tKOzxvPgOubUsNDf6noj+IYifAsv+BCMjadXc8vLt4eU2s8YczZRambSx5SwEKqNm/ldwsGj2TEhC4MCHuqjMsLeMDCfP9VdSoXi1F/SoC+GZVKjSn8ok8wo1bnEVKg6e3qi0fACi66qxywAwp3gKHdAYbUvDRkx6zMHUgU1nJumwOIrDyk0GCOx+1jiTK9+0rFI4uCGlB1IuGC73x9HXfuoxa7xxIYwFd9l47yyKJXe3G07lMZtld+kzVfwVWMSfXffSL/31P1xIdM1o97/8qBu8vmNXXqrLq9amCMueyDyZrPdaPv9YcT8LlTPxdv58ZMis8ehlFz5WCJLuJSwRCFzXGZuMyQe1V5tB8KtnDJ3b7BOi9CejpIl7viMPFJKQTMDEVsTIyzBF6BuZN/cLiZ+IjLqJxSsXZVhpETXm5PNjg5+4jNclIOb5B1jOZpGN1ix0UkCswvh2VPo2Ci1wa/N3q/gp0MwCCoP6VcxbFbRHQeJDI8XDBwnSmKwhS4hOITxpUlkqoswlXiVIfimV+4pGHv97PFYnX7yph/8il73q0Wi9njJculaK92HUIwbV4WXk/3OXpytMzZ+na1qPS0jlVj0wEglMnNfwXmiqsqIBkmt3fX8+Vyvtr9YExL6DqnOBbHrQOXlm2b0JCXNIvADP1em9rLB2Zcef3FuaCTeZV4xqCXCc4eL1p7yqnxno8aUGj2bWvwwSEtlHc/D5K/zSIGu7ETWEJldOV62arOA2P3Lc/F2wY9+gPl4Yl2Q/iCcRf5ZTtDJPSejxpQwC1XMQaggM0r2ONb54bJKs34QFz5ZwBhf8sj9tDN/WnRvQIV10VezXytid4FnbQI0/2wqGksyv1xAwiEaAJyaeL53g2gbWKPNvYS56P43pf93iNlklcGt3+5pCJMOoQift6/fWqEDyWqALGRr+IIpk2ZbfbTO23i/Zjkz8mFj6bbgfw7+g7bWOynmVvI4a8qPDO6RcjZzf7d0IaOsAqadr0YCGE5YoMV2KhjIzicr1D8HOBk8myxn+J+WNlUNXNrl7Dl8agJjfcLOOed9oCTKwNj1kx7kp+K0EUA7w25Ic1dP8WdomBXWbMb3CPsaUKcaZwXJ8GHWgI6QhENFvjt3R7ZS53P/n2wgD29YnChCwp+vAneLukS9na6crXAgM0a0BGy7qxb6yJXx8407mQp6FLXu4e79vNfPeyak6fJgkWCcwScXARvl3RnmsbzuLyrtHr2Kz6OiybtVS6Sx7C8m8Xt427mv78A06Y4crXI0FfWzNNXUFlmgnn74h23Qs3LBTd4uCbd4nIR+Ae7bVj/+xSUZbSfpvCh1rbAVcJZsA6+3UNCfAHwHR7StzQX9tgVv+3v3OFSHRnVtOJzhlfYVX0BIw796nmBkScDhHWd16w03jEb4SwG54BsCBkLmvDJ24vwx9nVvMjd6nQcIcYhNMOwNEebkyYXFYpX6hq9qhKwRdjtpfXAes2sIyw3GGi/uNc3QsKmy6wYhzSa41MBIw7Wz+PfrUmV1rX1ceHsSRklt9WVu/IKu66ubFNR2j+HCOvkPjTYewFyjYhxDN0gJGwe8JJpd4Ru/DZRO3fQsTZbqkSLUMCeIEpDQm3xpae6yjBOdnXqQcLmGGf58rXS7gtjXGquZYvwvk77mkf4Mk25e/Y7/aPN7tYrPFhnBduMkBA2FNirAsJdkHqIcMgGWzwz12NDwnpIzF0oS2n3Vo6fYwH32lDHsW0TYrcKe+k0TD1EyPa2CZVwqLUJ66x3WPzJXY5dQv4h4UOQephwb6tSa5naqDWXNrNSIX/D8dSRhJXN6BadluU9aKbAfVyEhPXSdMklP/3hzZGExQChsKrPMvV6ggcQEH4bG+FVkLo+8YVlNSDcgZlgfgwOxcmUhYT1bZt4FL30fl39d8NkFcWHp4jB7LHN0TKKA3O2rXmLsE72NZxpTub6/jxhs0C/WqkNTu7OEAtMo02BdoJmX+q7OnoPCV+C4mWzWrSdCH+SsJkZFlgj7/u1MmpqOoG9B1heIiqYmt5+nXm9zJpu+xASNrvfbRahpY3udljw4/gkP1HxC4SNGbk2aIbBdh+sFK4nQTboUXYmtAkLWzbZhnZp/chucg57M1vEaLRpbfkBD+3vJKy/nLylBWwYBBquupkSvbvUEyKk9OcC2jb22XWLsPEwLJlyt7qb2Xsm+PFvRP8CYeByuLgEWxkpGA/Wv2esphBRFCA6wsreg/7dEGZ58Go7bEfL+wxYc1N2it3T5wlbXp1ZhLnw0PEE5mWk056y3oM43IYw1SyckGbCJ95iimnp2/vDhPnlJNTbfN523n+B0Zltq5dIGwWeg/uAMBfFj9b9y8Xdqipuw472YnyeMBHBrNkj9ORosReu2VJo06AnajjDaX6sr+3zhLkUB4zOyVuiBS4VhxCvWZswMIf2tFZ/njCKrBg2Op9zyS0erbUj/Vr60iXU+eAzO9oj/HlC56O+HEJ8hemvgNW6+RWCfa2YDQhjnHitGULcFMcS2g8IIxsXXUIh8+hbtyqomx9ufndWziDiktlw9xTj8bKwbMCKfT6+l+oOIVhgeasNDZ5NBYR4qi9U3zhbMOiieP5W/Z5LH+KcqdYeHzYUyp1E9W2an/JYHenzTmMe+mmAxygdtqFW+MpySAh2mqvRumNXz2Fqr07ChxFnzLa9GDGU4H88pJh1+j7kqLg5crXAHwSq3UZveBKB4Xb1aeKKaZO3vPCPBsaZO/Yv2PNdXdG31Ssz+MJQaWX5HyYSHcSb1SVDI082fpytwZeMMAxDahbv5jXkcrZmueBHO0zxR51+3JXm/3cGTwwKM5vywmybogvX2GxXXrh7jVVZIyEt2CnTh9vbh6tLxgoYT6oJnXCI+PtnVVaz28dXxmDDhZ7QpLp891/hurWPlRAJy9fb3ffd4wZsJSWdR/jo40Nj4/oTZghl8TpGJLVu3ih4/RyN+9mHxIenSIlb1iw1Wnq+IPzFdVSuw6KUDyDBOB0W5ld268K5x22euhOxKgLn2C0iRtIo73gX2sbG7c1ixbULHfJFQGu4sMs6cigL4g6xz/kYo/2QJ4xadAmq/YVPlbvrupUfy3xyroOopY8CsX6O0IVrFWFoVyf8q3WlaEK3fEyiu6zKOLFOZbznuvnhNkzlJtre/KqwrybO7ES/MOELzIP4vDpeD4vYuxI+1ep6OhTZF9xY3Zux4fw+Fyv4adBuft0rv+4YGrrxX4k3JZFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJFJb/wMhSgs3/UQEiwAAAABJRU5ErkJggg==",
            id: "hhate me",
        },
        {
            title: "Solo",
            url: require("./music/test5.mp3"),
            artist: "Clean Bandit",
            artwork: "https://i1.sndcdn.com/avatars-000391400823-mxc6bv-t240x240.jpg",
            id: "Solo",
        },
        {
            title: "without me",
            url: require("./music/test6.mp3"),
            artist: "Halsey",
            artwork:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwfkuxo5bIGwXxP0aW3gZxIAP9hSKbfYbDg&usqp=CAU",
            id: "without me",
        },
    ];

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    const getSelectedSong = (data) => {
        setSong(data)
        setModalVisible(true)

    }

    useEffect(() => {
     
        setMusic(data)
        
    }, [])

    const toggleEvent =(data)=>{
        setEventModal(!eventModal)
        setEventDetails(data)
    
    }


    useLayoutEffect(() => {
        LogBox.ignoreLogs(['Setting a timer for a long'])
        TrackPlayer.updateOptions({
            stopWithApp: true,
            capabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
                TrackPlayer.CAPABILITY_SEEK_TO,

                TrackPlayer.CAPABILITY_SKIP
            ],
            compactCapabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
                TrackPlayer.CAPABILITY_SEEK_TO,

                TrackPlayer.CAPABILITY_SKIP
            ]
        })
      
    }, [])

    // const handleSearch = (textToSearch)=>{
    //    let text = textToSearch.toLowerCase()
    //     let results = music.filter((item)=>{
    //         return item.title.toLowerCase().match(text)
    //     })
    //   setMusic(results)
    //   setFilteredMusic(results)
        
    // }

    const handleSearch = (text)=>{
        if(text){
            const newData =  music.filter((item)=>{
               
 const itemData =  item.title ? item.title.toUpperCase()
 :''.toUpperCase();
 const textData =  text.toUpperCase()
 return itemData.indexOf(textData) > -1;
            });
            setFilteredMusic(newData)
            setMusic(newData)
            // setseacrch(text)
        }else{
            setFilteredMusic(music)
        }
    }



    const playSong = (songToPlay) => {
        TrackPlayer.setupPlayer()
            .then(() => {
                TrackPlayer.add(songToPlay)
                    .then(() => {

                        TrackPlayer.play().then(() => {
                            TrackPlayer.getCurrentTrack().then(async(trackId) => {
                             const data =   await TrackPlayer.getTrack(trackId)
                                    
                                    setSongInfo(data)
                                    setModalVisible(true)
                            }).catch(error => alert(error))
                            console.log("Song is playing")
                            setPlaying(true)
                        }).catch(error => alert(error))
                    }).catch(error => alert(error))
            }).catch(error => alert(error))
    }















    const createAccount = async (email, password, username) => {

        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                userCredential.user.updateProfile({
                    displayName: username
                }).then(() => {
                    // alert("Updated Successfuly")
                }).catch(error => alert("Unable to update profile."))
                Toast.show("Account created sucessfully.", Toast.LONG)
                navigation.navigate('SignIn')
            }).catch(error => {

                Toast.show(error.message, Toast.SHORT)
            })
    }

    const login = async (email, password) => {
       
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                Toast.show(`Logged in as ${userCredential.user.displayName}`, Toast.LONG)
            })
            .catch(error => {
                Toast.show(error.message, Toast.LONG)
            })
    }

    const sendPasswordResetLink = async (email) => {

        auth.sendPasswordResetEmail(email)
            .then(() => {
                setLinkSent(true)
                setTimeout(() => {
                    navigation.navigate('SignIn')
                    setLinkSent(false)
                }, 5000)
                Toast.show(`A reset link has been sent to your ${email}`, Toast.LONG)
            })
            .catch((error) => {
                Toast.show(error.message, Toast.LONG)
            })
    
    }

    const sendEmailVerification = async () => {
        auth.currentUser.sendEmailVerification()
            .then(() => {
                setLinkSent(true);
           
                setTimeout(() => {
                    navigation.navigate('SignIn')
                    setLinkSent(false)
                }, 8000)
            }).catch(error => Toast.show(error.message))
    }

    const logout = async ()=>{
        auth.signOut().then(()=>{
         
            setIsLoggedIn(false)
        })
    }
    return (
        <AuthContext.Provider value={{
            playSong,
            getSelectedSong,
            handleSearch,
            toggleEvent,
            eventDetails,
            eventModal,
            playing,
            toggleModal,
            showSearchInput,
            toggleSearch,
            isLoggedIn,
            logout,
            setPlaying,
            music,
            //  song , 
            songInfo,
            createAccount,
            toggleModal,
            modalVisible,
            login,
            sendPasswordResetLink,
            linkSent,
            sendEmailVerification
        }}>
            {children}
        </AuthContext.Provider>
    )
}