'use client';
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRight from '../../../assets/images/arrowRight.svg';
import ArrowRightB from '../../../assets/images/arrowRightB.svg';
import ArrowLeftB from '../../../assets/images/arrowLeftB.svg';
import Star2 from '../../../assets/images/star2.svg';
import FF1 from '../../../assets/images/ff1.png';
import FF2 from '../../../assets/images/ff2.png';
import FF3 from '../../../assets/images/ff3.png';
import FF4 from '../../../assets/images/ff4.gif';
import Podcards from '../../../assets/images/postcards.png'

function NextArrow(props) {
  const { onClick } = props;
  return(
    <>  
        <button onClick={onClick}
          className="slick-next slick-next3 768-991:!hidden !flex items-center justify-center text-white !bg-white rounded-full before:hidden !top-[60%] !w-16 !h-16 !border-[6px] !border-solid !border-[#D6E8EF] z-[1]">
          <Image src={ArrowRightB} alt=""/>
        </button></>
  )
}

function PrevArrow(props) {
  const { onClick } = props;
  return(
    <>
        <button onClick={onClick}
          className="slick-prev slick-prev3 768-991:!hidden !flex items-center justify-center text-white !bg-white rounded-full 992-1199:!-left-7 !-left-[2.3rem] !top-[60%] before:hidden !w-16 !h-16 !border-[6px] !border-solid !border-[#D6E8EF] z-[1]">
          <Image src={ArrowLeftB} alt=""/>
        </button>
    </>
  )
}
export default function Stories() {

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
      className="bg-[#D6E8EF] relative pt-12 pb-48 px-48 768-991:px-6 768-991:pe-0 992-1199:px-8 1680-1919:px-32 1600-1679:px-28 1440-1599:px-[6.5rem] 1366-1439:px-16">
      <h3 className="font-poppins-semiBold text-xs font-600 tracking-[3.6px] uppercase text-[#3DABC2]">LATEST TRIP REPORTS & ARTICLES
      </h3>
      <div className="top-text flex items-end justify-between">
        <h4
          className="text-[38px] 320-529:text-[24px] 320-529:leading-7 320-529:w-full 1600-1679:w-[23%] 768-991:text-[30px] 768-991:leading-8 768-991:w-[35%] font-lato-extrabold font-extrabold leading-10 w-[20%] 992-1199:text-[26px] 992-1199:leading-7 1366-1439:text-[30px] 1366-1439:leading-8 1680-1919:w-[25%] 1440-1599:w-[25%] pt-3">
          Stories Beneath
          The Waves</h4>
        <Link href="#"
          className="btn-hover bg-[#F57415] 768-991:hidden py-3 px-10 font-600 text-base 992-1199:py-3 992-1199:px-8 992-1199:text-[15px] 1366-1439:py-3 1366-1439:px-8 1366-1439:text-[15px] text-white rounded-full border-[2px] border-solid border-[#F57415] flex items-center gap-3 font-poppins-semiBold transition duration-[.6s] ease-in-out hover:bg-transparent hover:text-[#F57415]"
          >
            All Trip Reports
            <Image src={ArrowRight}/>
        </Link>

      </div>

      <div className="w-full relative mt-10 768-991:mt-1 768-991:pb-5">
        <button
          className="slick-prev slick-prev3 768-991:!hidden !flex items-center justify-center text-white !bg-white rounded-full 992-1199:!-left-7 !-left-[2.3rem] !top-[60%] before:hidden !w-16 !h-16 !border-[6px] !border-solid !border-[#D6E8EF] z-[1]">
          <Image src={ArrowLeftB} alt=""/>
        </button>
        <div className="slick trip-slider !select-text">
        <Slider {...settings}>
          <div>
            <Link href="#"
              className="cards inline-block h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1260-1365:min-h-[400px] 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 min-h-[390px] 1680-1919:min-h-[450px] 1600-1679:min-h-[450px] my-[60px] cursor-pointer transition duration-[.3s] ease-in-out">
              <div className="card-image shadow-card-shadow translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={FF1}
                  className="rounded-[10px] h-[220px] 1260-1365:h-[150px] w-full object-cover transition duration-[.6s] ease-in-out"/>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] text-black overflow-hidden line-clamp-2 transition duration-[.3s] ease-in-out min-h-[55px]">
                  Moorea 2022 Trip Report</h4>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-4 overflow-hidden line-clamp-5 transition duration-[.3s] ease-in-out">
                  Observing and photographing humpback whales underwater is one of our favorite ocean activities, and is
                  something that never gets old. Every year since 2014...</p>
                <div className="card-detail flex items-center gap-2 pt-4">
                  <h6 className="text-[#B6D6E2] font-poppins-semiBold font-600 text-[13px] leading-6 tracking-[0.13px]">11 JUL</h6>
                  <span
                    className="text-[#B6D6E2] font-poppins-semiBold font-600 text-[13px] leading-6 tracking-[0.13px] flex items-center">
                    <Image src={Star2} alt=""/>
                    by Jacqui
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href="#"
              className="cards inline-block h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1260-1365:min-h-[400px] 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 min-h-[390px] 1680-1919:min-h-[450px] 1600-1679:min-h-[450px] my-[60px] cursor-pointer transition duration-[.3s] ease-in-out">
              <div className="card-image shadow-card-shadow translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={FF2}
                  className="rounded-[10px] h-[220px] 1260-1365:h-[150px] w-full object-cover transition duration-[.6s] ease-in-out"/>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] text-black overflow-hidden line-clamp-2 transition duration-[.3s] ease-in-out min-h-[55px]">
                  Galapagos 2023 Trip Report</h4>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-4 overflow-hidden line-clamp-5 transition duration-[.3s] ease-in-out">
                  For as long as it has been known to human civilisation, the Galapagos Islands have been shrouded in
                  mystique and intrigue. This archipelago of rugged volcanic...</p>
                <div className="card-detail flex items-center gap-2 pt-4">
                  <h6 className="text-[#B6D6E2] font-poppins-semiBold font-600 text-[13px] leading-6 tracking-[0.13px]">11 JUL</h6>
                  <span
                    className="text-[#B6D6E2] font-poppins-semiBold font-600 text-[13px] leading-6 tracking-[0.13px] flex items-center">
                    <Image src={Star2}/>
                    by Nirupam Nigam
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href="#"
              className="cards inline-block h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1260-1365:min-h-[400px] 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 min-h-[390px] 1680-1919:min-h-[450px] 1600-1679:min-h-[450px] my-[60px] cursor-pointer transition duration-[.3s] ease-in-out">
              <div className="card-image shadow-card-shadow translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={FF3}
                  className="rounded-[10px] h-[220px] 1260-1365:h-[150px] w-full object-cover transition duration-[.6s] ease-in-out"/>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] text-black overflow-hidden line-clamp-2 transition duration-[.3s] ease-in-out min-h-[55px]">
                  Raja Ampat 2023 Trip Report</h4>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-4 overflow-hidden line-clamp-5 transition duration-[.3s] ease-in-out">
                  It’s a well-known “secret” amongst scuba divers that the best diving in the world is found in the
                  Indonesian archipelago of Raja Ampat...</p>
                <div className="card-detail flex items-center gap-2 pt-4">
                  <h6 className="text-[#B6D6E2] font-poppins-semiBold font-600 text-[13px] leading-6 tracking-[0.13px]">11 JUL</h6>
                  <span
                    className="text-[#B6D6E2] font-poppins-semiBold font-600 text-[13px] leading-6 tracking-[0.13px] flex items-center">
                    <Image src={Star2}/>
                    by Nirupam Nigam
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href="#"
              className="cards inline-block h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1260-1365:min-h-[400px] 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 min-h-[390px] 1680-1919:min-h-[450px] 1600-1679:min-h-[450px] my-[60px] cursor-pointer transition duration-[.3s] ease-in-out">
              <div className="card-image shadow-card-shadow translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={FF4} className="rounded-[10px] h-[220px] 1260-1365:h-[150px] w-full object-cover transition duration-[.6s] ease-in-out" autoplay loop muted playsinline/>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] text-black overflow-hidden line-clamp-2 transition duration-[.3s] ease-in-out min-h-[55px]">
                  Lembeh Trip Report September 2022</h4>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-4 overflow-hidden line-clamp-5 transition duration-[.3s] ease-in-out">
                  Fourteen enthusiastic</p>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular overflow-hidden line-clamp-5 transition duration-[.3s] ease-in-out">
                  photographers, for some it was their first visit to this mecca for macro photography, for others it
                  was a long overdue return...</p>
                <div className="card-detail flex items-center gap-2 pt-4">
                  <h6 className="text-[#B6D6E2] font-poppins-semiBold font-600 text-[13px] leading-6 tracking-[0.13px]">11 JUL</h6>
                  <span
                    className="text-[#B6D6E2] font-poppins-semiBold font-600 text-[13px] leading-6 tracking-[0.13px] flex items-center">
                    <Image src={Star2} alt=""/>
                    by Erik Lukas
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href="#"
              className="cards inline-block h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1260-1365:min-h-[400px] 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 min-h-[390px] 1680-1919:min-h-[450px] 1600-1679:min-h-[450px] my-[60px] cursor-pointer transition duration-[.3s] ease-in-out">
              <div className="card-image shadow-card-shadow translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={FF1}
                  className="rounded-[10px] h-[220px] 1260-1365:h-[150px] w-full object-cover transition duration-[.6s] ease-in-out"/>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] text-black overflow-hidden line-clamp-2 transition duration-[.3s] ease-in-out min-h-[55px]">
                  Moorea 2022 Trip Report</h4>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-4 overflow-hidden line-clamp-5 transition duration-[.3s] ease-in-out">
                  Observing and photographing humpback whales underwater is one of our favorite ocean activities, and is
                  something that never gets old. Every year since 2014...</p>
                <div className="card-detail flex items-center gap-2 pt-4">
                  <h6 className="text-[#B6D6E2] font-poppins-semiBold font-600 text-[13px] leading-6 tracking-[0.13px]">11 JUL</h6>
                  <span
                    className="text-[#B6D6E2] font-poppins-semiBold font-600 text-[13px] leading-6 tracking-[0.13px] flex items-center">
                    <Image src={Star2} alt=""/>
                    by Jacqui
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href="#"
              className="cards inline-block h-full w-[95%] 992-1199:mx-auto 1680-1919:mx-auto 1260-1365:min-h-[400px] 1600-1679:mx-auto 1440-1599:mx-auto bg-white rounded-[10px] 1366-1439:px-4 pb-5 px-5 min-h-[390px] 1680-1919:min-h-[450px] 1600-1679:min-h-[450px] my-[60px] cursor-pointer transition duration-[.3s] ease-in-out">
              <div className="card-image shadow-card-shadow translate-y-[-25px] relative overflow-hidden rounded-[10px]">
                <Image src={FF2}
                  className="rounded-[10px] h-[220px] 1260-1365:h-[150px] w-full object-cover transition duration-[.6s] ease-in-out"/>
              </div>
              <div className="card-content px-4">
                <h4
                  className="text-lg 992-1199:text-[16px] font-poppins-semiBold font-600 tracking-[-0.18px] text-black overflow-hidden line-clamp-2 transition duration-[.3s] ease-in-out min-h-[55px]">
                  Galapagos 2023 Trip Report</h4>
                <p
                  className="text-[13px] text-[#4A748B] font-normal leading-5 tracking-[0.26px] font-poppins-regular pt-4 overflow-hidden line-clamp-5 transition duration-[.3s] ease-in-out">
                  For as long as it has been known to human civilisation, the Galapagos Islands have been shrouded in
                  mystique and intrigue. This archipelago of rugged volcanic...</p>
                <div className="card-detail flex items-center gap-2 pt-4">
                  <h6 className="text-[#B6D6E2] font-poppins-semiBold font-600 text-[13px] leading-6 tracking-[0.13px]">11 JUL</h6>
                  <span
                    className="text-[#B6D6E2] font-poppins-semiBold font-600 text-[13px] leading-6 tracking-[0.13px] flex items-center">
                    <Image src={Star2} alt=""/>
                    by Nirupam Nigam
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </Slider>
        </div>
      </div>

      <Link href="#"
        className="btn-hover bg-[#F57415] hidden 768-991:inline-flex 320-529:py-3 320-529:px-8 320-529:text-[15px] py-4 px-10 font-600 text-base 992-1199:py-3 992-1199:px-8 992-1199:text-[15px] 1366-1439:py-3 1366-1439:px-8 1366-1439:text-[15px] text-white rounded-full border-[2px] border-solid border-[#F57415] items-center gap-3 font-poppins-semiBold transition duration-[.6s] ease-in-out hover:bg-transparent hover:text-[#F57415]"
        >
            All Trip Reports
            <Image src={ArrowRight} alt=""/>
      </Link>

      <Image src={Podcards} className="absolute bottom-0 left-0 w-full pointer-events-none"/>
    </section>
        </main>
    )
}