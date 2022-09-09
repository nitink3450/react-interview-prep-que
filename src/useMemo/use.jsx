import React, { useState, useMemo } from 'react'

const use = () => {
    const [count, setCount] = useState(0);
    const [multi, setMulti] = useState(2);
    const [manualR, setManualR] = useState(0);
    const noRender = useMemo(() => {
        console.log('redered inside memo');
        return <div>
            <p>comp rendered : {count}</p>
            <p>manual rendered : {manualR}</p>
        </div>
    },[manualR])

    return (
        <>
            { noRender }
            <p>multi: {multi}</p>
            <button onClick={() => { setCount(count + 1) }}>add</button>
            <button onClick={() => { setMulti(multi * 2) }}>multi</button>
            <button onClick={() => { setManualR(manualR + 1) }}>manualR</button>
        </>
    )
}

export default use