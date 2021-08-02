import IEvent from "../interfaces/event";

export class EventsRepository {
    static readonly BASE_URL = `${process.env.FIREBASE_BASE_URL}events.json`;

    static transformMapToArray = (events: any): Array<IEvent> => {
        const eventsAsArray = Array<IEvent>();
        for (const eventId in events)
            if (events.hasOwnProperty(eventId))
                eventsAsArray.push({id: eventId, ...events[eventId]})
        return eventsAsArray;
    }

    static getAllEvents = async (): Promise<Array<IEvent>> => {
        const events = await (await fetch(EventsRepository.BASE_URL)).json();
        return EventsRepository.transformMapToArray(events);
    }

    static getFeaturedEvents = async (): Promise<Array<IEvent>> => {
        const events = await EventsRepository.getAllEvents();
        return events.filter((event) => event.isFeatured);
    }

    static getEventById = async (id: string): Promise<(IEvent | undefined)> => {
        const events = await EventsRepository.getAllEvents();
        return events.find((event) => event.id === id);
    }

    // static getFilteredEvents = async (dateFilter: { year: number, month: number }): Promise<Array<IEvent>> => {
    //     const events = await EventsRepository.getAllEvents();
    //     const {year, month} = dateFilter;
    //
    //     return events.filter((event) => {
    //         const eventDate = new Date(event.date);
    //         return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    //     });
    // }

    static filterEvents = (data: { events: Array<IEvent>, filter: { year: number, month: number } }): Array<IEvent> => {
        const {year, month} = data.filter;

        return data.events.filter((event) => {
            const eventDate = new Date(event.date);
            return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
        });
    }

}
