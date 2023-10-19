'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRight from '../../../assets/images/arrowRight.svg';
import ArrowRightB from '../../../assets/images/arrowRightB.svg';
import ArrowLeftB from '../../../assets/images/arrowLeftB.svg';
import DD1 from '../../../assets/images/dd1.png';
import CalenderCheck from '../../../assets/images/calendarCheck.svg';
import Geo2 from '../../../assets/images/geo2.svg';
import DD2 from '../../../assets/images/dd2.png';
import DD3 from '../../../assets/images/dd3.png';
import DD4 from '../../../assets/images/dd4.png';
import Experience from '../../../assets/images/experience.png';

function NextArrow(props) {
  const { onClick } = props;
  return(
    <>
   <button onClick={onClick}
          className="slick-next slick-next1 768-991:!hidden !flex items-center justify-center text-white !bg-white rounded-full before:hidden !w-16 !h-16 !border-[6px] !border-solid !border-[#D6E8EF] z-[1]">
          <Image src={ArrowRightB} alt=""/>
        </button>
    </>
  )
}

function PrevArrow (props) {
  const { onClick } = props;
  return(<>
        <button onClick={onClick}
            className="slick-prev slick-prev1 768-991:!hidden !flex items-center justify-center text-white !bg-white rounded-full 992-1199:!-left-7 !-left-10 before:hidden !w-16 !h-16 !border-[6px] !border-solid !border-[#D6E8EF] z-[1]">
            <Image src={ArrowLeftB}/>
          </button>
  </>)
}

