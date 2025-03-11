import { Link } from "@remix-run/react";

export default function Navbar() {
    return (
        <div className="w-full p-8">
            <nav className="flex flex-row justify-evenly text-xl">
                <Link to="/" className="hover:animate-bounce hover:underline p-4">
                    Tier List
                </Link>
                <Link to="/calculation" prefetch="render" className="hover:animate-bounce hover:underline p-4">
                    Data Analysis
                </Link>
            </nav>
        </div>
    )
}