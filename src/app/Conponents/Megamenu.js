'use client'
import React, {useState, useRef, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link'
// import angleDown from '../assets/images/angleDown.svg';
// import angleWhite from '..//assets/images/angleDown.svg';
// import {useHeader} from "../hooks/useHeader";
import AngleDown from '../../../assets/images/angleDown.svg';

const regionsData = [
  [
    {
      name: 'Asia Pacific',
      destinations: [
        'Australia',
        'Fiji',
        'French Polynesia',
        'Marshal Islands',
        'Micronesia',
        'Palau',
        'Papua New Guinea',
        'Solomon Islands',
        'Tonga',
      ],
    },
    {
      name: 'Caribbean',
      destinations: [
        'Bahamas',
        'British Virgin Islands',
        'Cayman Islands',
        'Cuba',
        'Honduras (Roatan)',
        'St. Kitts & Nevis',
        'St. Maarten',
        'Turks & Caicos',
      ],
    },
  ],
  [
    {
      name: 'Central & South America',
      destinations: [
        'Argentina',
        'Belize',
        'Colombia (Malpelo)',
        'Costa Rica - Cocos',
        'Costa Rica - Pacific coast',
        'Ecuador (Galapagos)',
        'Mexico - Guadalupe Island',
        'Mexico - Sea of Cortez',
        'Mexico - Socorro',
        'Panama (Malpelo)',
      ],
    },
    {
      name: 'Europe',
      destinations: [
        'Greece',
        'Italy',
        'Norway',
        'Portugal',
        'Spain',
        'Turkey',
      ],
    },
  ],
  [
    {
      name: 'Indian Ocean',
      destinations: [
        'Maldives',
        'Seychelles',
      ],
    },
    {
      name: 'Middle East & Red Sea',
      destinations: [
        'Djibouti',
        'Egypt',
        'Oman',
        'Saudi Arabia',
        'Sudan',
      ],
    },
    {
      name: 'North America',
      destinations: [
        'Hawaii',
      ],
    },
  ],
  [
    {
      name: 'South-East Asia',
      destinations: [
        'Indonesia - Komodo',
        'Indonesia - Raja Ampat',
        'Malaysia (Sipadan)',
        'Myanmar (Burma)',
        'Philippines - Tubbatha reef',
        'Philippines',
        'Thailand (Similan)',
      ],
    },
    {
      name: 'Entire world',
      isButton: false,
    },
  ],
];
const DestinationsDropdown = () => {
  // const [dropdownValues] = useHeader()
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const handleDropdownClick = () => {
    if (isOpen) {
      closeDropdown();
    } else {
      toggleDropdown();
    }
  };
  const handleLinkClick = () => {
    toggleDropdown();
  };
  const handleButtonClick = () => {
    closeDropdown();
  };
  return (
    <div className="nav-link" ref={dropdownRef}>
      <Link
        href="javascript:void(0)"
        className={`flex items-center gap-2 992-1199:gap-1 group text-black btn-hover hover:text-[#F57415] focus:text-[#F57415]`}
        id="dropdown-button"
        onClick={handleLinkClick}
      >
        Destinations
        <Image
          src={AngleDown}
          alt="Dropdown Arrow"
          width={10}
          height={6}
          className={`transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </Link>
      {isOpen && (
        <div
          className='absolute top-[100px] 992-1199:px-1 left-0 z-[1] w-full transition-all duration-600 ease-in-out origin-top-right bg-[#F8FCFF] shadow-lg focus:outline-none px-28 1366-1439:px-20 pb-10'
        >
          <div className="flex flex-wrap">
            {regionsData.map((column, columnIndex) => (
              <div key={columnIndex} className={`w-full md:w-3/12`}>
                {column.map((region, regionIndex) => (
                  <div
                    key={regionIndex}
                    className={`dropdown-links ${!region.destinations ? 'w-[50%] mx-auto 1260-1365:w-[70%] 992-1199:w-[70%] pt-10 pb-5' : '1260-1365:w-[70%] 992-1199:w-[70%] pt-10 pb-5 border-b border-solid border-[#D6E8EF] w-[50%] mx-auto'}`}
                  >
                    {region.destinations?.length > 0 &&
                    <span className={`font-poppins-semibold text-lg font-semibold leading-${!region.destinations ? '6' : '22'} tracking-[-0.18px] text-black`}>
                      {region.name}
                    </span>
                    }
                    {!region.destinations && (
                      <Link
                        href="javascript:void(0)"
                        className="font-poppins-semibold text-sm font-600 leading-6 p-3 px-6 rounded-[100px] bg-[#3DABC2] text-white"
                        onClick={handleButtonClick}
                      >
                        {region.name}
                      </Link>
                    )}
                    {region.destinations?.length > 0 && (
                      <ul className="pt-4">
                        {region.destinations.map((destination, idx) => (
                          <li key={idx}>
                            <Link
                              href="javascript:void(0)"
                              className="flex items-center gap-1 font-poppins-medium text-[13px] font-medium text-[#000] leading-[24px] tracking-[-0.13px] py-[1px] hover:text-[#3DABC2]"
                            >
                              {destination}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default DestinationsDropdown;