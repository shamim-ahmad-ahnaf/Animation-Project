import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center w-full max-w-screen-xl py-6 mx-auto">
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center gap-6 md:gap-14">
          <img
            src="https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bddf6c495c16eebdb45576_Refokus-w.svg"
            alt="Refokus Logo"
            className="h-8"
          />
          <div className="items-center hidden gap-6 font-semibold text-white md:flex">
            {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
              elem.length === 0 ? (
                <span
                  key={`divider-${index}`}
                  className="w-[2px] h-7 bg-zinc-600"
                ></span>
              ) : (
                <a
                  key={index}
                  className="relative group"
                  href="#"
                >
                  {index === 1 && (
                    <span
                      className="absolute left-0 inline-block w-1 h-1 bg-green-500 rounded-full -top-1"
                      style={{ boxShadow: "0 0 5px #00FF19" }}
                    ></span>
                  )}
                  <span className="transition-all group-hover:text-green-500">{elem}</span>
                </a>
              )
            )}
          </div>
        </div>
        <Button />
        <button
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} // Change icon based on menu state
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative flex flex-col items-center w-4/5 max-w-xs gap-6 p-6 transition-all duration-300 ease-in-out transform rounded-lg shadow-lg bg-zinc-800">
            {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
              elem.length === 0 ? (
                <span
                  key={`divider-${index}`}
                  className="w-[2px] h-7 bg-zinc-600"
                ></span>
              ) : (
                <a
                  key={index}
                  className="text-sm text-white transition-all duration-300 hover:text-green-500"
                  href="#"
                >
                  {index === 1 && (
                    <span
                      className="inline-block w-1 h-1 bg-green-500 rounded-full"
                      style={{ boxShadow: "0 0 5px #00FF19" }}
                    ></span>
                  )}
                  {elem}
                </a>
              )
            )}
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute text-3xl font-bold text-white transition-all duration-300 top-1 right-2 hover:text-green-500"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
