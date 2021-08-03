export enum Status {
    'success',
    'error',
    'pending'
}

export default interface INotification {
    title: string;
    message: string;
    status: Status;
}
