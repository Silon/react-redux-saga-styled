import React, { useState } from 'react'
import LoginLayout from '../layouts/LoginPageLayout/LoginLayout'
import { useDispatch, useSelector } from 'react-redux'
import { firebaseLoginRequest } from '../store/firebaseUser/actions'
import { firebasaeLoginStatus } from '../store/firebaseUser/selectors'
import { TFirebaseLoginStatus } from '../store/firebaseUser/reducer'

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  const loginStatus = useSelector(firebasaeLoginStatus)
  const loginSuccess = loginStatus === TFirebaseLoginStatus.SUCCESS
  const loginInPogress = loginStatus === TFirebaseLoginStatus.IN_PROGRESS

  const loginAction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(firebaseLoginRequest(formData))
  }

  const onEmailChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, email: target.value as string })

  const onPasswordChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, password: target.value as string })

  return (
    <LoginLayout>
      <form onSubmit={loginAction}>
        {loginInPogress && 'Processing...'}
        {!loginSuccess && !loginInPogress && (
          <>
            <input type="email" onChange={onEmailChange} />
            <input type="password" onChange={onPasswordChange} />
            <button type="submit">Login</button>
          </>
        )}
      </form>
    </LoginLayout>
  )
}

export default LoginPage
