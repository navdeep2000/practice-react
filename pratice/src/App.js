import React, { useState } from 'react'

const App = () => {
  const [myname, setMyname] = useState('navdeep')
  let val = myname
  const changename = () => {
    if(myname==='navdeep'){
      setMyname("pardeep")
    }else{
      setMyname("navdeep")
  }
}
  return (
    <div>
    <h1>{myname}</h1>
    <button type='btn' onClick={changename}>clickme</button>

    </div>
  )
}

export default App