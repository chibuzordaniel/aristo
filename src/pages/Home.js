import React from 'react'
import {HiOutlineArrowNarrowLeft,  HiOutlineShare} from 'react-icons/hi'
import  img1 from '../assests/levi-meir-clancy-h2UcC6lXlJs-unsplash 2.png'
import  img3 from  '../assests/Group 8.png'
import Aristonav from '../components/Aristonav'
import { Link } from 'react-router-dom'


const Home = () => {
    
    return(
        <div className=' gradient h-[100%] pb-[48px]'>
           
            <Aristonav/>
            <div className=' max-w-[1200px] mx-auto '>
                <div className=' pt-[300px]'>
                <div className=' flex justify-between'>
    
                    <div>
                      <Link to='/'> <HiOutlineArrowNarrowLeft className=' text-white text-[35px]'/></Link>
                    </div>

                    <div>
                      < HiOutlineShare className=' text-white text-[35px]'/>
                    </div>
            
                </div>

                <div className=' flex gap-[54px] mt-[57px]'>
                    <div>
                        <img className='card8 ' src={img1} alt="" />
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
          </div>

            <div className='   flex justify-end  '>
                <img className=' absolute top-[340px]  ' src={img3} alt="" />
            </div>
        </div>
    )
}

export default Home;