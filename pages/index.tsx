// noinspection JSUnusedGlobalSymbols

import EventList from "../components/event/event-list/event-list";
import {GetStaticProps} from "next";
import IEvent from "../helpers/interfaces/event";
import React from "react";
import {EventsRepository} from "../helpers/repository/events-repository";

type Props = {
    featuredEvents: Array<IEvent>;
}

const FeaturedEventsPage: React.FC<Props> = ({featuredEvents}) => {
    return (
        <EventList events={featuredEvents}/>
    )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const featuredEvents = await EventsRepository.getFeaturedEvents();
    return {props: {featuredEvents}, revalidate: 1800};
}

export default FeaturedEventsPage;
