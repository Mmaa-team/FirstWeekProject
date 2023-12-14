import React from "react";
import { Button, Card } from "@material-tailwind/react";



function firstDesc() {

    return (
        <>
            <div className="max-w-md mx-auto mt-20">
                <h3 className="flex justify-center items-center font-semibold no-underline md:underline">About us </h3>
                <h1 className="flex justify-center items-center text-6xl text-white font-sans font-bold">Who we are.</h1>
                <p className="flex justify-center items-center text-slate-600 m-6">Hello everyone we are FancyMama,Hello everyone we are FancyMama ,Hello everyone we are FancyMama
                    ,Hello everyone we are FancyMama ,Hello everyone we are FancyMama ,Hello everyone we are FancyMama
                </p>
                <div className="flex justify-center items-center">
                    <Button className="bg-[#733709bc] p-2 text-white font-sans w-16">More</Button>

                </div>
            </div>
            <div className="mt-20">
                <h3 className="flex font-semibold no-underline md:underline">Since 2014</h3>
                <h1 className="flex text-6xl text-white font-sans font-bold mt-2">What we do</h1>


                {/* <div className="r-0">

                    <div className="absolute">
                        <img
                            src="https://thelastminutebride.com/cdn/shop/products/TheLastMinuteBrideRegalBridalGown_offtheshoulderruchedflatteringweddingdresswithslitcapsleevefrontview.jpg?v=1608081670"
                            alt="card-image"
                            className="abolute h-[300px] "
                        />
                    </div>
                    <div className="absolute">
                        <img
                            src="https://www.ever-pretty.co.uk/cdn/shop/products/EO01751DG-R4.jpg?v=1678788427"
                            alt="card-image"
                            className="abolute h-[300px] "
                        />
                    </div>
                    <div className="absolute">
                        <img
                            src="https://www.ever-pretty.com/cdn/shop/products/EP00667GY-R8_57094dbe-7f7b-416c-a72e-c822f7a35b99_900x.jpg?v=1679018496"
                            alt="card-image"
                            className="abolute h-[300px] "
                        />
                    </div>
                </div> */}


                <p className="flex text-slate-600 mt-2 mb-6 justify-center items-center w-96">Hello everyone we are FancyMama,Hello everyone we are FancyMama ,Hello everyone we are FancyMama
                    ,Hello everyone we are FancyMama ,Hello everyone we are FancyMama ,Hello everyone we are FancyMama </p>
                <div className="flex ml-24">
                    <Button className="bg-[#733709bc] p-2 text-white font-sans w-16 mb-20">More</Button>

                </div>
            </div >
        </>
    )
}







const About = () => {
    return (
        <>
            <div className="px-16">
                {firstDesc()}
            </div>
        </>
    )
}

export default About