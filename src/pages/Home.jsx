import { useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom"; // import hook
import Sidebar from "../components/Sidebar";
import logo from "../assets/logo.png";
import bgMobile from "../assets/bg_mobile.png";
import bgTablet from "../assets/bg_tablet.png";
import bgLaptop from "../assets/bg_laptop.png";
import card1 from "../assets/card1.png";
import card3 from "../assets/card3.png";
import PoliceCard from "../components/PoliceCard";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate(); // hook for navigation

  return (
    <div className="relative min-h-screen">
      {/* Backgrounds */}
      <div className="fixed inset-0 z-0">
        <div
          className="block sm:hidden w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgMobile})` }}
        ></div>
        <div
          className="hidden sm:block md:hidden w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgTablet})` }}
        ></div>
        <div
          className="hidden md:block w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgLaptop})` }}
        ></div>
      </div>

      <div className="fixed inset-0 bg-black opacity-20 z-10"></div>

      <div className="relative z-20 min-h-screen overflow-y-auto">
        <header className="p-4 flex items-center">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="w-7 h-7 text-white" />
          </button>
        </header>

        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="text-white px-6 md:px-16 py-10 md:py-10 max-w-3xl">
          <img
            src={logo}
            alt="JusticePal Logo"
            className="w-44 md:w-56 lg:w-72 mb-8 transition-all duration-300"
          />

          <h1 className="text-3xl md:text-5xl font-bold md:pt-5 mb-6 leading-snug">
            JusticePal – Your Digital Safety & Legal Hub
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Report, connect, and know your rights.
          </p>
          <button
            onClick={() => navigate("/chat")}
            className="relative inline-block px-6 py-3 font-bold text-white text-xl border-2 border-white overflow-hidden group"
          >
            <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative z-10 group-hover:text-[#f97316]">
              Start a Chat
            </span>
          </button>
        </main>

        <div className="mt-16 mb-20 mx-10 grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div
            className="bg-black bg-opacity-60 p-4 rounded-md text-white text-center shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => navigate("/rules")}
          >
            <img
              src={card1}
              alt="Know Your Rights"
              className="mx-auto w-full h-48 object-cover rounded-md border-2 border-[#8a2be2]"
            />
            <div className="mt-4">
              <span className="bg-[#d9a066] text-black font-bold py-1 px-2 text-sm rounded">
                01
              </span>
              <h2 className="text-lg md:text-xl font-semibold mt-2">
                KNOW YOUR RIGHTS
              </h2>
              <p className="mt-2 text-sm md:text-base">
                Our AI team offers complete legal guidance for all your problems
                and concerns.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <PoliceCard />
          {/* Card 3 */}
          <div
            className="bg-black bg-opacity-60 p-4 rounded-md text-white text-center shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() =>
              (window.location.href =
                "https://mumbaipolice.gov.in/OnlineComplaints?ps_id=0")
            }
          >
            <img
              src={card3}
              alt="File a Complaint"
              className="mx-auto w-full h-48 object-cover rounded-md border-2 border-[#8a2be2]"
            />
            <div className="mt-4">
              <span className="bg-[#d9a066] text-black font-bold py-1 px-2 text-sm rounded">
                03
              </span>
              <h2 className="text-lg md:text-xl font-semibold mt-2">
                FILE A COMPLAIN
              </h2>
              <p className="mt-2 text-sm md:text-base">
                We direct you to the proper authority to lodge your complaints
                securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
