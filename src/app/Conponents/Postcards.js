'use client';
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PP1 from '../../../assets/images/pp1.png';
import PP2 from '../../../assets/images/pp2.png';
import PP3 from '../../../assets/images/pp3.png';
import ArrowRight from '../../../assets/images/arrowRight.svg';
import ArrowLeftBlue from '../../../assets/images/arrowLeftBlue.svg';
import ArrowRightBlue from '../../../assets/images/arrowRightBlue.svg';
import Rates4 from '../../../assets/images/Rates4.svg';
import Rates3 from '../../../assets/images/Rates3.svg';
import RR1 from '../../../assets/images/rr1.png';
import RR2 from '../../../assets/images/rr2.png';
import RR3 from '../../../assets/images/rr3.png';


function NextArrow(props) {
  const { onClick } = props;
  return(
    <>
          <button onClick={onClick}
            className="slick-next slick-next4 768-991:!hidden !static !transform-none order-2 !flex items-center justify-center text-white !bg-[#D6E8EF] rounded-full before:hidden 992-1199:!right-[39%] 1366-1439:!right-[43%] !right-[44%] 1440-1599:!right-[43%] !top-[103%] !w-12 !h-12 z-[1]">
            <Image src={ArrowRightBlue} alt=""/>
          </button>
    </>
  )
}

function PrevArrow(props) {
  const { onClick } = props;
  return(
    <>
     <button onClick={onClick}
            className="  slick-prev slick-prev4 768-991:!hidden !static !transform-none !flex items-center justify-center text-white !bg-[#D6E8EF] rounded-full 992-1199:!left-[38%] 1366-1439:!left-[42.5%] !left-[44%] 1440-1599:!left-[42.5%] !top-[103%] before:hidden !w-12 !h-12 z-[1]">
            <Image src={ArrowLeftBlue} alt=""/>
          </button>
    </>
  )
}

