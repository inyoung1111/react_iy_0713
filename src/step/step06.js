import React from 'react'

const Step06 =() => {
    const isLoggedIn = true ;

  return (
    <>
    {isLoggedIn ? <h1>로그인됨</h1> : <h1>로그인하세요.</h1>}
    </>
  )
}

export default Step06