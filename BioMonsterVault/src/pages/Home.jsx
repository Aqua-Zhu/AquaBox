import { Link } from "react-router-dom";

export default function Home() {



    return (
        <>
            <div id="topbar">
                <h1><img src="" alt="" />BioMonsterVault</h1>
                <nav>
                    <ul>
                        <li><Link>HIT</Link></li>
                        <li><Link>NEWS</Link></li>
                        <li><Link>POST</Link></li>
                        <li><Link>ABOUT</Link></li>
                    </ul>
                </nav>
            </div>
            <header id="banner">
                <img src="./images/banner-border.svg" alt="" />
                <button id="bannerBtn">post</button>
            </header>
            <main>
                <section id="hit">
                    <article className="">
                        <figure className=""></figure>
                        <div className="hit1">
                            <div id="line1"></div>
                            <h3></h3>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </article>
                    <article className="">
                        <figure className=""></figure>
                        <div className="hit1">
                            <div id="line1"></div>
                            <h3></h3>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </article>
                    <article className="">
                        <figure className=""></figure>
                        <div className="hit1">
                            <div id="line1"></div>
                            <h3></h3>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </article>
                </section>
                <section id="news">
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
                    <h2>
                        ABOUT
                    </h2>
                    <hr />
                    <hr />
                    <div id="aboutTitle">
                        <div className="aboutCircle">
                            <p>Bio</p>
                        </div>
                        <div className="aboutCircle">
                            <p>Monster</p>
                        </div>
                        <div className="aboutCircle">
                            <p>Myth</p>
                        </div>
                    </div>
                    <div id="aboutContent">
                        <h3>
                            "Where monster myths meet modern data."
                        </h3>
                        <p>
                            「BioMonster Vault」<br />
                            是一個探索怪獸世界的圖鑑平台，<br />
                            從科幻的虛構生物到神話中的怪獸 ，應有盡有，<br />
                            也鼓勵網站使用者之間相互交流，一同構建出屬於自己的世界。
                        </p>
                    </div>



                </section>
            </main>



        </>
    )
}