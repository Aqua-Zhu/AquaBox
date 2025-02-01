import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


export default function TopbarToTop() {

    const hamburgerRef = useRef(null);
    const barlistRef = useRef(null);

    const resetStyle = {
        display: "none"
    }
    // // 預設置頂按鈕隱藏，之後判斷何時出現
    const [buttonStyle, setButtonStyle] = useState(resetStyle);
    const [hamburgerStyle, setHamburgerStyle] = useState({});
    const [listStyle, setListStyle] = useState({});

    const holdHamburger = () => {
        hamburgerRef.current.classList.toggle('click');
        barlistRef.current.classList.toggle('exhamburger');
        //把class拿掉 hamburgerRef.current.classList.remove => 建立ref or state 來檢測漢堡是否為開啟狀態
        setHamburgerStyle({animation: 'none'});
        // void hamburgerRef.current.offsetWidth;
        setHamburgerStyle({ animation: 'glitch-clip .3s .5s' });

        setListStyle({width:'15%'})
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleScroll = ()=>{
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
    }

    useEffect(()=>{
        window.scrollTo(0,0);

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[])


    return (
        <>
            <div id="topbar" >
                <h1><Link to='/'><img src="./images/LOGO-Y.svg" alt="" />Biomonster Vault</Link></h1>
                <nav style={listStyle}>
                    <ul id="barlist" ref={barlistRef}>

                        <li><Link to='/post'>POST</Link></li>
                        <li><Link >ABOUT</Link></li>
                        <li><Link onClick={scrollToTop}>TOP</Link></li>
                        <li><Link to='/select'>SELECT</Link></li>
                    </ul>
                </nav>
                <button className="hamburger" style={hamburgerStyle} ref={hamburgerRef} onClick={holdHamburger}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
            <div className="totopWrapper"style={buttonStyle} >
                <button className="toTop-btn" onClick={scrollToTop}>
                    <img src="./images/totop-1.svg" alt="" className="totop1" />
                    <img src="./images/totop-2.svg" alt="" className="totop2" />
                    <img src="./images/totop-3.svg" alt="" className="totop3" />
                </button>
            </div>

        </>

    )
}