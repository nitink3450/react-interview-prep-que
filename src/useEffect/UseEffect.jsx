import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffect1 = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const MainData = async () => {
      const data1 = await axios.get("https://api.github.com/users")
      setData(data1.data)
    }
    MainData()
  }, [])

  return (
    <>
      <p>Fetching github ids data from server using axios</p>
      <p>useEffect used so the whole components only renders only one time at starting it will not affect if there is a buttons outside and u clicked on it this ids data will not fetch again till u pass the dependancy to the blank array in useEffect</p>
      <div className='grid'>
        {data.map((val, i) => {
          return (
            <>
              <h1 key={i}>{val.login}</h1>
            </>
          )
        })}
      </div>
    </>

  )
}

export default UseEffect1