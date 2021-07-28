import styles from './logistics-item.module.css';
import React from "react";

type Props = {
    icon: any;
}

const LogisticsItem: React.FC<Props> = (props) => {
    return (
        <li className={styles.item}>
            <span className={styles.icon}><props.icon/></span>
            <span className={styles.content}>{props.children}</span>
        </li>
    );
}

export default LogisticsItem;
