import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white pt-10">
        <hr className="border-t border-black/60 w-[90%] mx-auto" />
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* LEFT SECTION */}
            <div>
                <h2 className="text-4xl font-semibold mb-6">Lenador Impex</h2>
                <img src="/src/assets/logo.png" alt="Lenador Impex" className="w-36 mb-6"/>
                <h3 className="text-2xl font-semibold mb-4">Stay Connected with Us</h3>
                <label className="block text-s mb-2">Enter Your Email *</label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                    <input type="email" className="px-1 py-2 w-full sm:w-60 border-b border-black focus:outline-none bg-transparent"/>
                    <button className="bg-white border border-black text-gray-600 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition">Subscribe</button>
                    <button className="bg-black text-white px-8 py-3 rounded-full">Home</button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <input type="checkbox" />
                    <span className="text-s">Yes, Subscribe me to newsletter</span>
                </div>
            </div>

            {/* MIDDLE EMPTY (SPACING LIKE IMAGE) */}
            <div></div>

            {/* RIGHT SECTION */}
            <div className="flex flex-col md:items-start items-center text-center md:text-left">
                <div className="text-m space-y-2">
                    <p>73982-44444</p>
                    <p>lenadorimpex@gmail.com</p>
                    <p>8/1 Mill Road Aishbagh</p>
                    <p>Lucknow-4</p>
                </div>
                                
                {/* SOCIAL ICONS */}
                <div className="flex items-center gap-4 mt-5 text-2xl">
                    <i className="bi bi-whatsapp text-green-500"></i>
                    <i className="bi bi-facebook text-blue-600"></i>
                    <i className="bi bi-instagram text-pink-600"></i>
                </div>
                <Link to="/privacy_policy" className="underline block mt-4">Privacy Policy</Link>
            </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-black/60 text-center text-sm py-3 mt-10">
            <p className="mt-3">© 2035 by Lenador Impex. Powered by React</p>
        </div>
    </footer>
  );
};

export default Footer;
