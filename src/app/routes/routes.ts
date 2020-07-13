import DashboardPage from './Dashboard'
import LoginPage from './Login'
import { RouteProps } from 'react-router-dom'

export const privateRoutes: RouteProps[] = [
  {
    path: '/',
    component: DashboardPage,
  },
]

export const publicRoutes: RouteProps[] = [
  {
    path: '/login',
    component: LoginPage,
  },
]
