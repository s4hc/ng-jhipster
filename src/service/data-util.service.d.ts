import { ElementRef } from '@angular/core';
/**
 * An utility service for data.
 */
export declare class JhiDataUtils {
    constructor();
    /**
     * Method to abbreviate the text given
     */
    abbreviate(text: string, append?: string): string;
    /**
     * Method to find the byte size of the string provides
     */
    byteSize(base64String: string): string;
    /**
     * Method to open file
     */
    openFile(contentType: string, data: string): void;
    /**
     * Method to convert the file to base64
     */
    toBase64(file: File, cb: Function): void;
    /**
     * Method to clear the input
     */
    clearInputImage(entity: any, elementRef: ElementRef, field: string, fieldContentType: string, idInput: string): void;
    private endsWith(suffix, str);
    private paddingSize(value);
    private size(value);
    private formatAsBytes(size);
    setFileData(event: any, entity: any, field: string, isImage: boolean): void;
}
