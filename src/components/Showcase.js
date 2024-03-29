
import  img1 from '../assests/levi-meir-clancy-h2UcC6lXlJs-unsplash 2.png'
import  img2 from  '../assests/Frame 12.png'
import  img3 from  '../assests/Group 8.png'


const Showcase = () => {
   
    return(

        <div className="  ">
           <div className='  max-w-[1200px] mx-auto pt-[240px]'>
                <div className=' flex justify-between'>
                    <div>
                        <h1 className=" font-Sora lg:text-[60px] lg:leading-[72px]  text-white lg:pl-0 sm:text-5xl sm:w-[600px] sm:pl-10">Discover amazing <br /> art around the <br /> <span className=" text-[#FBAF00]">world</span> </h1>
                        <p className=" pt-11 text-[20px] leading-[30px] text-white lg:pl-0 sm:pl-10">Browse a curated selection of art around the world, <br /> including museum exhibitions, gallery openings, <br /> upcoming and many more</p>
                        <div className=" bg-[#FBAF00] hover:bg-white mt-[64px]  font-Sora  rounded-tr-[30px] rounded-bl-[30px] relative w-[164px] h-[61px] lg:ml-0 sm:ml-12">
                          <button className=" hover:bg-[#FBAF00]  hover:text-white rounded-bl-[30px] rounded-tr-[30px] absolute bottom-2 outline-none  border-none  text-xl right-1  bg-white  w-[164px] h-[61px]" >Explore arts</button>
                        </div>
                    </div>

                    <div className='   relative bg-[#FBAF00]  mt-7  rounded-bl-[200px]  rounded-tr-[200px]  '> 
                        <img className=' rounded-bl-[200px] lg:flex  sm:hidden rounded-tr-[200px] right-5 relative bottom-5  w-[400px]' src={img1} alt="" />
                    </div>
                
                </div>

                <div className='  relative bottom-[520px]   '>
                    <img className=' lg:flex  sm:hidden  ml-[680px]' src={img2} alt="" />
                </div>
            

                <span className=' relative bottom-72 lg:flex  sm:hidden  '>
                    <svg className=' ml-[445px]  ' width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.561049 29.6131C0.56132 29.5977 0.574281 29.5854 0.589705 29.5856C15.9621 29.8246 27.1145 15.021 22.6437 0.311072C22.6392 0.296309 22.6474 0.280456 22.6622 0.275943C22.6769 0.27143 22.6926 0.279962 22.6972 0.294712C27.2202 14.9886 44.7456 21.0205 57.354 12.2229C57.3667 12.2141 57.3843 12.217 57.3931 12.2297C57.402 12.2423 57.3987 12.2599 57.3861 12.2687C44.8091 21.1111 44.488 39.6427 56.7512 48.9154C56.7635 48.9247 56.7662 48.9424 56.7569 48.9547C56.7476 48.967 56.7299 48.9693 56.7176 48.9601C44.4215 39.731 26.6977 45.1523 21.6684 59.6807C21.6633 59.6952 21.6474 59.7032 21.6328 59.6982C21.6182 59.6932 21.6105 59.6771 21.6155 59.6625C26.5931 45.1163 15.9602 29.9352 0.588736 29.6416C0.573308 29.6413 0.560778 29.6285 0.561049 29.6131Z" fill="white"/>
                    </svg>
                </span>
            </div>

          
            <div>
                <span  className=' flex justify-end'>
                   <img className=' lg:flex  sm:hidden  -mt-[970px]' src={img3} alt="" />
                </span>
            </div>
        </div>
    )
}

export default Showcase;