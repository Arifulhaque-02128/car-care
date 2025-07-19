import React from 'react'
import Register from '../../components/Register/Register'

export const metadata = {
  title: "Register | Car-Care",
  description: "If you are a new user, please register first",
};


const SignUpPage = () => {
  return (
    <div className='flex flex-col w-screen'>
        <Register />
    </div>
  )
}

export default SignUpPage