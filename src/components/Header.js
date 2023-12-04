import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <nav
        className={`${
          isActive ? "bg-[#2a2a2a] shadow-md" : "bg-none "
        } fixed w-full z-50 transition-all`}
      >
        <div className="container mx-auto px-5">
          <div className="flex justify-around items-center h-16">
            <div className="flex items-center">
              <Link
                to="home"
                className="text-2xl font-bold uppercase cursor-pointer"
              >
                Gym<span className="text-[#f35903]">Genesis</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-14">
              <Link
                to="home"
                className="nav-link"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Home
              </Link>
              <Link
                to="about"
                className="nav-link"
                activeClass="active"
                smooth={true}
                spy={true}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                About
              </Link>
              <Link
                to="services"
                className="nav-link"
                activeClass="active"
                smooth={true}
                spy={true}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Services
              </Link>
              <Link
                to="plans"
                className="nav-link"
                activeClass="active"
                smooth={true}
                spy={true}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Plans
              </Link>
              <Link
                to="gallery"
                className="nav-link"
                activeClass="active"
                smooth={true}
                spy={true}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Gallery
              </Link>
              <Link
                to="contact"
                className="nav-link"
                activeClass="active"
                smooth={true}
                spy={true}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Contact
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="text-3xl text-[#555555] cursor-pointer"
                onClick={handleToggleNav}
              >
                <IoMdMenu color="#f35903" />
              </button>
            </div>
            <div className="max-w-max hidden md:flex">
              <a
                className="btn btn-sm flex items-center justify-center"
                href="https://wa.me/+96103123456"
                target="_blank"
                rel="noreferrer"
              >
                Contact us
              </a>
            </div>
          </div>
          {isNavOpen && (
            <div className="md:hidden bg-[#2a2a2a] p-4 space-x-4 ">
              <Link
                to="home"
                className="nav-link"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Home
              </Link>
              <Link
                to="about"
                className="nav-link"
                activeClass="active"
                smooth={true}
                spy={true}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                About
              </Link>
              <Link
                to="services"
                className="nav-link"
                activeClass="active"
                smooth={true}
                spy={true}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Services
              </Link>
              <Link
                to="plans"
                className="nav-link"
                activeClass="active"
                smooth={true}
                spy={true}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Plans
              </Link>
              <Link
                to="gallery"
                className="nav-link"
                activeClass="active"
                smooth={true}
                spy={true}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Gallery
              </Link>
              <Link
                to="contact"
                className="nav-link"
                activeClass="active"
                smooth={true}
                spy={true}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
