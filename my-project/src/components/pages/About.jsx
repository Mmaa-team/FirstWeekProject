import React from "react";
import { Button } from "@material-tailwind/react";
import Bohmid from "../../assets/AdminsPic/Bohmid.jpg"
// import ElCoach from "../../assets/AdminsPic/ElCoach.jpg"
const teamMembers = [{
    name: "Maamoun Bouaouina",
    image: "",
    role: "Co Founder"
}, {
    name: "haddada",
    image: Bohmid,
    role: "Co Founder"
},
{
    name: "haddada",
    image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt12dbddde5342ce4c/648866ff21a8556da61fa167/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60",
    role: "Co Founder"
},
{
    name: "haddada",
    image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt12dbddde5342ce4c/648866ff21a8556da61fa167/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60",
    role: "Co Founder"
}
]


function firstDesc() {

    return (
        <>
            <div>
                <div className="max-w-md mx-auto flex justify-center items-center flex-col">
                    <h3 className="text-center font-extrabold no-underline md:underline">About us </h3>
                    <h1 className="text-center text-6xl text-white font-sans font-bold">Who we are.</h1>
                    <p className="flex-col justify-center items-center text-slate-600 m-6 text-center ">
                        <strong>
                            FancyMama
                        </strong>
                        {"  "}
                        is your go-to destination for all things fashion and luxury.
                        We're a curated platform that brings together talented creators and fashion enthusiasts.
                        Whether you're discovering the latest trends or showcasing your creations,
                        <strong>FancyMama</strong>
                        {" "}
                        is where style meets innovation. Join us in celebrating the diverse world of
                        fashion and indulge
                        in a unique shopping experience that reflects your individuality
                    </p>
                    <div className="flex justify-center items-center">
                        <Button className="bg-[#733709bc] p-2 text-white font-sans w-16">More</Button>
                    </div>
                </div>


                <div className="lg:flex-row flex flex-col items-center justify-between">
                    <div className="mt-20 relative flex flex-col">
                        <h3 className=" font-extrabold no-underline md:underline">Since 2014</h3>
                        <h1 className=" text-6xl text-white font-sans font-bold mt-2">What we do</h1>
                        <p className="flex-col text-slate-600 mt-2 mb-6 justify-center items-center w-full md:w-96 text-center">
                            At {" "} <strong>FancyMama</strong>, we curate a world of opulence where creators unveil their bespoke fashion and luxury collections.
                            Immerse yourself in an exclusive realm, discovering unique pieces, and effortlessly connecting with your preferred designers and brands.
                            With FancyMama, your journey transcends conventional shopping;
                            it's a personalized experience, a celebration of individuality,and a seamless blend of style and sophistication.
                            Indulge in the extraordinary {" "} <strong>FancyMama</strong>, where luxury meets your unique fashion narrative.
                        </p>
                        <div className="flex ml-24">
                            <Button className="bg-[#733709bc] p-2 text-white font-sans w-16 mb-20 ml-14">More</Button>

                        </div >
                    </div>
                    <div style={{ width: 374, height: 447, right: 0, top: 10, position: 'relative' }}>
                        <img style={{ width: 324, height: 397, left: 50, top: 50, position: 'absolute', borderRadius: 10 }} src="https://thelastminutebride.com/cdn/shop/products/TheLastMinuteBrideRegalBridalGown_offtheshoulderruchedflatteringweddingdresswithslitcapsleevefrontview.jpg?v=1608081670" />
                        <img style={{ width: 324, height: 397, left: 25, top: 25, position: 'absolute', boxShadow: '0px 0px 34px rgba(0, 0, 0, 0.35)', borderRadius: 10 }} src="https://www.ever-pretty.com/cdn/shop/products/EP00667GY-R8_57094dbe-7f7b-416c-a72e-c822f7a35b99_900x.jpg?v=1679018496" />
                        <img style={{ width: 324, height: 397, left: 0, top: 0, position: 'absolute', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.35)', borderRadius: 10 }} src="https://www.ever-pretty.co.uk/cdn/shop/products/EO01751DG-R4.jpg?v=1678788427" />
                    </div>
                </div>



                <div className="lg:flex-row-reverse flex flex-col items-center justify-between">
                    <div className="mt-20 relative flex flex-col justify-center">
                        <h1 className=" text-6xl text-white font-sans font-bold mt-2">When We Started</h1>
                        <p className="flex-col text-slate-600 mt-5 mb-6 justify-center items-center w-full md:w-96 text-center">
                            Established 2014, <strong>FancyMama</strong> {" "} emerged as a vision to redefine fashion exploration.
                            From the outset, we aimed to curate a unique space where creators and fashion aficionados unite.
                            Join us in celebrating the evolution of style as FancyMama continues to make waves in the world of luxury fashion.
                        </p>
                        <div className="flex ml-24">
                            <Button className="bg-[#733709bc] p-2 text-white font-sans w-16 mb-20 ml-14 justify-center">More</Button>
                        </div >
                    </div>
                    <div style={{ width: 374, height: 447, right: 0, top: 10, position: 'relative' }}>
                        <img style={{ width: 324, height: 397, left: 50, top: 50, position: 'absolute', borderRadius: 10 }} src="https://mygemma.com/cdn/shop/articles/mygemma-WPD-Top-Blog-Image-49.png?v=1695913199" />
                        <img style={{ width: 324, height: 397, left: 25, top: 25, position: 'absolute', boxShadow: '0px 0px 34px rgba(0, 0, 0, 0.35)', borderRadius: 10 }} src="https://pianoluigi.com/cdn/shop/files/versace-la-medusa-bag-women-piano-luigi-1_800x.jpg?v=1691740345" />
                        <img style={{ width: 324, height: 397, left: 0, top: 0, position: 'absolute', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.35)', borderRadius: 10 }} src="https://www.dior.com/couture/ecommerce/media/catalog/product/N/L/1666251919_M0446CRIW_M928_E01_GH.jpg" />
                    </div>
                </div>

                <div className="relative">
                    <div className="text-center text-white text-4xl md:text-6xl font-extrabold font-sans leading-10 md:leading-14 tracking-wide">Our Makers</div>
                    <div className="text-center text-slate-600 text-opacity-50 text-lg md:text-xl font-medium font-sans leading-7 md:leading-9">Our community at FancyMama is a diverse tapestry of trendsetters and fashion enthusiasts. Whether you're a creator shaping the scene or a discerning shopper, our members form the core of a shared love for style and luxury. Join us in the celebration of individuality and expression at FancyMama, where every member contributes to the vibrant world of fashion.</div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 mt-4 md:mt-8 lg:mt-12">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="relative">
                                <img className="w-full h-72 md:h-96 rounded mb-2" src={member.image} alt={member.name} />
                                <div className="text-center text-slate-600 text-xl md:text-2xl font-semibold font-sans tracking-wide mb-1">{member.name}</div>
                                <div className="w-32 h-9 p-2.5 bg-white bg-opacity-20 rounded-full justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-center text-slate-600 text-base md:text-lg font-medium font-sans tracking-tight">{member.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



            </div>
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