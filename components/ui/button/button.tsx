import Link from "next/link";
import React from "react";
import styles from './button.module.css';

type Props = {
    link: string;
}

const Button: React.FC<Props> = ({link, children}) => {
    return (
        <Link href={link}>
            <a className={styles.btn}>
                {children}
            </a>
        </Link>
    )
}

export default Button;
