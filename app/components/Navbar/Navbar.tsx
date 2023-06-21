'use client';

import React, { useCallback, useState } from 'react'
import Link from 'next/link';
import { RiMenu2Fill } from 'react-icons/ri'
import { MdOutlineClose } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { TbDeviceComputerCamera } from 'react-icons/tb'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  const toggleShowMenu = useCallback(() => {
    setShowMenu((currentShowMenus) => !currentShowMenus);
  }, []);

  const toggleShowCourses = useCallback(() => {
    setShowCourses((currentShowCourses) => !currentShowCourses);
  }, []);
  
  return (
    <div className="fixed left-0 top-0 z-10 h-fit bg-white shadow-sm w-fit rounded-ee-lg">
      <div className="border-b py-4 inline-flex flex-col h-full w-fit">
        <div className="inline-flex">
          <RiMenu2Fill
            className="text-gray-500 ml-4 mt-1.5 cursor-pointer hover:text-gray-900 scale-100 hover:scale-110"
            onClick={toggleShowMenu}
            size={20}
          />
          <Link href={"/home"}>
            <h2 className="text-2xl font-bold text-gray-500 hover:text-black ml-4 mr-8">
              Face Recognition App
            </h2>
          </Link>
        </div>
      </div>

      {showMenu && (
        <div className="fixed hidden xl:flex left-0 top-0 z-10 h-screen bg-white shadow-sm w-fit">
          <div className="border-r py-4 flex flex-col h-full">
            <div className="inline-flex justify-between w-full">
              <MdOutlineClose
                onClick={toggleShowMenu}
                size={25}
                className="ml-2 mt-1 mr-4 text-gray-500 cursor-pointer hover:text-gray-900 scale-100 hover:scale-110"
              />
              <Link href={"/home"}>
                <h2 className="text-2xl font-bold text-gray-500 mr-20 hover:text-black">
                  Face Recognition App
                </h2>
              </Link>
            </div>
            <Link href={"/individuals"}>
              <div className="w-full h-fit text-base hover:bg-gray-500 font-medium mt-4 py-4 px-5">
                <AiOutlineUser
                  className="inline-block mr-2 mb-3 text-black"
                  size={30}
                />
                Students
              </div>
            </Link>
            <Link href={""}>
              <div
                className={`w-full h-fit font-medium text-base py-4 px-5 hover:bg-gray-500 ${
                  showCourses ? "bg-gray-500" : null
                }`}
              >
                <TbDeviceComputerCamera
                  className={`inline-block mr-2 mb-3 ${
                    showCourses ? "text-white" : "text-black"
                  }`}
                  size={30}
                />
                <p
                  className={`inline-block ${
                    showCourses ? "text-white" : "text-black"
                  }`}
                >
                  View Attendance
                </p>

                <RiArrowDropDownLine
                  onClick={toggleShowCourses}
                  className={`inline-block hover:text-white transition ${
                    showCourses ? "text-white" : "text-black"
                  } ${showCourses ? "rotate-0" : "rotate-180"}`}
                  size={30}
                />
              </div>
            </Link>
            {showCourses && (
              <div className=" bg-white w-full font-medium hover:bg-gray-300">
                <ul className="w-full">
                  <Link href={"/home"}>
                    <li className="pt-1 hover:text-gray-600 px-10">
                      EIE 412
                    </li>
                  </Link>
                  <Link href={"/home"}>
                    <li className="pt-4 hover:text-gray-600 px-10">
                      EIE 416
                    </li>
                  </Link>
                  <Link href={"/home"}>
                    <li className="pt-4 hover:text-gray-600 px-10">
                      CEN 416
                    </li>
                  </Link>
                  <Link href={"/home"}>
                    <li className="pt-4 hover:text-gray-600 px-10">
                      EIE 413
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
