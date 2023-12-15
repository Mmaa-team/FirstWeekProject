import { Button } from "@material-tailwind/react";
import React from "react";
import Valentino from "../../assets/Brands/Valentino.png"
import Dior from "../../assets/Brands/Dior-Logo.png";
import Chanel from "../../assets/Brands/Channel-Logo.png";
import LV from "../../assets/Brands/LV.png"
import Gucci from "../../assets/Brands/Gucci.png"
import Prada from "../../assets/Brands/Prada.png"
import { GrTransaction } from "react-icons/gr";
import { BsHandbag } from "react-icons/bs";
const brands = [
    {
        pic: Valentino
    },
    {
        pic: Dior
    },
    {
        pic: Chanel
    },
    {
        pic: LV
    },
    {
        pic: Gucci
    },
    {
        pic: Prada
    }
]



const firstButtons = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-around mt-20 ">
            <button className="w-60 h-12  bg-[#382e29] rounded-lg justify-center items-center text-white text-xl font-medium ">Main Collection</button>
            <button className="text-white text-xl font-medium w-60 h-12 px-26 bg-[#70565099] rounded-lg justify-center items-center">Creators Market</button>
        </div>
    )
}

const firtDiv = () => {
    return (
        <div className=" h-screen flex flex-col lg:flex-row gap-35 justify-around items-center w-1/2 ">
            <div>
                <h1 className="text-[#705650db] text-6xl font-extrabold font-['SF Pro Display']">FancyMama</h1>
                <div className="text-start mt-5">
                    <strong>  Elevate Your Style, Effortlessly! </strong>
                    <p className=" text-slate-600 text-opacity-50 text-xl font-medium font-['SF Pro Display']  leading-8">Discover curated luxury, connect with top creators, and shop exclusive fashion effortlessly on FancyMama. Your go-to app for a seamless blend of opulence and simplicity. Redefine your style with us. #FancyMamaStyle✨</p>
                </div>
                <div className="flex justify-center items-center gap-5 mt-3">
                    <button className=" w-40 h-12 bg-gradient-to-bl bg-[#382e29] rounded-lg justify-center items-center gap-2.3 inline-flex text-white text-xl font-medium font-['Poppins']">Explore Now</button>
                    <button className="text-white text-xl font-medium font-['Poppins'] w-28 h-12 px-5 py-2.5 left-[181px] top-0  bg-[#70565099] rounded-lg justify-center items-center gap-2.5 inline-flex">Products</button>
                </div>

                <div className="flex gap-20 mt-8 text-center">
                    <div>
                        <h1 className=" text-[#f1a98a] text-3xl font-bold font-['Poppins']">100+</h1>
                        <p className="text-[#574a44c9] text-xl font-medium font-['Poppins']">Brands</p>
                    </div>
                    <div>
                        <h1 className=" text-[#f1a98a] text-3xl font-bold font-['Poppins']">20k+</h1>
                        <p className="text-[#574a44c9] text-xl font-medium font-['Poppins']">Fashion Designer</p>
                    </div>
                    <div>
                        <h1 className=" text-[#f1a98a] text-3xl font-bold font-['Poppins']">60+</h1>
                        <p className="text-[#574a44c9] text-xl font-medium font-['Poppins']">Fashion Shows</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full  relative mt-[72px] left-40">
                <div className="relative">
                    <img className="lg:w-48 lg:h-36 left-0 top-0 absolute rounded-lg" src="https://i.pinimg.com/564x/4d/89/7c/4d897c7921355a0504c20f20456a1b10.jpg" />
                    <img className="lg:w-48 lg:h-56 left-0 top-[155px] absolute rounded-lg" src="https://i.pinimg.com/564x/d1/ff/d9/d1ffd96e596e61b4a47cc829a84ce92f.jpg" />
                    <img className="lg:w-48 lg:h-28 left-[202px] top-0 absolute rounded-lg" src="https://i.pinimg.com/564x/12/f1/f8/12f1f808b810ee471b347add98699597.jpg" />
                    <img className="lg:w-48 lg:h-56 left-[202px] top-[123px] absolute rounded-lg" src="https://i.pinimg.com/564x/58/d3/0b/58d30bce740f44f0a84020db21a89b76.jpg" />
                    <img className="lg:w-48 lg:h-96 left-[404px] top-[59px] absolute rounded-lg" src="https://i.pinimg.com/564x/6a/9c/2b/6a9c2b83ebb78ce2ad8e32fbf2ca6b62.jpg" />
                </div>

                <div className="lg:w-44 lg:h-40 left-[10px] top-[390px] relative">
                    <img className="w-36 lg:h-36 left-[16px] top-[5px] absolute rounded-lg" src="https://i.pinimg.com/564x/e5/e1/31/e5e131155a46ac558025decc89420427.jpg" />
                </div>

                <div className="lg:w-48 lg:h-40 left-[205px] top-[230px] relative">
                    <img className="lg:w-36 lg:h-36 left-[25px] top-[-20px] absolute rounded-lg" src="https://i.pinimg.com/564x/17/de/b7/17deb79f0b0f7cef01203ce0fc4f686a.jpg" />
                </div>
            </div>
        </div>
    )
}

