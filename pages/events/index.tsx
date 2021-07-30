// noinspection JSUnusedGlobalSymbols

import EventList from "../../components/event/event-list/event-list";
import EventSearch from "../../components/event/event-search/event-search";
import {useRouter} from "next/router";
import {EventsRepository} from "../../helpers/repository/events-repository";
import IEvent from "../../helpers/interfaces/event";
import React from "react";
import {GetStaticProps} from "next";
import Head from "next/head";

type Props = {
    allEvents: Array<IEvent>;
}

const AllEventsPage: React.FC<Props> = ({allEvents}) => {
    const router = useRouter();

    const findEventsHandler = async (year: string, month: string) => {
        await router.push(`/events/${year}/${month}`);
    }

    return (
        <>
            <Head>
                <title>All Events</title>
                <meta name={'description'} content={'Find all the events...'}/>
            </Head>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList events={allEvents}/>
        </>
    )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const allEvents = await EventsRepository.getAllEvents();
    return {props: {allEvents}, revalidate: 60};
}

export default AllEventsPage;
