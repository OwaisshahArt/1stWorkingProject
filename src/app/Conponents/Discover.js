import Image from "next/image";
import Link from "next/link";
import BB9 from "../../../assets/images/bb9.svg";
import BB10 from "../../../assets/images/bb10.svg";
import BB11 from "../../../assets/images/bb11.svg";
import BB12 from "../../../assets/images/bb12.svg";
import ABLeft from '../../../assets/images/ab-left.gif';
import ABRight from '../../../assets/images/ab-right.gif';
import ArrowRight from '../../../assets/images/arrowRight.svg';
import Services from '../../../assets/images/service.png';
import Wave from '../../../assets/images/wave.gif';

export default function Discover() {
    return(
        <main>
                <section
      className="about-section w-full bg-[#E4F4FB] flex flex-wrap py-32 768-991:px-6 768-991:py-16 768-991:pb-10 1440-1599:pb-20 992-1199:pb-20 992-1199:px-8 1366-1439:pb-20 1366-1439:px-16 px-48 1680-1919:px-32 1680-1919:-mt-[1px] 1600-1679:px-28 1600-1679:-mt-[1px] 1440-1599:px-[6.5rem] 1440-1599:-mt-[1px]">
      <div className="w-full lg:w-7/12">
        <h3
          className="ps-44 pb-5 992-1199:ps-20 768-991:ps-0 font-poppins-semiBold text-xs font-600 tracking-[3.6px] uppercase text-[#3DABC2]">
          LEARN, SHOOT, EXPLORE</h3>
        <div className="video-text">
          <div className="video-left inline-flex 320-529:gap-3 gap-12 992-1199:gap-6 items-center">
            <Image src={ABLeft} className="w-[142px] h-[74px] 320-529:w-[100px] 320-529:h-[55px] 992-1199:w-[130px] 992-1199:h-[65px] object-cover rounded-[100px]"  autoplay loop muted playsinline/>
            <h3
              className="font-lato-black text-[68px] 320-350:text-[24px] 320-529:text-[30px] 768-991:text-[50px] 768-991:leading-[60px] 1440-1599:text-[55px] 992-1199:text-[42px] 992-1199:leading-[55px] 1366-1439:text-[50px] 1366-1439:leading-[66px] font-black leading-[84px] 1440-1599:leading-[76px]">
              Discover your</h3>
          </div>
          <h3
            className="w-[74%] 1680-1919:w-[90%] 320-350:text-[24px] 320-529:text-[30px] 320-529:w-full 320-529:leading-[50px] 768-991:text-[50px] 768-991:w-[90%] 768-991:leading-[60px] 1600-1679:w-[90%] 1440-1599:w-[90%] 992-1199:text-[42px] 992-1199:leading-[65px] 992-1199:w-[85%] 1366-1439:text-[50px] 1366-1439:leading-[66px] 1366-1439:w-[85%] font-lato-black text-[68px] 1440-1599:text-[55px] font-black leading-[84px] 1440-1599:leading-[76px]">
            next <span
              className="font-brownhill-script font-medium 320-529:px-2 320-529:text-[50px] 768-991:text-[80px] 768-991:pe-2 text-[139px] 1440-1599:text-[125px] 1440-1599:pe-2 992-1199:text-[95px] 992-1199:pe-2 1366-1439:text-[115px] 1366-1439:pe-2 text-[#3DABC2] px-4">adventure</span>
            with our
            worldwide travel</h3>
          <div className="video-right inline-flex gap-6 320-529:gap-3 items-center pt-3">
            <h3
              className="font-lato-black text-[68px] 320-350:text-[24px] 320-529:text-[30px] 320-529:leading-[40px] 768-991:text-[50px] 768-991:leading-[60px] 1440-1599:text-[55px] 992-1199:text-[42px] 992-1199:leading-[55px] 1366-1439:text-[50px] 1366-1439:leading-[66px] font-black leading-[84px] 1440-1599:leading-[76px]">
              experts.</h3>
            <Image src={ABRight} className="w-[235px] h-[74px] 320-529:w-[150px] 320-529:h-[60px] 992-1199:w-[190px] 992-1199:h-[65px] object-cover rounded-[100px]" autoplay loop muted playsinline/>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-5/12">
        <div
          className="flex flex-col h-full justify-center items-start gap-8 768-991:pt-10 1680-1919:ps-10 1600-1679:ps-10 1440-1599:ps-10 1366-1439:ps-10">
          <Image src={Wave} className="w-[73px] h-[20px] object-contain" autoplay muted loop playsinline/>
          <p
            className="text-lg font-medium leading-7 320-529:w-full 320-529:text-[16px] tracking-[-0.18px] font-poppins-medium w-[70%] 1260-1365:w-[90%] 992-1199:w-[100%] 992-1199:text-[15px] 1366-1439:w-[85%] 1366-1439:text-[16px] 1680-1919:w-[90%] 1600-1679:w-[85%] 1440-1599:w-[95%]">
            Enjoy concierge-level service from an expert travel agent who will create a custom experience based on your
            needs and our first-hand travel knowledge.</p>
          <Link href="#"
            className="btn-hover bg-[#F57415] py-3 px-10 font-600 text-base 320-529:py-3 320-529:px-8 320-529:text-[15px] 992-1199:py-3 992-1199:px-8 992-1199:text-[15px] 1366-1439:py-3 1366-1439:px-8 1366-1439:text-[15px] text-white rounded-full border-[2px] border-solid border-[#F57415] flex items-center gap-3 font-poppins-semiBold transition duration-[.6s] ease-in-out hover:bg-transparent hover:text-[#F57415]">
            Meet us
            <Image src={ArrowRight} alt=""/>
          </Link>
        </div>
      </div>
    </section>
    <section
      className="services w-full flex flex-wrap pt-24 pb-44 px-48 320-529:pb-16 768-991:pb-32 768-991:gap-10 768-991:px-6 768-991:pt-16 1680-1919:px-32 1600-1679:px-28 1440-1599:px-[6.5rem] 992-1199:px-8 1366-1439:px-16 bg-[#E4F4FB] relative">
      <div className="w-full lg:w-3/12 768-991:h-auto 768-991:min-h-auto h-[262px] 992-1199:h-auto 992-1199:min-h-[300px]">
        <div
          className="flex flex-col h-full items-start gap-3 border border-solid border-[#B6D6E2] pb-7 320-529:px-5 992-1199:px-6 px-10 rounded-[20px]">
          <div className="bg-white p-5 rounded-[20px] 320-529:-mt-10 -mt-7 -ms-2 border-8 border-solid border-[#E4F4FB]">
          <Image src={BB9} alt=""/>
          </div>
          <h5
            className="-bold text-[22px] 320-529:text-[18px] 320-529:pt-0 768-991:h-auto 1260-1365:pt-0 1440-1599:text-[18px] 992-1199:text-[16px] 992-1199:leading-[22px] 992-1199:h-auto 1366-1439:text-[17px] 1600-1679:h-[40%] font-bold leading-[26px] pt-3 h-[30%]">
            Custom Experiences for Every Diver.</h5>
          <p className="text-[#4A748B] text-sm font-medium font-poppins-medium tracking-[-0.14px]">Tell us about your needs and
            preferences and we’ll create a personalized experience just for you.</p>
        </div>
      </div>
      <div className="w-full lg:w-3/12 768-991:h-auto 768-991:min-h-auto h-[262px] 992-1199:h-auto 992-1199:min-h-[300px]">
        <div
          className="flex flex-col h-full items-start gap-3 border border-solid border-[#B6D6E2] pb-7 320-529:px-5 992-1199:px-6 px-10 rounded-[20px]">
          <div className="bg-white p-5 rounded-[20px] 320-529:-mt-10 -mt-7 -ms-2 border-8 border-solid border-[#E4F4FB]">
          <Image src={BB10} alt=""/>
          </div>
          <h5
            className="font-lato-bold text-[22px] 320-529:text-[18px] 320-529:pt-0 768-991:h-auto 1260-1365:pt-0 1440-1599:text-[18px] 992-1199:text-[16px] 992-1199:leading-[22px] 992-1199:h-auto 1366-1439:text-[17px] 1600-1679:h-[40%] font-bold leading-[26px] pt-3 h-[30%]">
            First-hand Destination Expertise.</h5>
          <p className="text-[#4A748B] text-sm font-medium font-poppins-medium tracking-[-0.14px]">Benefit from our travel experts’
            experience diving, visiting, and exploring our destinations.</p>
        </div>
      </div>
      <div className="w-full lg:w-3/12 768-991:h-auto 768-991:min-h-auto h-[262px] 992-1199:h-auto 992-1199:min-h-[300px]">
        <div
          className="flex flex-col h-full items-start gap-3 border border-solid border-[#B6D6E2] pb-7 320-529:px-5 992-1199:px-6 px-10 rounded-[20px]">
          <div className="bg-white p-5 rounded-[20px] 320-529:-mt-10 -mt-7 -ms-2 border-8 border-solid border-[#E4F4FB]">
          <Image src={BB11} alt=""/>
          </div>
          <h5
            className="font-lato-bold text-[22px] 320-529:text-[18px] 320-529:pt-0 768-991:h-auto 1260-1365:pt-0 1440-1599:text-[18px] 992-1199:text-[16px] 992-1199:leading-[22px] 992-1199:h-auto 1366-1439:text-[17px] 1600-1679:h-[40%] font-bold leading-[26px] pt-3 h-[30%]">
            Dedicated Travel Advisors, Not Service Reps.</h5>
          <p className="text-[#4A748B] text-sm font-medium font-poppins-medium tracking-[-0.14px]">Experience the ease of booking
            with an experienced agent who is also an enthusiastic diver.</p>
        </div>
      </div>
      <div className="w-full lg:w-3/12 768-991:h-auto 768-991:min-h-auto h-[262px] 992-1199:h-auto 992-1199:min-h-[300px]">
        <div
          className="flex flex-col h-full items-start gap-3 border border-solid border-[#B6D6E2] pb-7 320-529:px-5 992-1199:px-6 px-10 rounded-[20px]">
          <div className="bg-white p-5 rounded-[20px] 320-529:-mt-10 -mt-7 -ms-2 border-8 border-solid border-[#E4F4FB]">
            <Image src={BB12} alt=""/>
          </div>
          <h5
            className="font-lato-bold text-[22px] 320-529:text-[18px] 320-529:pt-0 768-991:h-auto 1260-1365:pt-0 1440-1599:text-[18px] 992-1199:text-[16px] 992-1199:leading-[22px] 992-1199:h-auto 1366-1439:text-[17px] 1600-1679:h-[40%] font-bold leading-[26px] pt-3 h-[30%]">
            Guided Group Trips.</h5>
          <p className="text-[#4A748B] text-sm font-medium font-poppins-medium tracking-[-0.14px]">Explore a top dive destination
            with an experienced guide to handle the details.</p>
        </div>
      </div>
      <Image src={Services} className="absolute bottom-0 left-0 w-full"/>
    </section>
        </main>
    )
}