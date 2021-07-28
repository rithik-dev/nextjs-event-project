import styles from './event-content.module.css';
import React from "react";

const EventContent: React.FC = ({children}) => {
    return (
        <section className={styles.content}>
            {children}
        </section>
    );
}

export default EventContent;
