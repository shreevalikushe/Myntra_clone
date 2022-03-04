import React from 'react';
import styles from './profile.module.css'

export const Profile = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>Welcome</div>
        <div className={styles.head}>To access account and manage orders</div>
        <div className={styles.buttonContainer}>

        <button className={styles.button}>LOGIN / SIGNUP</button>
        </div>
        <ul>
            <li className={styles.listItem}>Orders</li>
            <li className={styles.listItem}>Wishlist</li>
            <li className={styles.listItem}>Gift Cards</li>
            <li className={styles.listItem}>Contact Us</li>
            <li className={styles.special}>Myntra Insider</li>
            <li className={styles.listItem}>Myntra Credit</li>
            <li className={styles.listItem}>Coupons</li>
            <li className={styles.listItem}>Saved Cards</li>
            <li className={styles.listItem}>Saved Addresses</li>
        </ul>
    </div>
  )
}
