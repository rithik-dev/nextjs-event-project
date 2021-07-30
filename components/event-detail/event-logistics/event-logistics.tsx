import AddressIcon from '../../icons/address-icon';
import DateIcon from '../../icons/date-icon';
import LogisticsItem from '../logistics-item/logistics-item';
import styles from './event-logistics.module.css';
import React from "react";
import Helpers from "../../../helpers/helpers";
import Image from "next/image";

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
                <Image src={image} alt={imageAlt} width={400} height={400}/>
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
