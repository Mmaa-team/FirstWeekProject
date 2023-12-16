import { Button } from '@material-tailwind/react'
import React from 'react'
import Valentino from '../../assets/Brands/Valentino.png'
import Dior from '../../assets/Brands/Dior-Logo.png'
import Chanel from '../../assets/Brands/Channel-Logo.png'
import LV from '../../assets/Brands/LV.png'
import Gucci from '../../assets/Brands/Gucci.png'
import Prada from '../../assets/Brands/Prada.png'
import { GrTransaction } from 'react-icons/gr'
import { BsHandbag } from 'react-icons/bs'
import { PiDressDuotone } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const brands = [
    {
        pic: Valentino,
    },
    {
        pic: Dior,
    },
    {
        pic: Chanel,
    },
    {
        pic: LV,
    },
    {
        pic: Gucci,
    },
    {
        pic: Prada,
    },
]

const firstButtons = () => {
    return (
        <div className="mt-20 flex flex-col items-center justify-around lg:flex-row ">
            <button className="h-12 w-60  items-center justify-center rounded-lg bg-[#382e29] text-xl font-medium text-white ">
                Main Collection
            </button>
            <button className="px-26 h-12 w-60 items-center justify-center rounded-lg bg-[#70565099] text-xl font-medium text-white">
                Creators Market
            </button>
        </div>
    )
}

