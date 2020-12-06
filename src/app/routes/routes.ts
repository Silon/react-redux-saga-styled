import DevelopmentPage from './Development'
import { RouteProps } from 'react-router-dom'

export const privateRoutes: RouteProps[] = [
  {
    path: '/',
    component: DevelopmentPage,
  },
]

export const publicRoutes: RouteProps[] = [
  {
    path: '/login',
    component: DevelopmentPage,
  },
]
