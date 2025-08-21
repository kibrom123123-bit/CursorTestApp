import { useState } from 'react'
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ email: '', password: '' })

  function isValidEmail(value) {
    // Simple email regex for demonstration purposes
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
  }

  function validate() {
    const nextErrors = { email: '', password: '' }

    if (!isValidEmail(email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!password) {
      nextErrors.password = 'Password cannot be empty.'
    }

    setErrors(nextErrors)
    return !nextErrors.email && !nextErrors.password
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!validate()) return
    console.log('Login clicked')
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Dental Practice Login</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" className={styles.errorText}>{errors.email}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              id="password"
              type="password"
              className={styles.input}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? 'password-error' : undefined}
            />
            {errors.password && (
              <span id="password-error" className={styles.errorText}>{errors.password}</span>
            )}
          </div>

          <button type="submit" className={styles.button}>Login</button>
        </form>
      </div>
    </div>
  )
}