import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { FaCartArrowDown } from 'react-icons/fa'

import { FaRegMessage } from 'react-icons/fa6'
import { IoIosSearch } from 'react-icons/io'
import { HiMiniBars3BottomRight } from 'react-icons/hi2'
import { FaRegBell } from 'react-icons/fa6'

function Header() {
    const [showNav, setShowNav] = useState(false)
    const [showExploreNav, setShowExploreNav] = useState(false)
    const [showMoreNav, setShowMoreNav] = useState(false)

    return (
        <header
            className="max-w-screen relative z-30 w-full  bg-[#97928f4d] "
            onMouseLeave={() => {
                setShowExploreNav(false), setShowMoreNav(false)
            }}
        >
            <div className="min-h-20 container relative flex h-full w-full min-w-full items-start gap-3 px-8 py-3 lg:items-center ">
                <div className="div flex w-11/12 flex-col  lg:w-full lg:flex-row lg:items-center lg:gap-14 ">
                    <div className="logo  text-2xl font-bold ">
                        <h1>Hello</h1>
                    </div>

                    <ul
                        className={`links transition-max-height items-start overflow-hidden duration-300 ${
                            showNav
                                ? 'opacity- mt-8 max-h-screen '
                                : 'm-0 max-h-0 opacity-0'
                        } flex flex-col items-start justify-center gap-4 sm:w-full md:w-full lg:mt-0 lg:flex lg:w-full lg:flex-row
  lg:items-center lg:justify-center lg:justify-self-end`}
                    >
                        <li className="relative  hidden items-center text-white lg:flex ">
                            <IoIosSearch className="absolute pl-2 text-2xl" />
                            <input
                                type="text "
                                placeholder="Search Items, Fashion, Collection and Users"
                                className="text-md relative  w-screen min-w-full max-w-[350px] rounded-full border-2 bg-transparent p-2 pl-9 text-white outline-none placeholder:text-white "
                            />
                        </li>

                        <li>
                            <NavLink>Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex items-center"
                                onClick={() => {
                                    setShowExploreNav(!showExploreNav)
                                    setShowMoreNav(false)
                                }}
                            >
                                Explore <IoIosArrowDown />
                            </NavLink>
                            <ul
                                className={`lg:bg-main_color3 relative flex h-max w-1/2  flex-col gap-3 overflow-hidden text-white  lg:absolute lg:w-[200px] lg:translate-y-[20px] ${
                                    showExploreNav
                                        ? 'opacity-1 max-h-screen'
                                        : 'max-h-0 opacity-0'
                                } transition-all`}
                            >
                                <li className="w-screen border-b py-2 pl-5 transition-all hover:pl-5">
                                    <NavLink to="explore/allProducts">
                                        All Products
                                    </NavLink>
                                </li>
                                <li className="w-screen border-b py-2 pl-5 transition-all hover:pl-5">
                                    <NavLink>All creator</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink>Personal Collection</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" className="w-20 text-xl">
                                <FaCartArrowDown />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex items-center"
                                onClick={() => {
                                    setShowMoreNav(!showMoreNav),
                                        setShowExploreNav(false)
                                }}
                            >
                                More <IoIosArrowDown />
                            </NavLink>
                            <ul
                                className={`lg:bg-main_color3 relative flex h-max w-1/2  flex-col gap-3 overflow-hidden text-white  lg:absolute lg:w-[200px] lg:translate-y-[20px] ${
                                    showMoreNav
                                        ? 'opacity-1 max-h-screen'
                                        : 'max-h-0 opacity-0'
                                } transition-all`}
                            >
                                <li className=" w-screen border-b py-2 pl-5 transition-all hover:pl-5 ">
                                    <NavLink to={'/statistic'}>
                                        Statistics
                                    </NavLink>
                                </li>
                                <li
                                    className=" w-screen border-b py-2 pl-5 transition-all hover:pl-5
                                "
                                >
                                    <NavLink className=" ">Page 2</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-14">
                    <div
                        className="wallet hidden     items-center  gap-3 text-white
                    lg:flex"
                    >
                        <FaRegBell className="cursor-pointer text-2xl" />
                        <FaRegMessage className="cursor-pointer text-xl" />
                        <NavLink className="cursor-pointer rounded-lg border px-5 py-1">
                            Wallet
                        </NavLink>
                        <span className="flex cursor-pointer items-center gap-3">
                            <IoIosArrowDown />
                            <img
                                src=""
                                className="h-9 w-9 rounded-full border-none bg-black"
                                alt=""
                            />
                        </span>
                    </div>

                    <HiMiniBars3BottomRight
                        onClick={() => setShowNav(!showNav)}
                        className="   cursor-pointer    text-xl"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header
