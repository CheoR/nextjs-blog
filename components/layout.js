import React from 'react'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      Children below V
      {children}
      Children above ^
    </div>
  )
}

export default Layout
