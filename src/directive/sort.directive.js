import { Directive, Input, Output, EventEmitter } from '@angular/core';
var JhiSortDirective = /** @class */ (function () {
    function JhiSortDirective() {
        this.predicateChange = new EventEmitter();
        this.ascendingChange = new EventEmitter();
    }
    JhiSortDirective.prototype.sort = function (field) {
        this.ascending = field !== this.predicate ? true : !this.ascending;
        this.predicate = field;
        this.predicateChange.emit(field);
        this.ascendingChange.emit(this.ascending);
        this.callback();
    };
    JhiSortDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[jhiSort]'
                },] },
    ];
    /** @nocollapse */
    JhiSortDirective.ctorParameters = function () { return []; };
    JhiSortDirective.propDecorators = {
        "predicate": [{ type: Input },],
        "ascending": [{ type: Input },],
        "callback": [{ type: Input },],
        "predicateChange": [{ type: Output },],
        "ascendingChange": [{ type: Output },],
    };
    return JhiSortDirective;
}());
export { JhiSortDirective };
