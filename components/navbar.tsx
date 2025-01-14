import { Link } from "@remix-run/react";

export default function Navbar() {
    return (
        <div>
            <nav>
                <Link to="/calculation">
                    Data Analysis
                </Link>
            </nav>
        </div>
    )
}