import { OnInit } from '@angular/core';
import { JhiConfigService } from '../config.service';
import { JhiModuleConfig } from '../config';
/**
 * This component can be used to display a boolean value by defining the @Input attributes
 * If an attribute is not provided, default values will be applied (see JhiModuleConfig class)
 * Have a look at the following examples
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * <jhi-boolean [value]="inputBooleanVariable"></jhi-boolean>
 *
 * - Display a green check when inputBooleanVariable is true
 * - Display a red cross when inputBooleanVariable is false
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * <jhi-boolean
 *     [value]="inputBooleanVariable">
 *     classTrue="fa fa-lg fa-check text-primary"
 *     classFalse="fa fa-lg fa-times text-warning"
 * </jhi-boolean>
 *
 * - Display a blue check when inputBooleanVariable is true
 * - Display an orange cross when inputBooleanVariable is false
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * <jhi-boolean
 *     [value]="inputBooleanVariable">
 *     classTrue="fa fa-lg fa-check"
 *     classFalse=""
 * </jhi-boolean>
 *
 * - Display a black check when inputBooleanVariable is true
 * - Do not display anything when inputBooleanVariable is false
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * <jhi-boolean
 *     [value]="inputBooleanVariable"
 *     [textTrue]="'userManagement.activated' | translate"
 *     textFalse="deactivated">
 * </jhi-boolean>
 *
 * - Display a green badge when inputBooleanVariable is true
 * - Display a red badge when inputBooleanVariable is false
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * <jhi-boolean
 *     [value]="user.activated"
 *     classTrue="badge badge-warning"
 *     classFalse="badge badge-info"
 *     [textTrue]="'userManagement.activated' | translate"
 *     textFalse="deactivated">
 * </jhi-boolean>
 *
 * - Display an orange badge and write 'activated' when inputBooleanVariable is true
 * - Display a blue badge and write 'deactivated' when inputBooleanVariable is false
 */
export declare class JhiBooleanComponent implements OnInit {
    /**
     * the boolean input value
     */
    value: boolean;
    /**
     * the class(es) (space separated) that will be applied if value is true
     */
    classTrue: string;
    /**
     * the class(es) (space separated) that will be applied if the input value is false
     */
    classFalse: string;
    /**
     * the text that will be displayed if the input value is true
     */
    textTrue: string;
    /**
     * the text that will be displayed if the input value is false
     */
    textFalse: string;
    config: JhiModuleConfig;
    constructor(configService: JhiConfigService);
    ngOnInit(): void;
}
