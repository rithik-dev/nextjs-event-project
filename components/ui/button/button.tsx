import Link from "next/link";
import React from "react";
import styles from './button.module.css';

type Props = {
    link?: string;
    onClick?: () => void;
}

const Button: React.FC<Props> = ({link, onClick, children}) => {
    return (
        link ? (
            <Link href={link}>
                <a className={styles.btn}>{children}</a>
            </Link>
        ) : (
            <button className={styles.btn} onClick={onClick}>
                {children}
            </button>
        )
    )
}

export default Button;
