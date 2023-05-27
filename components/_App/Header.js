import { Transition, Menu } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { HiOutlineChevronDown, HiOutlineMenu } from "react-icons/hi";
import ButtonTo from "../Button";
import LoginPopup from "./loginpopup";

export default function Header() {
  const [open, setOpen] = useState(false);
  const openPopup = () => {
    setOpen(true);
  };
  const hidePopup = () => {
    setOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className={`container mx-auto xl:px-0 px-6`}>
        <div className="flex items-center justify-between min-h-[70px]">
          <img src="images/home/logo.png" className="w-12 shrink-0" />
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
                    <Link href="/">
                      <a className="!py-2 px-6 hover:!bg-green/10 text-[14px] block text-black/80 cursor-pointer">
                        Our Team
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ButtonTo
                  text="Login"
                  className="bg-green !rounded-lg text-white px-6 !py-2 !border !shadow-lg flex items-center gap-3"
                  onClick={openPopup}
                />
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
                leaveTo="opacity-0 scale-95"
              >
                <Menu.Items className="absolute top-20 max-w-[92%] mx-auto z-2xlfull inset-x-0 py-[0.5rem] transition transform origin-top-right xxl:hidden">
                  <div className="rounded-[8px] !shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="px-12 py-10 space-y-10">
                      <Menu.Item>
                        <ul className="flex flex-col gap-7">
                          <li>
                            <Link
                              href="/about-us"
                              className="p-[9px] text-[16px] font-normal text-black/70 hover:text-green"
                            >
                              About us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/"
                              className="p-[9px] text-[16px] font-normal text-black/70 hover:text-green"
                            >
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
