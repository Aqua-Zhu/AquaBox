import { Link } from "react-router-dom";
import TopbarToTop from "../component/TopbarToTop";
import { useEffect } from "react";

export default function Select() {

    useEffect(() => {
        // window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <TopbarToTop />
            <main id="select">
                {/* 背景內容區 */}
                <section id="MonsterIntro">
                    <div id="MonsterContentImg">
                        <img src="./images/mon7.jpg" alt="" />
                        <img src="./images/mon7-2.jpg" alt="" />
                        <img src="./images/mon7-3.jpg" alt="" />
                        <img src="./images/mon7-4.jpg" alt="" />
                    </div>

                    <article id="MonsterContent">
                        <figure id="ContentWrapper">
                            <img className="ContentB" src="./images/MonsterContentBorder.svg" alt="" />
                            <img className="ContentBBF ContentBBF1" src="./images/MonsterContentBorderBFill1.svg" alt="" />
                            <img className="ContentBBF ContentBBF2" src="./images/MonsterContentBorderBFill2.svg" alt="" />
                            <img className="ContentBBF ContentBBF3" src="./images/MonsterContentBorderBFill3.svg" alt="" />
                            <img className="ContentBBF ContentBBF4" src="./images/MonsterContentBorderBFill4.svg" alt="" />
                            <img className="ContentBBF ContentBBF5" src="./images/MonsterContentBorderBFill5.svg" alt="" />
                            <img className="ContentBBF ContentBBF6" src="./images/MonsterContentBorderBFill6.svg" alt="" />
                            <img className="ContentBBF ContentBBF7" src="./images/MonsterContentBorderBFill7.svg" alt="" />
                            <img className="ContentBBF ContentBBM" src="./images/MonsterContentBorderBMain.svg" alt="" />
                            <img className="ContentLFill LFill1" src="./images/MonsterContentBorderLFill1.svg" alt="" />
                            <img className="ContentLFill LFill2" src="./images/MonsterContentBorderLFill2.svg" alt="" />
                            <img className="ContentLFill LFill3" src="./images/MonsterContentBorderLFill3.svg" alt="" />
                            <img className="ContentLLine" src="./images/MonsterContentBorderLLine.svg" alt="" />
                            <img className="ContentLLine2" src="./images/MonsterContentBorderBFill4.svg" alt="" />
                            <img className="ContentLMain" src="./images/MonsterContentBorderLMain.svg" alt="" />
                            <img className="ContentLFBR ContentLFBR1" src="./images/MonsterContentBorderR1.svg" alt="" />
                            <img className="ContentLFBR ContentLFBR2" src="./images/MonsterContentBorderR2.svg" alt="" />
                            <img className="ContentLFBR ContentLFBR3" src="./images/MonsterContentBorderR3.svg" alt="" />
                            <img className=" ContentLFBRT" src="./images/MonsterContentBorderRT.svg" alt="" />
                            <img className="ContentLine" src="./images/MonsterContentLine.svg" alt="" />
                            <img className="ContentLineFill" src="./images/MonsterContentLineFill.svg" alt="" />
                            <img className="ContentLineStrike" src="./images/MonsterContentLineStrike.svg" alt="" />
                        </figure>


                        <button id="comment-btn">
                            <img id="CBTN" src="./images/comment-btn.svg" alt="" />
                            <figure id="comment-btnWrapper">
                                <img className="comment-circle1" src="./images/more-circle3-yellow.svg" alt="" />
                                <img className="comment-circle2" src="./images/more-circle2.svg" alt="" />
                                <img className="comment-circle3" src="./images/memmber-circle1.svg" alt="" />
                                <img className="comment-circle4" src="./images/more-circle4.svg" alt="" />
                                <img className="comment-circle5" src="./images/more-circle5.svg" alt="" />
                            </figure>
                        </button>
                    </article>
                </section>
                {/* comment */}
                <section id="comment">
                    <figure className="comment-left">
                        <h4>COMMENT</h4>
                        <img className="title-block" src="./images/comment-border.svg" alt="" />
                        <div className="title-line">
                            <img className="titleBorder border1" src="./images/comment-border1.svg" alt="" />
                            <img className="titleBorder border2" src="./images/comment-border2.svg" alt="" />
                            <img className="titleBorder border3" src="./images/comment-border3.svg" alt="" />
                        </div>
                    </figure>
                    <figure className="comment-right">
                        <img className="commentLineMain" src="./images/commentLineMain.svg" alt="" />
                        <img className="commentLine commentLineL1" src="./images/commentLineL1.svg" alt="" />
                        <img className="commentLine commentLineL2" src="./images/commentLineL2.svg" alt="" />
                        <img className="commentLine commentLineL3" src="./images/commentLineL3.svg" alt="" />
                        <img className="commentLine commentLineR1" src="./images/commentLineR1.svg" alt="" />
                        <img className="commentLine commentLineR2" src="./images/commentLineR2.svg" alt="" />
                        <img className="commentLine commentLineR3" src="./images/commentLineR3.svg" alt="" />
                        <img className="commentLine commentLineR4" src="./images/commentLineR4.svg" alt="" />
                    </figure>
                    <article>
                        <figure className="memmber">
                            <img className="memmber-topping memmber-circle1" src="./images/memmber-circle1.svg" alt="" />
                            <img className="memmber-topping memmber-circle2" src="./images/memmber-circle2.svg" alt="" />
                            <img className="memmber-topping memmber-circle3" src="./images/memmber-circle3.svg" alt="" />
                            <img className="memmber-topping memmber-circle4" src="./images/memmber-circle4.svg" alt="" />
                            <img className="memmber-topping memmber-circle5" src="./images/memmber-circle5.svg" alt="" />
                            <img className="memmber-topping memmber-line" src="./images/memmber-line.svg" alt="" />
                        </figure>
                        <div className="memmber-comment">
                            <p>John Cena</p>
                            <p>You can't see me</p>
                            <p>- 2024/12/15</p>
                        </div>

                    </article>
                    <article></article>
                    <article></article>
                    <article></article>
                </section>
                {/* others */}
                <section id="others">
                    <figure className="comment-left">
                        <h4>OTHERS</h4>
                        <img className="title-block" src="./images/comment-border.svg" alt="" />

                        <div className="title-line">
                            <img className="titleBorder border1" src="./images/comment-border1.svg" alt="" />
                            <img className="titleBorder border2" src="./images/comment-border2.svg" alt="" />
                            <img className="titleBorder border3" src="./images/comment-border3.svg" alt="" />
                        </div>
                    </figure>
                    <figure className="comment-right">
                        <img className="commentLineMain" src="./images/commentLineMain.svg" alt="" />
                        <img className="commentLine commentLineL1" src="./images/commentLineL1.svg" alt="" />
                        <img className="commentLine commentLineL2" src="./images/commentLineL2.svg" alt="" />
                        <img className="commentLine commentLineL3" src="./images/commentLineL3.svg" alt="" />
                        <img className="commentLine commentLineR1" src="./images/commentLineR1.svg" alt="" />
                        <img className="commentLine commentLineR2" src="./images/commentLineR2.svg" alt="" />
                        <img className="commentLine commentLineR3" src="./images/commentLineR3.svg" alt="" />
                        <img className="commentLine commentLineR4" src="./images/commentLineR4.svg" alt="" />
                    </figure>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>

            </main>

            {/* footer */}
            <footer>
                <ul>
                    <li><Link >HIT</Link></li>
                    <li><Link >NEWS</Link></li>
                    <li><Link >POST</Link></li>
                    <li><Link >ABOUT</Link></li>
                </ul>
                <h2><Link to='/' ><img src="./images/LOGO-YB.svg" alt="" />Biomonster Vault</Link></h2>
                <small>copyright &copy; 2025 BiomonsterVault </small>
            </footer>
        </>
    )

}