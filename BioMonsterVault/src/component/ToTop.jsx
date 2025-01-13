export default function Totop() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
                <button className="toTop-btn" onClick={scrollToTop} style={buttonStyle}>
                    <img src="./images/totop-1.svg" alt="" className="totop1" />
                    <img src="./images/totop-2.svg" alt="" className="totop2" />
                    <img src="./images/totop-3.svg" alt="" className="totop3" />
                </button>
        </>
    )
}