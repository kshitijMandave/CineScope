import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { MdMyLocation } from "react-icons/md";
import SearchBar from "../SearchBar/SearchBar";
import LocationModal from "../LocationModal/LocationModal";
import RegisterModal from "../../auth/RegisterModal/RegisterModal";

function Navbar() {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <>
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <Link to="/">CineScope</Link>
          </div>
          <div className="ml-6 w-[300px]">
            <SearchBar />
          </div>
        </div>

        <div className="space-x-4 flex items-center">
          <button
            onClick={() => setShowLocationModal(true)}
            className="hidden md:flex items-center gap-1 hover:text-yellow-400"
          >
            {selectedCity ? (
              <span className="text-sm font-semibold">{selectedCity}</span>
            ) : (
              <>
                <MdMyLocation className="h-5 w-5" />
                <span>Location</span>
              </>
            )}
          </button>

          <button
            onClick={() => setShowRegisterModal(true)}
            className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-4 py-2 rounded-lg transition duration-300 shadow-md text-sm md:text-base"
          >
            Register
          </button>

          <RiMenu3Line className="cursor-pointer hover:text-yellow-400 h-6 w-6" />
        </div>
      </nav>

      <LocationModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
        onSelectCity={(city) => {
          setSelectedCity(city);
          setShowLocationModal(false);
        }}
      />

      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
      />
    </>
  );
}

export default Navbar;
