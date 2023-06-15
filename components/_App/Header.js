import { Transition, Menu } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { HiOutlineChevronDown, HiOutlineMenu } from "react-icons/hi";
import ButtonTo from "../Button";
import LoginPopup from "./LoginPopup/index";
import { useAuthContext } from '../../contexts/authContext';

export default function Header() {
  const [open, setOpen] = useState(false);
    const authContextData = useAuthContext();
  const openPopup = () => {
    setOpen(true);
  };
  const hidePopup = () => {
    setOpen(false);
  };
   const handleLogout = () => {
    localStorage.removeItem("token");
    authContextData.setUser(undefined);
    authContextData.setToken(undefined);
  };
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className={`container mx-auto xl:px-0 px-6`}>
        <div className="flex items-center justify-between min-h-[70px]">
          <img src="images/home/logo.png" className="shrink-0 w-12" />
          <nav className="flex items-center">
            <ul className="lg:flex items-center justify-between hidden !gap-10">
              {/* <li className="h-[40px] flex items-center">
                <Link
                  href="/"
                  className="text-[16px] font-normal  hover:text-green"
                >
                  Explore Residences
                </Link>
              </li> */}
              <li className="group relative h-[40px] flex items-center">
                <span className="text-[16px] font-normal  hover:text-green flex items-center !ga!p-2">
                  Explore Us
                  <HiOutlineChevronDown
                    size={22}
                    className="group-hover:-rotate-180 transition duration-200"
                  />
                </span>
                <ul className="absolute hidden group-hover:block bg-white top-[40px] min-w-[15rem] !rounded-xl shadow-primary !py-4 !border">
                  <li>
                    <Link href="/about">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        About us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-it-works">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        How It Work
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/pricing">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        Pricing
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/gallery">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                       Gallery
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/events">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        Events
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/single-events">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        Events Details
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/testimonial">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        Testimonials
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/faq">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        FAQ
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/404">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        404 Error
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/coming-soon">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        Coming Soon
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/contact">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        Contact
                      </a>
                    </Link>
                  </li>

                </ul>
              </li>

               {authContextData?.user !== undefined ? (
                    authContextData?.user?.role === "admin" ? (
                     <li className="group relative h-[40px] flex items-center">
                <span className="text-[16px] font-normal  hover:text-green flex items-center !ga!p-2">
                  Admin Panel
                  <HiOutlineChevronDown
                    size={22}
                    className="group-hover:-rotate-180 transition duration-200"
                  />
                </span>
                <ul className="absolute hidden group-hover:block bg-white top-[40px] min-w-[15rem] !rounded-xl shadow-primary !py-4 !border">
                  <li>
                    <Link href="/dashboard">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        Dashboard
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/my-listing">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        My Listings
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/dashboard/reviews">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        Reviews
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/dashboard/bookings">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                       Booking
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/dashboard/add-listing">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        Add Listings
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/dashboard/add-city">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        Add City
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/dashboard/add-room-type">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        Add Room Type
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/dashboard/add-aminities">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                       Add Aminities
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/dashboard/profile">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                       My Profile
                      </a>
                    </Link>
                  </li>
                   

                </ul>
              </li>
                    ):( <li className="group relative h-[40px] flex items-center">
                <span className="text-[16px] font-normal  hover:text-green flex items-center !ga!p-2">
                   User Panel
                  <HiOutlineChevronDown
                    size={22}
                    className="group-hover:-rotate-180 transition duration-200"
                  />
                </span>
                <ul className="absolute hidden group-hover:block bg-white top-[40px] min-w-[15rem] !rounded-xl shadow-primary !py-4 !border">
                  <li>
                    <Link href="/users/bookings">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        Bookings
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/users/complains">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        Complains
                      </a>
                    </Link>
                  </li>
                   <li>
                    <Link href="/users/profile">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                       My Profile
                      </a>
                    </Link>
                  </li>
                  

                </ul>
              </li>)
                  ) : (
                    <></>
                  )}

              
              <li>
                {authContextData?.user &&
                  (authContextData?.user?.role === "user" ||
                    authContextData?.user?.role === "admin") ? (
                  <ButtonTo
                    text="LogOut"
                    className="bg-green !rounded-lg text-white px-6 !py-2 !border !shadow-lg flex items-center gap-3"
                    onClick={handleLogout}
                  />
                ) : (
                  <ButtonTo
                    text="Login/Register"
                    className="bg-green !rounded-lg text-white px-6 !py-2 !border !shadow-lg flex items-center gap-3"
                    onClick={openPopup}
                  />
                )
                }
              </li>
            </ul>
            <Menu as="div" className="lg:hidden bg-white">
              <Menu.Button className="bg-whte hover:text-gray-900 hover:bg-gray-100 inline-flex items-center justify-center !p-2 text-gray-500 !rounded-md">
                <HiOutlineMenu />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Menu.Items className="absolute top-20 max-w-[92%] mx-auto z-2xlfull inset-x-0 py-[0.5rem] transition transform origin-top-right xxl:hidden">
                  <div className="rounded-[8px] !shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="px-12 py-10 space-y-10">
                      <Menu.Item>
                        <ul className="gap-7 flex flex-col">
                          <li>
                            <Link
                              href="/about-us"
                              className="p-[9px] text-[16px] font-normal text-black/70 hover:text-green">
                              About us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/"
                              className="p-[9px] text-[16px] font-normal text-black/70 hover:text-green">
                              Our Team
                            </Link>
                          </li>
                          <li>
                            <ButtonTo
                              text="Login"
                              className="bg-green !rounded-lg text-white px-6 !py-2 !border !shadow-lg flex justify-center items-center gap-3 w-full"
                              onClick={openPopup}
                            />
                          </li>
                        </ul>
                      </Menu.Item>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </nav>
        </div>
      </div>
      <LoginPopup open={open} hidePopup={hidePopup} />
    </header>
  );
}
