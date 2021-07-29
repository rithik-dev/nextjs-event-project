export default class Helpers {
    static getDisplayDate = (date: string): string => {
        return new Date(date).toLocaleDateString(
            'en-US',
            {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            },
        );
    }

    static getDisplayAddress = (address: string): string => address.replace(', ', '\n');
}
