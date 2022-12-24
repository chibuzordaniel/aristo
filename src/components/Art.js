import React from 'react'
import {Link} from 'react-router-dom';
import  img1 from '../assests/levi-meir-clancy-h2UcC6lXlJs-unsplash 2.png'
import  img4 from '../assests/andres-herrera-DJPLYpriawI-unsplash 1.png'
import  img5 from '../assests/auguste-a-cGdVCfWpNZU-unsplash 1.png'
import  img6 from '../assests/mika-y-RjWd6Ol7A-unsplash 1.png'
import  img7 from '../assests/olenka-varzar-ot5bYzjWksE-unsplash 1.png'
import  img8 from '../assests/Group 7.png'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'






const Art = () => {

    return(
        <div >
            <div className="max-w-[1200px] mx-auto ">
                <div>
                    <div className=" flex justify-between text-white mt-[89px]">

                      <div>
                            <h1 className=" text-[40px] font-Sora ">Art in the collection</h1>
                            <p className=" text-[17px]  leading-[30px]">Browse a curated selection of art around the world, including <br /> museum exhibitions, gallery openings, upcoming and many <br /> more</p>
                      </div>

                      <div className=" flex w-[467px] h-[66px] bg-[#1A1405] rounded-[51px]  ">
                         <form className=' flex' action="">
                              <label htmlFor=" search">
                                    <span className=" mt-5  ml-5 pl-5">
                                        <svg className=' -mt-1 ml-7' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_15_4)">
                                        <path d="M12.5 21.25C17.3325 21.25 21.25 17.3325 21.25 12.5C21.25 7.66751 17.3325 3.75 12.5 3.75C7.66751 3.75 3.75 7.66751 3.75 12.5C3.75 17.3325 7.66751 21.25 12.5 21.25Z" stroke="#FBAF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M26.25 26.25L18.75 18.75" stroke="#FBAF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_15_4">
                                        <rect width="30" height="30" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </span>
                                </label>
                                <input   className=" w-[400px] h-[46px] pl-4 pt-[6px] font-Sora mt-2 outline-none border-none  bg-[#1A1405]" type="text" name="" id=" search" placeholder="Search" />
                          </form>
                      </div>
                    </div>
                </div>


                <div className=' mt-20  grid grid-cols-3 justify-between  gap-7'>

                   <div className=" card2  text-white   bg-white  ">
                    <Link to='/art' >
                            <img className='  card ' src={img4} alt="" />
                            <div className=' pl-5 pt-5  font-Sora'>
                                <h1 className=' text-[24px]'>Plastic Hears Sculpture</h1>
                                <p className=' text-[17px] pt-7'>11- 12 November, 2021</p>
                                <p className=' text-[17px] pt-2'>Galeri Salihara, Indonesia</p>
                            </div>
                      </Link>
                    </div>

                    <div className=" card2  text-white   bg-white  ">
                    <Link to='/art' >
                            <img className='  card ' src={img5} alt="" />
                            <div className=' pl-5 pt-5  font-Sora'>
                                <h1 className=' text-[24px]'>Plastic Hears Sculpture</h1>
                                <p className=' text-[17px] pt-7'>11- 12 November, 2021</p>
                                <p className=' text-[17px] pt-2'>Galeri Salihara, Indonesia</p>
                            </div>
                      </Link>
                    </div>

                    <div className=" card2  text-white   bg-white  ">
                    <Link to='/art' >
                            <img className='  card ' src={img6} alt="" />
                            <div className=' pl-5 pt-5  font-Sora'>
                                <h1 className=' text-[24px]'>Plastic Hears Sculpture</h1>
                                <p className=' text-[17px] pt-7'>11- 12 November, 2021</p>
                                <p className=' text-[17px] pt-2'>Galeri Salihara, Indonesia</p>
                            </div>
                      </Link>
                    </div>

                    <div className=" card2  text-white   bg-white  ">
                    <Link to='/art' >
                            <img className='  card ' src={img7} alt="" />
                            <div className=' pl-5 pt-5  font-Sora'>
                                <h1 className=' text-[24px]'>Plastic Hears Sculpture</h1>
                                <p className=' text-[17px] pt-7'>11- 12 November, 2021</p>
                                <p className=' text-[17px] pt-2'>Galeri Salihara, Indonesia</p>
                            </div>
                      </Link>
                    </div>

                    <div className=" card2  text-white   bg-white  ">
                    <Link to='/art' >
                            <img className='  card ' src={img1} alt="" />
                            <div className=' pl-5 pt-5  font-Sora'>
                                <h1 className=' text-[24px]'>Plastic Hears Sculpture</h1>
                                <p className=' text-[17px] pt-7'>11- 12 November, 2021</p>
                                <p className=' text-[17px] pt-2'>Galeri Salihara, Indonesia</p>
                            </div>
                      </Link>
                    </div>

                    <div className=" card2  text-white   bg-white  ">
                        <Link to='/art' >
                            <img className='  card ' src={img5} alt="" />
                            <div className=' pl-5 pt-5  font-Sora'>
                                <h1 className=' text-[24px]'>Plastic Hears Sculpture</h1>
                                <p className=' text-[17px] pt-7'>11- 12 November, 2021</p>
                                <p className=' text-[17px] pt-2'>Galeri Salihara, Indonesia</p>
                            </div>
                      </Link>
                    </div>
                </div> 
            </div>


            <div className='flex justify-center'>
              
                <div className=" bg-[#FBAF00] mt-[211px]     font-Sora  button2 relative w-[245px] h-[78px] ">
                    <button className=" button4 absolute bottom-3 outline-none  border-none  text-xl right-3  bg-white  w-[245px] h-[75px]"><HiOutlineArrowNarrowRight className=' absolute left-[200px] top-7  text-2xl'/>Explore arts</button>
                   
                </div>
            </div>

            <div>
                <img className='  -mt-[510px]' src={img8} alt="" />
            </div>
        </div>
    )
}

export default Art;