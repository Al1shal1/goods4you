import React from "react"
import styles from './RedButton.module.scss'

interface BtnProps{
    text?: string,
    imageSrc?: string,
    padding?: string
}

export const RedButton:React.FC<BtnProps> = ({text, imageSrc, padding = '20px 50px'}) => {
    const BtnStyle = {
        padding: padding
    }
    
    return(
        <button className={styles.red_btn} style={BtnStyle}>
            {imageSrc && <img src={imageSrc} alt="button icon" />} 
            {text}
            </button>
    )
}
