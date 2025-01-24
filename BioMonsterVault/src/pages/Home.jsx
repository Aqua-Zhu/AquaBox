import { Link } from "react-router-dom";
import Rain from "../component/Rain";
import { useEffect, useRef, useState } from "react";

export default function Home() {

    const hitRef = useRef(null);
    const newsRef = useRef(null);
    const aboutRef = useRef(null);
    const bannerRef = useRef(null);
    const titleRef = useRef(null);
    const hit1Ref = useRef(null);
    const hit2Ref = useRef(null);
    const hit3Ref = useRef(null);
    const news1Ref = useRef(null);
    const news2Ref = useRef(null);
    const news3Ref = useRef(null);
    const spaceXRef = useRef(null);
    const hamburgerRef = useRef(null);
    const barlistRef = useRef(null);
    // const newscoordinateRef = useRef(null);


    // const hitRefs = [hit1Ref, hit2Ref, hit3Ref];

    const resetStyle = {
        display: "none"
    }
    // 預設置頂按鈕隱藏，之後判斷何時出現
    const [buttonStyle, setButtonStyle] = useState(resetStyle);
    const [topbarStyle, setTopbarStyle] = useState(resetStyle);
    const [hitTitleStyle, setHitTitleStyle] = useState(resetStyle);
    const [hit1Style, setHit1Style] = useState(resetStyle);
    const [hit2Style, setHit2Style] = useState(resetStyle);
    const [hit3Style, setHit3Style] = useState(resetStyle);
    const [spaceXStyle, setSpaceXStyle] = useState({});
    const [spaceX2Style, setSpaceX2Style] = useState({});
    const [newsTitleStyle, setNewsTitleStyle] = useState(resetStyle);
    const [hamburgerStyle, setHamburgerStyle] = useState({});
    const [news1Style, setNews1Style] = useState({})
    const [news2Style, setNews2Style] = useState({ paddingBottom: '70px' })
    const [news3Style, setNews3Style] = useState({ paddingBottom: '70px' })


    //過場動畫
    const handleScroll = () => {
        /* topbar */

        let gap = 350;
        const windowTop = window.innerHeight + 10;
        if (window.scrollY >= windowTop) {
            setButtonStyle({
                display: "flex",
                flexDirection: "column",
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

        const bannerPostion = bannerRef.current.offsetHeight;
        const bannerTarget = (bannerPostion / 3) - 100;
        /* hitTitle */
        if (window.scrollY >= bannerTarget) {
            setHitTitleStyle({
                display: "flex",
                flexDirection: 'column',
            });
        } else {
            setHitTitleStyle(resetStyle);
        }

        /* hit1 */
        const hit1Position = bannerTarget + titleRef.current.offsetHeight;
        if (window.scrollY > hit1Position + gap) {
            setHit1Style({
                display: "flex",
            })
            setTimeout(setSpaceXStyle(resetStyle), 500);

        } else {
            setHit1Style(resetStyle);
            setSpaceXStyle({});
        }

        /* hit2 */
        const hit2Position = hit1Position + hit1Ref.current.offsetHeight;
        if (window.scrollY > hit2Position + gap) {
            setTimeout(
                setHit2Style({
                    display: "flex",
                }), 700);

        } else {
            setHit2Style(resetStyle);
        }

        /* hit3 */
        const hit3Position = hit2Position + hit2Ref.current.offsetHeight;
        if (window.scrollY > hit3Position + gap * 2) {
            setTimeout(
                setHit3Style({
                    display: "flex",
                }), 700);
        } else {
            setHit3Style(resetStyle);
        }

        /* newsTitle */
        const newsPosition = hit3Position + hit3Ref.current.offsetHeight;
        if (window.scrollY > newsPosition + gap * 2) {
            setTimeout(
                setNewsTitleStyle({
                    display: "flex",
                    flexDirection: 'column',
                }), 700);
            setSpaceX2Style(resetStyle);
        } else {
            setNewsTitleStyle(resetStyle);
            setSpaceX2Style({});
        }

        /* news1 */

        // console.dir(news1Ref);//476
        // console.dir(newsRef);//2535
        let news1Top = newsRef.current.offsetTop + news1Ref.current.offsetTop - 180; //2831
        let moveY = window.scrollY - news1Top;
        // console.log(moveY);//1253

        // 設定scrollspace讓過場走完 => <div id="scrollSpace"></div>

        // 三個區域要疊在同一個位置上 => position:abosulte
        // 最後消失 => opcity:0;
        // news1 置中 => 4617 
        // new1 要消失的位置 => 5054
        // new2 出現 => 4973 
        // new2 要消失的位置 => 5046/5135
        // new3 停止 => 5184


        // const disableScroll = (duration = 1000) => {
        //     // 禁用滾動且補償滾動條寬度
        //     document.body.style.overflow = 'hidden';
        //     document.body.style.paddingRight =' 10px';

        //     // 延遲後恢復滾動
        //     setTimeout(() => {
        //         document.body.style.overflow = 'auto';
        //         document.body.style.paddingRight = ''; // 恢復原始 padding
        //     }, duration);
        // };

        /* 手機板取消 */
        if (window.innerWidth > 640) {

            /* 其他裝置執行 */
            if (window.scrollY > news1Top && moveY < 1255) {
                setNews1Style({
                    // 往右移動且向下位移scrollY的距離才能在視覺上平行向右
                    // scale值隨scrollY的值增加
                    transform: `translate(${moveY}px , ${moveY}px) scale(${1 + moveY / 1000})`,
                    //正常顯示
                });
                setNews2Style({ transform: `translateY(${moveY - 40}px) scale(${1 + moveY / 2300})`, });
                setNews3Style({ transform: `translateY(${moveY - 50}px) scale(${1 + moveY / 3200})`, });
                if (window.scrollY > 4750 && window.scrollY < 4900) {
                    setNews1Style({
                        transform: `translate(${moveY}px , ${moveY}px) scale(${1 + moveY / 1000})`,
                        opacity: 500 / (window.scrollY - 3617),
                    })
                    setNews2Style({
                        transform: `translate(${moveY - 270}px , ${moveY - 40}px) scale(${1 + moveY / 2300})`,
                        opacity: 0.4 + (window.scrollY - 3750) / 3000,
                        //(window.scrollY - 4750)/1500
                    });
                    setNews3Style({ transform: `translateY(${moveY - 50}px) scale(${1 + moveY / 3400})`, });
                } else if (window.scrollY >= 4900 && window.scrollY < 5100) {
                    // new1消失

                    setNews1Style({
                        transform: `translate(${moveY}px , ${moveY}px) scale(${1 + moveY / 1000})`,
                        //快淡出
                        opacity: 150 / (window.scrollY - 3617),
                    })
                    setNews2Style({
                        transform: `translate(${moveY - 270}px , ${moveY - 40}px) scale(${1 + moveY / 2300})`,
                        zIndex: '16',
                        opacity: 1,
                    });
                    setNews3Style({
                        transform: `translate(${moveY - 440}px ,${moveY - 50}px) scale(${1 + moveY / 3400})`,
                        opacity: 0 + (window.scrollY - 3900) / 3500,
                    });
                    // disableScroll();
                } else if (window.scrollY >= 5100 && window.scrollY <= 5184) {
                    // new2消失

                    setNews1Style({ opacity: 0, })
                    setNews2Style({
                        transform: `translate(${moveY - 270}px , ${moveY - 40}px) scale(${1 + moveY / 2300})`,
                        //快淡出
                        opacity: 100 / (window.scrollY - 4900),
                    })
                    setNews3Style({
                        transform: `translate(${moveY - 440}px ,${moveY - 50}px) scale(${1 + moveY / 3400})`,
                        zIndex: '17',
                        opacity: 1,
                    });
                } else if (window.scrollY > 5160) {
                    // console.log(moveY);
                    setNews1Style({ opacity: 0, })
                    setNews2Style({
                        transform: `translate(${moveY - 270}px , ${moveY - 40}px) scale(${1 + moveY / 2300})`,
                        //快淡出
                        opacity: 100 / (window.scrollY - 4900),
                    });
                    setNews3Style({ // moveY=856

                        transform: 'translate(265px,650px) scale(1.23)',
                        // transform: `translate(${moveY - 440}px ,${moveY - 50}px) scale(${1 + moveY / 3400})`,
                        zIndex: '17',
                        opacity: 1,
                    });
                }
            }
            else {
                // setNews1Style({});
                // setNews2Style({});
                // setNews3Style({});
            }
        } else {
            setNews1Style({});
            setNews2Style({});
            setNews3Style({});
        }

    };
    //漢堡動畫
    const holdHamburger = () => {
        hamburgerRef.current.classList.toggle('click');
        barlistRef.current.classList.toggle('exhamburger');
        //把class拿掉 hamburgerRef.current.classList.remove => 建立ref or state 來檢測漢堡是否為開啟狀態
        setHamburgerStyle({ animation: 'none' });
        // void hamburgerRef.current.offsetWidth;
        setHamburgerStyle({ animation: 'glitch-clip .3s .5s' });
    };


    useEffect(() => {
        // window.scrollTo(0,0);

        // // 看完banner動畫才能滾動
        // document.body.style.overflow = 'hidden';
        // setTimeout(()=>{
        //     document.body.style.overflow = 'auto';
        // },3000)

        //滾到指定位置，讓hitTitile出現
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const scrollToHit = () => {
        window.scrollTo({
            top: hitRef.current.offsetTop,
            behavior: 'smooth',
        })
    };
    const scrollToNews = () => {
        window.scrollTo({
            // top: newscoordinateRef.current.offsetTop,
            top: newsRef.current.offsetTop,
            behavior: 'smooth',
        })
    };
    const scrollToAbout = () => {
        window.scrollTo({
            top: aboutRef.current.offsetTop,
            behavior: 'smooth',
        })
    };


    return (
        <>
            {/* background */}
            <Rain />
            {/* topbar & totop */}
            {/* <TapbarToTop aboutRef={aboutRef} newsRef={newsRef} hitRef={hitRef} /> */}
            <div id="topbar" style={topbarStyle}>
                <h1 onClick={scrollToTop}><Link to='/'><img src="./images/LOGO-Y.svg" alt="" />Biomonster Vault</Link></h1>
                <nav>
                    <ul id="barlist" ref={barlistRef}>
                        <li><Link onClick={scrollToHit}>HIT</Link></li>
                        <li><Link onClick={scrollToNews} >NEWS</Link></li>
                        <li><Link to='/post'>POST</Link></li>
                        <li><Link onClick={scrollToAbout}>ABOUT</Link></li>
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
            <div className="totopWrapper" style={buttonStyle} >
                <button className="toTop-btn" onClick={scrollToTop} >
                    <img src="./images/totop-1.svg" alt="" className="totop1" />
                    <img src="./images/totop-2.svg" alt="" className="totop2" />
                    <img src="./images/totop-3.svg" alt="" className="totop3" />
                </button>
            </div>




            {/* Banner區 */}
            <header id="banner" ref={bannerRef}>
                <img src="./images/banner-border.png" alt="" />
                <h2>Biomonster Vault</h2>
                <button id="bannerBtn">
                    <span id="bannerBtnBlock1"></span>
                    <span id="bannerBtnBlock2"></span>
                    <p id="bannerBtnText"><Link to='/post'>POST &gt;</Link></p>
                </button>
            </header>
            <main>
                {/* hit */}
                <section id="hit" ref={hitRef}>
                    <header className="title" style={hitTitleStyle} ref={titleRef} >
                        <figure id="hitTop">
                            <img src="./images/TitleWrapperShort.svg" className="titleTop1"></img>
                            <img src="./images/TitleInnerShort.svg" className="titleTop2"></img>
                            <img src="./images/TitleChargeShort.svg" className="titleTop3"></img>
                        </figure>

                        <div className="titlewrapper">
                            <h2 className="h2main glitch" data-text='HIT' >HIT</h2>
                            <p className="h2bottom glitch" data-text='HIT'>HIT</p>
                        </div>

                        <figure id="hitBottom">
                            <img src="./images/TitleBottomWrapperTop.svg" alt="" className="WrapperTop hittopping" />
                            <img src="./images/TitleBottomInner1-yellow.svg" alt="" className="Inner1 hittopping" />
                            <img src="./images/TitleBottomInner2-yellow.svg" alt="" className="Inner2 hittopping" />
                            <img src="./images/TitleBottomInner3-yellow.svg" alt="" className="Inner3 hittopping" />
                            <img src="./images/TitleBottomInner4-2-yellow.svg" alt="" className="Inner4 hittopping" />
                            <img src="./images/TitleBottomInner4-yellow.svg" alt="" className="Inner4-2 hittopping" />
                            <img src="./images/TitleBottomInner5-yellow.svg" alt="" className="inner4-3 hittopping" />
                            <img src="./images/TitleInnerShort.svg" alt="" className="Inner5 hittopping" />
                            <img src="./images/TitleBottomWrapperBottom.svg" alt="" className="WrapperBottom hittopping" />

                        </figure>
                    </header>
                    <div id="spaceX" style={spaceXStyle} ref={spaceXRef}></div>
                    <article className="hit1 hit01" ref={hit1Ref} style={hit1Style}>
                        <figure className="hitimg">
                            <img className="hit1img" src="./images/mon1.jpg" alt="" />
                            <img className="hitWrapper" src="./images/hitborderV-blue.png" alt="" />
                        </figure>
                        <div className="hit1ContentWrapper">
                            <div id="line1"><img src="./images/FileLineMain-blue.svg" alt="" /></div>
                            <div className="hit1Content hitContent">
                                <div className="lineBlockStr hitborder"><img src="./images/FileLineBlockStrike-blue.svg" alt="" /></div>
                                <div className="lineBlockFill hitborder"><img src="./images/FileLineBlockFill-blue.svg" alt="" /></div>
                                <div className="hitR hitborder"><img src="./images/FileContentBlock.svg" alt="" /></div>
                                <div className="hitL1 hitborder"><img src="./images/FileContentBlock01.svg" alt="" /></div>
                                <div className="hitL2 hitborder"><img src="./images/FileContentBlock02.svg" alt="" /></div>
                                <div className="hitL3 hitborder"><img src="./images/FileContentBlock03.svg" alt="" /></div>
                                <h3>Creeper</h3>
                                <p className="type">predatory/mammal/migratory</p>
                                <p className="intro">The Samoyed is a breed of medium-sized herding dogs with thick, white, double-layer coats. They are spitz-type dogs which take their name from the Samoyedic peoples of Siberia. Descending from the Nenets Herding Laika</p>
                                <p className="time">-2024/6/4</p>
                            </div>
                        </div>
                    </article>
                    <article className="hit1 hit02" ref={hit2Ref} style={hit2Style}>
                        <figure className="hitimg">
                            <img className="hit1img" src="./images/mon2.jpg" alt="" />
                            <img className="hitWrapper" src="./images/hitborderV-yellow.png" alt="" />
                        </figure>
                        <div className="hit1ContentWrapper">
                            <div id="line1"><img src="./images/FileLineMain.svg" alt="" /></div>
                            <div className="hit1Content hitContent">
                                <div className="lineBlockStr hitborder"><img src="./images/FileLineBlockStrike.svg" alt="" /></div>
                                <div className="lineBlockFill hitborder"><img src="./images/FileLineBlockFill.svg" alt="" /></div>
                                <div className="hitR hitborder"><img src="./images/FileContentBlock.png" alt="" /></div>
                                <div className="hitL1 hitborder"><img src="./images/FileContentBlock01-yellow.png" alt="" /></div>
                                <div className="hitL2 hitborder"><img src="./images/FileContentBlock02-yellow.png" alt="" /></div>
                                <div className="hitL3 hitborder"><img src="./images/FileContentBlock03-yellow.png" alt="" /></div>
                                <h3>Uiiaiu</h3>
                                <p className="type">predatory/mammal/migratory</p>
                                <p className="intro">The Samoyedis a breed of medium-sized herding dogs with thick, white, double-layer coats. They are spitz-type dogs which take their name from the Samoyedic peoples of Siberia. Descending from the Nenets Herding Laika</p>
                                <p className="time">-2024/11/12</p>
                            </div>
                        </div>
                    </article>
                    <article className="hit1 hit03" ref={hit3Ref} style={hit3Style}>
                        <figure className="hitimg">
                            <img className="hit1img" src="./images/mon3.jpg" alt="" />
                            <img className="hitWrapper" src="./images/hitborderV-blue.png" alt="" />
                        </figure>
                        <div className="hit1ContentWrapper">
                            <div id="line1"><img src="./images/FileLineMain-blue.svg" alt="" /></div>
                            <div className="hit1Content hitContent">
                                <div className="lineBlockStr hitborder"><img src="./images/FileLineBlockStrike-blue.svg" alt="" /></div>
                                <div className="lineBlockFill hitborder"><img src="./images/FileLineBlockFill-blue.svg" alt="" /></div>
                                <div className="hitR hitborder"><img src="./images/FileContentBlock.svg" alt="" /></div>
                                <div className="hitL1 hitborder"><img src="./images/FileContentBlock01.svg" alt="" /></div>
                                <div className="hitL2 hitborder"><img src="./images/FileContentBlock02.svg" alt="" /></div>
                                <div className="hitL3 hitborder"><img src="./images/FileContentBlock03.svg" alt="" /></div>
                                <h3>Elsvt</h3>
                                <p className="type">predatory/mammal/migratory</p>
                                <p className="intro">The Samoyedis a breed of medium-sized herding dogs with thick, white, double-layer coats. They are spitz-type dogs which take their name from the Samoyedic peoples of Siberia. Descending from the Nenets Herding Laika</p>
                                <p className="time">-2024/12/25</p>
                            </div>
                        </div>
                    </article>
                    <div id="spaceX2" style={spaceX2Style}></div>
                </section>
                {/* news */}
                {/* <div id="newscoordinate" ref={newscoordinateRef}></div> */}
                <section id="news" ref={newsRef} >
                    <header className="title" id="newsTitle" style={newsTitleStyle}>
                        <figure id="newsTop">
                            {/* <img src="./images/TitleTopShort-blue.svg" alt="" /> */}
                            <img src="./images/TitleWrapperShort.svg" alt="" className="titleTop1" />
                            <img src="./images/TitleInnerShort-blue.svg" alt="" className="titleTop2" />
                            <img src="./images/TitleChargeShort-blue.svg" alt="" className="titleTop3" />
                        </figure>
                        <div className="titlewrapper">
                            <h2 className="h2main glitch" data-text='NEWS' > NEWS</h2>
                            <p className="h2bottom glitch" data-text='NEWS'>NEWS</p>
                        </div>
                        <figure id="newsBottom">
                            <img src="./images/TitleBottomWrapperTop.svg" alt="" className="WrapperTop newstopping" />
                            <img src="./images/TitleBottomInner1.svg" alt="" className="Inner1 newstopping" />
                            <img src="./images/TitleBottomInner2.svg" alt="" className="Inner2 newstopping" />
                            <img src="./images/TitleBottomInner3.svg" alt="" className="Inner3 newstopping" />
                            <img src="./images/TitleBottomInner4.svg" alt="" className="Inner4 newstopping" />
                            <img src="./images/TitleBottomInner5.svg" alt="" className="Inner5 newstopping" />
                            <img src="./images/TitleBottomWrapperBottom.svg" alt="" className="WrapperBottom newstopping" />
                        </figure>
                    </header>
                    <article className="newsContent" id="news-1" style={news1Style} ref={news1Ref}>
                        <div className="newsLine1">
                            {/* <h3 className="newsLine1Text newsLineText">spaceship</h3> */}
                            {/* <p className="newsLine1Textsec newsLineText">12.02.24</p> */}
                            <div className="topping">
                                <img className="shipblock" src="./images/NewsTitleMain01.svg" alt="" />
                                <img className="NewsTitle01" src="./images/NewsTitle01.svg" alt="" />
                                <img className="NewsTitle02" src="./images/NewsTitle02.svg" alt="" />
                                <img className="NewsTitle03" src="./images/NewsTitle03.svg" alt="" />
                                <img className="FileLineBlockStrike" src="./images/FileLineBlockStrike-blue.svg" alt="" />
                                <img className="FileLineBlockFill" src="./images/FileLineBlockFill-blue.svg" alt="" />
                                <img className="NewsTitleLine" src="./images/NewsTitleLine.svg" alt="" />
                            </div>

                        </div>
                        <figure className="newsImg">
                            <img className="ship" src="./images/ship1.jpg" alt="" />
                            <div className="shipwrapper">
                                <img src="./images/NewsImgBorder.svg" alt="" />

                                <img className="newsborder BorderBMain" src="./images/NewsImgBorderBMain.svg" alt="" />
                                <img className="newsborder BorderB1-1" src="./images/NewsImgBorderB1-1.svg" alt="" />
                                <img className="newsborder BorderB1-2" src="./images/NewsImgBorderB1-2.svg" alt="" />
                                <img className="newsborder BorderB1-3" src="./images/NewsImgBorderB1-3.svg" alt="" />
                                <img className="newsborder BorderB1-4" src="./images/NewsImgBorderB1-4.svg" alt="" />


                                <img className="newsborder BorderB2-1" src="./images/NewsImgBorderB2-1.svg" alt="" />
                                <img className="newsborder BorderB2-2" src="./images/NewsImgBorderB2-2.svg" alt="" />
                                <img className="newsborder BorderB2-3" src="./images/NewsImgBorderB2-3.svg" alt="" />


                                <img className="newsborder BorderLB" src="./images/NewsImgBorderLB.svg" alt="" />
                                <img className="newsborder BorderLB2" src="./images/NewsImgBorderB1-4.svg" alt="" />
                                <img className="newsborder BorderLMain" src="./images/NewsImgBorderLMain.svg" alt="" />
                                <img className="newsborder BorderL01" src="./images/NewsImgBorderL01.svg" alt="" />
                                <img className="newsborder BorderL02" src="./images/NewsImgBorderL02.svg" alt="" />
                                <img className="newsborder BorderL03" src="./images/NewsImgBorderL03.svg" alt="" />


                                <img className="newsborder BorderR01" src="./images/NewsImgBorderR01.svg" alt="" />
                                <img className="newsborder BorderR02" src="./images/NewsImgBorderR02.svg" alt="" />
                                <img className="newsborder BorderR03" src="./images/NewsImgBorderR03.svg" alt="" />

                                <img className="newsborder BorderT" src="./images/NewsImgBorderT.svg" alt="" />

                            </div>
                        </figure>

                    </article>
                    <article className="newsContent" id="news-2" style={news2Style} ref={news2Ref}>
                        <div className="newsLine1">
                            {/* <h3 className="newsLine1Text newsLineText">spaceship</h3> */}
                            {/* <p className="newsLine1Textsec newsLineText">11.25.24</p> */}
                            <div className="topping">
                                <img className="shipblock" src="./images/NewsTitleMain01.svg" alt="" />
                                <img className="NewsTitle01" src="./images/NewsTitle01.svg" alt="" />
                                <img className="NewsTitle02" src="./images/NewsTitle02.svg" alt="" />
                                <img className="NewsTitle03" src="./images/NewsTitle03.svg" alt="" />
                                <img className="FileLineBlockStrike" src="./images/FileLineBlockStrike-blue.svg" alt="" />
                                <img className="FileLineBlockFill" src="./images/FileLineBlockFill-blue.svg" alt="" />
                                <img className="NewsTitleLine" src="./images/NewsTitleLine.svg" alt="" />
                            </div>

                        </div>
                        <figure className="newsImg">
                            <img className="ship" src="./images/ship2.jpg" alt="" />
                            <div className="shipwrapper">
                                <img src="./images/NewsImgBorder.svg" alt="" />

                                <img className="newsborder BorderBMain" src="./images/NewsImgBorderBMain.svg" alt="" />
                                <img className="newsborder BorderB1-1" src="./images/NewsImgBorderB1-1.svg" alt="" />
                                <img className="newsborder BorderB1-2" src="./images/NewsImgBorderB1-2.svg" alt="" />
                                <img className="newsborder BorderB1-3" src="./images/NewsImgBorderB1-3.svg" alt="" />
                                <img className="newsborder BorderB1-4" src="./images/NewsImgBorderB1-4.svg" alt="" />


                                <img className="newsborder BorderB2-1" src="./images/NewsImgBorderB2-1.svg" alt="" />
                                <img className="newsborder BorderB2-2" src="./images/NewsImgBorderB2-2.svg" alt="" />
                                <img className="newsborder BorderB2-3" src="./images/NewsImgBorderB2-3.svg" alt="" />


                                <img className="newsborder BorderLB" src="./images/NewsImgBorderLB.svg" alt="" />
                                <img className="newsborder BorderLB2" src="./images/NewsImgBorderB1-4.svg" alt="" />
                                <img className="newsborder BorderLMain" src="./images/NewsImgBorderLMain.svg" alt="" />
                                <img className="newsborder BorderL01" src="./images/NewsImgBorderL01.svg" alt="" />
                                <img className="newsborder BorderL02" src="./images/NewsImgBorderL02.svg" alt="" />
                                <img className="newsborder BorderL03" src="./images/NewsImgBorderL03.svg" alt="" />


                                <img className="newsborder BorderR01" src="./images/NewsImgBorderR01.svg" alt="" />
                                <img className="newsborder BorderR02" src="./images/NewsImgBorderR02.svg" alt="" />
                                <img className="newsborder BorderR03" src="./images/NewsImgBorderR03.svg" alt="" />

                                <img className="newsborder BorderT" src="./images/NewsImgBorderT.svg" alt="" />

                            </div>
                        </figure>

                    </article>
                    <article className="newsContent" id="news-3" style={news3Style} ref={news3Ref}>
                        <div className="newsLine1">
                            {/* <h3 className="newsLine1Text newsLineText">spaceship</h3> */}
                            {/* <p className="newsLine1Textsec newsLineText">11.22.24</p> */}
                            <div className="topping">
                                <img className="shipblock" src="./images/NewsTitleMain01.svg" alt="" />
                                <img className="NewsTitle01" src="./images/NewsTitle01.svg" alt="" />
                                <img className="NewsTitle02" src="./images/NewsTitle02.svg" alt="" />
                                <img className="NewsTitle03" src="./images/NewsTitle03.svg" alt="" />
                                <img className="FileLineBlockStrike" src="./images/FileLineBlockStrike-blue.svg" alt="" />
                                <img className="FileLineBlockFill" src="./images/FileLineBlockFill-blue.svg" alt="" />
                                <img className="NewsTitleLine" src="./images/NewsTitleLine.svg" alt="" />
                            </div>

                        </div>
                        <figure className="newsImg">
                            <img className="ship" src="./images/ship3.jpg" alt="" />
                            <div className="shipwrapper">
                                <img src="./images/NewsImgBorder.svg" alt="" />

                                <img className="newsborder BorderBMain" src="./images/NewsImgBorderBMain.svg" alt="" />
                                <img className="newsborder BorderB1-1" src="./images/NewsImgBorderB1-1.svg" alt="" />
                                <img className="newsborder BorderB1-2" src="./images/NewsImgBorderB1-2.svg" alt="" />
                                <img className="newsborder BorderB1-3" src="./images/NewsImgBorderB1-3.svg" alt="" />
                                <img className="newsborder BorderB1-4" src="./images/NewsImgBorderB1-4.svg" alt="" />


                                <img className="newsborder BorderB2-1" src="./images/NewsImgBorderB2-1.svg" alt="" />
                                <img className="newsborder BorderB2-2" src="./images/NewsImgBorderB2-2.svg" alt="" />
                                <img className="newsborder BorderB2-3" src="./images/NewsImgBorderB2-3.svg" alt="" />


                                <img className="newsborder BorderLB" src="./images/NewsImgBorderLB.svg" alt="" />
                                <img className="newsborder BorderLB2" src="./images/NewsImgBorderB1-4.svg" alt="" />
                                <img className="newsborder BorderLMain" src="./images/NewsImgBorderLMain.svg" alt="" />
                                <img className="newsborder BorderL01" src="./images/NewsImgBorderL01.svg" alt="" />
                                <img className="newsborder BorderL02" src="./images/NewsImgBorderL02.svg" alt="" />
                                <img className="newsborder BorderL03" src="./images/NewsImgBorderL03.svg" alt="" />


                                <img className="newsborder BorderR01" src="./images/NewsImgBorderR01.svg" alt="" />
                                <img className="newsborder BorderR02" src="./images/NewsImgBorderR02.svg" alt="" />
                                <img className="newsborder BorderR03" src="./images/NewsImgBorderR03.svg" alt="" />

                                <img className="newsborder BorderT" src="./images/NewsImgBorderT.svg" alt="" />

                            </div>
                        </figure>

                    </article>
                    <div id="scrollSpace"></div>
                    <figure><img id="moreLine" src="./images/more-line.svg" alt="" /></figure>
                    <button id="moreBtn">MORE
                        <img id="circle1" src="./images/more-circle1.svg" alt="" className="" />
                        <img id="circle2" src="./images/more-circle2.svg" alt="" className="" />
                        <img id="circle3" src="./images/more-circle3.svg" alt="" className="" />
                        <img id="circle4" src="./images/more-circle4.svg" alt="" className="" />
                        <img id="circle5" src="./images/more-circle5.svg" alt="" className="" />
                    </button>
                </section>
                {/* about */}
                <section id="about" ref={aboutRef}>
                    <header className="title">
                        <h2 className="h2main"> ABOUT</h2>
                        <p className="h2bottom">ABOUT</p>
                    </header>
                    <hr id="hr1" />
                    <hr id="hr2" />
                    <div id="aboutTitle">
                        <div className="aboutCircle">
                            <p className="pTop">
                                Bio
                                <span className="circle pTopcircle1"></span>
                                <span className="circle circleb pTopcircle1b"></span>
                                <span className="pBottom">Bio</span>
                            </p>
                        </div>
                        <div className="aboutCircle aboutCircleM">
                            <p className="pTop">
                                Monster
                                <span className="circle pTopcircle2"></span>
                                <span className="circle circleb pTopcircle2b"></span>
                                <span className="pBottom">Monster</span>
                            </p>
                        </div>
                        <div className="aboutCircle">
                            <p className="pTop">
                                Myth
                                <span className="circle pTopcircle3"></span>
                                <span className="circle circleb pTopcircle3b"></span>
                                <span className="pBottom">Myth</span>
                            </p>
                        </div>
                    </div>
                    <div id="aboutContent">
                        <h3>
                            "Where monster myths meet modern data."
                        </h3>
                        <p>
                            「Biomonster Vault」<br />
                            是一個探索怪獸世界的圖鑑平台，<br />
                            從科幻的虛構生物到神話中的怪獸 ，應有盡有，<br />
                            也鼓勵網站使用者之間相互交流，一同構建出屬於自己的世界。
                        </p>
                    </div>
                    <footer>
                        <ul>
                            <li><Link onClick={scrollToHit}>HIT</Link></li>
                            <li><Link onClick={scrollToNews} >NEWS</Link></li>
                            <li><Link >POST</Link></li>
                            <li><Link onClick={scrollToAbout}>ABOUT</Link></li>
                        </ul>
                        <h2><Link to='/' onClick={scrollToTop}><img src="./images/LOGO-YB.svg" alt="" />Biomonster Vault</Link></h2>
                        <small>copyright &copy; 2025 BiomonsterVault </small>
                    </footer>
                </section>
            </main>
        </>
    )
}