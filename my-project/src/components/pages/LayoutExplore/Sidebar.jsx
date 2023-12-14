import { NavLink } from 'react-router-dom'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'
import { AiFillAppstore } from 'react-icons/ai'
import { MdAttachMoney } from 'react-icons/md'
import { MdCollectionsBookmark } from 'react-icons/md'
import { FaStar } from 'react-icons/fa6'
import { SiAntdesign } from 'react-icons/si'

function Sidebar() {
    const [showStatus, setShowStatus] = useState(false)
    const [showPrice, setShowPrice] = useState(false)
    const [showCollection, setShowCollection] = useState(false)
    const [showBrand, setShowBrand] = useState(false)
    const [showCategory, setShowCategory] = useState(false)
    const [sidebar, setSidebar] = useState(false)

    const statusTabs = [
        {
            text: 'page1',
            path: '',
        },
        {
            text: 'page2',
            path: '',
        },
        {
            text: 'page3',
            path: '',
        },
    ]

    const priceTabs = [
        {
            text: 'page1',
            path: '',
        },
        {
            text: 'page2',
            path: '',
        },
        {
            text: 'page3',
            path: '/',
        },
    ]

    return (
        <div
            className="Sidebar "
            onMouseEnter={() => setSidebar(true)}
            onMouseLeave={() => {
                setSidebar(false), setShowStatus(false), setShowPrice(false)
            }}
        >
            <div
                className={`  ${
                    sidebar ? 'w-[200px]' : ''
                } text-VanDyke container sticky top-0 flex h-full w-20   flex-col gap-4 rounded-lg p-2 shadow-md transition-all    lg:w-[200px]  `}
            >
                <div className="log flex items-center gap-2 text-white ">
                    <HiBars3BottomLeft
                        onClick={() => setSidebar(!sidebar)}
                        className="text-2xl"
                    />
                    <h3
                        className={`text-xl ${
                            sidebar ? 'block' : 'hidden'
                        }  md:block`}
                    >
                        Filter
                    </h3>
                </div>

                <ul className="w-full">
                    <li
                        onClick={() => setShowStatus(!showStatus)}
                        className=" border-b-2 py-4"
                    >
                        <NavLink
                            className={
                                'flex items-center justify-between px-2 text-lg  font-semibold'
                            }
                        >
                            <AiFillAppstore
                                className={`${
                                    sidebar ? 'hidden' : 'block'
                                }  text-2xl lg:hidden`}
                            />

                            <span
                                className={`${
                                    sidebar ? 'block' : 'hidden'
                                }  lg:block`}
                            >
                                Status
                            </span>
                            <IoIosArrowDown className=" transition-all hover:rotate-180" />
                        </NavLink>

                        <ul
                            className={` ${
                                showStatus
                                    ? 'opacity  visible ml-4 max-h-screen '
                                    : 'invisible m-0 max-h-0 opacity-0'
                            }  mt-2    flex-col gap-3 transition-all`}
                        >
                            {statusTabs.map(({ path, text }) => {
                                return (
                                    <li className="transition-all hover:pl-2">
                                        <NavLink to={path}>{text}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>

                    <li
                        onClick={() => setShowPrice(!showPrice)}
                        className=" border-b-2 py-4"
                    >
                        <NavLink
                            className={
                                'flex items-center justify-between px-2 text-lg font-semibold'
                            }
                        >
                            <MdAttachMoney
                                className={`${
                                    sidebar ? 'hidden' : 'block'
                                }  text-2xl lg:hidden`}
                            />

                            <span
                                className={`${
                                    sidebar ? 'block' : 'hidden'
                                }  lg:block`}
                            >
                                Price
                            </span>
                            <IoIosArrowDown className=" transition-all hover:rotate-180" />
                        </NavLink>
                        <ul
                            className={` ${
                                showPrice
                                    ? 'opacity  visible ml-4 max-h-screen '
                                    : 'invisible m-0 max-h-0 opacity-0'
                            }  mt-2    flex-col gap-3 transition-all`}
                        >
                            {priceTabs.map(({ path, text }) => {
                                return (
                                    <li className="transition-all hover:pl-2">
                                        <NavLink to={path}>{text}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>

                    <li
                        onClick={() => setShowCollection(!showCollection)}
                        className=" border-b-2 py-4 "
                    >
                        <NavLink
                            className={
                                'flex items-center justify-between px-2 text-lg font-semibold'
                            }
                        >
                            <MdCollectionsBookmark
                                className={`${
                                    sidebar ? 'hidden' : 'block'
                                }  text-2xl lg:hidden`}
                            />
                            <span
                                className={`${
                                    sidebar ? 'block' : 'hidden'
                                }  lg:block`}
                            >
                                Collections
                            </span>

                            <IoIosArrowDown className=" transition-all hover:rotate-180" />
                        </NavLink>
                        <ul
                            className={` ${
                                showCollection
                                    ? 'opacity  visible ml-4 max-h-screen '
                                    : 'invisible m-0 max-h-0 opacity-0'
                            }  mt-2    flex-col gap-3 transition-all`}
                        >
                            {priceTabs.map(({ path, text }) => {
                                return (
                                    <li className="transition-all hover:pl-2">
                                        <NavLink to={path}>{text}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>

                    <li
                        onClick={() => setShowBrand(!showBrand)}
                        className=" border-b-2 py-4 "
                    >
                        <NavLink
                            className={
                                'flex items-center justify-between px-2 text-lg font-semibold'
                            }
                        >
                            <FaStar
                                className={`${
                                    sidebar ? 'hidden' : 'block'
                                }  text-2xl lg:hidden`}
                            />

                            <span
                                className={`${
                                    sidebar ? 'block' : 'hidden'
                                }  lg:block`}
                            >
                                Brands
                            </span>
                            <IoIosArrowDown className=" transition-all hover:rotate-180" />
                        </NavLink>
                        <ul
                            className={` ${
                                showBrand
                                    ? 'opacity  visible ml-4 max-h-screen '
                                    : 'invisible m-0 max-h-0 opacity-0'
                            }  mt-2    flex-col gap-3 transition-all`}
                        >
                            {priceTabs.map(({ path, text }) => {
                                return (
                                    <li className="transition-all hover:pl-2">
                                        <NavLink to={path}>{text}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>

                    <li
                        onClick={() => setShowCategory(!showCategory)}
                        className=" border-b-2  py-4"
                    >
                        <NavLink
                            className={
                                'flex items-center justify-between px-2 text-lg font-semibold'
                            }
                        >
                            <SiAntdesign
                                className={`${
                                    sidebar ? 'hidden' : 'block'
                                }  text-2xl lg:hidden`}
                            />

                            <span
                                className={`${
                                    sidebar ? 'block' : 'hidden'
                                }  lg:block`}
                            >
                                Categories
                            </span>
                            <IoIosArrowDown className=" transition-all hover:rotate-180" />
                        </NavLink>
                        <ul
                            className={` ${
                                showCategory
                                    ? 'opacity  visible ml-4 max-h-screen '
                                    : 'invisible m-0 max-h-0 opacity-0'
                            }  mt-2    flex-col gap-3 transition-all`}
                        >
                            {priceTabs.map(({ path, text }) => {
                                return (
                                    <li className=" transition-all hover:pl-2">
                                        <NavLink to={path}>{text}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