export default function Offers() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow:  <PrevArrow />
  };

    return(
        <main>
                <section
      className="bg-[#D6E8EF] relative pt-12 pb-20 px-48 768-991:pe-0 768-991:px-6 992-1199:px-8 1680-1919:px-32 1600-1679:px-28 1440-1599:px-[6.5rem] 1366-1439:px-16">
      <h6 className="font-poppins-semiBold text-xs font-600 tracking-[3.6px] uppercase text-[#3DABC2]">DEALS & SPECIALS</h6>
      <div className="top-text flex items-end justify-between pt-3">
        <h5
          className="text-[38px] 320-529:w-full 320-529:text-[24px] 320-529:leading-7 768-991:w-[40%] 768-991:text-[30px] 768-991:leading-8 1440-1599:text-[32px] 992-1199:text-[28px] 992-1199:leading-8 992-1199:w-[35%] font-lato-extrabold font-extrabold leading-10 1366-1439:w-[30%] 1366-1439:text-[30px] 1366-1439:leading-8 1440-1599:leading-9 w-[25%] 1440-1599:w-[30%] 1600-1679:w-[28%]">
          Dive Into Our latest
          Special Offers</h5>
        <Link href="#"
          className="btn-hover bg-[#F57415] 768-991:hidden py-3 px-10 font-600 text-base 992-1199:py-3 992-1199:px-8 992-1199:text-[15px] 1366-1439:py-3 1366-1439:px-8 1366-1439:text-[15px] text-white rounded-full border-[2px] border-solid border-[#F57415] flex items-center gap-3 font-poppins-semiBold transition duration-[.6s] ease-in-out hover:bg-transparent hover:text-[#F57415]"
          >
            All deals
            <Image src={ArrowRight} alt=""/>
        </Link>

      </div>

      <div className="w-full relative mt-10 768-991:mt-1 768-991:pb-6">
          {/* <button
            className="slick-prev slick-prev1 768-991:!hidden !flex items-center justify-center text-white !bg-white rounded-full 992-1199:!-left-7 !-left-10 before:hidden !w-16 !h-16 !border-[6px] !border-solid !border-[#D6E8EF] z-[1]">
            <Image src={ArrowLeftB}/>
          </button> */}
        <div>
        <Slider {...settings}>
          <div>
            <Link href="#"
              className="cards inline-block h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 my-[60px]">
              <div className="card-image translate-y-[-25px] relative overflow-hidden rounded-[10px]"/>
                <Image src={DD1}
                 className="rounded-[10px] h-[180px] w-full object-cover transition duration-[.6s] ease-in-out"/>
                <div className="card-image-text absolute top-2 w-full flex items-center justify-between px-[1.1rem]">
                  <h4 className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] leading-6 text-white">Liveaboard</h4>
                  <span
                    className="text-[12px] font-poppins-bold font-bold tracking-[0.13px] leading-6 text-white bg-[#CB0202] p-1 px-2 rounded-[5px]">22%
                    OFF</span>
                {/* </div> */}
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 1260-1365:text-[16px] 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] pb-2 text-black">
                  Red Sea Agressor IV</h4>
                <div className="card-info flex items-center gap-2 pb-2">
                  <Image src={CalenderCheck}/>
                  <span className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] text-black">5 - 12 Aug 2023</span>
                </div>
                <div className="card-info flex items-center gap-2 pb-2">
                  <Image src={Geo2}/>
                  <span className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] text-black">Red Sea</span>
                </div>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-2 overflow-hidden line-clamp-3">
                  The Red Sea Aggressor IV is a 142.7-foot yacht with a 32.8-foot beam and spacious dive deck...</p>
              </div>
              <div className="card-price pe-4 pt-5">
                <h6
                  className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] leading-6 line-through text-[#CB0202] text-right">
                  $3.100</h6>
                <h5 className="text-[22px] font-poppins-semiBold font-600 leading-[22px] tracking-[-0.22px] text-right text-black">
                  <span className="text-[13px] pe-2">from</span>$2,699
                </h5>
              </div>
            </Link>
          </div>
          <div>
            <Link href="#"
              className="cards inline-block h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 my-[60px]">
              <div className="card-image translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={DD2}
                  className="rounded-[10px] h-[180px] w-full object-cover transition duration-[.6s] ease-in-out"/>
                <div className="card-image-text absolute top-2 w-full flex items-center justify-between px-[1.1rem]">
                  <h4 className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] leading-6 text-white">Resort</h4>
                  <span
                    className="text-[12px] font-poppins-bold font-bold tracking-[0.13px] leading-6 text-white bg-[#CB0202] p-1 px-2 rounded-[5px]">45%
                    OFF</span>
                </div>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 1260-1365:text-[16px] 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] pb-2 text-black">
                  Koro Sun Resort</h4>
                <div className="card-info flex items-center gap-2 pb-2">
                  <Image src={CalenderCheck} alt=""/>
                  <span className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] text-black">August 1 - March 31,
                    2024</span>
                </div>
                <div className="card-info flex items-center gap-2 pb-2">
                  <Image src={Geo2} alt=""/>
                  <span className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] text-black">Fiji</span>
                </div>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-2 overflow-hidden line-clamp-3">
                  An idyllic and remote paradise, Koro Sun provides a hospitable retreat immersed in an unspoiled
                  160-acre natural sanctuary...</p>
              </div>
              <div className="card-price pe-4 pt-5">
                <h6
                  className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] leading-6 line-through text-[#CB0202] text-right">
                  $3.100</h6>
                <h5 className="text-[22px] font-poppins-semiBold font-600 leading-[22px] tracking-[-0.22px] text-right text-black">
                  <span className="text-[13px] pe-2">per person per trip</span>$2,699
                </h5>
              </div>
            </Link>
          </div>
          <div >
            <Link href="#"
              className="cards inline-block h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 my-[60px]">
              <div className="card-image translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={DD3}
                  className="rounded-[10px] h-[180px] w-full object-cover transition duration-[.6s] ease-in-out"/>
                <div className="card-image-text absolute top-2 w-full flex items-center justify-between px-[1.1rem]">
                  <h4 className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] leading-6 text-white">Liveaboard</h4>
                  <span
                    className="text-[12px] font-poppins-bold font-bold tracking-[0.13px] leading-6 text-white bg-[#CB0202] p-1 px-2 rounded-[5px]">22%
                    OFF</span>
                </div>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 1260-1365:text-[16px] 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] pb-2 text-black">
                  Caribbean Explorer II</h4>
                <div className="card-info flex items-center gap-2 pb-2">
                  <Image src={CalenderCheck}/>
                  <span className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] text-black">5 - 12 Aug 2023</span>
                </div>
                <div className="card-info flex items-center gap-2 pb-2">
                  <Image src={Geo2}/>
                  <span className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] text-black">Carribiean</span>
                </div>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-2 overflow-hidden line-clamp-3">
                  The Caribbean Explorer II covers the Northeastern Caribbean which offers a great blend of Dutch,
                  British, French and native cultures...</p>
              </div>
              <div className="card-price pe-4 pt-5">
                <h6
                  className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] leading-6 line-through text-[#CB0202] text-right">
                  $3.100</h6>
                <h5 className="text-[22px] font-poppins-semiBold font-600 leading-[22px] tracking-[-0.22px] text-right text-black">
                  <span className="text-[13px] pe-2">from</span>$2,699
                </h5>
              </div>
            </Link>
          </div>
          <div >
            <Link href="#"
              className="cards inline-block h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 my-[60px]">
              <div className="card-image translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={DD4}
                  className="rounded-[10px] h-[180px] w-full object-cover transition duration-[.6s] ease-in-out"/>
                <div className="card-image-text absolute top-2 w-full flex items-center justify-between px-[1.1rem]">
                  <h4 className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] leading-6 text-white">Guided trips</h4>
                  <span
                    className="text-[12px] font-poppins-bold font-bold tracking-[0.13px] leading-6 text-white bg-[#CB0202] p-1 px-2 rounded-[5px]">22%
                    OFF</span>
                </div>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 1260-1365:text-[16px] 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] pb-2 text-black">
                  Gray Whale Experience</h4>
                <div className="card-info flex items-center gap-2 pb-2">
                  <Image src={CalenderCheck} alt=""/>
                  <span className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] text-black">5 - 12 Aug 2023</span>
                </div>
                <div className="card-info flex items-center gap-2 pb-2">
                  <Image src={Geo2} alt=""/>
                  <span className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] text-black">Mexico</span>
                </div>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-2 overflow-hidden line-clamp-3">
                  Experience the ultimate adventure, where you'll have the opportunity to encounter Mexico's largest
                  marine creatures...</p>
              </div>
              <div className="card-price pe-4 pt-5">
                <h6
                  className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] leading-6 line-through text-[#CB0202] text-right">
                  $3.100</h6>
                <h5 className="text-[22px] font-poppins-semiBold font-600 leading-[22px] tracking-[-0.22px] text-right text-black">
                  <span className="text-[13px] pe-2">from</span>$2,699
                </h5>
              </div>
            </Link>
          </div>
          <div>
            <Link href="#"
              className="cards inline-block h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 my-[60px]">
              <div className="card-image translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={DD1}
                  className="rounded-[10px] h-[180px] w-full object-cover transition duration-[.6s] ease-in-out"/>
                <div className="card-image-text absolute top-2 w-full flex items-center justify-between px-[1.1rem]">
                  <h4 className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] leading-6 text-white">Liveaboard</h4>
                  <span
                    className="text-[12px] font-poppins-bold font-bold tracking-[0.13px] leading-6 text-white bg-[#CB0202] p-1 px-2 rounded-[5px]">22%
                    OFF</span>
                </div>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 1260-1365:text-[16px] 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] pb-2 text-black">
                  Red Sea Agressor IV</h4>
                <div className="card-info flex items-center gap-2 pb-2">
                  <Image src={CalenderCheck} alt=""/>
                  <span className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] text-black">5 - 12 Aug 2023</span>
                </div>
                <div className="card-info flex items-center gap-2 pb-2">
                  <Image src={Geo2}/>
                  <span className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] text-black">Red Sea</span>
                </div>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-2 overflow-hidden line-clamp-3">
                  The Red Sea Aggressor IV is a 142.7-foot yacht with a 32.8-foot beam and spacious dive deck...</p>
              </div>
              <div className="card-price pe-4 pt-5">
                <h6
                  className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] leading-6 line-through text-[#CB0202] text-right">
                  $3.100</h6>
                <h5 className="text-[22px] font-poppins-semiBold font-600 leading-[22px] tracking-[-0.22px] text-right text-black">
                  <span className="text-[13px] pe-2">from</span>$2,699
                </h5>
              </div>
            </Link>
          </div>
          <div >
            <Link href="#"
              className="cards inline-block h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 my-[60px]">
              <div className="card-image translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={DD2}
                  className="rounded-[10px] h-[180px] w-full object-cover transition duration-[.6s] ease-in-out"/>
                <div className="card-image-text absolute top-2 w-full flex items-center justify-between px-[1.1rem]">
                  <h4 className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] leading-6 text-white">Resort</h4>
                  <span
                    className="text-[12px] font-poppins-bold font-bold tracking-[0.13px] leading-6 text-white bg-[#CB0202] p-1 px-2 rounded-[5px]">45%
                    OFF</span>
                </div>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 1260-1365:text-[16px] 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] pb-2 text-black">
                  Koro Sun Resort</h4>
                <div className="card-info flex items-center gap-2 pb-2">
                  <Image src={CalenderCheck} alt=""/>
                  <span className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] text-black">August 1 - March 31,
                    2024</span>
                </div>
                <div className="card-info flex items-center gap-2 pb-2">
                  <Image src={Geo2} alt=""/>
                  <span className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] text-black">Fiji</span>
                </div>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-2 overflow-hidden line-clamp-3">
                  An idyllic and remote paradise, Koro Sun provides a hospitable retreat immersed in an unspoiled
                  160-acre natural sanctuary...</p>
              </div>
              <div className="card-price pe-4 pt-5">
                <h6
                  className="text-[13px] font-poppins-semiBold font-600 tracking-[0.13px] leading-6 line-through text-[#CB0202] text-right">
                  $3.100</h6>
                <h5 className="text-[22px] font-poppins-semiBold font-600 leading-[22px] tracking-[-0.22px] text-right text-black">
                  <span className="text-[13px] pe-2">per person per trip</span>$2,699
                </h5>
              </div>
            </Link>
          </div>
          </Slider>
        </div>
        {/* <button
          className="slick-next slick-next1 768-991:!hidden !flex items-center justify-center text-white !bg-white rounded-full before:hidden !w-16 !h-16 !border-[6px] !border-solid !border-[#D6E8EF] z-[1]">
          <Image src={ArrowRightB} alt=""/>
        </button> */}
      </div>

      <Link href="#"
        className="btn-hover bg-[#F57415] hidden 768-991:inline-flex 320-529:py-3 320-529:px-8 320-529:text-[15px] py-4 px-10 font-600 text-base 992-1199:py-3 992-1199:px-8 992-1199:text-[15px] 1366-1439:py-3 1366-1439:px-8 1366-1439:text-[15px] text-white rounded-full border-[2px] border-solid border-[#F57415] items-center gap-3 font-poppins-semiBold transition duration-[.6s] ease-in-out hover:bg-transparent hover:text-[#F57415]"
        >
            All deals
          <Image src={ArrowRight} alt=""/>
      </Link>

      <Image src={Experience}
        className="absolute 320-529:-bottom-[14px] 768-991:-bottom-[30px] -bottom-[75px] left-0 w-full pointer-events-none"/>
    </section>
        </main>
    )
}