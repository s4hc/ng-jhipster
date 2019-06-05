import { Directive, Host, HostListener, Input, ContentChild } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { JhiConfigService } from '../config.service';
import { JhiSortDirective } from './sort.directive';
var JhiSortByDirective = /** @class */ (function () {
    function JhiSortByDirective(jhiSort, configService) {
        this.jhiSort = jhiSort;
        this.jhiSort = jhiSort;
        var config = configService.getConfig();
        this.sortIcon = config.sortIcon;
        this.sortAscIcon = config.sortAscIcon;
        this.sortDescIcon = config.sortDescIcon;
    }
    JhiSortByDirective.prototype.ngAfterContentInit = function () {
        if (this.jhiSort.predicate && this.jhiSort.predicate !== '_score' && this.jhiSort.predicate === this.jhiSortBy) {
            this.updateIconDefinition(this.iconComponent, this.jhiSort.ascending ? this.sortDescIcon : this.sortAscIcon);
            this.jhiSort.activeIconComponent = this.iconComponent;
        }
    };
    JhiSortByDirective.prototype.onClick = function () {
        if (this.jhiSort.predicate && this.jhiSort.predicate !== '_score') {
            this.jhiSort.sort(this.jhiSortBy);
            this.updateIconDefinition(this.jhiSort.activeIconComponent, this.sortIcon);
            this.updateIconDefinition(this.iconComponent, this.jhiSort.ascending ? this.sortDescIcon : this.sortAscIcon);
            this.jhiSort.activeIconComponent = this.iconComponent;
        }
    };
    JhiSortByDirective.prototype.updateIconDefinition = function (iconComponent, icon) {
        if (iconComponent) {
            iconComponent.iconProp = icon;
            iconComponent.ngOnChanges({});
        }
    };
    JhiSortByDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[jhiSortBy]'
                },] },
    ];
    /** @nocollapse */
    JhiSortByDirective.ctorParameters = function () { return [
        { type: JhiSortDirective, decorators: [{ type: Host },] },
        { type: JhiConfigService, },
    ]; };
    JhiSortByDirective.propDecorators = {
        "jhiSortBy": [{ type: Input },],
        "iconComponent": [{ type: ContentChild, args: [FaIconComponent,] },],
        "onClick": [{ type: HostListener, args: ['click',] },],
    };
    return JhiSortByDirective;
}());
export { JhiSortByDirective };
