import { Link } from "react-router-dom";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
    if (sidebarOpen) return null;
    
    return (
        <header className={`sticky top-0 w-full h-12 md:h-16 bg-yellow-400 z-50 transition-opacity ${sidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <div className="h-full px-4 md:px-9 flex items-center">

                {/* ===== MOBILE HEADER ===== */}
                <div className="relative flex items-center justify-between w-full md:hidden gap-3">
                    <h1 className="text-base font-semibold">Lenador Impex</h1>
                    <Link to={"/shop"}>
                        <i className="bi bi-bag-fill text-3xl"></i>
                        <span className="text-white font-bold text-lg -ml-5">0</span>
                    </Link>
                    <button className="text-2xl" onClick={() => setSidebarOpen(true)}>&#9776;</button>
                </div>

                {/* ===== DESKTOP HEADER ===== */}
                <div className="hidden md:flex items-center justify-between w-full">            
                    <h1 className="text-lg font-semibold">Lenador Impex</h1>
                    <div className="flex items-center gap-10">
                        <Link to="/shop" className="relative flex items-center">
                            <i className="bi bi-bag-fill text-5xl"></i>
                            <span className="absolute text-white text-xl font-bold rounded-full px-4.5 mt-3">0</span>
                        </Link>
                        <button className="text-lg bg-gray-200 px-8 py-2 rounded-full font-semibold tracking-wide" onClick={() => setSidebarOpen(true)}>Menu</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;