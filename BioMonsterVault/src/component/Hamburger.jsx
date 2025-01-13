import { useRef } from "react"

export default function Hamburger() {
    const hamburgerRef =useRef(null);
    const hamburgerToggle = ()=>{
        hamburgerRef.current.classList.toggle('click')
    }

    return (
        <>
            <button className="hamburger" ref={hamburgerRef} onClick={hamburgerToggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

        </>
    )
}