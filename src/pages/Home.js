import React from 'react'
import {Link} from 'react-router-dom';
import {HiOutlineArrowNarrowLeft,  HiOutlineShare} from 'react-icons/hi'
import  img1 from '../assests/levi-meir-clancy-h2UcC6lXlJs-unsplash 2.png'
import  img3 from  '../assests/Group 8.png'


const Home = () => {
    
    return(
        <div>
            <div className="  bg-[#110C00] w-full h-28 fixed top-0 z-10">
              <div className=' max-w-[1200px] mx-auto'>
                    <div className=" flex justify-between">
                        <div className=" flex gap-3 mt-9">
                            <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.29046 21.9508L3.85315 24.0087C2.04667 26.5953 3.89726 30.145 7.05219 30.145H24.0923C27.081 30.145 28.9602 26.9225 27.4883 24.3213L20.3651 11.7332C18.951 9.23414 15.4132 9.06687 13.7696 11.4213L11.3677 14.8621M22.9796 16.1932L25.0668 7.62042C25.762 4.76497 23.1705 2.19497 20.3209 2.91393L4.95015 6.79205C2.13195 7.5031 1.0525 10.9352 2.95632 13.1314L5.61052 16.1932" stroke="white" strokeWidth="3.90203" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h1 className=" font-Sora text-white text-2xl">Artisto</h1>
                        </div>

                        <div className=" flex  gap-7 ">
                            <div className=" flex pt-11 text-base gap-12 text-white font-Sora ">
                                <p>Events</p>
                                <p>Museum</p>
                                <p>Arts</p>
                                <p>Gallaries</p>
                            </div>

                            <div className=" flex gap-10  mt-8 font-Sora ">
                                <div className="   bg-white button1 relative w-[164px] h-[61px] ">
                                  <button className=" button3 text-white outline-none border-none text-xl absolute bottom-2  right-1  bg-[#FBAF00] w-[164px] h-[61px]" >Login</button>
                                </div>
                                
                                <div className=" bg-[#FBAF00]   button2 relative w-[164px] h-[61px] ">
                                  <button className=" button4 absolute bottom-2  outline-none border-none text-xl right-1  bg-white  w-[164px] h-[61px]" >Explore arts</button>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
          
           <div className=' max-w-[1200px] mx-auto '>
                <div className=' mt-[200px] flex justify-between'>

                    <div>
                     <Link to='/Aristonav'><HiOutlineArrowNarrowLeft className=' text-white text-[35px]'/></Link> 
                    </div>

                    <div>
                     <Link to='/share'>< HiOutlineShare className=' text-white text-[35px]'/></Link> 
                    </div>
            
                </div>

                <div className=' flex gap-[54px] mt-[57px]'>
                    <div>
                        <img className='card8' src={img1} alt="" />
                    </div>

                    <div>
                        <h1 className=' text-white text-[32px] font-Sora'>Plastic Hears Sculpture</h1>
                        <p className='  text-white text-[17px] pt-5 font-Sora'>Browse a curated selection of art around the world, including <br /> museum exhibitions, gallery openings, upcoming and many <br /> more. Browse a curated selection of art around the world, <br /> including museum exhibitions, gallery openings,  <br /> and many moreBrowse a curated selection of art around the <br /> world, including museum exhibitions, gallery openings, <br /> upcoming and many more</p>

                       <div className=' flex mt-[185px] gap-[50px]'>
                           <div className="  hover:bg-[#FBAF00]   button2 relative w-[164px] h-[61px] ">
                                <button className=" button4 absolute bottom-2 font-Sora  outline-none border-none text-white hover:text-black text-xl right-1  hover:bg-white  w-[164px] h-[61px]" >Explore arts</button>
                            </div>

                            <div className=' hover:bg-white   button2 relative w-[164px] h-[61px] '>
                              <button className=" text-white font-Sora text-xl pt-2 hover:text-black button4 absolute bottom-2 outline-none border-none hover:bg-[#FBAF00]  right-1  w-[164px] h-[61px] " >Explore arts</button>
                            </div>
                       </div>
                    </div>


                </div>
          </div>

            <div className='   flex justify-end '>
                <img className=' absolute  -mt-[500px] ' src={img3} alt="" />
            </div>
        </div>
    )
}

export default Home;