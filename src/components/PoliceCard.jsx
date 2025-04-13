import React from "react";
import card2 from "../assets/card2.jpg";

const PoliceCard = () => {
  return (
    <div
      className="bg-black bg-opacity-60 p-4 rounded-md text-white text-center shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=police+station&query_place_id=&center=LAT,LONG
`;
              window.open(googleMapsUrl, "_blank");
            },
            (error) => {
              switch (error.code) {
                case error.PERMISSION_DENIED:
                  alert("Location permission denied.");
                  break;
                case error.POSITION_UNAVAILABLE:
                  alert("Location unavailable.");
                  break;
                case error.TIMEOUT:
                  alert("Request timed out.");
                  break;
                default:
                  alert("An unknown error occurred.");
                  break;
              }
            }
          );
        } else {
          alert("Geolocation is not supported by your browser.");
        }
      }}
    >
      <img
        src={card2}
        alt="Police Stations Nearby"
        className="mx-auto w-full h-48 object-cover rounded-md border-2 border-[#8a2be2]"
      />
      <div className="mt-4">
        <span className="bg-[#d9a066] text-black font-bold py-1 px-2 text-sm rounded">
          02
        </span>
        <h2 className="text-lg md:text-xl font-semibold mt-2">
          POLICE STATIONS NEAR BY
        </h2>
        <p className="mt-2 text-sm md:text-base">
          Quickly locate police stations around you with our assistance.
        </p>
      </div>
    </div>
  );
};

export default PoliceCard;
