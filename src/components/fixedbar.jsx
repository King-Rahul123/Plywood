const Fixedbar = () => {
    return (
    <div>
        {/* GOOGLE RATING */}
        <div className="hidden md:flex fixed bottom-6 left-6 z-50 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] rounded-lg py-2 px-3 w-40 md:w-80 md:py-4 items-center gap-2">
            <img
                src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/12/Google-logo-design-isolated-illustration-premium-vector-PNG.png"
                alt="Google"
                className="md:w-12 md:h-12 w-8 h-8 object-contain"
            />
            <div>
                <p className="text-orange-500 font-bold md:text-lg text-sm">5.0 ★★★★★</p>
                <p className="text-xs text-gray-500">10 REVIEWS</p>
            </div>
        </div>


        {/* FLOATING CONTACT BUTTON */}
        <button className="hidden fixed bottom-6 right-6 z-50 bg-black text-white px-3 py-2 md:px-8 md:py-4 rounded-full md:flex items-center gap-2">
            <i className="bi bi-chat-dots"></i>
            Contact Us
        </button>

        {/* Mobile contacting Bar */}
        <div className="md:hidden flex items-center fixed bottom-0 w-full h-12 px-5 py-2 z-50 gap-10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
            <a href="tel:+917808468854" className="flex items-center justify-center w-15 h-12 text-green-500">
                <i className="fas fa-phone text-2xl"></i>
            </a>
            <a href="mailto:test@gmail.com" className="flex items-center justify-center w-15 h-12 text-red-500">
                <i className="fas fa-envelope text-2xl"></i>
            </a>
            <a href="#" className="flex items-center justify-center w-15 h-12 text-blue-800">
                <i className="bi bi-facebook text-2xl"></i>
            </a>
            <a href="#" className="flex items-center justify-center w-15 h-12 text-blue-900">
                <i className="fas fa-comment-alt text-2xl"></i>
            </a>
        </div>
    </div>
    )
}

export default Fixedbar;