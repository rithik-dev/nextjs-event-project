import styles from './alert.module.css';
import React from "react";

const Alert: React.FC = ({children}) => {
    return <div className={styles.alert}>{children}</div>;
}

export default Alert;
