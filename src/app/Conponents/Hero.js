import Image from "next/image";
import Link from "next/link";
import BannerGif from '../../../assets/images/banner.gif';
import ArrowWhite from "../../../assets/images/arrowWhite.svg";
import Geo from "../../../assets/images/geo.svg";
import BB1 from "../../../assets/images/bb1.png";
import BB2 from "../../../assets/images/bb2.png";
import BB3 from "../../../assets/images/bb3.png";
import BB4 from "../../../assets/images/bb4.png";
import BB5 from "../../../assets/images/bb5.png";

export default function Hero() {
 return(
 <main>
<section
      className="w-full h-[90vh] 768-991:px-6 768-991:justify-end 768-991:pb-[200px] banner flex flex-col items-center justify-center relative">
      <Image src={BannerGif} className="absolute top-0 left-0 w-full h-[100vh] -z-[1] object-cover pointer-events-none" autoplay muted loop playsinline />
      <h2
        className="text-[70px] 320-529:w-[100%] 320-529:text-[32px] 320-529:leading-[40px] 768-991:me-auto 768-991:w-[52%] 768-991:leading-[50px] 768-991:text-[45px] 768-991:font-lato-bold 1440-1599:text-[60px] 992-1199:text-[45px] 992-1199:w-[42%] 992-1199:leading-[45px] 1366-1439:text-[52px] 1366-1439:w-[37%] 1366-1439:leading-[55px] font-bold leading-[65px] tracking-[-2.1px] text-white font-fraunces-bold w-[32%] 1680-1919:w-[37%] 1600-1679:pl-[5px] 1600-1679:w-[38%] 1440-1599:w-[37%] pb-3">
        Dive into your dream destination</h2>
      <div
        className="flex 320-529:items-end 320-529:px-2 320-529:py-2 320-529:gap-1 items-end gap-5 bg-white search-shadow p-2 ps-4 pe-3 rounded-[6px] w-[32%] 768-991:w-full 992-1199:w-[42%] 1680-1919:w-[37%] 1600-1679:w-[35%] 1440-1599:w-[37%] 1366-1439:w-[37%] cursor-pointer relative">
        <Image src={Geo} className="320-529:w-[20px] pb-[4px]"/>
        <div className="w-full pt-1 pb-2" id="dropdown-button2">
          <h3
            className="text-[#B6D6E2] 320-529:-ms-5 320-529:text-[10px] uppercase text-xs 992-1199:text-[11px] font-600 leading-6 tracking-[2.4px]">
            FinD YOUR DESTINATION</h3>
          <h4 id="dropText"
            className="text-[25px] leading-[25px] 320-350:text-[14px] 768-991:text-[20px] 320-529:text-[17px] 1440-1599:text-[20px] 992-1199:text-[18px] 1366-1439:text-[20px] text-black font-lato-bold font-bold">
            Where do
            you want to go?</h4>
        </div>
        <Link href="#"
          className="bg-[#3DABC2] next-dest pointer-events-none 320-529:rounded-[8px] rounded-[10px] h-full px-5 flex items-center justify-center ms-auto">
          <Image src={ArrowWhite} alt=""/>
        </Link>
        <div
          className="opacity-0 pointer-events-none dropdown-destination w-full pt-8 pb-4 absolute left-0 768-991:-translate-y-[8px] -translate-y-[5px] top-[77px] 768-991:top-[70px] 1440-1599:top-[69px] 992-1199:top-[69px] 1366-1439:top-[69px] bg-[#F8FCFF] shadow-header-shadow rounded-bl-[10px] rounded-br-[10px] z-10 transition-all duration-600 ease-in-out">
          <label
            className="flex items-center py-3 px-4 gap-2 font-poppins-medium 992-1199:text-[16px] 768-991:text-[15px] text-lg font-medium leading-[22px] tracking-[-0.18px] cursor-pointer hover:bg-[#d6e8ef]"><img
              src="../assets/images/Globe.png"/>Destinations <input type="checkbox" className="appearance-none"
              name="destination" value="Destinations"/></label>
          <label
            className="flex items-center py-3 px-4 gap-2 font-poppins-medium 992-1199:text-[16px] 768-991:text-[15px] text-lg font-medium leading-[22px] tracking-[-0.18px] cursor-pointer hover:bg-[#d6e8ef]"><img
              src="../assets/images/Sailboat.png"/>Liveabroads <input type="checkbox" className="appearance-none"
              name="destination" value="Liveabroads"/></label>
          <label
            className="flex items-center py-3 px-4 gap-2 font-poppins-medium 992-1199:text-[16px] 768-991:text-[15px] text-lg font-medium leading-[22px] tracking-[-0.18px] cursor-pointer hover:bg-[#d6e8ef]"><img
              src="../assets/images/Sunshade.png"/>Resorts <input type="checkbox" className="appearance-none"
              name="destination" value="Resorts"/></label>
          <label
            className="flex items-center py-3 px-4 gap-2 font-poppins-medium 992-1199:text-[16px] 768-991:text-[15px] text-lg font-medium leading-[22px] tracking-[-0.18px] cursor-pointer hover:bg-[#d6e8ef]"><img
              src="../assets/images/Trips.png"/>Guided Group Trips <input type="checkbox" className="appearance-none"
              name="destination" value="Guided Group Trips"/></label>
        </div>
        <div id="dropdown-menu2"
          className="opacity-0 pointer-events-none absolute top-[77px] 320-529:w-[88vw] 768-991:left-0 768-991:w-[94vw] 768-991:top-[70px] 1440-1599:top-[69px] 992-1199:top-[69px] 992-1199:-left-[75%] 992-1199:w-[100vw] 1366-1439:top-[69px] 1366-1439:-left-[85%] 1366-1439:w-[95vw] border-t border-solid border-[rgba(0,0,0,0.1)] -left-[100%] 1680-1919:-left-[80%] 1600-1679:-left-[76%] 1440-1599:-left-[85%] z-10 w-[90vw] 1440-1599:w-[95vw] rounded-[10px] transition-all duration-600 ease-in-out origin-top-right bg-[#f8fcff] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-10 pb-10">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/6">
              <div
                className="dropdown-links 320-529:me-16 pt-10 pb-5 border-b border-solid border-[#D6E8EF] me-28 992-1199:me-5 1680-1919:me-12 1600-1679:me-12 1440-1599:me-8 1366-1439:me-8">
                <span className="font-poppins-semiBold text-lg font-600 leading-[22px] tracking-[-0.18px]">Asia Pacific</span>
                <ul className="pt-4">
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Australia</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Fiji</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">French
                      Polynesia</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Marshal
                      Islands</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Micronesia</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Palau</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Papua
                      New Guinea</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Solomon
                      Islands</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Tonga</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/6">
              <div
                className="dropdown-links 320-529:me-16 pt-10 pb-5 border-b border-solid border-[#D6E8EF] me-28 992-1199:me-5 1680-1919:me-12 1600-1679:me-12 1440-1599:me-8 1366-1439:me-8">
                <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">Caribbean</span>
                <ul className="pt-4">
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Bahamas</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">British
                      Virgin Islands</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Cayman
                      Islands</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Cuba</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Honduras
                      (Roatan)</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">St.
                      Kitts & Nevis</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">St.
                      Maarten</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Turks
                      & Caicos</Link></li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/6">
              <div
                className="dropdown-links 320-529:me-16 pt-10 pb-5 border-b border-solid border-[#D6E8EF] me-28 992-1199:me-5 1680-1919:me-12 1600-1679:me-12 1440-1599:me-8 1366-1439:me-8">
                <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">Central & South
                  America</span>
                <ul className="pt-4">
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Argentina</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Belize</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Colombia
                      (Malpelo)</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Costa
                      Rica - Cocos</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Costa
                      Rica - Pacific coast</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Ecuador
                      (Galapagos)</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Mexico
                      - Guadalupe Island</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Mexico
                      - Sea of Cortez</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Mexico
                      - Socorro</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Panama
                      (Malpelo)</Link></li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/6">
              <div
                className="dropdown-links 320-529:me-16 pt-10 pb-5 border-b border-solid border-[#D6E8EF] me-28 992-1199:me-5 1680-1919:me-12 1600-1679:me-12 1440-1599:me-8 1366-1439:me-8">
                <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">Europe</span>
                <ul className="pt-4">
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Greece</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Italy</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Norway</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Portugal</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Spain</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Turkey</Link>
                  </li>
                </ul>
              </div>
              <div
                className="dropdown-links 320-529:me-16 pt-10 pb-5 border-b border-solid border-[#D6E8EF] me-28 992-1199:me-5 1680-1919:me-12 1600-1679:me-12 1440-1599:me-8 1366-1439:me-8">
                <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">Indian Ocean</span>
                <ul className="pt-4">
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Maldives</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Seychelles</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/6">
              <div
                className="dropdown-links 320-529:me-16 pt-10 pb-5 border-b border-solid border-[#D6E8EF] me-28 992-1199:me-5 1680-1919:me-12 1600-1679:me-12 1440-1599:me-8 1366-1439:me-8">
                <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">Middle East & Red
                  Sea</span>
                <ul className="pt-4">
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Djibouti</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Egypt</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Oman</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Saudi
                      Arabia</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Sudan</Link>
                  </li>
                </ul>
              </div>
              <div
                className="dropdown-links 320-529:me-16 pt-10 pb-5 border-b border-solid border-[#D6E8EF] me-28 992-1199:me-5 1680-1919:me-12 1600-1679:me-12 1440-1599:me-8 1366-1439:me-8">
                <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">North America</span>
                <ul className="pt-4">
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Hawaii</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/6">
              <div
                className="dropdown-links 320-529:me-16 pt-10 pb-5 border-b border-solid border-[#D6E8EF] me-28 992-1199:me-5 1680-1919:me-12 1600-1679:me-12 1440-1599:me-8 1366-1439:me-8">
                <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">South-East Asia</span>
                <ul className="pt-4">
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Indonesia
                      - Komodo</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Indonesia
                      - Raja Ampat</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Malaysia
                      (Sipadan)</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Myanmar
                      (Burma)</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Philippines
                      - Tubbatha reef</Link></li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Philippines</Link>
                  </li>
                  <li><Link href="#"
                      className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Thailand
                      (Similan)</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="banner-bottom absolute -bottom-5 320-529:gap-1 320-529:items-start 768-991:w-full 768-991:px-6 768-991:gap-2 768-991:bottom-[30px] 1600-1679:-bottom-10 1440-1599:-bottom-10 992-1199:-bottom-10 992-1199:w-[95%] 992-1199:gap-3 1366-1439:-bottom-10 1366-1439:w-[90%] 1366-1439:gap-10 left-[50%] translate-x-[-50%] w-[80%] 1680-1919:w-[85%] 1600-1679:w-[86%] 1440-1599:w-[85%] 1600-1679:gap-10 1440-1599:gap-10 flex items-center justify-between">
        <div
          className="bottom-card min-h-[100px] 320-529:px-1 320-529:py-2 320-529:h-auto 320-529:min-h-full 768-991:flex-col 768-991:p-3 768-991:gap-3 768-991:w-[20%] 768-991:min-h-[120px] flex items-center gap-6 p-5 bg-[#D6E8EF] rounded-[10px]">
          <Image src={BB1}
            className="768-991:w-[40px] 768-991:h-[40px] 320-529:w-[25px] 320-529:h-[25px] 768-991:object-contain"/>
          <h5
            className="text-xl 1440-1599:text-[18px] 320-529:text-[11px] 320-529:leading-[15px] 320-529:break-words 768-991:text-[16px] 768-991:w-full 768-991:text-center 992-1199:text-[16px] 1366-1439:text-[16px] font-lato-bold w-[50%] font-bold leading-[22px]">
            Latest Trip
            Reports</h5>
        </div>
        <div
          className="bottom-card min-h-[100px] 320-529:px-1 320-529:py-2 320-529:h-auto 320-529:min-h-full 768-991:flex-col 768-991:p-3 768-991:gap-3 768-991:w-[20%] 768-991:min-h-[120px] flex items-center gap-6 p-5 bg-[#D6E8EF] rounded-[10px]">
          <Image src={BB2}
            className="768-991:w-[40px] 768-991:h-[40px] 320-529:w-[25px] 320-529:h-[25px] 768-991:object-contain"/>
          <h5
            className="text-xl 1440-1599:text-[18px] 320-529:text-[11px] 320-529:leading-[15px] 320-529:break-words 768-991:text-[16px] 768-991:w-full 768-991:text-center 992-1199:text-[16px] 1366-1439:text-[16px] font-lato-bold w-[50%] font-bold leading-[22px]">
            Special
            Offers</h5>
        </div>
        <div
          className="bottom-card min-h-[100px] 320-529:px-1 320-529:py-2 320-529:h-auto 320-529:min-h-full 768-991:flex-col 768-991:p-3 768-991:gap-3 768-991:w-[20%] 768-991:min-h-[120px] flex items-center gap-6 p-5 bg-[#D6E8EF] rounded-[10px]">
          <Image src={BB3}
            className="768-991:w-[40px] 768-991:h-[40px] 320-529:w-[25px] 320-529:h-[25px] 768-991:object-contain"/>
          <h5
            className="text-xl 1440-1599:text-[18px] 320-529:text-[11px] 320-529:leading-[15px] 320-529:break-words 768-991:text-[16px] 768-991:w-full 768-991:text-center 992-1199:text-[16px] 1366-1439:text-[16px] font-lato-bold w-[50%] font-bold leading-[22px]">
            Whale Trips</h5>
        </div>
        <div
          className="bottom-card min-h-[100px] 320-529:px-1 320-529:py-2 320-529:h-auto 320-529:min-h-full 768-991:flex-col 768-991:p-3 768-991:gap-3 768-991:w-[20%] 768-991:min-h-[120px] flex items-center gap-6 p-5 bg-[#D6E8EF] rounded-[10px]">
          <Image src={BB4}
            className="768-991:w-[40px] 768-991:h-[40px] 320-529:w-[25px] 320-529:h-[25px] 768-991:object-contain"/>
          <h5
            className="text-xl 1440-1599:text-[18px] 320-529:text-[11px] 320-529:leading-[15px] 320-529:break-words 768-991:text-[16px] 768-991:w-full 768-991:text-center 992-1199:text-[16px] 1366-1439:text-[16px] font-lato-bold w-[50%] font-bold leading-[22px]">
            African Safari</h5>
        </div>
        <div
          className="bottom-card min-h-[100px] 320-529:px-1 320-529:py-2 320-529:h-auto 320-529:min-h-full 768-991:flex-col 768-991:p-3 768-991:gap-3 768-991:w-[20%] 768-991:min-h-[120px] flex items-center gap-6 p-5 bg-[#D6E8EF] rounded-[10px]">
          <Image src={BB5}
            className="768-991:w-[40px] 768-991:h-[40px] 320-529:w-[25px] 320-529:h-[25px] 768-991:object-contain"/>
          <h5
            className="text-xl 1440-1599:text-[18px] 320-529:text-[11px] 320-529:leading-[15px] 320-529:break-words 768-991:text-[16px] 768-991:w-full 768-991:text-center 992-1199:text-[16px] 1366-1439:text-[16px] font-lato-bold w-[50%] font-bold leading-[22px]">
            Ideas &
            Inspirations</h5>
        </div>
      </div>
    </section>
 </main>
 )
}