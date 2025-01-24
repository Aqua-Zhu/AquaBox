import { Link } from "react-router-dom";
import TopbarToTop from "../component/TopbarToTop";
import { useEffect } from "react";

export default function Select() {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
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
                        <img className="ContentB" src="./images/MonsterContentBorder.svg" alt="" />
                        <img className="ContentBBF ContentBBF1" src="./images/MonsterContentBorderBFill1.svg" alt="" />
                        <img className="ContentBBF ContentBBF2" src="./images/MonsterContentBorderBFill2.svg" alt="" />
                        <img className="ContentBBF ContentBBF3" src="./images/MonsterContentBorderBFill3.svg" alt="" />
                        <img className="ContentBBF ContentBBF4" src="./images/MonsterContentBorderBFill4.svg" alt="" />
                        <img className="ContentBBF ContentBBF5" src="./images/MonsterContentBorderBFill5.svg" alt="" />
                        <img className="ContentBBF ContentBBF6" src="./images/MonsterContentBorderBFill6.svg" alt="" />
                        <img className="ContentBBF ContentBBF7" src="./images/MonsterContentBorderBFill7.svg" alt="" />
                        <img className="ContentBBF ContentBBM" src="MonsterContentBorderBMain.svg" alt="" />
                        <img  src="./images/MonsterContentBorderLFill1.svg" alt="" />
                        <img src="./images/MonsterContentBorderLFill2.svg" alt="" />
                        <img src="./images/MonsterContentBorderLFill3.svg" alt="" />
                        <img src="./images/MonsterContentBorderLLine.svg" alt="" />
                        <img src="./images/MonsterContentBorderLMain.svg" alt="" />
                        <img src="./images/MonsterContentBorderR1.svg" alt="" />
                        <img src="./images/MonsterContentBorderR2.svg" alt="" />
                        <img src="./images/MonsterContentBorderR3.svg" alt="" />
                        <img src="./images/MonsterContentBorderRT.svg" alt="" />
                        <img src="./images/MonsterContentLine.svg" alt="" />
                        <img src="./images/MonsterContentLineFill.svg" alt="" />
                        <img src="./images/MonsterContentLineStrike.svg" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />

                        <button id="comment-btn">
                            <img src="" alt="" />
                        </button>
                    </article>
                </section>
                {/* comment */}
                <section id="comment">
                    <article></article>
                    <article></article>
                    <article></article>
                    <article></article>
                </section>
                {/* others */}
                <section id="others">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
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
            </main>
        </>
    )

}