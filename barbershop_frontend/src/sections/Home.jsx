import Appointment from "../componants/Appointment"
import Navbar from "../componants/Navbar"

const Home = () => {
  return (
    <div className="min-h-screen bg-center" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4)), url('background.jpg')"}}>
        <Navbar/>
        <div className="flex flex-col justify-center h-96 pl-16 max-sm:justify-center max-sm:items-center max-sm:pl-0">
          <Appointment/>
        </div>
        <div className="flex justify-between max-sm:flex-wrap max-sm:flex-col-reverse max-sm:px-4">
          <div className="w-1/3 text-xs pl-16 text-white max-sm:text-center max-sm:pl-0 max-sm:w-full">
            <p>Our mission is to provide exceptional grooming services in a relaxed and friendly environment. Wheter you're here for a classic haircut, a modern fade, or a clean shave, our skilled barbers are dedicated to ensuring you leave looking and feeling your best.</p>
          </div>
          <div className="text-white pr-16 text-right text-5xl font-semibold max-sm:text-center max-sm:pr-0">
            <p>WHERE TRADITION<br />MEETS MODERN STYLE</p>
          </div>
        </div>
    </div>
  )
}

export default Home