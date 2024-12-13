import React from "react"
import styles from './RedButton.module.scss'

interface BtnProps{
    text?: string,
    imageSrc?: string,
    padding?: string,
    targetId?: string
}

export const RedButton:React.FC<BtnProps> = ({text, imageSrc, targetId = '', padding = '20px 50px'}) => {
    const BtnStyle = {
        padding: padding
    }
    
    const handleScrollToSection = () => {
        const targetElement = document.getElementById(targetId);
        if(targetElement){
            targetElement.scrollIntoView()
        }
    }

    return(
        <button className={styles.red_btn} style={BtnStyle} onClick={handleScrollToSection}>
            {imageSrc && <img src={imageSrc} alt="button icon" />} 
            {text}
            </button>
    )
}
