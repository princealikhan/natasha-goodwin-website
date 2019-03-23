import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";
import Experience from "./pages/experience/Experience";

export const routes = [
    {
        path: '/',
        component: Landing,
        exact: true,
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/experience',
        component: Experience
    },
    {
        path: '/work',
        component: Work
    },
    {
        path: '/contact',
        component: Contact
    }
  ]