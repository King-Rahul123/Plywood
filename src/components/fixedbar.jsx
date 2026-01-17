const Fixedbar = () => {
    return (
    <div>
        {/* GOOGLE RATING */}
        <div className="fixed bottom-6 left-6 z-50 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] rounded-lg p-4 w-80 flex items-center gap-4">
            <img
                src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/12/Google-logo-design-isolated-illustration-premium-vector-PNG.png"
                alt="Google"
                className="w-12 h-12 object-contain"
            />
            <div>
                <p className="text-orange-500 font-bold text-lg">5.0 ★★★★★</p>
                <p className="text-xs text-gray-500">10 REVIEWS</p>
            </div>
        </div>


        {/* FLOATING CONTACT BUTTON */}
        <button className="fixed bottom-6 right-6 z-50 bg-black text-white px-8 py-4 rounded-full flex items-center gap-2">
            <i className="bi bi-chat-dots"></i>
            Contact Us
        </button>
    </div>
    )
}

export default Fixedbar;