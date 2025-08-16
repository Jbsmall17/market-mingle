import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Newletter from "@/components/Newletter";
import image from "@/components/img/about1.png";
import check from "@/components/img/check.png";
import about from "@/components/img/about2.png";
import logo1 from "@/components/img/logo1.png";
import logo2 from "@/components/img/logo2.png";


export default function AboutPage() {
  return (
    <div>
      <Header />
        <main className="container mx-auto p-4 mt-10">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-5">About Us</h1>
                <h2 className="text-gray-400 text-2xl  font-bold">Home / About Us</h2>
            </div>
            <div className="mt-10 flex flex-col md:flex-row gap-5 justify-around p-10">
                <div>
                    <img src={image.src} alt="About Us" width={500}
                  height={500} />
                </div>
                <div className=" md:w-90">
                    <h1 className="text-2xl  mb-10">About Us</h1>
                    <h1 className="text-3xl  font-bold mb-10">Your Trusted Partner in <span className="text-green-800"> <br/> Fresh Grocery Delivery</span></h1>
                    <p className="text-gray-700 mb-10">Making grocery shopping easier, fresher, and better, count on us for trusted brands, exceptional service, and unbeatable quality _ every time you shop.</p>
                    <div className="mt-10 ">
                        <div className="flex items-center mb-4">
                            <img src={check.src} alt="Check" className="w-6 h-6 mr-5" />
                            <span>Eco-friendly and Sustainable Pratices</span>
                        </div>
                         <div className="flex items-center mb-4">
                            <img src={check.src} alt="Check" className="w-6 h-6 mr-5" />
                            <span>Fresh and High-Quality Groceries</span>
                        </div>
                         <div className="flex items-center mb-4">
                            <img src={check.src} alt="Check" className="w-6 h-6 mr-5" />
                            <span>Convenient and Reliable delivery</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-10">
                <img src={about.src} alt="About Us" className="w-full h-auto" />
                 
            </div>
            <div className="mt-10 flex flex-col md:flex-row gap-5 justify-around p-10">
                <div className="md:w-100 border-1 border-solid border-green-800 rounded-lg p-5">
                    <img src={logo1.src} alt="Logo 1" className="w-20 h-20 mb-5" />
                    <h1 className="text-2xl mb-5">Our Mission</h1>
                    <p className="text-gray-700 mb-10">To provide our customers with the freshest, highest-quality groceries while promoting sustainable and eco-friendly practices.</p>
                </div>
                <div className="md:w-100 border-1 border-solid border-green-800 rounded-lg p-5">
                    <img src={logo2.src} alt="Logo 2" className="w-20 h-20 mb-5" />
                    <h1 className="text-2xl mb-5">Our Vision</h1>
                    <p className="text-gray-700 mb-10">To be the leading grocery delivery service, known for our commitment to quality, sustainability, and customer satisfaction.</p>
                </div>
            </div>
        </main>
      <Newletter />
      <Footer />
    </div>
  );
}