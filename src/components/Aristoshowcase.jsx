
import  img1 from '../assests/levi-meir-clancy-h2UcC6lXlJs-unsplash 2.png'



const Aristoshowcase = () => {
   
    return(
        <div className=" ">
            <div className=" max-w-[1200px] mx-auto">
                <div className=" flex  justify-between mt-[159px]">
                    <div>
                        <h1 className=" font-Sora text-[68px] leading-[72px] text-white">Discover amazing <br /> art around the <br /> <span className=" text-[#FBAF00]">world</span> </h1>
                        <p className=" pt-11 text-[20px] leading-[30px] text-white">Browse a curated selection of art around the world, <br /> including museum exhibitions, gallery openings, <br /> upcoming and many more</p>
                        <div className=" bg-[#FBAF00] mt-[64px]  font-Sora  button2 relative w-[164px] h-[61px] ">
                            <button className=" button4 absolute bottom-2  text-xl right-1  bg-white  w-[164px] h-[61px]" >Explore arts</button>
                        </div>
                    </div>

                    <div className="">
                        <div>
                            <img src={img1} alt="" />
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aristoshowcase;