import { Outlet, useMatches } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
// To hide Navbar/Footer in specific routes, set showLayout: false in the route's handle property
export const Layout = () => {
    const matches = useMatches();
    // Check if any matched route has showLayout set to false (defaults to true if not specified)
    const showLayout = matches.every(match => match.handle?.showLayout !== false);
    
    return (
        <ScrollToTop>
            {showLayout && <Navbar />}
                <Outlet />
            {showLayout && <Footer />}
        </ScrollToTop>
    )
}