import React, { useMemo, useState } from 'react';

export default function UseMemo() {
    const [add, setAdd] = useState(0);
    const [multi, setMulti] = useState(2);
    const [manualRendering, setManualRendering] = useState(0);
console.warn('multi rendered');

    const noRenderPart = useMemo(function countMemo() {
        console.warn("within useMemo rendered (manualRendering)");
        return <div>
            <h2>add: {add}</h2>
            <h2>manualRenderings: {manualRendering} </h2>
        </div>
    }, [manualRendering]);

    return (
        <>
            <p>Why do we use USEMEMO HOOK? we already have useEffect hook then why we need useMemo hook?</p>
            <p>Both useEffect And UseMemo having same syntax and same working but the main diff is that Use Effect renders the whole component when ur depedancy addue is changed but what if dont want to reder whole components and only u want some specific part of the componets/code to be rendered on dependancy changes then we use USEMEMO HOOK</p>
            <p>Lets see one example,</p>
            {noRenderPart}
            <h2>Multi: {multi}</h2>
            <button type="button"  onClick={() => setAdd(add + 1)}>ADD</button>
            <button type="button"  onClick={() => setMulti(multi * 2)}>MULTI</button> 
            <button type="button"  onClick={() => setManualRendering(manualRendering + 1)}>ManualRendering</button>
        </>
    )
}