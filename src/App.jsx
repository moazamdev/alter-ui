import { useState } from 'react'
import WrapperSection from './components/wrapper-component'

export default function App() {
  return (
    <>
      <section className="flex flex-col justify-center items-center mx-auto my-0 px-2.5 py-[30px] border-b border-[#ddd]">
        <div className="container relative w-[min(100%_-_15px,1250px)] flex justify-between mx-auto my-0 px-1.5 sm:px-2.5">
          <div className="logo-box self-center">
            <div className="logo text-primary text-[25px] font-bold">Alter<span className='text-accent'>UI</span></div>
          </div>

          <div className="nav-box w-[50%] self-center">
            <nav className=''>
              <ul className='flex flex-row justify-between items-center self-center'>
                <li><a className='text-text hover:text-accent' href="#">Services</a></li>
                <li><a className='text-text hover:text-accent' href="#">Agency</a></li>
                <li><a className='text-text hover:text-accent' href="#">Case Study</a></li>
                <li><a className='text-text hover:text-accent' href="#">Resources</a></li>
                <li><a className='text-text hover:text-accent' href="#">Contact</a></li>
              </ul>
            </nav>
          </div>

          <div className="button-box">
            <button className="btn bg-accent text-white px-[32px] py-[12px] rounded-full font-regular hover:bg-primary transition">Get Started</button>
          </div>
        </div>
      </section>



    </>
  )
}

