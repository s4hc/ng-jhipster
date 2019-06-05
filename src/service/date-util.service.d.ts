/**
 * An utility service for date.
 */
export declare class JhiDateUtils {
    private pattern;
    private datePipe;
    constructor();
    /**
     * Method to convert the date time from server into JS date object
     */
    convertDateTimeFromServer(date: any): Date;
    /**
     * Method to convert the date from server into JS date object
     */
    convertLocalDateFromServer(date: any): Date;
    /**
     * Method to convert the JS date object into specified date pattern
     */
    convertLocalDateToServer(date: any, pattern?: string): string;
    /**
     * Method to get the default date pattern
     */
    dateformat(): string;
    toDate(date: any): Date;
}
