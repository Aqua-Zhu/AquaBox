import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rain from "../component/Rain";
import TopbarToTop from "../component/TopbarToTop";

export default function Post() {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
    return (
        <>
            <Rain/>
            <main id='post'>
                <div id="topbar" >
                    <h1><Link to='/'><img src="./images/LOGO.svg" alt="" />Biomonster Vault</Link></h1>
                </div>
                {/* <TopbarToTop/> */}
                <form action="" method="post" name="member-form" id="member-form" title="資料修改">
                    <div id="formTop">
                        <div id="area2" className="area">
                            <img src="./images/imageswrapper.svg" alt="" />
                            {/* <label>UPLOAD</label> */}
                            <label htmlFor="file" className="uploadbtn">UPLOAD<img src="./images/upload.svg" alt=""  /></label>
                            <input type="file" name="file" id="file" title="file" multiple>
                            </input>
                        </div>
                        <div id="area1" className="area">
                            <label htmlFor="name">NAME</label>
                            <input type="text" name="name" id="name" title="name" placeholder="NAME" required
                            ></input>
                            <label htmlFor="other">TYPE</label>
                            <select name="other" id="other">
                                <option value="">CLICK TO CHOOSE</option>
                                <option value="選項1">Predatory</option>
                                <option value="選項2">Reptile</option>
                                <option value="選項3">Mammal</option>
                                <option value="選項4">Primate </option>
                            </select>
                            <label htmlFor="HEIGHT">HEIGHT</label>
                            <input type="text" name="text" id="text" title="text" placeholder="HEIGHT" required>
                            </input>
                            <label htmlFor="WEIGHT">WEIGHT</label>
                            <input type="text" name="text" id="text" title="text" placeholder="WEIGHT" required>
                            </input>
                        </div>
                    </div>

                    <div id="area3" className="area">
                        <label htmlFor="message">CONTENT</label>
                        <textarea name="message" id="message" title="message" rows="10"></textarea>
                        <div id="handlebtn">
                            <button type="reset" name="reset-btn" id="reset-btn" value="重填資料">RESET</button>
                            <button type="submit" name="submit-byn" id="submit-id" value="送出資料">SUMBIT</button>
                        </div>
                    </div>
                </form>
                <footer>
                        <h2><Link to='/' ><img src="./images/LOGO-B.svg" alt="" />Biomonster Vault</Link></h2>
                        <small>copyright &copy; 2025 BiomonsterVault </small>
                    </footer>
            </main>

        </>
    )
}