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
                            <h2 className="h2bottom">HIT</h2>
                        </h2>

                        <figure id="hitBottom">
                            <img src="./images/TitleBottomLong.svg" alt="" className="titleBottom" />
                            {/* <img src="./images/" alt="" className="titleBottom" />
                        <img src="" alt="" className="titleBottom" /> */}
                        </figure>
                    </header>
                    <article className="hit1">
                        <figure className="hit1img">
                            <img src="./images/mon1.jpg" alt="" />
                        </figure>
                        <div className="hit1ContentWrapper">
                            <div id="line1"></div>
                            <div className="hit1Content">
                                <h3>Creeper</h3>
                                <p>predatory/mammal/migratory</p>
                                <p>The Samoyedis a breed of medium-sized herding dogs with thick, white, double-layer coats. They are spitz-type dogs which take their name from the Samoyedic peoples of Siberia. Descending from the Nenets Herding Laika</p>
                                <p>-2024/11/21</p>
                            </div>
                        </div>
                    </article>
                    <article className="hit2">
                        <figure className="hit2img"></figure>
                        <div className="hit2ContentWrapper">
                            <div id="line2"></div>
                            <div className="hit2Content">
                                <h3>Creeper</h3>
                                <p>predatory/mammal/migratory</p>
                                <p>The Samoyedis a breed of medium-sized herding dogs with thick, white, double-layer coats. They are spitz-type dogs which take their name from the Samoyedic peoples of Siberia. Descending from the Nenets Herding Laika</p>
                                <p>-2024/10/28</p>
                            </div>
                        </div>
                    </article>
                    <article className="hit3">
                        <figure className="hit3img"></figure>
                        <div className="hit3ContentWrapper">
                            <div id="line3"></div>
                            <div className="hit3Content">
                                <h3>Creeper</h3>
                                <p>predatory/mammal/migratory</p>
                                <p>The Samoyedis a breed of medium-sized herding dogs with thick, white, double-layer coats. They are spitz-type dogs which take their name from the Samoyedic peoples of Siberia. Descending from the Nenets Herding Laika</p>
                                <p>-2024/6/4</p>
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
                            <h2 className="h2bottom">NEWS</h2>
                        </h2>

                        <figure id="newsBottom">
                            <img src="./images/TitleBottomLong-blue.svg" alt="" />
                        </figure>
                    </header>
                    <article id="news-1">
                        <h3>
                            <div className="newsLine1"></div>
                            <figure className="newsImg1"><img src="" alt="" /></figure>
                        </h3>
                    </article>
                    <article id="news-2">
                        <h3>
                            <div className="newsLine2"></div>
                            <figure className="newsImg2"><img src="" alt="" /></figure>
                        </h3>
                    </article>
                    <article id="news-3">
                        <h3>
                            <div className="newsLine3"></div>
                            <figure className="newsImg3"><img src="" alt="" /></figure>
                        </h3>
                    </article>
                    <button id="moreBtn">MORE</button>
                </section>
                <section id="about">
                    <header className="title">
                        <h2 className="h2main">
                            ABOUT
                            <h2 className="h2bottom">ABOUT</h2>
                        </h2>
                    </header>
                    <hr id="hr1" />
                    <hr id="hr2" />
                    <div id="aboutTitle">
                        <div className="aboutCircle">
                            <p className="pTop">
                                Bio
                                <div className="circle pTopcircle1"></div>
                                <div className="circle circleb pTopcircle1b"></div>
                                <span className="pBottom">Bio</span>
                            </p>
                        </div>
                        <div className="aboutCircle aboutCircleM">
                            <p className="pTop">
                                Monster
                                <div className="circle pTopcircle2"></div>
                                <div className="circle circleb pTopcircle2b"></div>
                                <span className="pBottom">Monster</span>
                            </p>
                        </div>
                        <div className="aboutCircle">
                            <p className="pTop">
                                Myth
                                <div className="circle pTopcircle3"></div>
                                <div className="circle circleb pTopcircle3b"></div>
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