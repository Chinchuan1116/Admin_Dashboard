import React, {createContext, useContext, useState, useEffect} from 'react';
import { themeColors } from '../data/dummy'
const StateContext = createContext();

const initialState = {
    chat:false,
    cart:false,
    userPorfile:false,
    notification:false,
}
let prevclicked;
export const ContextProvider = ({children}) =>{
    const [activeMenu, setactiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [currentMode, setcurrentMode] = useState("Light")
    const [themeSettings, setThemeSettings] = useState(false);
    useEffect(() => {
        Sync()
      });

    const Sync = ()=>{
        if(localStorage.getItem('themeMode') !== null){
            setcurrentMode(localStorage.getItem('themeMode'));
        }
        if(localStorage.getItem('themeColor') !== null){
            setCurrentColor(localStorage.getItem('themeColor'));
        }
        if(localStorage.getItem('MythemeColor') !== null){
            if(themeColors.length === 6){
                var element = {};
                element.name = 'My theme color';
                element.color = localStorage.getItem('MythemeColor');
                themeColors.unshift(element)
            }else{
                themeColors[0].color = localStorage.getItem('MythemeColor');
            }
        }
    }

    const setMode= (e)=> {
        setcurrentMode(e.target.value);
        setThemeSettings(false);
        localStorage.setItem('themeMode', e.target.value)
    }

    const setColor= (e)=> {
        setThemeSettings(false);
        setCurrentColor(e)
        localStorage.setItem('themeColor', e)
    }

    const handleClick = (clicked)=>{
        if(prevclicked === clicked){
            setIsClicked({...initialState, [clicked]:false})
            prevclicked = "";
        }else{
            setIsClicked({...initialState, [clicked]:true})
            prevclicked = clicked;
        }
    }

    return(
        <StateContext.Provider value={{activeMenu,setactiveMenu,setIsClicked,isClicked,handleClick,screenSize,setScreenSize,currentColor, setColor, currentMode , setMode,themeSettings,setThemeSettings}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)