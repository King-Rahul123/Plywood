import { useState } from "react";

const PopupContactForm = () => {
    const [open, setOpen] = useState(true);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)}></div>
            <div className="relative bg-white w-full max-w-md rounded-xl shadow-2xl p-6 animate-fadeIn">
                <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-2xl font-bold text-gray-500 hover:text-black">&times;</button>
                <h2 className="text-2xl font-bold mb-2 text-center">Contact Us</h2>
                <form className="space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:border-black" required/>
                    <input type="email" placeholder="Email Address" className="w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:border-black" required/>
                    <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:border-black"/>
                    <textarea rows="3" placeholder="Your Message" className="w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:border-black" required></textarea>
                    <button type="submit" className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default PopupContactForm;
