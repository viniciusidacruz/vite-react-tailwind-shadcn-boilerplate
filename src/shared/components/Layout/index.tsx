import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import { Navigation } from '@components/Navigation'

export const Layout = () => (
  <Fragment>
    <Navigation />

    <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-8rem)] text-center">
      <Outlet />
    </div>
  </Fragment>
)
