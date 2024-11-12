import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
const ProfileCard = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-white max-w-[340px] mt-[200px] flex flex-col w-full shadow-md rounded-lg px-4 py-6">
                <div className="space-y-6 flex items-center justify-center flex-col">
                    <Image src={"/profile.png"} alt="profile-image" width={64} height={64} className="object-cover rounded-full" />
                    <div className="space-y-1 text-center">
                        <h1 className="font-medium text-xl text-neutral-900">Sarah Dole</h1>
                        <p className="text-neutral-600 text-sm">Front End Engineer @ Microsoft</p>
                    </div>
                    <p className="text-neutral-600 text-base text-center">I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.</p>
                </div>
                <div className="mt-10">
                    <div className="space-y-6">
                        <button className="bg-indigo-700 w-full rounded-md text-base font-medium text-white px-4 py-[10px] shadow-lg">Contact Me</button>

                        <div className="flex items-center justify-center gap-6 my-6">
                            <div className="p-2">
                                <IoLogoGithub className="text-indigo-700 text-xl" />
                            </div>
                            <div className="p-2">
                                <IoLogoLinkedin className="text-indigo-700 text-xl" />
                            </div>

                            <div className="p-2">
                                <AiFillInstagram className="text-indigo-700 text-xl" />
                            </div>
                            <div className="p-2">
                                <RiTwitterXFill className="text-indigo-700 text-xl" />
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>

    );
}

export default ProfileCard;