import { Link } from "@remix-run/react";

export default function Navbar() {
    return (
        <div className="w-full">
            <nav className="w-1/2 flex flex-row justify-evenly p-8">
                <Link to="/">
                    Tier List
                </Link>
                <Link to="/calculation">
                    Data Analysis
                </Link>
            </nav>
        </div>
    )
}