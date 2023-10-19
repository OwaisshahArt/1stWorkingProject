import Discover from "./Conponents/Discover"
import Experiences from "./Conponents/Experiences"
import Footer from "./Conponents/Footer"
import Header from "./Conponents/Header"
import Hero from "./Conponents/Hero"
import Megamenu from "./Conponents/Megamenu"
import Offers from "./Conponents/Offers"
import Postcards from "./Conponents/Postcards"
import Stories from "./Conponents/Stories"
export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Discover/>
      <Offers/>
      <Experiences/>
      <Stories/>
      <Postcards/>
      <Footer/>
      <Megamenu/>
    </main>
  )
}
