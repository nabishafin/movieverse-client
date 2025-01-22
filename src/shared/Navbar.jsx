import { Link } from 'react-router-dom';
import logo from '../assets/icons8-video-100.png'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    return (
        <div className="navbar text-white bg-gradient-to-r from-black via-[#0f4f4f] to-black">
            {/* Navbar Start */}
            <div className="navbar-start">
                <Link to="/" className="flex justify-center items-center gap-1">
                    <div className="w-12">
                        <img src={logo} alt="Site Icon" className="w-full h-full" />
                    </div>
                    <div className="hidden md:block text-white font-bold text-xl ">Movieverse</div>
                </Link>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">All Movies</Link>
                    </li>
                    <li>
                        <Link to="/">My Favorites</Link>
                    </li>
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                {!user ? (
                    <button className="mr-3 font-bold">
                        <Link to="/login">Login</Link>
                    </button>
                ) : (
                    <div className="dropdown dropdown-end z-50">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div
                                title={user.displayName}
                                className="w-10 rounded-full overflow-hidden"
                            >
                                <img
                                    referrerPolicy="no-referrer"
                                    alt="User Profile"
                                    src={user.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
                        >

                            <li className='font-bold my-5'>
                                <Link to="/addservice" className="justify-between">
                                    Add Movie
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => logOut()}
                                    className="bg-gray-600 block text-center w-full py-2 rounded-md"
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
