import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/event/event-list/event-list";
import ResultsTitle from "../../components/event/results-title/results-title";
import Alert from "../../components/ui/alert/alert";

const FilteredEventsPage = () => {
    const router = useRouter();

    const data = router.query.slug as string[];

    if (!data) return (<Alert>Loading...</Alert>)

    const [year, month] = data;
    const [numYear, numMonth] = [+year!, +month!]

    if (data.length != 2 ||
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12) return <Alert>Invalid filters. Please adjust the filters.</Alert>

    const filteredEvents = getFilteredEvents({month: numMonth, year: numYear});

    if (!filteredEvents || filteredEvents.length === 0) return <Alert>No events found.</Alert>

    const date = new Date(numYear, numMonth - 1);

    return (
        <>
            <ResultsTitle date={date}/>
            <EventList events={filteredEvents}/>
        </>
    )
}

export default FilteredEventsPage;
