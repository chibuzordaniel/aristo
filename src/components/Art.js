import React, { useEffect, useState } from "react"
import  img8 from '../assests/Group 7.png'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'






const Art = () => {

    const [users, setUsers] = useState([])

    const fetchData = async () => {
      const response = await fetch("https://api.artic.edu/api/v1/artworks")
      const data = await response.json()
      setUsers(data.data)
    }
  
    useEffect(() => {
      fetchData()
    }, [])
      console.log(users)

    return(
        <div  className=' bg-[#110C00]'>
            <div className="max-w-[1200px] mx-auto ">
                <div>
                    <div className=" flex justify-between text-white pt-[89px]">

                      <div>
                            <h1 className=" text-[40px] font-Sora ">Art in the collection</h1>
                            <p className=" text-[17px]  leading-[30px]">Browse a curated selection of art around the world, including <br /> museum exhibitions, gallery openings, upcoming and many <br /> more</p>
                      </div>

                      <div className=" flex w-[467px] h-[66px] bg-[#1A1405] rounded-[51px]  ">
                         <form className=' flex' action="">
                              <label htmlFor=" search">
                                    <span className="   pl-5">
                                     < AiOutlineSearch className=" text-[#FBAF00] ml-[22px] w-[30px] h-[30px] -mt-0.5"/>
                                    </span>
                                </label>
                                <input   className=" w-[400px] h-[46px] pl-4 pt-[6px] font-Sora mt-2  outline-none border-none  bg-[#1A1405]" type="text" name="" id=" search" placeholder= "Search" />
                          </form>
                      </div>
                    </div>
                </div>


                <div className=' '>

                        {users.length > 0 && (
                            <ul className=" mt-20  grid grid-cols-3 justify-between  text-white gap-7">
                            {users.map(user => (
                                <li 
                                    className="card2  font-Sora   " key={user.id}> 
                                    <Link to='Home'><img className="card"  src={`https://www.artic.edu/iiif/2/${user?.image_id}/full/330,/0/default.jpg`} alt=" art" /></Link>
                                    <div className="text-[24px] px-5  pt-10">{user.title} </div> 
                                    <div className=" pt-8  px-5 ">{user.updated_at}</div>
                                 </li>
                            ))}
                            </ul>
                        )}
                        {/* <Link to='Home'>
                            <img className='  card ' src={img5} alt="" />
                            <div className=' pl-5 pt-5  font-Sora'>
                                <h1 className=' text-[24px]'>Plastic Hears Sculpture</h1>
                                <p className=' text-[17px] pt-7'>11- 12 November, 2021</p>
                                <p className=' text-[17px] pt-2'>Galeri Salihara, Indonesia</p>
                            </div>
                       </Link>  */}
                    
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