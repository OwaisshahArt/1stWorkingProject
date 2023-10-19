'use client';
import { useState } from "react";
import { MegaMenu } from 'primereact/megamenu';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
// import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../assets/images/logo.svg';
import AngleDown from '../../../assets/images/angleDown.svg';
import AngleDownWhite from '../../../assets/images/angleDownWhite.svg';
import Star from '../../../assets/images/star.svg';
import Search from '../../../assets/images/search.svg';
import SearchWhite from '../../../assets/images/searchWhite.svg';
import DestinationsDropdown from "./Megamenu";
export default function Header(){



 return(
    <main>
        <div id="header"
      className="header  absolute top-0 left-0 w-full h-[100px] 320-529:ps-5 768-991:items-center 768-991:justify-between 768-991:pt-5 768-991:pe-5 z-50 flex transition-all duration-600 ease-in-out">
      <div
        className="logo p-10 ps-16 768-991:p-0 1440-1599:ps-10 1366-1439:ps-6 992-1199:ps-2 992-1199:pe-5 1260-1365:ps-3 pe-52 1680-1919:pe-32 1600-1679:pe-28 1440-1599:pe-16 1366-1439:pe-8 relative">
        <Link href="index.html">
          <Image src={Logo} width={150} height={55} className="w-[250px] h-[66px] 320-529:w-[150px] 992-1199:h-[55px] 768-991:h-[55px]"       alt="Picture of the author"
/>
        </Link>
      </div>
      <div className="w-full h-full bg-white rounded-bl-[20px] shadow-header-shadow font-poppins-semiBold 768-991:hidden">
        <div
          className="bg-[#D6E8EF] flex items-center gap-2 1440-1599:w-[21rem] 1600-1679:w-[21rem] w-[22rem] 992-1199:w-72 ms-auto p-2 ps-4 rounded-bl-[10px] h-[35%]">
          <Link href="#" className="text-xs 992-1199:text-[10px] font-600 tracking-[0.6px]">ABOUT US</Link>
          <Image src={Star} alt=""/>
          <Link href="#" className="text-xs 992-1199:text-[10px] font-600 tracking-[0.6px]">LOGIN</Link>
        </div>
        <div
          className="flex items-center h-[65%] px-8 1440-1599:pe-4 992-1199:px-3 992-1199:justify-center 1366-1439:px-5 1260-1365:pe-3">
          <ul
            className="flex items-center gap-[3.8rem] 1680-1919:gap-10 1600-1679:gap-7 1440-1599:gap-8 992-1199:justify-center 992-1199:gap-2 992-1199:text-[12px] 1366-1439:gap-8 1260-1365:gap-5 font-600 text-lg 1440-1599:text-[15px] 1366-1439:text-[15px]">
            <li  className="nav-link"><Link href="#" className="flex items-center gap-2 992-1199:gap-1 group hover:text-[#F57415] focus:text-[#F57415]"
                id="dropdown-button">
              <DestinationsDropdown/>
              </Link>
            </li>
            <li className="nav-link"><Link href="liveaboards.html"
                className="flex items-center gap-2 992-1199:gap-1 group hover:text-[#F57415]">
                  <Menu menuButton={<MenuButton>Liveaboards</MenuButton>} transition>
                    
                    </Menu> 
                <Image src={AngleDown} className=""/>
              </Link></li>
            <li className="nav-link"><Link href="#"
                className="flex items-center gap-2 992-1199:gap-1 group hover:text-[#F57415]">Resorts <Image src={AngleDown} className=""/>
              </Link></li>
            <li><Link href="#" className="hover:text-[#F57415] ">Guided Group Trips</Link></li>
            <li><Link href="#" className="hover:text-[#F57415]">Ideas</Link></li>
            <li><Link href="#" className="hover:text-[#F57415]">Special Offers</Link></li>
            <li><Link href="#" className="open-search group">
                <Image src={Search} alt=""/>
              </Link></li>
            <li className="relative">
              <Link href="#" id="dropdown-button3"
                className="bg-[#F57415] py-3.5 px-6 font-600 text-sm 992-1199:py-3 992-1199:px-5 992-1199:text-[12px] text-white rounded-full flex items-center gap-3 relative">Contact
                us
                <span className="block w-[1px] h-[20px] bg-[#D85C02]"></span>
                <Image src={AngleDownWhite} className=""/>
              </Link>
              <div id="dropdown-menu3"
                className="opacity-0 pointer-events-none absolute top-[50px] rounded-bl-[10px] rounded-br-[10px] right-0 z-10 w-[330px] transition-all duration-600 ease-in-out origin-top-right bg-white focus:outline-none py-7 pb-5 px-3">
                <span
                  className="font-poppins-semiBold text-lg font-600 leading-[22px] tracking-[-0.18px] text-center text-black block">Contact
                  us</span>
                <div className="flex -space-x-2 overflow-vis justify-center py-4">
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-avatar"
                    src="../assets/images/cc1.jfif"/>
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-avatar"
                    src="../assets/images/cc2.jfif"/>
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-avatar"
                    src="../assets/images/cc3.jfif"/>
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-avatar"
                    src="../assets/images/cc4.jfif"/>
                </div>
                <p
                  className="font-poppins-regular text-[13px] font-normal leading-[18px] tracking-[0.26px] text-center text-[#4A748B] pt-2">
                  Our travel consultants are available from 9am to 15pm to help you plan your next trip.</p>
                <div className="flex items-center justify-center gap-2 border-b border-solid border-[#D6E8EF] py-3 pb-4">
                  <img src="../assets/images/chatIcon.svg"/>
                  <span className="text-[13px] text-black font-poppins-semiBold font-600 leading-[24px] tracking-[0.13px]">Chat with
                    us live</span>
                </div>
                <div className="flex items-center justify-center gap-2 py-4 pb-1">
                  <img src="../assets/images/phoneIcon.svg"/>
                  <Link href="tel:310-915-6677"
                    className="text-[14px] text-[#3DABC2] font-poppins-semiBold font-600 leading-[24px] tracking-[4.2px]">310-915-6677</Link>
                </div>
                <Link href="mailto:info@bluewaterdivetravel.com"
                  className="text-[14px] text-[#3DABC2] font-poppins-semiBold font-600 leading-[24px] tracking-[1.12px] py-3 pb-1 text-center block">info@bluewaterdivetravel.com</Link>
              </div>
            </li>

          </ul>
        </div>
      </div>
      <div className="hidden 768-991:flex items-center gap-6">
        <Image src={SearchWhite} className="change-color open-search"/>
        <img src="../assets/images/hamburger.svg" id="mobile-button"/>
      </div>
      <div id="dropdown-menu"
        className="opacity-0 absolute top-[95px] 992-1199:px-1 left-0 -z-[1] w-full transition-all duration-600 ease-in-out origin-top-right bg-[#f8fcff] shadow-lg focus:outline-none px-28 1366-1439:px-20 pb-10">
        <div className="flex flex-wrap">
          <div className="w-full md:w-3/12">
            <div
              className="dropdown-links 1260-1365:w-[70%] 992-1199:w-[70%] pt-10 pb-5 border-b border-solid border-[#D6E8EF] w-[50%] mx-auto">
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
            <div
              className="dropdown-links 1260-1365:w-[70%] 992-1199:w-[70%] pt-10 pb-5 border-b border-solid border-[#D6E8EF] w-[50%] mx-auto">
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
          <div className="w-full md:w-3/12">
            <div
              className="dropdown-links 1260-1365:w-[70%] 992-1199:w-[70%] pt-10 pb-5 border-b border-solid border-[#D6E8EF] w-[50%] mx-auto">
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
            <div
              className="dropdown-links 1260-1365:w-[70%] 992-1199:w-[70%] pt-10 pb-5 border-b border-solid border-[#D6E8EF] w-[50%] mx-auto">
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
          </div>
          <div className="w-full md:w-3/12">
            <div
              className="dropdown-links 1260-1365:w-[70%] 992-1199:w-[70%] pt-10 pb-5 border-b border-solid border-[#D6E8EF] w-[50%] mx-auto">
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
            <div
              className="dropdown-links 1260-1365:w-[70%] 992-1199:w-[70%] pt-10 pb-5 border-b border-solid border-[#D6E8EF] w-[50%] mx-auto">
              <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">Middle East & Red Sea</span>
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
              className="dropdown-links 1260-1365:w-[70%] 992-1199:w-[70%] pt-10 pb-5 border-b border-solid border-[#D6E8EF] w-[50%] mx-auto">
              <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">North America</span>
              <ul className="pt-4">
                <li><Link href="#"
                    className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]">Hawaii</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-3/12">
            <div
              className="dropdown-links 1260-1365:w-[70%] 992-1199:w-[70%] pt-10 pb-5 border-b border-solid border-[#D6E8EF] w-[50%] mx-auto">
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
            <div className="dropdown-links 1260-1365:w-[70%] 992-1199:w-[70%] pt-10 pb-5 w-[50%] mx-auto">
              <Link href="#"
                className="font-poppins-semiBold text-sm font-600 leading-6 p-3 px-6 rounded-[100px] bg-[#3DABC2] text-white">Entire
                world</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <Megamenu/>
      </div> */}

      <div id="mobile-header"
        className="mobile-header pt-36 px-6 w-full h-[100vh] fixed top-0 left-0 bg-white -z-[1] opacity-0 pointer-events-none transition-all duration-600 ease-in-out">
        <div className="flex items-center justify-between 320-350:flex-col 320-350:gap-6  py-6">
          <div className="flex items-center gap-2">
            <Link href="#" className="320-350:text-[13px] text-[13px] font-poppins-semiBold font-600">ABOUT US</Link>
            <img src="../assets/images/star.svg" alt=""/>
            <Link href="#" className="320-350:text-[13px] text-[13px] font-poppins-semiBold font-600">LOGIN</Link>
          </div>
          <div className="relative">
            <Link href="#" id="dropdown-button4"
              className="bg-[#F57415] font-poppins-semiBold py-3.5 px-6 font-600 text-sm 992-1199:py-3 992-1199:px-5 992-1199:text-[12px] text-white rounded-full flex items-center gap-3 relative">Contact
              us
              <span className="block w-[1px] h-[20px] bg-[#D85C02]"></span>
              <img src="../assets/images/angleDownWhite.svg"/>
            </Link>
            <div id="dropdown-menu4"
              className="opacity-0 border 320-350:-right-[53%] border-solid border-[#B6D6E2] pointer-events-none absolute top-[50px] rounded-bl-[10px] rounded-br-[10px] right-0 z-10 w-[330px] transition-all duration-600 ease-in-out origin-top-right bg-white focus:outline-none py-7 pb-5 px-3">
              <span
                className="font-poppins-semiBold text-lg font-600 leading-[22px] tracking-[-0.18px] text-center text-black block">Contact
                us</span>
              <div className="flex -space-x-2 overflow-hidden justify-center py-4">
                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-avatar"
                  src="../assets/images/cc1.jfif"/>
                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-avatar"
                  src="../assets/images/cc2.jfif"/>
                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-avatar"
                  src="../assets/images/cc3.jfif"/>
                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-avatar"
                  src="../assets/images/cc4.jfif"/>
              </div>
              <p
                className="font-poppins-regular text-[13px] font-normal leading-[18px] tracking-[0.26px] text-center text-[#4A748B] pt-2">
                Our travel consultants are available from 9am to 15pm to help you plan your next trip.</p>
              <div className="flex items-center justify-center gap-2 border-b border-solid border-[#D6E8EF] py-3 pb-4">
                <img src="../assets/images/chatIcon.svg"/>
                <span className="text-[13px] text-black font-poppins-semiBold font-600 leading-[24px] tracking-[0.13px]">Chat with
                  us live</span>
              </div>
              <div className="flex items-center justify-center gap-2 py-4 pb-1">
                <img src="../assets/images/phoneIcon.svg"/>
                <Link href="tel:310-915-6677"
                  className="text-[14px] text-[#3DABC2] font-poppins-semiBold font-600 leading-[24px] tracking-[4.2px]">310-915-6677</Link>
              </div>
              <Link href="mailto:info@bluewaterdivetravel.com"
                className="text-[14px] text-[#3DABC2] font-poppins-semiBold font-600 leading-[24px] tracking-[1.12px] py-3 pb-1 text-center block">info@bluewaterdivetravel.com</Link>
            </div>
          </div>
        </div>
        <ul
          className="flex flex-col items-center overflow-y-auto max-h-[450px]  border-t border-solid border-[#B6D6E2] font-poppins-semiBold 1680-1919:gap-10 1600-1679:gap-5 1440-1599:gap-6 992-1199:justify-center 992-1199:gap-2 992-1199:text-[12px] 1366-1439:gap-8 1260-1365:gap-5 font-600 text-lg 1440-1599:text-[15px] 1366-1439:text-[15px]">
          <li className="py-5 border-b border-solid border-[#B6D6E2] w-full" id="dropdown-button5"><Link
              href="#" className="flex items-center group gap-2 992-1199:gap-1 focus:text-[#F57415] hover:text-[#F57415]">Destinations <img src="../assets/images/angleDown.svg" className="group-hover:filter group-hover:invert-[19] group-hover:sepia-[43] group-hover:saturate-[6879] group-hover:hue-rotate-[257] group-hover:brightness-[87] group-hover:contrast-[89]"/>
              <div id="dropdown-menu5"
                className="opacity-1 hidden pointer-events-none w-full transition-all duration-600 ease-in-out origin-top-right bg-[#fff] focus:outline-none pb-10">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/6">
                    <div className="dropdown-links pt-10 pb-5 border-b border-solid border-[#D6E8EF]">
                      <span className="font-poppins-semiBold text-lg font-600 leading-[22px] tracking-[-0.18px]">Asia Pacific</span>
                      <ul className="pt-4">
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Australia</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Fiji</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">French
                            Polynesia</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Marshal
                            Islands</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Micronesia</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Palau</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Papua
                            New Guinea</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Solomon
                            Islands</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Tonga</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/6">
                    <div className="dropdown-links pt-10 pb-5 border-b border-solid border-[#D6E8EF]">
                      <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">Caribbean</span>
                      <ul className="pt-4">
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Bahamas</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">British
                            Virgin Islands</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Cayman
                            Islands</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Cuba</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Honduras
                            (Roatan)</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">St.
                            Kitts & Nevis</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">St.
                            Maarten</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Turks
                            & Caicos</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/6">
                    <div className="dropdown-links pt-10 pb-5 border-b border-solid border-[#D6E8EF]">
                      <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">Central & South
                        America</span>
                      <ul className="pt-4">
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Argentina</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Belize</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Colombia
                            (Malpelo)</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Costa
                            Rica - Cocos</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Costa
                            Rica - Pacific coast</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Ecuador
                            (Galapagos)</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Mexico
                            - Guadalupe Island</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Mexico
                            - Sea of Cortez</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Mexico
                            - Socorro</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Panama
                            (Malpelo)</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/6">
                    <div className="dropdown-links pt-10 pb-5 border-b border-solid border-[#D6E8EF]">
                      <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">Europe</span>
                      <ul className="pt-4">
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Greece</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Italy</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Norway</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Portugal</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Spain</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Turkey</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-links pt-10 pb-5 border-b border-solid border-[#D6E8EF]">
                      <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">Indian Ocean</span>
                      <ul className="pt-4">
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Maldives</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Seychelles</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/6">
                    <div className="dropdown-links pt-10 pb-5 border-b border-solid border-[#D6E8EF]">
                      <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">Middle East & Red
                        Sea</span>
                      <ul className="pt-4">
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Djibouti</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Egypt</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Oman</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Saudi
                            Arabia</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Sudan</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-links pt-10 pb-5 border-b border-solid border-[#D6E8EF]">
                      <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">North America</span>
                      <ul className="pt-4">
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Hawaii</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/6">
                    <div className="dropdown-links pt-10 pb-5 border-b border-solid border-[#D6E8EF]">
                      <span className="font-poppins-semiBold text-lg font-600 leading-[21px] tracking-[-0.18px]">South-East
                        Asia</span>
                      <ul className="pt-4">
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Indonesia
                            - Komodo</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Indonesia
                            - Raja Ampat</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Malaysia
                            (Sipadan)</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Myanmar
                            (Burma)</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Philippines
                            - Tubbatha reef</Link></li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Philippines</Link>
                        </li>
                        <li><Link href="#"
                            className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2] focus:text-[#3DABC2]">Thailand
                            (Similan)</Link></li>
                      </ul>
                    </div>
                    <div className="dropdown-links pt-10 w-[100%]">
                      <Link href="#"
                        className="font-poppins-semiBold text-sm font-600 leading-6 p-3 px-6 rounded-[100px] bg-[#3DABC2] text-white">Entire
                        world</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

          </li>
          <li className="py-5 border-b border-solid border-[#B6D6E2] w-full"><Link href="liveaboards.html"
              className="flex items-center group gap-2 992-1199:gap-1 focus:text-[#F57415] hover:text-[#F57415]">Liveaboards <img src="../assets/images/angleDown.svg" className="group-hover:filter group-hover:invert-[19] group-hover:sepia-[43] group-hover:saturate-[6879] group-hover:hue-rotate-[257] group-hover:brightness-[87] group-hover:contrast-[89]"/></Link></li>
          <li className="py-5 border-b border-solid border-[#B6D6E2] w-full"><Link href="#"
              className="flex items-center group gap-2 992-1199:gap-1 focus:text-[#F57415] hover:text-[#F57415]">Resorts <img src="../assets/images/angleDown.svg" className="group-hover:filter group-hover:invert-[19] group-hover:sepia-[43] group-hover:saturate-[6879] group-hover:hue-rotate-[257] group-hover:brightness-[87] group-hover:contrast-[89]"/></Link></li>
          <li className="py-5 border-b border-solid border-[#B6D6E2] w-full"><Link href="#" className="focus:text-[#F57415] hover:text-[#F57415]">Guided Group
              Trips</Link></li>
          <li className="py-5 border-b border-solid border-[#B6D6E2] w-full"><Link href="#" className="focus:text-[#F57415] hover:text-[#F57415]">Ideas</Link></li>
          <li className="py-5 border-b border-solid border-[#B6D6E2] w-full"><Link href="#" className="focus:text-[#F57415] hover:text-[#F57415]">Special Offers</Link>
          </li>
        </ul>
      </div>

      <div
        className="search-bar w-full h-[30vh] 768-991:h-[35vh] fixed -top-[100%] left-0 bg-[rgba(61,172,194,.5)] backdrop-blur-[5px] z-20 flex items-center justify-center transition-all duration-6000 ease-in-out">
        <div className="flex w-[50%] 768-991:w-[80%] bg-white border border-solid border-[#3DABC2]">
          <input type="text" placeholder="Type Here To Search..."
            className="w-[90%] outline-none p-5 font-poppins-semiBold text-[18px] 768-991:text-[15px] 768-991:w-[85%] font-600"/>
          <Link href="#"
            className="bg-[#3DABC2] border border-solid border-white w-[10%] 768-991:w-[15%] flex items-center justify-center px-2">
            <img src="../assets/images/searchWhite.svg"/>
          </Link>
        </div>
        <img src="../assets/images/crossWhite.svg" className="close-search absolute top-[30px] right-[30px] cursor-pointer"/>
      </div>
    </div>
    {/* <MegaMenu  model={items} breakpoint="960px" /> */}
    </main> 
 )
}