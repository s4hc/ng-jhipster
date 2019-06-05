import { AfterContentInit } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { JhiConfigService } from '../config.service';
import { JhiSortDirective } from './sort.directive';
export declare class JhiSortByDirective implements AfterContentInit {
    private jhiSort;
    jhiSortBy: string;
    iconComponent: FaIconComponent;
    sortIcon: IconDefinition;
    sortAscIcon: IconDefinition;
    sortDescIcon: IconDefinition;
    constructor(jhiSort: JhiSortDirective, configService: JhiConfigService);
    ngAfterContentInit(): void;
    onClick(): void;
    private updateIconDefinition(iconComponent, icon);
}
