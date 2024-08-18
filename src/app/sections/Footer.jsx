const Footer = () => {
    return (
        <footer className="bg-[#0E141A] py-5 md:py-16 px-32 px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-5 md:items-center md:gap-0 text-white">
                {/* Logo and Signup */}
                <div className="">
                    <h1 className="text-2xl font-semibold text-custom-green">Biccas</h1>
                    <p className="mt-2 mb-4 text-[#A6A6A6]">
                        Get started now try our product
                    </p>
                    <div className="relative max-w-xs">
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className="w-full py-2 pl-4 pr-12 bg-[#1B232A] border border-custom-green rounded-full text-white focus:outline-none"
                        />
                        <button className="absolute right-[2px] top-1/2 transform -translate-y-1/2 bg-custom-green text-white rounded-full p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Support */}
                <div className="flex flex-col md:flex-row gap-10">
                    <div>
                        <h2 className="text-lg font-semibold">Support</h2>
                        <ul className="mt-4 space-y-2 text-[#A6A6A6]">
                            <li>Help centre</li>
                            <li>Account information</li>
                            <li>About</li>
                            <li>Contact us</li>
                        </ul>
                    </div>

                    {/* Help and Solution */}
                    <div>
                        <h2 className="text-lg font-semibold">Help and Solution</h2>
                        <ul className="mt-4 space-y-2 text-[#A6A6A6]">
                            <li>Talk to support</li>
                            <li>Support docs</li>
                            <li>System status</li>
                            <li>Covid respond</li>
                        </ul>
                    </div>

                    {/* Product */}
                    <div>
                        <h2 className="text-lg font-semibold">Product</h2>
                        <ul className="mt-4 space-y-2 text-[#A6A6A6]">
                            <li>Update</li>
                            <li>Security</li>
                            <li>Beta test</li>
                            <li>Pricing product</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-8 justify-between flex flex-col text-nowrap md:text-wrap gap-4 md:gap-0 md:flex-row items-center  pt-4 text-center text-[#A6A6A6] text-sm">
                <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
                <p>
                    <a href="#" className="hover:underline">
                        Terms and Conditions
                    </a>{" "}
                    •{" "}
                    <a href="#" className="hover:underline">
                        Privacy Policy
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
