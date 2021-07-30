import AddressIcon from '../../icons/address-icon';
import DateIcon from '../../icons/date-icon';
import LogisticsItem from '../logistics-item/logistics-item';
import styles from './event-logistics.module.css';
import React from "react";
import Helpers from "../../../helpers/helpers";

type Props = {
    date: string;
    address: string;
    image: string;
    imageAlt: string;
}

const EventLogistics: React.FC<Props> = (props) => {
    const {date, address, image, imageAlt} = props;

    const displayDate = Helpers.getDisplayDate(date);
    const displayAddress = Helpers.getDisplayAddress(address);

    return (
        <section className={styles.logistics}>
            <div className={styles.image}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={imageAlt}/>
            </div>
            <ul className={styles.list}>
                <LogisticsItem icon={DateIcon}>
                    <time>{displayDate}</time>
                </LogisticsItem>
                <LogisticsItem icon={AddressIcon}>
                    <address>{displayAddress}</address>
                </LogisticsItem>
            </ul>
        </section>
    );
}

export default EventLogistics;
