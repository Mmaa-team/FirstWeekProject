import React from 'react'
import { FaPen } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'

const Profile = () => {
    return (
        <>
            <div className="h-screen min-h-full w-full  ">
                <div className=" flex w-full flex-col items-center relative justify-center p-10">
                    <div className="relative">
                        <img
                            className="bg-container  h-[355px] w-[1040px] rounded-[5px] bg-black bg-opacity-50 brightness-50"
                            src="https://s3-alpha-sig.figma.com/img/6262/ff08/c2cdd4f8b04caadb548542f98fd4c2f2?Expires=1703462400&Signature=b1CIpZokYicUNZaE0sb5b1olPuVE31PHgUGGTRSk9rxu9fymSlvlPQsgpa-yBFVQcfJelRF5aSPIcI3KeVCAMckiK4KdI5dFtI~qV9Rmh~XJJ0y82x4qFENGmCE7uRC66b4u6KpF~AhtGmBQEO3dRWnRtVb6KaEE20DWSKzY-EdgM8uRKNMRCTTZ8IBSFTwiUKnj~sbf3lhyF8YpyqWMHfYSogY36rBqa2xJUVG5eTEqLQ-HlWXD-Y1rt3Q~9m0--KlCfvzccvQArU13h8nUd0x7g3wI~2d9LbPbdFUesfHeN-eIMctEFsxXSxlDB~xfDTYrObRw9v3BClNFAnouog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        />
                        <div className=" absolute bottom-2  right-[10px] flex h-10  w-10 cursor-pointer items-center  justify-center rounded-[150px] bg-indigo-500">
                            <FaPen className="text-md  absolute  bg-indigo-500 text-white " />
                        </div>
                    </div>

                    <div className="relative top-[-70px] flex items-center justify-center">
                        <img
                            className="  bottom-[-40px] h-[120px] w-[120px] rounded-full border-2 border-white"
                            src="https://s3-alpha-sig.figma.com/img/9f8e/b981/09649af00288910c8fa498e8c0b7f1e5?Expires=1703462400&Signature=Khr6ZqrA4YbygfFts47scMEctlkYLgl04Zpxn13YRnf0MO8e98-vITgHAghYj-tnhYFczLKPZ41mFBdKQa3aINOgrU16ivWlRcw3K76rmlHuiPYPzWuD2y~Nj8jUdtqNMWx~CxiAy4SDYIhrxYqxgeoV68Q-NMHmB6O4kOOFdGgo33fx~yIHk~ikUTjHKbiTuI6867CnrN-I9ug5MESGKaKJ3xCl4RZL3~OOt6v~bQ31NMeauzFyqQLxO8XxCVESgBSwQaPEF2r7cfIbQ-xH8pG0tOqCEVHwjdWawWjvvBaMo3RhakM~VIG5JWWcGmg5IUe8b-0LuEc5vnMFjxf28Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        />

                        <div className=" absolute bottom-0 right-0 flex h-10  w-10 cursor-pointer items-center  justify-center rounded-[150px] bg-indigo-500">
                            <FaCamera className="text-md    bg-indigo-500 text-white " />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
