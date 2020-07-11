import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout'
import { useDispatch } from 'react-redux'
import { firebaseLogout } from '../store/firebaseUser/actions'

function DashboardPage() {
  const dispatch = useDispatch()
  const onButtonClick = () => {
    dispatch(firebaseLogout())
  }
  return (
    <DashboardLayout>
      <button onClick={onButtonClick}>Logout</button>
    </DashboardLayout>
  )
}

export default DashboardPage
