import { useState } from "react";

export default function Totop() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const resetStyle = {
        display: "none"
    }

    // 預設置頂按鈕隱藏，之後判斷何時出現
    const [buttonStyle, setButtonStyle] = useState(resetStyle);
    const windowTop = window.innerHeight + 10;

    if (window.scrollY >= windowTop) {
        setButtonStyle({
            display: "flex",
            flexDirection: "column",
            animation: "shine .2s linear ",
        })
    } else {
        setButtonStyle(resetStyle);
    }
    
    return (
        <>
            <div className="totopWrapper" style={buttonStyle} >
                <button className="toTop-btn" onClick={scrollToTop} >
                    <img src="./images/totop-1.svg" alt="" className="totop1" />
                    <img src="./images/totop-2.svg" alt="" className="totop2" />
                    <img src="./images/totop-3.svg" alt="" className="totop3" />
                </button>
            </div>
        </>
    )
}