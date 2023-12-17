import React, { useContext, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { FaCartArrowDown } from 'react-icons/fa'

import { FaRegMessage } from 'react-icons/fa6'
import { IoIosSearch } from 'react-icons/io'
import { HiMiniBars3BottomRight } from 'react-icons/hi2'
import { FaRegBell } from 'react-icons/fa6'
import { userContext } from '../../Usercontext.jsx'
import { MyContext } from '../../MyContext.jsx'
function Header() {
    const location = useLocation()
    const [showNav, setShowNav] = useState(false)
    const [showExploreNav, setShowExploreNav] = useState(false)
    const [showMoreNav, setShowMoreNav] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const { logout, currentUser } = useContext(userContext)
    const { setInputFilter } = useContext(MyContext)

    return (
        <header
            className="relative z-30    bg-[#97928f4d] "
            onMouseLeave={() => {
                setShowExploreNav(false), setShowMoreNav(false)
                setShowNav(false)
            }}
            onMouseEnter={() => setShowProfile(false)}
        >
            <div className="min-h-20  relative flex h-full w-full items-start justify-center gap-3 px-3 py-3    lg:items-center lg:px-14 ">
                <div className="div flex max-w-[40%]     flex-col  md:w-full lg:max-w-full lg:flex-row lg:items-center lg:gap-14 ">
                    <div className="logo  text-2xl font-bold ">
                        <Link to={'/'}>Hello</Link>
                    </div>

                    <ul
                        className={`links transition-max-height items-start overflow-hidden duration-300 ${
                            showNav
                                ? 'mt-8 max-h-screen opacity-100 '
                                : 'm-0 max-h-0 opacity-0'
                        } flex w-full flex-col items-start justify-center gap-4 lg:mt-0  lg:max-h-screen lg:flex-row lg:items-center
                        lg:justify-center lg:justify-self-end lg:opacity-100`}
                    >
                        {location.pathname == '/explore/allProducts' && (
                            <li className="relative  hidden items-center text-white lg:flex ">
                                <IoIosSearch className="absolute pl-2 text-2xl" />
                                <input
                                    type="text "
                                    onChange={(e) =>
                                        setInputFilter(e.target.value)
                                    }
                                    placeholder="Search Items, Fashion, Collection and Users"
                                    className="text-md relative  w-screen min-w-full max-w-[350px] rounded-full border-2 bg-transparent p-2 pl-9 text-white outline-none placeholder:text-white "
                                />
                            </li>
                        )}

                        <li className="border-b-2 border-transparent  transition-all lg:py-2  lg:hover:border-black">
                            <NavLink>Home</NavLink>
                        </li>
                        <li className="border-b-2 border-transparent  transition-all lg:py-2  lg:hover:border-black">
                            <div
                                className="flex cursor-pointer  items-center"
                                onClick={() => {
                                    setShowExploreNav(!showExploreNav)
                                    setShowMoreNav(false)
                                }}
                            >
                                Explore <IoIosArrowDown />
                            </div>
                            <ul
                                className={`lg:bg-main_color3 relative flex h-max w-1/2  flex-col gap-2 overflow-hidden text-white  lg:absolute lg:w-[200px] lg:translate-y-[20px] ${
                                    showExploreNav
                                        ? 'opacity-1 max-h-screen'
                                        : 'max-h-0 opacity-0'
                                } transition-all`}
                            >
                                <li className="w-screen border-b bg-[#97928f4d] py-2 pl-5 transition-all hover:bg-[#4e4a4744] hover:pl-5 lg:mt-1">
                                    <NavLink to="explore/allProducts ">
                                        All Products
                                    </NavLink>
                                </li>
                                <li className="w-screen border-b bg-[#97928f4d] py-2 pl-5 transition-all hover:bg-[#4e4a4744] hover:pl-5">
                                    <NavLink>All creator</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="border-b-2 border-transparent  transition-all lg:py-2  lg:hover:border-black">
                            <NavLink className="">Personal Collection</NavLink>
                        </li>
                        {currentUser && (
                            <li className="border-b-2 border-transparent  transition-all lg:py-2  lg:hover:border-black">
                                <NavLink to="/cart" className="w-20 text-xl">
                                    <FaCartArrowDown />
                                </NavLink>
                            </li>
                        )}
                        <li className="border-b-2 border-transparent  transition-all lg:py-2  lg:hover:border-black">
                            <div
                                className="flex cursor-pointer items-center"
                                onClick={() => {
                                    setShowMoreNav(!showMoreNav),
                                        setShowExploreNav(false)
                                }}
                            >
                                More <IoIosArrowDown />
                            </div>
                            <ul
                                className={`lg:bg-main_color3 relative flex h-max w-1/2  flex-col gap-2 overflow-hidden text-white  lg:absolute lg:w-[200px] lg:translate-y-[20px] ${
                                    showMoreNav
                                        ? 'opacity-1 max-h-screen'
                                        : 'max-h-0 opacity-0'
                                } transition-all`}
                            >
                                <li className=" mt-1 w-screen border-b bg-[#97928f4d] py-2   pl-5 transition-all hover:bg-[#4e4a4744] hover:pl-5">
                                    <NavLink to={'/statistic'}>
                                        Statistics
                                    </NavLink>
                                </li>
                                <li
                                    className=" w-screen border-b bg-[#97928f4d] py-2 pl-5 transition-all  hover:bg-[#4e4a4744] hover:pl-5
                                "
                                >
                                    <NavLink className=" ">Page 2</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="relative flex items-center justify-center gap-3 lg:gap-14">
                    {currentUser && (
                        <div
                            className="wallet    flex  items-center  gap-3 text-white
                    lg:flex"
                        >
                            <FaRegBell className="hidden cursor-pointer text-2xl lg:block" />
                            <FaRegMessage className="hidden cursor-pointer text-2xl lg:block" />
                            <NavLink className="cursor-pointer rounded-lg border px-5 py-1">
                                Wallet
                            </NavLink>
                            <span
                                className="flex cursor-pointer items-center gap-3"
                                onClick={() => setShowProfile(!showProfile)}
                            >
                                <IoIosArrowDown />
                                <img
                                    src={currentUser.photoURL}
                                    className="h-10 w-10 rounded-full border-none bg-black"
                                    alt=""
                                />
                                {showProfile && (
                                    <div
                                        className={` ${
                                            !showProfile
                                                ? 'invisible opacity-0'
                                                : 'visible opacity-100'
                                        }  absolute bottom-[-101px] flex   flex-col  transition-all lg:left-20`}
                                        onMouseLeave={() =>
                                            setShowProfile(false)
                                        }
                                    >
                                        <NavLink
                                            to={'/profile'}
                                            className="mb-1 rounded-md bg-[#97928f4d] px-10 py-2  transition-colors  hover:bg-[#97928f8a]"
                                        >
                                            Profile
                                        </NavLink>

                                        <Link
                                            onClick={logout}
                                            className="rounded-md bg-[#97928f4d] px-10 py-2 transition-colors hover:bg-[#97928f8a]"
                                        >
                                            Logout
                                        </Link>
                                    </div>
                                )}
                            </span>
                        </div>
                    )}
                    {!currentUser && (
                        <div className="profile flex  items-center gap-1 text-white lg:gap-3">
                            <NavLink
                                to={'/signup'}
                                className="cursor-pointer rounded-lg border px-5 py-1"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to={'signin'}
                                className="cursor-pointer rounded-lg border px-5 py-1"
                            >
                                SignIn
                            </NavLink>
                        </div>
                    )}
                    <HiMiniBars3BottomRight
                        onClick={() => setShowNav(!showNav)}
                        className="   cursor-pointer text-xl  lg:hidden"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header
