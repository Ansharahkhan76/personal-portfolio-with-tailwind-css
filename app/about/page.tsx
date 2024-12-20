import Link from "next/link";
import Image from "next/image";
import Navbar from "../Navbar/page";

function About() {
    return (
        <>
            <Navbar />
            <div className="h-screen py-10 md:pb-24 md:px-32">
                {/* First section */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* About section */}
                    <div className="md:h-52 border-4 border-black w-full md:w-3/5">
                        <p className="text-2xl text-black text-center font-bold">About</p>
                        <p className="px-5 text-sm pt-4">
                            I&apos;m Ansharah Khan, a passionate Frontend Developer skilled in HTML, CSS, JavaScript, TypeScript, and Next.js.
                            I specialize in creating responsive, user-friendly websites and web applications. My focus is on writing clean,
                            efficient code and turning designs into fully functional, seamless user experiences. I am always eager to learn
                            new technologies of frontend frameworks, particularly Next.js, to build dynamic web applications.
                        </p>
                    </div>

                    {/* Education section */}
                    <div className="h-52 border-4 border-black w-full md:w-[calc(33.3333%+24px)]">
                        <p className="text-2xl text-black text-center font-bold">Education</p>
                        <p className="pt-4 text-center">Matriculation</p>
                        <p className="pt-3 text-center">Intermediate</p>
                        <p className="pt-3 text-center">Bachelor in Arts</p>
                        <p className="pt-3 text-center">AI-GenEng (GIAIC)</p>
                    </div>
                </div>

                {/* Second section */}
                <div className="flex flex-col md:flex-row gap-6 pt-12">
                    {/* Contact section */}
                    <div className="h-52 border-4 border-black w-full md:w-[calc(33.3333%+24px)] text-center">
                        <p className="text-2xl text-black text-center font-bold">Contact</p>
                        <p className="pt-4">Email : <b><Link href="mailto:anshrahkhan29@gmail.com">anshrahkhan29@gmail.com</Link></b></p>
                        <p className="pt-1">Contact : <b><Link href="">03123456789</Link></b></p>
                        <p className="pt-1"><b>Karachi, Pakistan</b></p>
                        <div className="flex justify-evenly pt-3">
                            <Link href="https://github.com/Ansharahkhan76"><Image alt="Github" height={40} width={40} src="/github.png" className="rounded-full" /></Link>
                            <Link href="https://www.linkedin.com/in/ansharah-khan-25a8162b7"><Image alt="LinkedIn" height={40} width={40} src="/linkedin.webp" className="rounded-sm" /></Link>
                            <Link href="mailto:anshrahkhan29@gmail.com"><Image alt="Email" height={40} width={40} src="/email.jpg" className="rounded-full filter grayscale" /></Link>
                            <Link href="https://www.instagram.com/_ansharah.khan_"><Image alt="Instagram" height={40} width={40} src="/insta.png" className="rounded-full filter grayscale" /></Link>
                        </div>
                    </div>

                    {/* Skills section */}
                    <div className="md:h-52 pb-12 border-4 border-black w-full md:w-3/5 px-16">
                        <p className="text-2xl text-black text-center font-bold">Skills</p>
                        <div className="md:justify-between md:flex ">
                            <div className="pt-5">
                                <p>HTML</p>
                                <div className="bg-slate-500 h-3 w-full md:w-52 rounded-full">
                                    <div className="bg-black w-[85%] h-full text-sm flex justify-center items-center text-white font-bold"></div>
                                </div>
                                <p>Tailwind CSS</p>
                                <div className="bg-slate-500 h-3 w-full md:w-52 rounded-full">
                                    <div className="bg-black w-[70%] h-full text-sm flex justify-center items-center text-white font-bold"></div>
                                </div>
                                <p>NextJs</p>
                                <div className="bg-slate-500 h-3 w-full md:w-52 rounded-full">
                                    <div className="bg-black w-[65%] h-full text-sm flex justify-center items-center text-white font-bold"></div>
                                </div>
                            </div>

                            <div className="pt-5">
                                <p>JavaScript</p>
                                <div className="bg-slate-500 h-3 w-full md:w-52 rounded-full">
                                    <div className="bg-black w-[55%] h-full text-sm flex justify-center items-center text-white font-bold"></div>
                                </div>
                                <p>Typescript</p>
                                <div className="bg-slate-500 h-3 w-full md:w-52 rounded-full">
                                    <div className="bg-black w-[60%] h-full text-sm flex justify-center items-center text-white font-bold"></div>
                                </div>
                                <p>Bootstrap-5</p>
                                <div className="bg-slate-500 h-3 w-full md:w-52 rounded-full">
                                    <div className="bg-black w-[70%] h-full text-sm flex justify-center items-center text-white font-bold"></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
