export class Booking{
    User_ID : string;
    CustomerUsername: string;
    GynNameLocation: string;
    selectedClass:string;
    selectedTime: string;
    selectedDate: Date;
    ConfirmationStatus: {
        type: string,
        enum :['Confirmed', 'Not Yet Confirmed', 'Class Not Available'],
        default: 'Not Yet Confirmed'
}
}