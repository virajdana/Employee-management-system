import React from 'react'
import { useAuth } from '../context/authContext'

const EmployeeDashboard = () => {
  const { user } = useAuth()

  return (
    <div>
      <h1>Employee Dashboard</h1>
      <p>Welcome, {user ? user.name : 'Guest'}</p>
    </div>
  )
}

export default EmployeeDashboard