const BrandsStatic = () => {
    return (
        <div className="flex gap-20 flex-col lg:flex-row opacity-1 items-center justify-between mt-20">
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
        <div className=" flex justify-center items-center flex-col lg:flex-col mt-16">
            <h1 className="text-[#734532] text-3xl font-bold font-['Poppins'] mb-3"> About Us </h1>
            <p className="text-center text-slate-600 text-xl md:text-2xl  font-sans tracking-wide mb-1 w-[800px]"> <strong>FancyMama </strong> {""}Your passport to curated elegance. Explore exclusive collections, connect with creators, and elevate your style effortlessly. Welcome to a world where fashion meets simplicity</p>
            <div className="lg:flex-row-reverse flex flex-col items-center justify-between mt-20">


                <div className="mt-15 items-center relative flex flex-col justify-center">
                    <h1 className=" text-6xl text-white font-sans font-bold mt-2">Fashion That Speaks</h1>
                    <p className="flex-col text-slate-600 mt-5 mb-6 justify-center items-center w-full md:w-96 text-center lg:w-30">
                        Established 2014, <strong>FancyMama</strong> {" "} emerged as a vision to redefine fashion exploration.
                        From the outset, we aimed to curate a unique space where creators and fashion aficionados unite.
                        Join us in celebrating the evolution of style as FancyMama continues to make waves in the world of luxury fashion.
                    </p>
                    <div className="flex item-center mr-20">
                        <Button className="bg-[#733709bc] p-2 text-white font-sans w-16 mb-20 ml-14 justify-center">More</Button>
                    </div >
                </div>
                <div style={{ width: 374, height: 447, right: 0, marginTop: 10, position: 'relative' }}>
                    <img style={{ width: 324, height: 397, left: 0, top: 0, position: 'absolute', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.35)', borderRadius: 10 }} src="https://i.pinimg.com/564x/80/ae/0b/80ae0bc8e4d4d06648199a932ce8707d.jpg" />
                </div>
            </div>
        </div>
    )
}


const AllCollectionTitle = () => {
    return (
        <div>
            <div className="flex justify-center items-center flex-col lg:flex-col mt-12">
                <h1 className="text-[#734532] text-3xl font-bold font-['Poppins'] mb-3"> All Collection</h1>
                <p className="text-center text-slate-600 text-xl md:text-2xl  font-sans tracking-wide mb-1 w-[800px]"> Elevate your daily style with timeless sophistication</p>
            </div>
            <div className="flex flex-col lg:flex-row  justify-between items-center mt-20">
                <div className="flex flex-col justify-center items-center">
                    <GrTransaction className="text-5xl text-[#734532]" />
                    <p className=" text-slate-600 text-xl md:text-xl font-sans tracking-wide mb-1" > Fast And Easy Transactions </p>
                </div>


                <div className="flex flex-col justify-center items-center">
                    <BsHandbag className="text-5xl text-[#734532]" />
                    <p className=" text-slate-600 text-xl md:text-xl  font-sans tracking-wide mb-1 " > Luxury Shopping </p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    
                </div>
            </div>
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
        </div>


    )
}

export default Home