export default function Postcards() {

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
                <section className="bg-[#F8FCFF] relative pt-12 pb-36 768-991:pb-16 992-1199:pb-16">
      <div className="top-img flex items-center justify-center gap-11 relative 320-529:-mt-32 -mt-44">
        <Image src={PP1} className="320-529:w-[90px]"/>
        <Image src={PP2} className="320-529:w-[90px]"/>
        <Image src={PP3}
          className="absolute 320-529:w-[110px] top-[50%] left-[51%] translate-x-[-50%] translate-y-[-50%]"/>
        <video className="absolute -bottom-14 w-[70px] h-[20px] object-contain" autoplay muted loop playsinline>
          <source src="../assets/images/wave2.mp4" type="video/mp4"/>
        </video>
      </div>
      <div
        className="review-heading w-full flex items-center justify-center pt-20 px-48 320-529:px-2 768-991:px-6 992-1199:px-8 1680-1919:px-32 1600-1679:px-28 1440-1599:px-[6.5rem] 1366-1439:px-16 relative">
        <h3
          className="text-center font-lato-extrabold text-[40px] 320-529:text-[24px] 320-529:leading-7 768-991:text-[30px] 768-991:leading-8 992-1199:text-[26px] 992-1199:leading-7 1366-1439:text-[30px] 1366-1439:leading-8 1440-1599:text-[32px] font-extrabold leading-10">
          Postcards From Our Explorers</h3>
        <Link href="#"
          className="btn-hover-blue absolute 768-991:hidden right-48 1680-1919:right-32 992-1199:right-8 992-1199:py-3 992-1199:px-8 992-1199:text-[15px] 1366-1439:right-16 1366-1439:py-3 1366-1439:px-8 1366-1439:text-[15px] 1600-1679:right-28 1440-1599:right-[6.5rem] bg-[#3DABC2] py-3 px-10 font-600 text-base text-white rounded-full border-[2px] border-solid border-[#3DABC2] flex items-center gap-3 font-poppins-semiBold transition duration-[.6s] ease-in-out hover:bg-transparent hover:text-[#3DABC2]"
          >
          All reviews
          <Image src={ArrowRight} alt=""/>
        </Link>
      </div>

      <div className="review-main relative">

        <div className="review-slider 768-991:pt-0 pt-20 pb-10 !select-text !mb-0">
        <Slider {...settings}>
          <div>
            <div
              className="review-slide 768-991:ps-2 768-991:flex-col 1366-1439:ps-3 992-1199:min-h-[260px] 1366-1439:min-h-[230px] w-[95%] min-h-[200px] my-[60px] border border-solid border-[#D6E8EF] rounded-[10px] px-5 flex">
              <div className="review-avatar">
                <div
                  className="avatar w-[80px] h-[80px] 768-991:w-[70px] 768-991:h-[70px] 768-991:translate-y-[-20px] bg-[#4A748B] rounded-[20px] flex items-center justify-center translate-y-[-25px] overflow-hidden border-8 border-solid border-[#F8FCFF]">
                  <span
                    className="font-poppins-semiBold text-[40px] 768-991:text-[30px] 1366-1439:text-[30px] font-600 leading-10 tracking-[-0.4px] text-white uppercase">O</span>
                </div>
              </div>
              <div
                className="review-detail 768-991:pe-0 768-991:pt-0 768-991:-mt-2 py-3 pb-4 px-4 1366-1439:pe-0 1366-1439:ps-2 1440-1599:pe-0">
                <div className="review-name flex items-center justify-between">
                  <h5
                    className="font-poppins-semiBold text-lg 1600-1679:text-base 768-991:text-16px 992-1199:text-[16px] 992-1199:w-[50%] 1440-1599:text-[16px] 1366-1439:text-[16px] 1366-1439:leading-[20px] font-semibold leading-[22px] 1440-1599:leading-[20px] tracking-[-0.18px] text-black">
                    Olga A</h5>
                  <Image src={Rates4} alt=""/>
                </div>
                <h6 className="text-[#B6D6E2] font-poppins-semiBold text-[13px] font-semibold leading-6 tracking-[0.13px]">AUG 08,
                  2023</h6>
                <p
                  className="font-poppins-medium text-[14px] font-medium 768-991:pt-1 leading-[22px] tracking-[-0.14px] text-black pt-7 overflow-hidden line-clamp-5">
                  Only 5 star experience with “bluewater travel”! Laura has been helping me arranging my diving and land
                  trips/ simple and very complex. She is very knowledgeable and has years of experience in the field....
                </p>
              </div>
            </div>
          </div>
          <div >
            <div
              className="review-slide 768-991:ps-2 768-991:flex-col 1366-1439:ps-3 992-1199:min-h-[260px] 1366-1439:min-h-[230px] w-[95%] min-h-[200px] my-[60px] border border-solid border-[#D6E8EF] rounded-[10px] px-5 flex">
              <div className="review-avatar">
                <div
                  className="avatar w-[80px] h-[80px] 768-991:w-[70px] 768-991:h-[70px] 768-991:translate-y-[-20px] bg-[#4A748B] rounded-[20px] flex items-center justify-center translate-y-[-25px] overflow-hidden border-8 border-solid border-[#F8FCFF]">
                  <Image src={RR1} className="w-full h-full object-cover"/>
                </div>
              </div>
              <div
                className="review-detail 768-991:pe-0 768-991:pt-0 768-991:-mt-2 py-3 pb-4 px-4 1366-1439:pe-0 1366-1439:ps-2 1440-1599:pe-0">
                <div className="review-name flex items-center justify-between">
                  <h5
                    className="font-poppins-semiBold text-lg 1600-1679:text-base 768-991:text-16px 992-1199:text-[16px] 992-1199:w-[50%] 1440-1599:text-[16px] 1366-1439:text-[16px] 1366-1439:leading-[20px] font-semibold leading-[22px] 1440-1599:leading-[20px] tracking-[-0.18px] text-black">
                    Randall Spangler</h5>
                    <Image src={Rates3} alt=""/>
                </div>
                <h6 className="text-[#B6D6E2] font-poppins-semiBold text-[13px] font-semibold leading-6 tracking-[0.13px]">JUL 22,
                  2023</h6>
                <p
                  className="font-poppins-medium text-[14px] font-medium 768-991:pt-1 leading-[22px] tracking-[-0.14px] text-black pt-7 overflow-hidden line-clamp-5">
                  We've booked several trips through Bluewater. Tim and Sabine have proved superbly competent and
                  communicative. They understand what types of travel we enjoy and what we don't like....</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="review-slide 768-991:ps-2 768-991:flex-col 1366-1439:ps-3 992-1199:min-h-[260px] 1366-1439:min-h-[230px] w-[95%] min-h-[200px] my-[60px] border border-solid border-[#D6E8EF] rounded-[10px] px-5 flex">
              <div className="review-avatar">
                <div
                  className="avatar w-[80px] h-[80px] 768-991:w-[70px] 768-991:h-[70px] 768-991:translate-y-[-20px] bg-[#4A748B] rounded-[20px] flex items-center justify-center translate-y-[-25px] overflow-hidden border-8 border-solid border-[#F8FCFF]">
                  <Image src={RR2} className="w-full h-full object-cover"/>
                </div>
              </div>
              <div
                className="review-detail 768-991:pe-0 768-991:pt-0 768-991:-mt-2 py-3 pb-4 px-4 1366-1439:pe-0 1366-1439:ps-2 1440-1599:pe-0">
                <div className="review-name flex items-center justify-between">
                  <h5
                    className="font-poppins-semiBold text-lg 1600-1679:text-base 768-991:text-16px 992-1199:text-[16px] 992-1199:w-[50%] 1440-1599:text-[16px] 1366-1439:text-[16px] 1366-1439:leading-[20px] font-semibold leading-[22px] 1440-1599:leading-[20px] tracking-[-0.18px] text-black">
                    Ray Phillips</h5>
                    <Image src={Rates4} alt=""/>
                </div>
                <h6 className="text-[#B6D6E2] font-poppins-semiBold text-[13px] font-semibold leading-6 tracking-[0.13px]">JUL 13,
                  2023</h6>
                <p
                  className="font-poppins-medium text-[14px] font-medium 768-991:pt-1 leading-[22px] tracking-[-0.14px] text-black pt-7 overflow-hidden line-clamp-5">
                  We've just returned from a month of diving in North Sulawesi. Having no experience using Blue Water
                  Travel I reached out to the team on a cold call. I was quickly directed to Sandrine, an agent with
                  experience...</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="review-slide 768-991:ps-2 768-991:flex-col 1366-1439:ps-3 992-1199:min-h-[260px] 1366-1439:min-h-[230px] w-[95%] min-h-[200px] my-[60px] border border-solid border-[#D6E8EF] rounded-[10px] px-5 flex">
              <div className="review-avatar">
                <div
                  className="avatar w-[80px] h-[80px] 768-991:w-[70px] 768-991:h-[70px] 768-991:translate-y-[-20px] bg-[#3DABC2] rounded-[20px] flex items-center justify-center translate-y-[-25px] overflow-hidden border-8 border-solid border-[#F8FCFF]">
                  <span
                    className="font-poppins-semiBold text-[40px] 768-991:text-[30px] 1366-1439:text-[30px] font-600 leading-10 tracking-[-0.4px] text-white uppercase">z</span>
                </div>
              </div>
              <div
                className="review-detail 768-991:pe-0 768-991:pt-0 768-991:-mt-2 py-3 pb-4 px-4 1366-1439:pe-0 1366-1439:ps-2 1440-1599:pe-0">
                <div className="review-name flex items-center justify-between">
                  <h5
                    className="font-poppins-semiBold text-lg 1600-1679:text-base 768-991:text-16px 992-1199:text-[16px] 992-1199:w-[50%] 1440-1599:text-[16px] 1366-1439:text-[16px] 1366-1439:leading-[20px] font-semibold leading-[22px] 1440-1599:leading-[20px] tracking-[-0.18px] text-black">
                    Merv Wilson</h5>
                    <Image src={Rates3} alt=""/>
                </div>
                <h6 className="text-[#B6D6E2] font-poppins-semiBold text-[13px] font-semibold leading-6 tracking-[0.13px]">FEB 18,
                  2023</h6>
                <p
                  className="font-poppins-medium text-[14px] font-medium 768-991:pt-1 leading-[22px] tracking-[-0.14px] text-black pt-7 overflow-hidden line-clamp-5">
                  I have booked 2 trips with Jaime Smith at Bluewater Travel recently.I have had excellent service and
                  results. Some of the booking has been in fairly remote parts of Indonesia, I tried booking myself but
                  not able to....</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="review-slide 768-991:ps-2 768-991:flex-col 1366-1439:ps-3 992-1199:min-h-[260px] 1366-1439:min-h-[230px] w-[95%] min-h-[200px] my-[60px] border border-solid border-[#D6E8EF] rounded-[10px] px-5 flex">
              <div className="review-avatar">
                <div
                  className="avatar w-[80px] h-[80px] 768-991:w-[70px] 768-991:h-[70px] 768-991:translate-y-[-20px] bg-[#4A748B] rounded-[20px] flex items-center justify-center translate-y-[-25px] overflow-hidden border-8 border-solid border-[#F8FCFF]">
                  <Image src={RR3} className="w-full h-full object-cover"/>
                </div>
              </div>
              <div
                className="review-detail 768-991:pe-0 768-991:pt-0 768-991:-mt-2 py-3 pb-4 px-4 1366-1439:pe-0 1366-1439:ps-2 1440-1599:pe-0">
                <div className="review-name flex items-center justify-between">
                  <h5
                    className="font-poppins-semiBold text-lg 1600-1679:text-base 768-991:text-16px 992-1199:text-[16px] 992-1199:w-[50%] 1440-1599:text-[16px] 1366-1439:text-[16px] 1366-1439:leading-[20px] font-semibold leading-[22px] 1440-1599:leading-[20px] tracking-[-0.18px] text-black">
                    Zirka Place</h5>
                    <Image src={Rates4} alt=""/>
                </div>
                <h6 className="text-[#B6D6E2] font-poppins-semiBold text-[13px] font-semibold leading-6 tracking-[0.13px]">AUG 08,
                  2020</h6>
                <p
                  className="font-poppins-medium text-[14px] font-medium 768-991:pt-1 leading-[22px] tracking-[-0.14px] text-black pt-7 overflow-hidden line-clamp-5">
                  he dive master who took us for 5 days diving at Aqua Samoa had good local knowledge of the dive sites
                  and she and the local boat hands take great care assisting you with loading your gear so you are not
                  exhausted...</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="review-slide 768-991:ps-2 768-991:flex-col 1366-1439:ps-3 992-1199:min-h-[260px] 1366-1439:min-h-[230px] w-[95%] min-h-[200px] my-[60px] border border-solid border-[#D6E8EF] rounded-[10px] px-5 flex">
              <div className="review-avatar">
                <div
                  className="avatar w-[80px] h-[80px] 768-991:w-[70px] 768-991:h-[70px] 768-991:translate-y-[-20px] bg-[#4A748B] rounded-[20px] flex items-center justify-center translate-y-[-25px] overflow-hidden border-8 border-solid border-[#F8FCFF]">
                  <Image src={RR1} className="w-full h-full object-cover"/>
                </div>
              </div>
              <div
                className="review-detail 768-991:pe-0 768-991:pt-0 768-991:-mt-2 py-3 pb-4 px-4 1366-1439:pe-0 1366-1439:ps-2 1440-1599:pe-0">
                <div className="review-name flex items-center justify-between">
                  <h5
                    className="font-poppins-semiBold text-lg 1600-1679:text-base 768-991:text-16px 992-1199:text-[16px] 992-1199:w-[50%] 1440-1599:text-[16px] 1366-1439:text-[16px] 1366-1439:leading-[20px] font-semibold leading-[22px] 1440-1599:leading-[20px] tracking-[-0.18px] text-black">
                    Brian Walton</h5>
                    <Image src={Rates3} alt=""/>
                </div>
                <h6 className="text-[#B6D6E2] font-poppins-semiBold text-[13px] font-semibold leading-6 tracking-[0.13px]">AUG 08,
                  2020</h6>
                <p
                  className="font-poppins-medium text-[14px] font-medium 768-991:pt-1 leading-[22px] tracking-[-0.14px] text-black pt-7 overflow-hidden line-clamp-5">
                  I spent my first overseas trip at WorldMark at Denarau, as you can imagine, I was a little nervous and
                  a lot excited, not knowing what to expect. We checked into our room and within 20mins, the manage
                  of...</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="review-slide 768-991:ps-2 768-991:flex-col 1366-1439:ps-3 992-1199:min-h-[260px] 1366-1439:min-h-[230px] w-[95%] min-h-[200px] my-[60px] border border-solid border-[#D6E8EF] rounded-[10px] px-5 flex">
              <div className="review-avatar">
                <div
                  className="avatar w-[80px] h-[80px] bg-[#4A748B] rounded-[20px] flex items-center justify-center translate-y-[-25px] overflow-hidden border-8 border-solid border-[#F8FCFF]">
                  <Image src={RR2} className="w-full h-full object-cover"/>
                </div>
              </div>
              <div
                className="review-detail 768-991:pe-0 768-991:pt-0 768-991:-mt-2 py-3 pb-4 px-4 1366-1439:pe-0 1366-1439:ps-2 1440-1599:pe-0">
                <div className="review-name flex items-center justify-between">
                  <h5
                    className="font-poppins-semiBold text-lg 1600-1679:text-base 768-991:text-16px 992-1199:text-[16px] 992-1199:w-[50%] 1440-1599:text-[16px] 1366-1439:text-[16px] 1366-1439:leading-[20px] font-semibold leading-[22px] 1440-1599:leading-[20px] tracking-[-0.18px] text-black">
                    Emmily Chasine</h5>
                    <Image src={Rates4} alt=""/>
                </div>
                <h6 className="text-[#B6D6E2] font-poppins-semiBold text-[13px] font-semibold leading-6 tracking-[0.13px]">AUG 08,
                  2020</h6>
                <p
                  className="font-poppins-medium text-[14px] font-medium 768-991:pt-1 leading-[22px] tracking-[-0.14px] text-black pt-7 overflow-hidden line-clamp-5">
                  he dive master who took us for 5 days diving at Aqua Samoa had good local knowledge of the dive sites
                  and she and the local boat hands take great care assisting you with loading your gear so you are not
                  exhausted...</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="review-slide 768-991:ps-2 768-991:flex-col 1366-1439:ps-3 992-1199:min-h-[260px] 1366-1439:min-h-[230px] w-[95%] min-h-[200px] my-[60px] border border-solid border-[#D6E8EF] rounded-[10px] px-5 flex">
              <div className="review-avatar">
                <div
                  className="avatar w-[80px] h-[80px] bg-[#3DABC2] rounded-[20px] flex items-center justify-center translate-y-[-25px] overflow-hidden border-8 border-solid border-[#F8FCFF]">
                  <span
                    className="font-poppins-semiBold text-[40px] 768-991:text-[30px] 1366-1439:text-[30px] font-600 leading-10 tracking-[-0.4px] text-white uppercase">z</span>
                </div>
              </div>
              <div
                className="review-detail 768-991:pe-0 768-991:pt-0 768-991:-mt-2 py-3 pb-4 px-4 1366-1439:pe-0 1366-1439:ps-2 1440-1599:pe-0">
                <div className="review-name flex items-center justify-between">
                  <h5
                    className="font-poppins-semiBold text-lg 1600-1679:text-base 768-991:text-16px 992-1199:text-[16px] 992-1199:w-[50%] 1440-1599:text-[16px] 1366-1439:text-[16px] 1366-1439:leading-[20px] font-semibold leading-[22px] 1440-1599:leading-[20px] tracking-[-0.18px] text-black">
                    Zirka Place</h5>
                    <Image src={Rates3} alt=""/>
                </div>
                <h6 className="text-[#B6D6E2] font-poppins-semiBold text-[13px] font-semibold leading-6 tracking-[0.13px]">AUG 08,
                  2020</h6>
                <p
                  className="font-poppins-medium text-[14px] font-medium 768-991:pt-1 leading-[22px] tracking-[-0.14px] text-black pt-7 overflow-hidden line-clamp-5">
                  he dive master who took us for 5 days diving at Aqua Samoa had good local knowledge of the dive sites
                  and she and the local boat hands take great care assisting you with loading your gear so you are not
                  exhausted...</p>
              </div>
            </div>
          </div>
          </Slider>
        </div>

        <div className="slick-slider-dots flex items-center gap-[10px] justify-center">

        </div>
      </div>
    </section>
        </main>
    )
}