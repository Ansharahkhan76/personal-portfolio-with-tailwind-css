import Navbar from "../Navbar/page";
import { Code, Figma, Frame, HeartHandshake, Ratio, Settings2 } from "lucide-react";



export default function Services() {
    return(
        <>
        <Navbar />
{/* Skills section */}

<section id="services" className=" py-12">
      <h2 className="text-4xl font-bold border-b-2 border-black text-center text-black mb-8">
        My <span className="text-gray-800">Services</span>
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Item 1 */}
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-all">
            <div className="text-4xl text-indigo-400 mb-4">
            <center> <div className="justify-center text-white py-3"><Frame size={44} strokeWidth={1.25} /></div></center>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Web Design</h3>
            <p className="text-gray-400">Creating visually appealing websites with a focus on user experience.</p>
          </div>

          {/* Service Item 2 */}
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-all">
            <div className="text-4xl text-indigo-400 mb-4">
            <center> <div className="justify-center text-white py-3"><Code size={44} strokeWidth={1.25} /></div></center>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
            <p className="text-gray-400">Building efficient and functional web applications using modern technologies.</p>
          </div>

          {/* Service Item 3 */}
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-all">
            <div className="text-4xl text-indigo-400 mb-4">
            <center> <div className="justify-center text-white py-3"><Settings2 size={44} strokeWidth={1.25} /></div></center>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Graphic Design</h3>
            <p className="text-gray-400">Designing engaging visuals, logos, and branding elements to enhance your business.</p>
          </div>

          {/* Service Item 4 */}
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-all">
            <div className="text-4xl text-indigo-400 mb-4">
            <center> <div className="justify-center text-white py-3"><Ratio size={44} strokeWidth={1.25} /></div></center>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Responsive Design</h3>
            <p className="text-gray-400">Ensuring a smooth and optimized experience across all devices and screen sizes.</p>
          </div>

          {/* Service Item 5 */}
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-all">
            <div className="text-4xl text-indigo-400 mb-4">
            <center> <div className="justify-center text-white py-3"><Figma size={44} strokeWidth={1.25} /></div></center>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">UX/UI</h3>
            <p className="text-gray-400">Focusing on user-centered design to deliver intuitive and seamless interfaces.</p>
          </div>

          {/* Service Item 6 */}
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-all">
            <div className="text-4xl text-indigo-400 mb-4">
            <center> <div className="justify-center text-white py-3"><HeartHandshake size={44} strokeWidth={1.25} /></div></center>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Support</h3>
            <p className="text-gray-400">Providing ongoing support to ensure the functionality and success of your website.</p>
          </div>
        </div>
      </div>
    </section>

    {/* skills sec end */}
        </>
    )
}