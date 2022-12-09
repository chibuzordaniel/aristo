
import  img1 from '../assests/levi-meir-clancy-h2UcC6lXlJs-unsplash 2.png'



const Artistoart = () => {

    return(
        <div>
            <div className="max-w-[1200px] mx-auto">
                <div>
                    <div className=" flex justify-between text-white mt-[89px]">

                      <div>
                            <h1 className=" text-[40px] font-Sora ">Art in the collection</h1>
                            <p className=" text-[17px]  leading-[30px]">Browse a curated selection of art around the world, including <br /> museum exhibitions, gallery openings, upcoming and many <br /> more</p>
                      </div>

                      <div className=" flex w-[457px] h-[66px] bg-[#1A1405] rounded-[51px]  ">
                            <span className=" mt-5  ml-5">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <input className=" w-[400px] h-[46px] pl-4 pt-[6px] font-Sora mt-2 outline-none border-none  bg-[#1A1405]" type="text" name="" id="" placeholder="Search" />
                      </div>

                    </div>
                </div>


                <div className=' mt-20  grid grid-cols-3 justify-between'>

                   <div className=" card2  text-white   bg-white  ">
                        <img className='  card ' src={img1} alt="" />
                        <div className=' '>
                        <h1>Plastic Hears Sculpture</h1>
                        </div>
                    </div>

                    <div className=" card2  text-white   bg-white  ">
                        <img className='  card ' src={img1} alt="" />
                        <div className=' '>
                        <h1>Plastic Hears Sculpture</h1>
                        </div>
                    </div>

                    <div className=" card2  text-white   bg-white  ">
                        <img className='  card ' src={img1} alt="" />
                        <div className=' '>
                        <h1>Plastic Hears Sculpture</h1>
                        </div>
                    </div>

                    <div className=" card2  text-white   bg-white  ">
                        <img className='  card ' src={img1} alt="" />
                        <div className=' '>
                        <h1>Plastic Hears Sculpture</h1>
                        </div>
                    </div>

                    <div className=" card2  text-white   bg-white  ">
                        <img className='  card ' src={img1} alt="" />
                        <div className=' '>
                        <h1>Plastic Hears Sculpture</h1>
                        </div>
                    </div>

                    <div className=" card2  text-white   bg-white  ">
                        <img className='  card ' src={img1} alt="" />
                        <div className=' '>
                        <h1>Plastic Hears Sculpture</h1>
                        </div>
                    </div>
                </div> 

            </div>
        </div>
    )
}

export default Artistoart;