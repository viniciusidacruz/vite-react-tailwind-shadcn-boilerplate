import { Link } from 'react-router-dom'

import { NAVIGATION_ROUTES } from '@shared/constants'

export const Navigation = () => (
  <nav className="flex gap-4 mt-8 w-full justify-center">
    {NAVIGATION_ROUTES.map((route) => (
      <Link
        key={route.path}
        className="p-5 hover:bg-black/10 rounded-2xl text-xl cursor-pointer"
        to={route.path}
      >
        {route.label}
      </Link>
    ))}
  </nav>
)
