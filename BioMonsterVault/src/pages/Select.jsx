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
                <section id="MonterContent">
                    <div id="MonterContentImg">
                        <img src="./images/mon7.jpg" alt="" />
                        <img src="./images/mon7-2.jpg" alt="" />
                        <img src="./images/mon7-3.jpg" alt="" />
                        <img src="./images/mon7-4.jpg" alt="" />
                    </div>

                    <article id="MonterContent">
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