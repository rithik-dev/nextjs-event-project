// noinspection JSUnusedGlobalSymbols

import EventList from "../../components/event/event-list/event-list";
import ResultsTitle from "../../components/event/results-title/results-title";
import Alert from "../../components/ui/alert/alert";
import {EventsRepository} from "../../helpers/repository/events-repository";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import useSWR from "swr";
import IEvent from "../../helpers/interfaces/event";

const FilteredEventsPage = () => {
    const [filteredEvents, setFilteredEvents] = useState<Array<IEvent>>();

    const router = useRouter();
    const {slug} = router.query!;
    const slugData = slug as string[];

    const {data: tempFilteredEvents, error} = useSWR(EventsRepository.BASE_URL);

    // when data comes, transform the map to array and store in state
    useEffect(() => {
        if (tempFilteredEvents) {
            setFilteredEvents(EventsRepository.transformMapToArray(tempFilteredEvents));
        }
    }, [tempFilteredEvents]);

    if (!filteredEvents) return <Alert>Loading...</Alert>
    else if (filteredEvents.length === 0) return <Alert>No events found.</Alert>

    if (!slugData) return (<Alert>Loading...</Alert>)

    const [year, month] = slugData;
    const [numYear, numMonth] = [+year!, +month!]

    if (error) return (<Alert>An error occurred.</Alert>)
    if (
        slugData.length != 2 ||
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) return (<Alert>Invalid filters. Please adjust the filters.</Alert>)

    const displayEvents = EventsRepository.filterEvents({
        events: filteredEvents,
        filter: {month: numMonth, year: numYear}
    });

    const displayDate = new Date(numYear, numMonth - 1);

    return (
        <>
            <ResultsTitle date={displayDate}/>
            <EventList events={displayEvents}/>
        </>
    )
}

export default FilteredEventsPage;
