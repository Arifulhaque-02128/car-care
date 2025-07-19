import React from 'react'
import Login from '../../components/Login/Login'

export const metadata = {
  title: "Login | Car-Care",
  description: "You cannot explore the full website without log in.",
};


const LoginPage = () => {
  return (
    <div className='flex flex-col w-screen'>
        <Login />
    </div>
  )
}

export default LoginPage