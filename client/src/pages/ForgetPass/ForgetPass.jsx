import React from 'react'
import { useAuth } from '../../contexts/authContext' 

export const ForgetPass = () => {
    const { profile, forgetPass } = useAuth()

    
  return (
    <div>ForgetPass</div>
  )
}