"use client"

import Link from "next/link";
import Image from "next/image";

function HeroPage(){
    const handleDownloadCV = () => {

        const filePath = "/cv.pdf";
        const link = document.createElement("a");
        link.href = filePath;
        link.download = "AnsharahCV.pdf";
        link.click();
      };
    return(
        <>
        <div className="main flex py-12 md:px-28 px-5">
            {/* Left section */}
        <div className="left md:w-3/4 md:h-screen md:pt-24">
                    <p className="font-semibold">Hey I&apos;m</p>
                    <p className="font-extrabold text-6xl pt-3">Ansharah Khan</p>
                    <p className="w-8/12 pt-4 font-semibold">I&apos;m a Passionate <b> Frontend Developer </b>with expertise in HTML, CSS, TypeScript, and JavaScript. Skilled in building dynamic and responsive web applications, currently enhancing skills with NextJs/ReactJs. Dedicated to crafting clean, efficient code and seamless user experiences.</p>
                    <div className="flex justify-between w-64 pt-6">
                        <Link href="https://github.com/Ansharahkhan76"><Image
                        alt="Github"
                        height={40}
                        width={40}
                        src="/github.png"
                        className="rounded-full">
                        </Image></Link>

                        <Link href="https://www.linkedin.com/in/ansharah-khan-25a8162b7"><Image
                        alt="LinkedIn"
                        height={40}
                        width={40}
                        src="/linkedin.webp"
                        className="rounded-sm ">
                        </Image></Link>

                        <Link href="mailto:anshrahkhan29@gmail.com"> <Image
                        alt="Email"
                        height={40}
                        width={40}
                        src="/email.jpg"
                        className="rounded-full filter grayscale">
                        </Image></Link>

                        <Link href="https://www.instagram.com/_ansharah.khan_"><Image
                        alt="Instagram"
                        height={40}
                        width={40}
                        src="/insta.png"
                        className="rounded-full filter grayscale">
                        </Image></Link>
                        </div>
                        <div className="pt-6">
                        <button onClick={handleDownloadCV}
                              className="px-4 py-2 bg-black hover:border-2 hover:border-black hover:bg-white hover:text-black text-white rounded-lg ">
                                 Download CV
                                 </button></div>
                   
        </div>
            {/* Right Section My Image*/}
            <div className="right pt-12">
                <Image
                src="/Ansharah.jpg"
                alt="Ansharah"
                height={400}
                width={400}
                className="rounded-full w-300 h-300 hidden transition-transform duration-300 transform hover:scale-105 sm:block">           
                </Image>
            </div>
        </div>
        </>

    )
}

export default HeroPage;