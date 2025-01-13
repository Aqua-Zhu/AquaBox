import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Totop from "./ToTop";
export default function TapbarToTop() {

    const resetStyle = {
        display: "none"
    }
    const [buttonStyle, setButtonStyle] = useState(resetStyle);
    const [topbarStyle,setTopbarStyle] = useState(resetStyle);
    // 預設置頂按鈕隱藏，之後判斷何時出現

    const handleScroll = () => {
        const windowTop = window.innerHeight + 10; //window.innerHeight = 100ㄘ
        if (window.scrollY >= windowTop) {
            setButtonStyle({
                display: "flex",
                animation: "shine .2s linear ",
            })
            setTopbarStyle({
                display: "flex",
                animation: "shineTopbar .4s linear ",
            })
        } else {
            setButtonStyle(resetStyle);
            setTopbarStyle(resetStyle);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const scrollToHit =() => {
        window.scrollTo({
            top:hitRef.current.offseTop,
            behavior:'smooth',
        })
    }
    const scrollToNews =() => {
        window.scrollTo({
            top:newsRef.current.offseTop,
            behavior:'smooth',
        })
    }
    const scrollToAbout =() => {
        window.scrollTo({
            top:aboutRef.current.offseTop,
            behavior:'smooth',
        })
    }



    return (
        <>
            <div id="topbar" style={topbarStyle}>
                <h1 onClick={scrollToTop}><Link to='/'><img src="./images/LOGO.svg" alt="" />Biomonster Vault</Link></h1>
                <nav>
                    <ul>
                        <li><p onClick={scrollToHit}>HIT</p></li>
                        <li><Link onClick={scrollToNews} >NEWS</Link></li>
                        <li><Link >POST</Link></li>
                        <li><Link onClick={scrollToAbout}>ABOUT</Link></li>
                    </ul>
                </nav>
            </div>
            <Totop/>

        </>

    )
}
// export default function TapbarToTop({hitRef,newsRef,aboutRef}) {

//     const resetStyle = {
//         display: "none"
//     }
//     const [buttonStyle, setButtonStyle] = useState(resetStyle);
//     const [topbarStyle,setTopbarStyle] = useState(resetStyle);
//     // 預設置頂按鈕隱藏，之後判斷何時出現

//     const handleScroll = () => {
//         const windowTop = window.innerHeight + 10; //window.innerHeight = 100ㄘ
//         if (window.scrollY >= windowTop) {
//             setButtonStyle({
//                 display: "flex",
//                 animation: "shine .2s linear ",
//             })
//             setTopbarStyle({
//                 display: "flex",
//                 animation: "shineTopbar .4s linear ",
//             })
//         } else {
//             setButtonStyle(resetStyle);
//             setTopbarStyle(resetStyle);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };
//     const scrollToHit =() => {
//         window.scrollTo({
//             top:{hitRef}.current.offseTop,
//             behavior:'smooth',
//         })
//     }
//     const scrollToNews =() => {
//         window.scrollTo({
//             top:{newsRef}.current.offseTop,
//             behavior:'smooth',
//         })
//     }
//     const scrollToAbout =() => {
//         window.scrollTo({
//             top:{aboutRef}.current.offseTop,
//             behavior:'smooth',
//         })
//     }



//     return (
//         <>
//             <div id="topbar" style={topbarStyle}>
//                 <h1 onClick={scrollToTop}><Link to='/'><img src="./images/LOGO.svg" alt="" />Biomonster Vault</Link></h1>
//                 <nav>
//                     <ul>
//                         <li><p onClick={scrollToHit}>HIT</p></li>
//                         <li><Link onClick={scrollToNews} >NEWS</Link></li>
//                         <li><Link >POST</Link></li>
//                         <li><Link onClick={scrollToAbout}>ABOUT</Link></li>
//                     </ul>
//                 </nav>
//             </div>
//             <div className="toTop" style={buttonStyle} >
//                 <button className="toTop-btn" onClick={scrollToTop}>
//                     <img src="./images/TopBtnLight.svg" alt="" />
//                 </button>
//             </div>

//         </>

//     )
// }