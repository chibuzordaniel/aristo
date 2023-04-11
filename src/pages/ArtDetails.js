/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react'
import {HiOutlineArrowNarrowLeft,  HiOutlineShare} from 'react-icons/hi'
import  img3 from  '../assests/Group 8.png'
import Aristonav from '../components/Aristonav'
import { Link, useParams} from 'react-router-dom'




const Home = () => {
  const [users, setUsers] = useState([])
  const {artId, imgId} = useParams()

  
  const fetchData = async () => {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/${artId}`)
    try{
        const data = await response.json()
        setUsers(data.data)
     }catch{
        console.log('error')
     }
    }
  
    useEffect(() => {
      fetchData()
   
    }, [artId])


     console.log(users)

    return(
        <div className=' bg-[#110C00] w-full h-[900px] '>
            <Aristonav/>
            <div className=' max-w-[1200px] mx-auto '>
              <div className=' pt-[180px]'>
                <div className=' flex justify-between'>
                    <div className=' lg:ml-0 sm:ml-10'>
                      <Link to='/'> <HiOutlineArrowNarrowLeft className=' text-white text-[35px]'/></Link>
                    </div>

                    <div className=' lg:relative lg:left-0  sm:relative left-[165px]'>
                      < HiOutlineShare className=' text-white text-[35px]'/>
                    </div>
                </div>

                <div className=' lg:flex gap-[54px] mt-[57px] sm:block'>
                    <div  className='bg-[#1A1405] rounded-tl-[200px] rounded-br-[200px] lg:w-[430px] lg:h-[530px] lg:ml-0 sm:w-[515px] sm:h-[600px] sm:ml-10 '>
                        <img className="rounded-tl-[200px] rounded-br-[200px] lg:w-[430px] lg:h-[530px] object-cover  lg:ml-0 sm:w-[610px] sm:h-[600px]  "  src={`https://www.artic.edu/iiif/2/${imgId}/full/843,/0/default.jpg`}  alt="art" />
                    </div>

                    <div>
                      <h1 className=' text-white text-[32px]  lg:w-[700px] font-Sora lg:pt-0 lg:pl-0 sm:pl-10  sm:w-[600px] sm:pt-5'>{users.title}</h1>
                      <p className='  text-white text-[17px] pt-5 font-Sora lg:pl-0 sm:pl-10'>{users.date_start}  -  {users.date_end}</p>
                      <p className='  text-white text-[17px] w-[380px] pt-5 font-Sora lg:pl-0 sm:pl-10'>{users.artist_display}</p>
                    
                      <div className=' flex  lg:gap-4 mt-48 lg:relative lg:left-0  sm:gap-10 sm:relative sm:left-28  bottom-8'>
                        <div className="  hover:bg-[#FBAF00] mt-1 rounded-tr-[30px] rounded-bl-[30px]   relative w-[164px] h-[61px] ">
                          <button className=" rounded-bl-[30px] rounded-tr-[30px]  absolute bottom-2 font-Sora  outline-none border-none text-white hover:text-black text-xl right-1  hover:bg-white  w-[164px] h-[61px]" >Explore arts</button>
                        </div>

                        <div className='   hover:bg-white rounded-tr-[30px] rounded-bl-[30px]  relative w-[164px] h-[61px] '>
                          <button className=" text-white rounded-bl-[30px] rounded-tr-[30px]   font-Sora text-xl pt-2 hover:bg-[#FBAF00]  hover:text-black button4 absolute bottom-2 outline-none border-none   right-1  w-[164px] h-[61px] " >Explore arts</button>
                        </div>
                      </div>
                    </div>
                </div>
             </div>
          </div>
            <div className='   flex justify-end  '>
              <img className=' lg:flex  sm:hidden absolute top-[220px]  ' src={img3} alt="" />
            </div>
        </div>
    )
}
 
export default Home;