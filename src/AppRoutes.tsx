import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ROUTES } from '@shared/constants'
import { Layout } from '@components/Layout'
import { AboutPage, HomePage } from '@public/pages'
import { SignInPage, SignUpPage } from '@sign/pages'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
