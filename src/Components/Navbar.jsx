import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Logika: Jika posisi scroll Y (vertikal) melebihi 150 piksel...
      if (window.scrollY > 150) {
        // ...atur state 'active' menjadi true
        setActive(true)
      } else {
        // ...jika tidak, atur 'active' menjadi false
        setActive(false)
      }
    };


    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (
    <div className='py-7 flex items-center justify-between'>
      <div className="">
        <h1 className='text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white'>
          Portofolio
        </h1>
      </div>
      <ul className={`flex items-center gap-4 fixed transition-all duration-300 ease-in-out left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl sm:gap-10 md:-translate-x-0 md:static md:opacity-100 md:top-0 ${active ? 'top-0 opacity-100' : '-top-10 opacity-0'}`}>
        <li>
          <a href="#beranda" className='sm:text-lg text-base font-medium'>Beranda</a>
        </li>
        <li>
          <a href="#about" className='sm:text-lg text-base font-medium'>Tentang</a>
        </li>
        <li>
          <a href="#proyek" className='sm:text-lg text-base font-medium'>Proyek</a>
        </li>
        <li>
          <a href="#kontak" className='sm:text-lg text-base font-medium'>Kontak</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
