import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
    const location = useLocation();
    const isActive = (path) =>location.pathname === path ? "text-black font-bold" : "text-orange-550";

    return (
        <div className={`fixed inset-0 z-40 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}onClick={() => setOpen(false)}></div>            
            {/* Desktop Sidebar */}
            <div className={`hidden md:flex absolute right-0 top-0 h-full w-96 bg-yellow-400 shadow-xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
                {/* Menu */}
                <nav className="mt-24 ml-16">
                    <ul className="flex flex-col">
                        <li><Link to="/" className={isActive("/")} onClick={() => setOpen(false)}>Home</Link></li>
                        <li><Link to="/made" className={isActive("/made")} onClick={() => setOpen(false)}>How Ply is Made</Link></li>
                        <li><Link to="/shop" className={isActive("/shop")} onClick={() => setOpen(false)}>Shop</Link></li>
                        <li><Link to="/privacy_policy" className={isActive("/privacy_policy")} onClick={() => setOpen(false)}>Privacy Policy</Link></li>
                        <li><Link to="/shipping_policy" className={isActive("/shipping_policy")} onClick={() => setOpen(false)}>Shipping Policy</Link></li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Sidebar */}
            <div className={`md:hidden absolute right-0 top-0 h-full w-64 bg-yellow-400 shadow-xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
                {/* Menu */}
                <nav className="mt-20 ml-6">
                    <ul className="flex flex-col gap-4 text-lg">
                        <li><Link to="/" className={isActive("/")} onClick={() => setOpen(false)}>Home</Link></li>
                        <li><Link to="/made" className={isActive("/made")} onClick={() => setOpen(false)}>How Ply is Made</Link></li>
                        <li><Link to="/shop" className={isActive("/shop")} onClick={() => setOpen(false)}>Shop</Link></li>
                        <li><Link to="/privacy_policy" className={isActive("/privacy_policy")} onClick={() => setOpen(false)}>Privacy Policy</Link></li>
                        <li><Link to="/shipping_policy" className={isActive("/shipping_policy")} onClick={() => setOpen(false)}>Shipping Policy</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;