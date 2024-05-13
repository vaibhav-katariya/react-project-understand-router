import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <>
      user : {userId}
    </>
  )
}

export default User
