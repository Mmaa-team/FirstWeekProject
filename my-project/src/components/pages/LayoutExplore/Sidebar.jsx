import { NavLink } from 'react-router-dom'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { IoIosArrowDown } from 'react-icons/io'
import { useContext, useState } from 'react'
import { AiFillAppstore } from 'react-icons/ai'
import { MdAttachMoney } from 'react-icons/md'
import { MdCollectionsBookmark } from 'react-icons/md'
import { FaStar } from 'react-icons/fa6'
import { SiAntdesign } from 'react-icons/si'
import { MyContext } from '../../../MyContext.jsx'

function Sidebar() {
    const [openTab, setOpenTab] = useState(null)
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, Infinity])
    const [sidebar, setSidebar] = useState(false)
    const { setHandleFilter, collections, brands, setFilterBrands, categorys } =
        useContext(MyContext)

    const uniqueCategories = new Set()

    categorys.forEach((category) => {
        uniqueCategories.add(category.category)
    })

    const uniqueCategoriesArray = Array.from(uniqueCategories)

    const tabs = [
        {
            icon: <AiFillAppstore className={`text-2xl lg:hidden`} />,
            name: 'Status',
            list: [
                { text: 'All', path: 'All' },
                { text: 'Available', path: 'Available' },
                { text: 'Incoming', path: 'Incoming' },
                { text: 'On Sale', path: 'On Sale' },
            ],
        },
        {
            icon: <MdAttachMoney className={`text-2xl lg:hidden`} />,
            name: 'Price',
            range: [0, 100],
            list: [
                { text: 'Max - Min', range: [Infinity, 0] },
                { text: 'Min - Max', range: [0, Infinity] },
                { text: 'Under $50', range: [0, 50] },
                { text: '$50 - $100', range: [50, 100] },
                { text: '$100 - $200', range: [100, 200] },
                { text: 'Over $200', range: [200, Infinity] },
            ],
        },
        {
            icon: <MdCollectionsBookmark className={`text-2xl lg:hidden`} />,
            name: 'Collections',
            list: collections.map((collection) => ({
                text: collection.name,
                path: `collection/${collection.id}`,
            })),
        },
        {
            icon: <FaStar className={`text-2xl lg:hidden`} />,
            name: 'Brands',
            list: brands.map((brand) => ({
                text: brand.brandName,
            })),
        },
        {
            icon: <SiAntdesign className={`text-2xl lg:hidden`} />,
            name: 'Categories',
            list: uniqueCategoriesArray.map((category) => ({
                text: category,
                category: category,
            })),
        },
    ]

    const handleTabClick = (index) => {
        if (tabs[index].name === 'Price') {
            setOpenTab(index)
        } else {
            setOpenTab(openTab === index ? null : index)
        }
    }

    return (
        <div
            className="Sidebar "
            onMouseEnter={() => setSidebar(true)}
            onMouseLeave={() => {
                setSidebar(false), setOpenTab(null)
            }}
        >
            <div
                className={`  ${
                    sidebar ? 'w-[200px]' : ''
                } container sticky top-0 flex h-full w-20 flex-col   gap-4 rounded-lg p-2 text-VanDyke shadow-md transition-all    lg:w-[200px]  `}
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
                    {tabs.map((tab, index) => (
                        <li
                            key={index}
                            onClick={() => handleTabClick(index)}
                            className=" cursor-pointer border-b-2 py-4"
                        >
                            <div
                                className={
                                    'flex items-center justify-between px-2 text-lg  font-medium'
                                }
                            >
                                {tab.icon}
                                <span
                                    className={`${
                                        sidebar ? 'block' : 'hidden'
                                    }  lg:block`}
                                >
                                    {tab.name}
                                </span>
                                <IoIosArrowDown
                                    className={` transition-all ${
                                        openTab === index ? 'rotate-180' : ''
                                    }  `}
                                />
                            </div>

                            <ul
                                className={` ${
                                    openTab === index
                                        ? 'opacity  visible ml-4 max-h-screen '
                                        : 'invisible m-0 max-h-0 opacity-0'
                                }  mt-2    flex-col gap-3 transition-all`}
                            >
                                {tab.list.map(
                                    (
                                        { path, text, range, id, name },
                                        listItemIndex
                                    ) => (
                                        <li
                                            key={listItemIndex}
                                            className="transition-all hover:pl-2"
                                        >
                                            {tab.name === 'Price' ? (
                                                <div className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id={`range${listItemIndex}`}
                                                        className="h-6 w-4 rounded"
                                                        checked={
                                                            selectedPriceRange[0] ===
                                                                range[0] &&
                                                            selectedPriceRange[1] ===
                                                                range[1]
                                                        }
                                                        onChange={() =>
                                                            setSelectedPriceRange(
                                                                range
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        htmlFor={`range${listItemIndex}`}
                                                        className="ml-2"
                                                    >
                                                        {text}
                                                    </label>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        setHandleFilter(path)
                                                        setFilterBrands(id)
                                                    }}
                                                >
                                                    {text}
                                                </button>
                                            )}
                                        </li>
                                    )
                                )}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar