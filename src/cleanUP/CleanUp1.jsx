import { useState, useEffect } from "react";

function CleanUp1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => { setCount((count) => count + 1) }, 1000);
    return () => clearTimeout(timer);

    // let interval = setInterval(() => setCount(1), 1000);
    // return () => clearInterval(interval);

  }, []);

  return <h1>I've rendered {count} times!</h1>;
}
export default CleanUp1;