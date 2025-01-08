export default function ToTop() {
    // const [isVisible, setIsVisible] = useState(false);
    // //原始按鈕位置
    // const [buttonStyle, setButtonStyle] = useState(initialStyle);


    // const handleScroll = () => {
    //     const scrollY = window.scrollY;
    //     const viewportHeight = window.innerHeight;
    //     const footer = document.querySelector("footer");
    //     const footerTop = footer.getBoundingClientRect().top + scrollY;

    //     setIsVisible(scrollY > 200);

    //     if (scrollY + viewportHeight > footerTop) {
    //         // 當滾動位置接近 footer 時，調整按鈕位置
    //         setButtonStyle({
    //             ...initialStyle,
    //             bottom: `${viewportHeight + scrollY - footerTop + 96}px`,
    //         });
    //     } else {
    //         // 恢復原始樣式
    //         setButtonStyle(initialStyle);
    //     }
    // };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <div className="toTop" >
            <button className="toTop-btn" onClick={scrollToTop}>
                <img src="./images/TopBtnLight.svg" alt="" />
            </button>
        </div>
    )
}