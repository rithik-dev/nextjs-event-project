import styles from './event-summary.module.css';
import React from "react";

type Props = {
    title: string;
}

const EventSummary: React.FC<Props> = ({title}) => {
    return (
        <section className={styles.summary}>
            <h1>{title}</h1>
        </section>
    );
}

export default EventSummary;
