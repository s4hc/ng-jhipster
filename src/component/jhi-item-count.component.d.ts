import { JhiConfigService } from '../config.service';
/**
 * A component that will take care of item count statistics of a pagination.
 */
export declare class JhiItemCountComponent {
    /**
     *  current page number.
     */
    page: number;
    /**
     *  Total number of items.
     */
    total: number;
    /**
     *  Number of items per page.
     */
    itemsPerPage: number;
    /**
     * True if the generated application use i18n
     */
    i18nEnabled: boolean;
    /**
     * "translate-values" JSON of the template
     */
    i18nValues(): string;
    constructor(config: JhiConfigService);
}