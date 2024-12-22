import Link from "next/link"
import Navbar from "../Navbar/page"
// ServicesSection.tsx


export default function Projects(){
    return(
        <>
        < Navbar />
        <div className="pb-7">

        {/*  START Projects */}

        <div className=" py-7 ">
        <p className="text-3xl text-center font-semibold border-b-2 border-black py-5">My Latest Projects</p>
        </div>
        <section id="projects" className=" py-12">
<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Project Card */}
    <div className="bg-transparent rounded-lg shadow-lg overflow-hidden">
      <img
        src="/initiative.png"
        alt="Responsive initiative web"
        className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"/>
      <div className="p-6">
        <h4 className="text-xl font-semibold text-black mb-2">
          <a
            href="https://github.com/Ansharahkhan76/responsive-initiative-web"
            target="_blank"
            rel="noopener noreferrer" >
           Governer Initiative Web
          </a>
        </h4>
        <p className="text-black mb-4">
        "I&apos;ve built a responsive Governor&apos;s Initiative website using Next.js and Tailwind CSS, offering seamless performance across devices."
        </p>
        <a
          href="https://responsive-initiative-web.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-white font-semibold py-3 px-4 bg-black"
        >
          Live Demo
        </a>
      </div>
    </div>

    {/* Repeat for other projects */}
    <div className="bg-transparent rounded-lg shadow-lg overflow-hidden">
      <img
        src="/ageCalculater.png"
        alt="Age Calculater"
        className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
      />
      <div className="p-6">
        <h4 className="text-xl font-semibold text-black mb-2">
          <a
            href="https://github.com/Ansharahkhan76/Age-Calculater-using-HTML-CSS-JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            Age Calculater
          </a>
        </h4>
        <p className="text-black-400 mb-4">
        "I&apos;ve built a responsive Age Calculator using HTML, JavaScript and custom CSS with fully responsive, ensuring seamless functionality across devices."
        </p>
        <a
          href="https://ansharahkhan76.github.io/Age-Calculater-using-HTML-CSS-JavaScript/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-white font-semibold py-3 px-4 bg-black"
        >
          Live Demo
        </a>
      </div>
    </div>

    {/* Add other project cards here similarly */}

    <div className="bg-transparent rounded-lg shadow-lg overflow-hidden">
        <img
          src="/portfolio.png"
          alt="Persnol portfolio"
          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
        />
        <div className="p-6">
          <h4 className="text-xl font-semibold text-black mb-2">
            <a
              href="https://github.com/Ansharahkhan76/Ansharahkhan-PortFolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Persnol Portfolio
            </a>
          </h4>
          <p className="text-black mb-4">
          "I&apos;ve created a personal portfolio website using custom CSS, showcasing my skills, projects,
           and achievements in a clean and professional layout."
          </p>
          <a
            href="https://ansharahkhan76.github.io/Ansharahkhan-PortFolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white font-semibold py-3 px-4 bg-black">
            Live Demo
          </a>
        </div>
      </div>



  </div>
</div>
</section>



{/* Second row cards start */}


<section id="projects" className=" py-12">

  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project Card */}
      <div className="bg-transparent rounded-lg shadow-lg overflow-hidden">
        <img
          src="/landingPage.png"
          alt="Landing Page"
          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"/>
        <div className="p-6">
          <h4 className="text-xl font-semibold text-black mb-2">
            <a
              href="https://github.com/Ansharahkhan76/LandingPage-CodSoft-internship-task/"
              target="_blank"
              rel="noopener noreferrer" >
              Landing Page 
            </a>
          </h4>
          <p className="text-black mb-4">
                "I&apos;ve designed a modern and responsive landing page with custom CSS, offering a clean,
                 engaging, and user-friendly experience."
          </p>
          <a
            href="https://ansharahkhan76.github.io/LandingPage-CodSoft-internship-task/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white font-semibold py-3 px-4 bg-black"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Repeat for other projects */}
      <div className="bg-transparent rounded-lg shadow-lg overflow-hidden">
        <img
          src="/E-res.png"
          alt="E-Commerce Website"
          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
        />
        <div className="p-6">
          <h4 className="text-xl font-semibold text-black mb-2">
            <a
              href="https://github.com/Ansharahkhan76/E-shop-res"
              target="_blank"
              rel="noopener noreferrer"
            >
              E-Commerce Responsive Website
            </a>
          </h4>
          <p className="text-black mb-4">
            I&apos;ve built an E-Commerce website using HTML, CSS, and JavaScript. It allows users to
            browse products and includes basic functionality for an online store.
          </p>
          <a
            href="https://ansharahkhan76.github.io/E-shop-res/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white font-semibold py-3 px-4 bg-black"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Add other project cards here similarly */}
      <div className="bg-trasnparent rounded-lg shadow-lg overflow-hidden">
      <img
        src="/resumeB.png"
        alt="Tic Tac Toe Game"
        className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
      />
      <div className="p-6">
        <h4 className="text-xl font-semibold text-black mb-2">
          <a
            href="https://github.com/Ansharahkhan76/hackathon-milestone-4-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Editable Resume Builder
          </a>
        </h4>
        <p className="text-black mb-4">
        "I&apos;ve developed an editable Resume Builder using custom CSS, offering a seamless and user-friendly experience for creating and updating resumes."
        </p>
        <a
          href="https://hackathon-editable-resume-builder.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-white font-semibold py-3 px-4 bg-black">
          Live Demo
        </a>
      </div>
    </div>
    </div>
  </div>
</section>

    <Link target="_blank" href="https://github.com/Ansharahkhan76"><center>
   <button className="py-4 px-6 rounded-xl bg-black text-white font-semibold">View More Projects on Github</button>
   </center></Link>

            </div>
        </>
    )
}