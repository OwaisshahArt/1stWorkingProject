'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from '../../../assets/images/arrowRight.svg';
import ArrowRightB from '../../../assets/images/arrowRightB.svg';
import ArrowLeftB from '../../../assets/images/arrowLeftB.svg';
import EE1 from '../../../assets/images/ee1.png';
import EE2 from '../../../assets/images/ee2.png';
import EE3 from '../../../assets/images/ee3.png';
import EE4 from '../../../assets/images/ee4.png';
import Trip from '../../../assets/images/trip.png';

function NextArrow(props){
  const { onClick } = props;
  return(
    <>
          <button onClick={onClick}
          className="slick-next slick-next2 768-991:!hidden !flex items-center justify-center text-white !bg-white rounded-full before:hidden !top-[60%] !w-16 !h-16 !border-[6px] !border-solid !border-[#E4F4FB] z-[1]">
          <Image src={ArrowRightB}/>
        </button>
    </>
  )
}
function PrevArrow(props) {
  const { onClick } = props;
  return(
    <>
        <button onClick={onClick}
          className="slick-prev slick-prev2 768-991:!hidden !flex items-center justify-center text-white !bg-white rounded-full 992-1199:!-left-7 1366-1439:!-left-[2.3rem] !-left-[2.2rem] !top-[60%] before:hidden !w-16 !h-16 !border-[6px] !border-solid !border-[#E4F4FB] z-[1]">
          <Image src={ArrowLeftB} alt=""/>
        </button>
    </>
  )
}
 
