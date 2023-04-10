import {useState} from 'react';
import {IoAppsSharp}  from 'react-icons/io5';
import  {HiXMark} from  'react-icons/hi2';




const Aristonav = () => {
    
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav);

    return(
        <div>
         <div className="  bg-[#110C00] w-full h-28 fixed top-0 z-10 ">
            <div className=" max-w-[1200px] mx-auto">
                 <div className=' flex justify-between ' >
                   <div className=" flex gap-3 mt-9 lg:ml-0 sm:ml-10">
                        <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.29046 21.9508L3.85315 24.0087C2.04667 26.5953 3.89726 30.145 7.05219 30.145H24.0923C27.081 30.145 28.9602 26.9225 27.4883 24.3213L20.3651 11.7332C18.951 9.23414 15.4132 9.06687 13.7696 11.4213L11.3677 14.8621M22.9796 16.1932L25.0668 7.62042C25.762 4.76497 23.1705 2.19497 20.3209 2.91393L4.95015 6.79205C2.13195 7.5031 1.0525 10.9352 2.95632 13.1314L5.61052 16.1932" stroke="white" strokeWidth="3.90203" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h1 className=" font-Sora text-white text-2xl">Artisto</h1>
                    </div>
                    <div>
                        <div className=" lg:flex  gap-7  sm:hidden">
                            <div className=" flex pt-11 text-base gap-12 text-white font-Sora ">
                                <p>Events</p>
                                <p>Museum</p>
                                <p>Arts</p>
                                <p>Gallaries</p>
                            </div>

                            <div className=" flex gap-10  mt-8 font-Sora ">
                                <div className="  hover:bg-[#FBAF00]   bg-white rounded-tr-[30px] rounded-bl-[30px]  relative w-[164px] h-[61px] ">
                                <button className="  hover:bg-white hover:text-black rounded-bl-[30px] rounded-tr-[30px]  text-white outline-none border-none text-xl absolute bottom-2  right-1  bg-[#FBAF00] w-[164px] h-[61px]" >Login</button>
                                </div>
                                
                                <div className=" bg-[#FBAF00] hover:bg-white  rounded-tr-[30px] rounded-bl-[30px]  relative w-[164px] h-[61px] ">
                                <button className="  hover:bg-[#FBAF00] hover:text-white rounded-bl-[30px] rounded-tr-[30px] absolute bottom-2  outline-none border-none text-xl right-1  bg-white  w-[164px] h-[61px]" >Explore arts</button>
                                </div>
                            </div> 
                       </div>
                       
                       <div className=' '>
                           <div  className=' lg:hidden sm:py-6 sm:mr-9  ' onClick={handleClick}>
                                { !nav ? <IoAppsSharp className=' lg:w-7 text-white lg:h-6  sm:w-10 sm:h-7 sm:mt-4 dark:text-[#FAF9F8]'/> : <HiXMark className=' w-7 h-6 mt-1 text-white dark:text-[#FAF9F8]'/>  }
                            </div>

                           <div className={!nav ? 'hidden' :  ' border-t-2 absolute  right-4 top-20  pt-4 pl-5 bg-white h-[200px] w-40  gap-[53px] dark:bg-[#17234f] shadow-xl dark:text-[#FAF9F8] '}>
                                <div className="  pt-11 text-base gap-12  font-Sora ">
                                    <p>Events</p>
                                    <p>Museum</p>
                                    <p>Arts</p>
                                    <p>Gallaries</p>
                                </div>

                                <div className="  gap-10  mt-8 font-Sora ">
                                    <div className="  hover:bg-[#FBAF00]   bg-white rounded-tr-[30px] rounded-bl-[30px]  relative w-[164px] h-[61px] ">
                                    <button className="  hover:bg-white hover:text-black rounded-bl-[30px] rounded-tr-[30px]  text-white outline-none border-none text-xl absolute bottom-2  right-1  bg-[#FBAF00] w-[164px] h-[61px]" >Login</button>
                                    </div>
                                    
                                    <div className=" bg-[#FBAF00] hover:bg-white  rounded-tr-[30px] rounded-bl-[30px]  relative w-[164px] h-[61px] ">
                                    <button className="  hover:bg-[#FBAF00] hover:text-white rounded-bl-[30px] rounded-tr-[30px] absolute bottom-2  outline-none border-none text-xl right-1  bg-white  w-[164px] h-[61px]" >Explore arts</button>
                                    </div>
                                </div> 
                          </div> 
                     </div>
                  </div>
              </div>
           </div> 
        </div>
        </div>
    )
}

export default Aristonav;