import React, { useState, useEffect } from "react";
const CleanUp = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);
    const actualWidth = () => {
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", actualWidth)

        return () => {
            console.log("remover data");
            window.removeEventListener("resize", actualWidth)
        }
    })
    return (
        <>
            <h1>hello</h1>
            <h1>{widthCount}</h1>
        </>
    )
}

export default CleanUp;