export default function Experiences() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

    return(
        <main>
                <section
      className="bg-[#E4F4FB] relative pt-12 pb-32 px-48 768-991:pb-16 768-991:px-6 768-991:pe-0 992-1199:px-8 1680-1919:px-32 1600-1679:px-28 1440-1599:px-[6.5rem] 1366-1439:px-16">
      <h3 className="font-poppins-semiBold text-xs font-600 tracking-[3.6px] uppercase text-[#3DABC2]">BLUEWATER TRAVEL FAVOURITES
      </h3>
      <div
        className="top-text flex items-end 768-991:items-center 1440-1599:items-center 992-1199:items-center 1366-1439:items-center justify-between">
        <h4
          className="text-[38px] 320-529:text-[24px] 320-529:pt-2 320-529:leading-7 768-991:text-[30px] 768-991:leading-8 1440-1599:text-[32px] 992-1199:text-[26px] 992-1199:leading-7 1366-1439:text-[30px] 1366-1439:leading-8 font-lato-extrabold font-extrabold leading-10 1440-1599:leading-9">
          Unforgettable Experiences</h4>
        <Link href="#"
          className="btn-hover bg-[#F57415] 768-991:hidden py-3 px-10 font-600 text-base 992-1199:py-3 992-1199:px-8 992-1199:text-[15px] 1366-1439:py-3 1366-1439:px-8 1366-1439:text-[15px] text-white rounded-full border-[2px] border-solid border-[#F57415] flex items-center gap-3 font-poppins-semiBold transition duration-[.6s] ease-in-out hover:bg-transparent hover:text-[#F57415]"
          >
            All Top Ideas
            <Image src={ArrowRight} alt=""/>
        </Link>

      </div>

      <div className="w-full relative mt-10 768-991:mt-1 768-991:pb-5">
        <div className="slick experience-slider !select-text">
        <Slider {...settings}>
          <div>
            <div
              className="cards h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 min-h-[390px] my-[60px] cursor-pointer transition duration-[.3s] ease-in-out hover:bg-[#3DABC2]">
              <div className="card-image translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={EE1}
                  className="rounded-[10px] h-[220px] w-full object-cover transition duration-[.6s] ease-in-out"/>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] text-black overflow-hidden line-clamp-2 transition duration-[.3s] ease-in-out min-h-[55px]">
                  Top 10 Dive Sites in Bonaire</h4>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-4 overflow-hidden line-clamp-3 transition duration-[.3s] ease-in-out">
                  A small island in the Caribbean, Bonaire is best known for being the “shore diving capital of the
                  world”...</p>
                <Link href="#"
                  className="font-poppins-semiBold text-sm font-600 leading-6 tracking-[0.28px] flex items-center gap-3 text-white opacity-0 transition duration-[.3s] ease-in-out">Explore
                  more <Image src={ArrowRight} alt=""/></Link>
              </div>
            </div>
          </div>
          <div >
            <div
              className="cards h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 min-h-[390px] my-[60px] cursor-pointer transition duration-[.3s] ease-in-out hover:bg-[#3DABC2]">
              <div className="card-image translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={EE2}
                  className="rounded-[10px] h-[220px] w-full object-cover transition duration-[.6s] ease-in-out"/>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] text-black overflow-hidden line-clamp-2 transition duration-[.3s] ease-in-out min-h-[55px]">
                  Best Scuba Diving in the World - Top 10</h4>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-4 overflow-hidden line-clamp-3 transition duration-[.3s] ease-in-out">
                  A comprehensive guide to the best scuba diving destinations in the world - updated for 2023!</p>
                <Link href="#"
                  className="font-poppins-semiBold text-sm font-600 leading-6 tracking-[0.28px] flex items-center gap-3 text-white opacity-0 transition duration-[.3s] ease-in-out">Explore
                  more <Image src={ArrowRight} alt=""/></Link>
              </div>
            </div>
          </div>
          <div >
            <div
              className="cards h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 min-h-[390px] my-[60px] cursor-pointer transition duration-[.3s] ease-in-out hover:bg-[#3DABC2]">
              <div className="card-image translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={EE3}
                  className="rounded-[10px] h-[220px] w-full object-cover transition duration-[.6s] ease-in-out"/>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] text-black overflow-hidden line-clamp-2 transition duration-[.3s] ease-in-out min-h-[55px]">
                  Top 4 Places to Dive with Hammerhead Sharks</h4>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-4 overflow-hidden line-clamp-3 transition duration-[.3s] ease-in-out">
                  A comprehensive guide to the best scuba diving destinations in the world - updated for 2023!</p>
                <Link href="#"
                  className="font-poppins-semiBold text-sm font-600 leading-6 tracking-[0.28px] flex items-center gap-3 text-white opacity-0 transition duration-[.3s] ease-in-out">Explore
                  more <Image src={ArrowRight} alt=""/></Link>
              </div>
            </div>
          </div>
          <div >
            <div
              className="cards h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 min-h-[390px] my-[60px] cursor-pointer transition duration-[.3s] ease-in-out hover:bg-[#3DABC2]">
              <div className="card-image translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={EE4}
                  className="rounded-[10px] h-[220px] w-full object-cover transition duration-[.6s] ease-in-out"/>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] text-black overflow-hidden line-clamp-2 transition duration-[.3s] ease-in-out min-h-[55px]">
                  The Best of Baja California Scuba Diving</h4>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-4 overflow-hidden line-clamp-3 transition duration-[.3s] ease-in-out">
                  Situated on the west coast of Mexico, Baja California is one of the most diverse yet accessible...</p>
                <Link href="#"
                  className="font-poppins-semiBold text-sm font-600 leading-6 tracking-[0.28px] flex items-center gap-3 text-white opacity-0 transition duration-[.3s] ease-in-out">Explore
                  more <Image src={ArrowRight} alt=""/></Link>
              </div>
            </div>
          </div>
          <div>
            <div
              className="cards h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 min-h-[390px] my-[60px] cursor-pointer transition duration-[.3s] ease-in-out hover:bg-[#3DABC2]">
              <div className="card-image translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={EE1}
                  className="rounded-[10px] h-[220px] w-full object-cover transition duration-[.6s] ease-in-out"/>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg font-poppins-semiBold font-600 tracking-[-0.18px] text-black overflow-hidden line-clamp-2 transition duration-[.3s] ease-in-out min-h-[55px]">
                  Top 10 Dive Sites in Bonaire</h4>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-4 overflow-hidden line-clamp-3 transition duration-[.3s] ease-in-out">
                  A small island in the Caribbean, Bonaire is best known for being the “shore diving capital of the
                  world”...</p>
                <Link href="#"
                  className="font-poppins-semiBold text-sm font-600 leading-6 tracking-[0.28px] flex items-center gap-3 text-white opacity-0 transition duration-[.3s] ease-in-out">Explore
                  more <Image src={ArrowRight} alt=""/></Link>
              </div>
            </div>
          </div>
          </Slider>
        </div>
      </div>

      <Link href="#"
        className="btn-hover bg-[#F57415] hidden 768-991:inline-flex 320-529:py-3 320-529:px-8 320-529:text-[15px] py-4 px-10 font-600 text-base 992-1199:py-3 992-1199:px-8 992-1199:text-[15px] 1366-1439:py-3 1366-1439:px-8 1366-1439:text-[15px] text-white rounded-full border-[2px] border-solid border-[#F57415] items-center gap-3 font-poppins-semiBold transition duration-[.6s] ease-in-out hover:bg-transparent hover:text-[#F57415]"
        >
            All Top Ideas
            <Image src={ArrowRight} alt=""/>
      </Link>

      <Image src={Trip}
        className="absolute 320-529:-bottom-[6px] 768-991:-bottom-[15px] -bottom-[35px] left-0 w-full pointer-events-none"/>
    </section>
        </main>
    )
}