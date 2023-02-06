import React, { useEffect, useState } from "react"
import  img8 from '../assests/Group 7.png'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Art = () => {

    const [users, setUsers] = useState([])
   

    const fetchData = async () => {
    const response = await fetch("https://api.artic.edu/api/v1/artworks")
    try{
        const data = await response.json()
        setUsers(data.data)
     }
     catch{
        console.log('error')
     }
    }
  
    useEffect(() => {
      fetchData()
    }, [])
    console.log(users)

    return(
        <div  className=' bg-[#110C00]'>
            <div className="max-w-[1200px] mx-auto ">
                <div>
                    <div className=" flex  justify-between text-white pt-[89px]">
                      <div>
                            <h1 className=" text-[40px] font-Sora ">Art in the collection</h1>
                            <p className=" text-[17px]  leading-7">Browse a curated selection of art around the world, including <br /> museum exhibitions, gallery openings, upcoming and many <br /> more</p>
                      </div>

                      <div className=" flex w-[467px] h-[66px] bg-[#1A1405] rounded-[51px]  ">
                         <form className=' flex' action="">
                              <label htmlFor=" search">
                                    <span className="   pl-5">
                                     < AiOutlineSearch className=" text-[#FBAF00]  ml-5 w-[30px] h-[30px] -mt-0.5"/>
                                    </span>
                                </label>
                                <input   className=" w-[400px] h-[46px] pl-4  pt-1.5 font-Sora mt-2  outline-none border-none  bg-[#1A1405]" type="text" name="" id=" search" placeholder= "Search" />
                          </form>
                      </div>
                    </div>
                </div>

                <div className=' '>
                        {users.length > 0 && (
                            <ul className=" mt-20  grid grid-cols-3 justify-between  text-white gap-7">
                                {users.map(user => (
                                    <Link to={`/art/details/${user.id}/${user.image_id}`} className=" rounded-tl-[150px]  rounded-br-[150px]  bg-[#1A1405]  w-[380ppx] h-[100%] mb-9 font-Sora" key={user.id}> 
                                        <img className=" rounded-tl-[150px]  w-[100%] h-[330px] object-cover"  src={`https://www.artic.edu/iiif/2/${user?.image_id}/full/330,/0/default.jpg`} alt=" art" />
                                        <div className=" text-2xl px-5 font-bold  pt-10">{user.title} </div> 
                                        <div className="  text-lg pt-8  px-5 ">{user.date_start}  -  {user.date_end}</div>
                                        <div className=" text-lg  pt-2  px-5 w-[330px] ">{user.artist_display}</div>
                                    </Link>
                                ))}
                            </ul>
                        )}
                </div> 
            </div>
            <div className='flex justify-center'>
                <div>
                <div className=" bg-[#FBAF00] hover:bg-white mt-[211px] font-Sora  rounded-tr-[30px] rounded-bl-[30px] relative w-[245px] h-[78px] ">
                    <button className=" hover:bg-[#FBAF00] hover:text-white rounded-bl-[30px] rounded-tr-[30px] absolute bottom-3 outline-none  border-none  text-xl right-3  bg-white  w-[245px] h-[75px]"><HiOutlineArrowNarrowRight className=' absolute left-[200px] top-7  text-2xl'/>Explore arts</button>
                </div>
                </div>
            </div>
            <div>
                <img className='  -mt-[510px]' src={img8} alt="" />
            </div>
        </div>
    )
}

export default Art;