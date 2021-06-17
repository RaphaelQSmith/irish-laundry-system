import React from 'react'
import styles from './components.module.css'

export default function Header() {
    return (
        <div>
            <header>
                <h2 className={styles.ilsLogo}>Irish Laundry System</h2>
                <div className="headerInfo">
                    <p>Email: some@some.com</p>
                    <p>Phone:555-1212</p>
                </div>
            </header>
        </div>
    )
}
