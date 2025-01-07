import { Link } from "react-router-dom";
export default function Home() {



    return (
        <>
            {/* 頁首區 */}
            <div id="topbar">
                <h1><Link to='/'><img src="" alt="" />Biomonster Vault</Link></h1>
                <nav>
                    <ul>
                        <li><Link>HIT</Link></li>
                        <li><Link>NEWS</Link></li>
                        <li><Link>POST</Link></li>
                        <li><Link>ABOUT</Link></li>
                    </ul>
                </nav>
            </div>
            {/* Banner區 */}
            <header id="banner">
                <img src="./images/banner-border.png" alt="" />
                <h2>Biomonster Vault</h2>
                <button id="bannerBtn">
                    <span id="bannerBtnBlock1"></span>
                    <span id="bannerBtnBlock2"></span>
                    <p id="bannerBtnText">POST &gt;</p>
                </button>
            </header>
            <main>
                {/* hit */}
                <section id="hit">
                    <header className="title">
                        <figure id="hitTop">
                            <img src="./images/TitleWrapperShort.svg" className="titleTop1"></img>
                            <img src="./images/TitleInnerShort.svg" className="titleTop2"></img>
                            <img src="./images/TitleChargeShort.svg" className="titleTop3"></img>
                        </figure>

                        <h2 className="h2main">
                            HIT
                            <p className="h2bottom">HIT</p>
                        </h2>

                        <figure id="hitBottom">
                            <img src="./images/TitleBottomLong.svg" alt="" className="titleBottom" />
                            {/* <img src="./images/" alt="" className="titleBottom" />
                        <img src="" alt="" className="titleBottom" /> */}
                        </figure>
                    </header>
                    <article className="hit1">
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
                                <p>The Samoyedis a breed of medium-sized herding dogs with thick, white, double-layer coats. They are spitz-type dogs which take their name from the Samoyedic peoples of Siberia. Descending from the Nenets Herding Laika</p>
                                <p className="time">-2024/11/21</p>
                            </div>
                        </div>
                    </article>
                    <article className="hit1 hit2">
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
                                <h3>Creeper</h3>
                                <p className="type">predatory/mammal/migratory</p>
                                <p>The Samoyedis a breed of medium-sized herding dogs with thick, white, double-layer coats. They are spitz-type dogs which take their name from the Samoyedic peoples of Siberia. Descending from the Nenets Herding Laika</p>
                                <p className="time">-2024/11/21</p>
                            </div>
                        </div>
                    </article>
                    <article className="hit1">
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
                                <h3>Creeper</h3>
                                <p className="type">predatory/mammal/migratory</p>
                                <p>The Samoyedis a breed of medium-sized herding dogs with thick, white, double-layer coats. They are spitz-type dogs which take their name from the Samoyedic peoples of Siberia. Descending from the Nenets Herding Laika</p>
                                <p className="time">-2024/11/21</p>
                            </div>
                        </div>
                    </article>
                </section>
                <section id="news">
                    <header className="title">
                        <figure id="newsTop">
                            <img src="./images/TitleTopShort-blue.svg" alt="" />
                        </figure>
                        <h2 className="h2main">
                            NEWS

                        </h2>

                        <figure id="newsBottom">
                            <img src="./images/TitleBottomLong-blue.svg" alt="" />
                        </figure>
                    </header>
                    <article id="news-1">
                        <div className="newsLine1">
                            <h3 className="newsLine1Text newsLineText">spaceship</h3>
                            <p className="newsLine1Textsec newsLineText">12.02.24</p>
                            <div className="topping">
                                <img className="shipblock" src="./images/NewsTitleMain.svg" alt="" />
                                <img className="NewsTitle01" src="./images/NewsTitle01.svg" alt="" />
                                <img className="NewsTitle02" src="./images/NewsTitle02.svg" alt="" />
                                <img className="NewsTitle03" src="./images/NewsTitle03.svg" alt="" />
                                <img className="FileLineBlockStrike" src="./images/FileLineBlockStrike-blue.svg" alt="" />
                                <img className="FileLineBlockFill" src="./images/FileLineBlockFill-blue.svg" alt="" />
                                <img className="NewsTitleLine" src="./images/NewsTitleLine.svg" alt="" />
                            </div>

                        </div>
                        <figure className="newsImg1">
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
                    <article id="news-2">
                        <div className="newsLine2">
                            <h3>spaceship</h3>
                            <p>12.02.24</p>
                        </div>
                        <figure className="newsImg2">
                            <img src="" alt="" />
                        </figure>

                    </article>
                    <article id="news-3">
                        <div className="newsLine3">
                            <h3>spaceship</h3>
                            <p>12.02.24</p>
                        </div>
                        <figure className="newsImg3">
                            <img src="" alt="" />
                        </figure>

                    </article>
                    <button id="moreBtn">MORE</button>
                </section>
                <section id="about">
                    <header className="title">
                        <h2 className="h2main">
                            ABOUT
                            <p className="h2bottom">ABOUT</p>
                        </h2>
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
                            <li><Link>HIT</Link></li>
                            <li><Link>NEWS</Link></li>
                            <li><Link>POST</Link></li>
                            <li><Link>ABOUT</Link></li>
                        </ul>
                        <h2><Link to='/'><img src="" alt="" />Biomonster Vault</Link></h2>
                    </footer>
                </section>
            </main>
        </>
    )
}