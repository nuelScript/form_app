'use client';

import { RiArrowDropDownLine } from 'react-icons/ri'
import { FaUser } from "react-icons/fa";
import AttendanceForm from "../components/AttendanceForm";
import { useCallback, useState } from 'react';


const HomePage = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    }, []);  
    return (
      <div className="w-full h-screen bg-slate-200 flex flex-col justify-between items-center">
        <div className="w-full inline-flex justify-end items-center h-16 bg-white relative">
            <FaUser size={20} className="mr-2 mb-1 inline-block" />
            <h2 className="text-xl font-semibold">Emmanuel</h2>
            <RiArrowDropDownLine className={`inline-block transition cursor-pointer mr-2 ${isOpen ? 'rotate-0' : 'rotate-180'}`} size={30} onClick={toggleOpen} />
        </div>
        {isOpen && (
          <div onClick={toggleOpen} className="absolute right-0 top-16 w-40 h-fit bg-white shadow-md rounded-es-md cursor-pointer hover:bg-slate-400 py-2 pl-3">
            Logout
          </div>
        )}
        <div className="w-[750px] h-fit p-16 bg-white rounded-2xl border-solid border-2 border-gray-500">
          <AttendanceForm />
        </div>
      </div>
    );
}

export default HomePage;