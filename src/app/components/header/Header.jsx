"use client";
import { useEffect, useState } from "react";
import { ArrowBottomIcon, GlassesIcon, LanguageIcon, RiotIcon } from "../svg/Icons";
import Logo from "../svg/Logo";
const Header = () => {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="">
            <div
                className={`w-full px-9 h-20 flex items-center border-b-2 border-solid justify-between fixed top-0 z-[9999] transition-all  ${
                    offset ? "bg-[#111111] border-[#33333340]" : "bg-transparent border-transparent"
                }`}
            >
                <div className="flex items-center">
                    <div className=" h-20 flex items-center   cursor-pointer group hover:text-red-600 ">
                        <Logo className="text-white group-hover:text-red-600 " />
                        <ArrowBottomIcon className=" w-2 h-[5px] ml-1 text-[#7e7e7e] group-hover:text-red-600" />
                    </div>
                    <div className="ml-6">
                        <RiotIcon className="w-[26px] h-[26px] cursor-pointer " />
                    </div>
                    <ul className="ml-6 h-20 flex items-center">
                        <li className="cursor-pointer h-full text-[#7e7e7e] flex items-center  hover:text-white  text-[13px] font-semibold  ml-5 group">
                            <buttton className="border-none flex items-center px-4 py-[7.5px] group-hover:bg-[#8080804d] group-hover:rounded-md">
                                <h3 className="text-white">WHO WE ARE</h3>
                                <ArrowBottomIcon className="text-inherit w-2.5 h-[5px] ml-1.5 " />
                            </buttton>
                        </li>
                        <li className="cursor-pointer h-full text-[#7e7e7e] flex items-center  hover:text-white  text-[13px] font-semibold  ml-5 group">
                            <buttton className="border-none flex items-center px-4 py-[7.5px] group-hover:bg-[#8080804d] group-hover:rounded-md">
                                <h3 className="text-white">WORK WITH US</h3>
                                <ArrowBottomIcon className="text-inherit w-2.5 h-[5px] ml-1.5 " />
                            </buttton>
                        </li>
                        <li className="cursor-pointer h-full text-[#7e7e7e] flex items-center  hover:text-white  text-[13px] font-semibold  ml-5 group">
                            <buttton className="border-none flex items-center px-4 py-[7.5px] group-hover:bg-[#8080804d] group-hover:rounded-md">
                                <h3 className="text-white">NEWS</h3>
                            </buttton>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <div className="w-8 h-8 hover:bg-[#8080804d] cursor-pointer rounded-md flex items-center justify-center mr-[15px]">
                        <LanguageIcon className="w-[16px] h-[16px]" />
                    </div>
                    <form method="GET" autoComplete="off" className="rounded-md flex items-center justify-center">
                        <label
                            htmlFor="search-bar"
                            className={`border border-solid transition-all rounded-full py-[0.3rem] px-[1.4rem] flex items-center justify-center   ${
                                offset ? "bg-[#2b2a29] border-transparent" : "bg-transparent border-white"
                            }`}
                        >
                            <input
                                id="search-bar"
                                type="text"
                                placeholder="SEARCH"
                                className="text-white font-bold uppercase text-xs h-[25px] w-[109px]  bg-transparent border-none outline-none mr-2.5 placeholder:text-white"
                            />
                            <button className="text-white">
                                <GlassesIcon className="w-5 h-5 fill-white" />
                            </button>
                        </label>
                    </form>
                    <div className="px-2">
                        <button className="uppercase bg-[#d13639] text-xs py-[0.6rem] px-[1.4rem] rounded-full text-black font-semibold">sign in</button>
                    </div>
                </div>
            </div>
            <div className=" max-h-[900px] min-h-[600px] h-heightVideoBanner relative after:content-[''] after:absolute after:top-0 after:w-full after:h-full after:left-0 after:z-10 after:bg-[#05050585]">
                <video src="/videos/background-video.mp4" autoPlay muted loop className=" relative top-0 z-0 w-full h-full object-cover bg-center bg-no-repeat "></video>
            </div>
        </header>
    );
};

export default Header;
