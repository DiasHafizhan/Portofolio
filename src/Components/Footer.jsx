import React from 'react'
import { FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center'>
      <h1 className='text-2xk font-bold '>Portofolio</h1>
      <div className="flex gap-7">
        <a href="">Beranda</a>
        <a href="">Tentang</a>
        <a href="">Proyek</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="">
          <FaGithub className='text-xl' />
        </a>
        <a href="">
          <FaTiktok className='text-xl' />
        </a>
        <a href="">
          <FaInstagram className='text-xl' />
        </a>
      </div>
    </div>
  )
}

export default Footer
