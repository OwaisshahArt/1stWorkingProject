import Image from "next/image";
import Link from "next/link";
import FooterPng from '../../../assets/images/footer.png';
import Wave from '../../../assets/images/wave.svg';
import SearchArrow from '../../../assets/images/searchArrow.svg';
import ArrowRightB from '../../../assets/images/arrowRightB.svg';
import Facebook from '../../../assets/images/facebook.png';
import instagram from '../../../assets/images/instagram.png';
import Youtube from '../../../assets/images/youtube.png';
import Dot from '../../../assets/images/dot.svg';

export default function Footer() {
    return(
        <main>
            <footer className="pt-6 relative">
      <Image src={FooterPng}
        className="absolute 320-529:-top-[5px] 320-529:h-[50px] 992-1199:-top-[15px] 1366-1439:-top-[35px] 1440-1599:-top-[44px] 1600-1679:-top-[50px] 768-991:-top-[10px] -top-[70px] left-0 w-full pointer-events-none"/>
      <div className="flex flex-wrap h-full w-full">
        <div className="w-full lg:w-7/12">
          <div
            className="footer-left w-full h-full 768-991:px-6 768-991:border-b-0 768-991:rounded-br-none rounded-r-[30px] border border-solid border-[#B6D6E2] bg-[#D6E8EF] px-72 992-1199:px-24 1260-1365:px-36 1366-1439:px-40 1680-1919:px-60 1600-1679:px-52 1440-1599:px-40 py-16 pb-5">
            <Image src={Wave} alt=""/>
            <h4
              className="font-lato-bold text-[40px] 320-529:w-full 320-529:text-[24px] 320-529:leading-8 768-991:w-[60%] 768-991:text-[30px] 768-991:leading-9 992-1199:text-[30px] 992-1199:leading-9 1366-1439:text-[36px] 1260-1365:w-[100%] font-bold leading-10 tracking-[-0.4px] w-[95%] py-6">
              Subscribe to our
              newsletter for the latest offers and news.</h4>
            <div className="flex items-center w-full border-b border-solid border-[#3DABC2] pt-2">
              <input type="email" placeholder="enter your email"
                className="w-full bg-transparent p-3 ps-0 320-529:text-[16px] font-poppins-semiBold font-600 text-lg outline-none leading-[22px] tracking-[-0.18px] text-[#91A6B1]"/>
              <Link href="#">
                <Image src={SearchArrow} alt=""/>
              </Link>
            </div>
            <h5
              className="font-lato-bold text-2xl 768-991:pt-6 320-529:text-[20px] 992-1199:text-[20px] 1366-1439:text-[20px] font-bold leading-10 pt-24 pb-3">
              Follow us</h5>

              <div className="flex gap-3">
                <Link href="https://www.facebook.com/" className="flex items-center justify-center rounded-[50%] bg-[#3DABC2] w-[45px] h-[45px]" target="_blank">
                  <Image src={Facebook} alt="" className="w-[15px] h-[15px]"/>
                </Link>
                <Link href="https://www.instagram.com/" className="flex items-center justify-center rounded-[50%] bg-[#3DABC2] w-[45px] h-[45px]" target="_blank">
                  <Image src={instagram} alt="" className="w-[15px] h-[15px]"/>
                </Link>
                <Link href="https://www.youtube.com/" className="flex items-center justify-center rounded-[50%] bg-[#3DABC2] w-[45px] h-[45px]" target="_blank">
                  <Image src={Youtube} alt="" className="w-[15px] h-[15px]"/>
                </Link>
              </div>
            
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <div
            className="footer-righ w-full h-full 768-991:pt-3 768-991:px-6 768-991:border-none 768-991:rounded-l-none 768-991:rounded-br-[30px] rounded-l-[30px] border border-solid border-[#B6D6E2] border-l-0 bg-[#D6E8EF] py-20 ps-16 pb-8">
            <h5
              className="font-lato-bold text-2xl 320-529:text-[20px] 992-1199:text-[20px] 1366-1439:text-[20px] font-bold leading-10 pb-3">
              Explore</h5>
            <ul>
              <li><Link href="#"
                  className="group hover:text-black relative hover:pl-[25px] transition-all duration-600 ease-in-out flex items-center gap-1 font-poppins-medium text-[15px] font-medium text-[#91A6B1] leading-[30px] tracking-[-0.15px]">
                  <Image src={ArrowRightB} alt=""/>
                  Destinations</Link>
              </li>
              <li><Link href="#"
                  className="group hover:text-black relative hover:pl-[25px] transition-all duration-600 ease-in-out flex items-center gap-1 font-poppins-medium text-[15px] font-medium text-[#91A6B1] leading-[30px] tracking-[-0.15px]">
                  <Image src={ArrowRightB} alt=""/>
                  Liveaboards</Link>
              </li>
              <li><Link href="#"
                  className="group hover:text-black relative hover:pl-[25px] transition-all duration-600 ease-in-out flex items-center gap-1 font-poppins-medium text-[15px] font-medium text-[#91A6B1] leading-[30px] tracking-[-0.15px]">
                  <Image src={ArrowRightB} alt=""/>
                  Resorts</Link></li>
              <li><Link href="#"
                  className="group hover:text-black relative hover:pl-[25px] transition-all duration-600 ease-in-out flex items-center gap-1 font-poppins-medium text-[15px] font-medium text-[#91A6B1] leading-[30px] tracking-[-0.15px]">
                  <Image src={ArrowRightB} alt=""/>
                  Guided
                  Group Trips</Link></li>
              <li><Link href="#"
                  className="group hover:text-black relative hover:pl-[25px] transition-all duration-600 ease-in-out flex items-center gap-1 font-poppins-medium text-[15px] font-medium text-[#91A6B1] leading-[30px] tracking-[-0.15px]">
                  <Image src={ArrowRightB} alt=""/>
                  Ideas</Link>
              </li>
              <li><Link href="#"
                  className="group hover:text-black relative hover:pl-[25px] transition-all duration-600 ease-in-out flex items-center gap-1 font-poppins-medium text-[15px] font-medium text-[#91A6B1] leading-[30px] tracking-[-0.15px]">
                  <Image src={ArrowRightB} alt=""/>
                  Special
                  Offers</Link></li>
              <li><Link href="#"
                  className="group hover:text-black relative hover:pl-[25px] transition-all duration-600 ease-in-out flex items-center gap-1 font-poppins-medium text-[15px] font-medium text-[#91A6B1] leading-[30px] tracking-[-0.15px]">
                  <Image src={ArrowRightB} alt=""/>
                  About
                  Us</Link></li>
              <li><Link href="#"
                  className="group hover:text-black relative hover:pl-[25px] transition-all duration-600 ease-in-out flex items-center gap-1 font-poppins-medium text-[15px] font-medium text-[#91A6B1] leading-[30px] tracking-[-0.15px]">
                  <Image src={ArrowRightB} alt=""/>
                  Contact</Link>
              </li>
            </ul>
            <h5
              className="font-lato-bold text-2xl 320-529:text-[20px] 992-1199:text-[20px] 1366-1439:text-[20px] font-bold leading-10 pb-3 pt-6">
              Contact us</h5>
            <ul>
              <li><Link href="tel:310-915-6677"
                  className="flex items-center gap-1 font-poppins-medium text-[15px] font-medium text-[#91A6B1] leading-[30px] tracking-[-0.15px]">310-915-6677</Link>
              </li>
              <li><Link href="mailto:info@bluewaterdivetravel.com"
                  className="flex items-center gap-1 font-poppins-medium text-[15px] font-medium text-[#91A6B1] leading-[30px] tracking-[-0.15px]">info@bluewaterdivetravel.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="footer-bottom px-72 768-991:gap-3 768-991:flex-col 768-991:px-6 768-991:!py-10 992-1199:px-24 992-1199:pe-[6rem] 1680-1919:px-60 1600-1679:px-52 1260-1365:px-36 1260-1365:pe-[13rem] 1366-1439:px-40 1366-1439:pe-[15rem] 1440-1599:px-40 pe-[29rem] 1680-1919:pe-[23rem] 1600-1679:pe-[21rem] 1440-1599:pe-[17rem] pt-5 pb-28 bg-[#3DABC2] flex items-center justify-between">
        <span className="font-poppins-medium text-sm font-medium leading-[22px] tracking-[-0.14px] text-[#B6D6E2]">2023 © Blue
          Water Travel</span>
        <span
          className="font-poppins-medium text-sm font-medium leading-[22px] tracking-[-0.14px] text-[#B6D6E2] flex items-center gap-3">
          <Link href="#">Privacy Policy </Link>
          <Image src={Dot} alt=""/>
          <Link href="#">Terms & Conditions</Link>
        </span>
      </div>
    </footer>
        </main>
    )
}