const firtDiv = () => {
    return (
        <div className=" gap-35 flex h-screen w-1/2 flex-col items-center justify-around lg:flex-row ">
            <div>
                <h1 className="font-['SF Pro Display'] text-6xl font-extrabold text-[#705650db]">
                    FancyMama
                </h1>
                <div className="mt-5 text-start">
                    <strong> Elevate Your Style, Effortlessly! </strong>
                    <p className=" text-slate-600 font-['SF Pro Display'] text-xl font-medium leading-8  text-opacity-50">
                        Discover curated luxury, connect with top creators, and
                        shop exclusive fashion effortlessly on FancyMama. Your
                        go-to app for a seamless blend of opulence and
                        simplicity. Redefine your style with us.
                        #FancyMamaStyle✨
                    </p>
                </div>
                <div className="mt-3 flex items-center justify-center gap-5">
                    <button className=" gap-2.3 inline-flex h-12 w-40 items-center justify-center rounded-lg bg-[#382e29] bg-gradient-to-bl font-['Poppins'] text-xl font-medium text-white">
                        Explore Now
                    </button>
                    <button className="left-[181px] top-0 inline-flex h-12 w-28 items-center justify-center gap-2.5 rounded-lg bg-[#70565099]  px-5 py-2.5 font-['Poppins'] text-xl font-medium text-white">
                        Products
                    </button>
                </div>

                <div className="mt-8 flex gap-20 text-center">
                    <div>
                        <h1 className=" font-['Poppins'] text-3xl font-bold text-[#f1a98a]">
                            100+
                        </h1>
                        <p className="font-['Poppins'] text-xl font-medium text-[#574a44c9]">
                            Brands
                        </p>
                    </div>
                    <div>
                        <h1 className=" font-['Poppins'] text-3xl font-bold text-[#f1a98a]">
                            20k+
                        </h1>
                        <p className="font-['Poppins'] text-xl font-medium text-[#574a44c9]">
                            Fashion Designer
                        </p>
                    </div>
                    <div>
                        <h1 className=" font-['Poppins'] text-3xl font-bold text-[#f1a98a]">
                            60+
                        </h1>
                        <p className="font-['Poppins'] text-xl font-medium text-[#574a44c9]">
                            Fashion Shows
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative left-40  mt-[72px] h-full w-full">
                <div className="relative">
                    <img
                        className="absolute left-0 top-0 rounded-lg lg:h-36 lg:w-48"
                        src="https://i.pinimg.com/564x/4d/89/7c/4d897c7921355a0504c20f20456a1b10.jpg"
                    />
                    <img
                        className="absolute left-0 top-[155px] rounded-lg lg:h-56 lg:w-48"
                        src="https://i.pinimg.com/564x/d1/ff/d9/d1ffd96e596e61b4a47cc829a84ce92f.jpg"
                    />
                    <img
                        className="absolute left-[202px] top-0 rounded-lg lg:h-28 lg:w-48"
                        src="https://i.pinimg.com/564x/12/f1/f8/12f1f808b810ee471b347add98699597.jpg"
                    />
                    <img
                        className="absolute left-[202px] top-[123px] rounded-lg lg:h-56 lg:w-48"
                        src="https://i.pinimg.com/564x/58/d3/0b/58d30bce740f44f0a84020db21a89b76.jpg"
                    />
                    <img
                        className="absolute left-[404px] top-[59px] rounded-lg lg:h-96 lg:w-48"
                        src="https://i.pinimg.com/564x/6a/9c/2b/6a9c2b83ebb78ce2ad8e32fbf2ca6b62.jpg"
                    />
                </div>

                <div className="relative left-[10px] top-[390px] lg:h-40 lg:w-44">
                    <img
                        className="absolute left-[16px] top-[5px] w-36 rounded-lg lg:h-36"
                        src="https://i.pinimg.com/564x/e5/e1/31/e5e131155a46ac558025decc89420427.jpg"
                    />
                </div>

                <div className="relative left-[205px] top-[230px] lg:h-40 lg:w-48">
                    <img
                        className="absolute left-[25px] top-[-20px] rounded-lg lg:h-36 lg:w-36"
                        src="https://i.pinimg.com/564x/17/de/b7/17deb79f0b0f7cef01203ce0fc4f686a.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

const BrandsStatic = () => {
    return (
        <div className="opacity-1 mt-20 flex flex-col items-center justify-between gap-20 lg:flex-row">
            {brands.map((brand, index) => {
                return (
                    <div key={index}>
                        <img src={brand.pic} alt="" className="h-32 w-32" />
                    </div>
                )
            })}
        </div>
    )
}

const AboutUs = () => {
    return (
        <div className=" mt-16 flex flex-col items-center justify-center lg:flex-col">
            <h1 className="mb-3 font-['Poppins'] text-3xl font-bold text-[#734532]">
                {' '}
                About Us{' '}
            </h1>
            <p className="text-slate-600 mb-1 w-[800px] text-center  font-sans text-xl tracking-wide md:text-2xl">
                {' '}
                <strong>FancyMama </strong> {''}Your passport to curated
                elegance. Explore exclusive collections, connect with creators,
                and elevate your style effortlessly. Welcome to a world where
                fashion meets simplicity
            </p>
            <div className="mt-20 flex flex-col items-center justify-between lg:flex-row-reverse">
                <div className="mt-15 relative flex flex-col items-center justify-center">
                    <h1 className=" mt-2 font-sans text-6xl font-bold text-white">
                        Fashion That Speaks
                    </h1>
                    <p className="text-slate-600 lg:w-30 mb-6 mt-5 w-full flex-col items-center justify-center text-center md:w-96">
                        Established 2014, <strong>FancyMama</strong> emerged as
                        a vision to redefine fashion exploration. From the
                        outset, we aimed to curate a unique space where creators
                        and fashion aficionados unite. Join us in celebrating
                        the evolution of style as FancyMama continues to make
                        waves in the world of luxury fashion.
                    </p>
                    <Link className="item-center mr-20 flex" to={'/About'}>
                        <Button className="mb-20 ml-14 w-16 justify-center bg-[#733709bc] p-2 font-sans text-white">
                            More
                        </Button>
                    </Link>
                </div>
                <div
                    style={{
                        width: 374,
                        height: 447,
                        right: 0,
                        marginTop: 10,
                        position: 'relative',
                    }}
                >
                    <img
                        style={{
                            width: 324,
                            height: 397,
                            left: 0,
                            top: 0,
                            position: 'absolute',
                            boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.35)',
                            borderRadius: 10,
                        }}
                        src="https://i.pinimg.com/564x/80/ae/0b/80ae0bc8e4d4d06648199a932ce8707d.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

const AllCollectionTitle = () => {
    return (
        <div>
            <div className="mt-12 flex flex-col items-center justify-center lg:flex-col">
                <h1 className="mb-3 font-['Poppins'] text-3xl font-bold text-[#734532]">
                    {' '}
                    All Collection
                </h1>
                <p className="text-slate-600 mb-1 w-[800px] text-center  font-sans text-xl tracking-wide md:text-2xl">
                    {' '}
                    Elevate your daily style with timeless sophistication
                </p>
            </div>
            <div className="mt-20 flex flex-col  items-center justify-around lg:flex-row">
                <div className="flex flex-col items-center justify-center">
                    <GrTransaction className="text-5xl text-[#734532]" />
                    <p className=" text-slate-600 mb-1 font-sans text-xl tracking-wide md:text-xl">
                        {' '}
                        Fast And Easy Transactions{' '}
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <BsHandbag className="text-5xl text-[#734532]" />
                    <p className=" text-slate-600 mb-1 font-sans  text-xl tracking-wide md:text-xl ">
                        {' '}
                        Luxury Shopping{' '}
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <PiDressDuotone className="text-5xl text-[#734532]" />
                    <p className=" text-slate-600 mb-1 font-sans  text-xl tracking-wide md:text-xl ">
                        {' '}
                        Modern Fashion{' '}
                    </p>
                </div>
            </div>
        </div>
    )
}

const buttons = () => {
    return (
        <div className="mb-12 mt-20 flex flex-col items-center justify-around lg:flex-row ">
            <button className="h-8 w-40  items-center justify-center rounded-lg bg-[#382e29] text-base font-medium text-white ">
                All Collection
            </button>
            <button className="px-26 h-8 w-40 items-center justify-center rounded-lg bg-[#70565099] text-base font-medium text-white">
                Verified Brands
            </button>
            <button className="h-8 w-40  items-center justify-center rounded-lg bg-[#382e29] text-base font-medium text-white ">
                Verified Artists
            </button>
            <button className="px-26 h-8 w-40 items-center justify-center rounded-lg bg-[#70565099] text-base font-medium text-white">
                New Drops
            </button>
            <button className="px-26 h-8 w-40 items-center justify-center rounded-lg bg-[#382e29] text-base font-medium text-white">
                Live Shows
            </button>
        </div>
    )
}

const Home = () => {
    return (
        <div>
            {firstButtons()}
            {firtDiv()}
            {BrandsStatic()}
            {AboutUs()}
            {AllCollectionTitle()}
            {buttons()}
        </div>
    )
}

export default Home
