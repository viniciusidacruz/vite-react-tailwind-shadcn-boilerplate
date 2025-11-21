import { Link } from "react-router-dom";

import { ROUTES } from "@shared/constants";

export const Navigation = () => (
  <nav className="flex gap-4 mt-8">
    <Link className="p-5 hover:bg-black/10 rounded-2xl" to={ROUTES.HOME}>
      Home
    </Link>
    <Link className="p-5 hover:bg-black/10 rounded-2xl" to={ROUTES.ABOUT}>
      About
    </Link>
    <Link className="p-5 hover:bg-black/10 rounded-2xl" to={ROUTES.SIGN_IN}>
      Sign In
    </Link>
    <Link className="p-5 hover:bg-black/10 rounded-2xl" to={ROUTES.SIGN_UP}>
      Sign Up
    </Link>
  </nav>
);
