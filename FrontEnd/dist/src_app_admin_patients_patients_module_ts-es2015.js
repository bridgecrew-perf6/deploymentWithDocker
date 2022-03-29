(self["webpackChunkgescabinet"] = self["webpackChunkgescabinet"] || []).push([["src_app_admin_patients_patients_module_ts"],{

/***/ 12522:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatToolbar": function() { return /* binding */ MatToolbar; },
/* harmony export */   "MatToolbarModule": function() { return /* binding */ MatToolbarModule; },
/* harmony export */   "MatToolbarRow": function() { return /* binding */ MatToolbarRow; },
/* harmony export */   "throwToolbarMixedModesError": function() { return /* binding */ throwToolbarMixedModesError; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 80521);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatToolbar.
/** @docs-private */



const _c0 = ["*", [["mat-toolbar-row"]]];
const _c1 = ["*", "mat-toolbar-row"];
const _MatToolbarBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)(class {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
});
class MatToolbarRow {
}
MatToolbarRow.ɵfac = function MatToolbarRow_Factory(t) { return new (t || MatToolbarRow)(); };
MatToolbarRow.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatToolbarRow, selectors: [["mat-toolbar-row"]], hostAttrs: [1, "mat-toolbar-row"], exportAs: ["matToolbarRow"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatToolbarRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: 'mat-toolbar-row',
                exportAs: 'matToolbarRow',
                host: { 'class': 'mat-toolbar-row' }
            }]
    }], null, null); })();
class MatToolbar extends _MatToolbarBase {
    constructor(elementRef, _platform, document) {
        super(elementRef);
        this._platform = _platform;
        // TODO: make the document a required param when doing breaking changes.
        this._document = document;
    }
    ngAfterViewInit() {
        if (this._platform.isBrowser) {
            this._checkToolbarMixedModes();
            this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
        }
    }
    /**
     * Throws an exception when developers are attempting to combine the different toolbar row modes.
     */
    _checkToolbarMixedModes() {
        if (this._toolbarRows.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            // Check if there are any other DOM nodes that can display content but aren't inside of
            // a <mat-toolbar-row> element.
            const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes)
                .filter(node => !(node.classList && node.classList.contains('mat-toolbar-row')))
                .filter(node => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8))
                .some(node => !!(node.textContent && node.textContent.trim()));
            if (isCombinedUsage) {
                throwToolbarMixedModesError();
            }
        }
    }
}
MatToolbar.ɵfac = function MatToolbar_Factory(t) { return new (t || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
MatToolbar.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatToolbar, selectors: [["mat-toolbar"]], contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatToolbarRow, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
    } }, hostAttrs: [1, "mat-toolbar"], hostVars: 4, hostBindings: function MatToolbar_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
    } }, inputs: { color: "color" }, exportAs: ["matToolbar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 2, vars: 0, template: function MatToolbar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);
    } }, styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"], encapsulation: 2, changeDetection: 0 });
MatToolbar.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT,] }] }
];
MatToolbar.propDecorators = {
    _toolbarRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren, args: [MatToolbarRow, { descendants: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatToolbar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'mat-toolbar',
                exportAs: 'matToolbar',
                template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
                inputs: ['color'],
                host: {
                    'class': 'mat-toolbar',
                    '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
                    '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
                styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }] }]; }, { _toolbarRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
            args: [MatToolbarRow, { descendants: true }]
        }] }); })();
/**
 * Throws an exception when attempting to combine the different toolbar row modes.
 * @docs-private
 */
function throwToolbarMixedModesError() {
    throw Error('MatToolbar: Attempting to combine different toolbar modes. ' +
        'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' +
        'inside of a `<mat-toolbar>` for a single row.');
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatToolbarModule {
}
MatToolbarModule.ɵfac = function MatToolbarModule_Factory(t) { return new (t || MatToolbarModule)(); };
MatToolbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatToolbarModule });
MatToolbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
                exports: [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
                declarations: [MatToolbar, MatToolbarRow]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatToolbarModule, { declarations: function () { return [MatToolbar, MatToolbarRow]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]; }, exports: function () { return [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=toolbar.js.map

/***/ }),

/***/ 77743:
/*!*********************************************************************!*\
  !*** ./src/app/admin/patients/allpatients/allpatients.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllpatientsComponent": function() { return /* binding */ AllpatientsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var src_app_core_service_api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/api-services/rest-api.service */ 75996);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);











function AllpatientsComponent_mat_header_cell_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AllpatientsComponent_mat_cell_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r18.nom);
} }
function AllpatientsComponent_mat_header_cell_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Pr\u00E9nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AllpatientsComponent_mat_cell_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r19.prenom);
} }
function AllpatientsComponent_mat_header_cell_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Genre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AllpatientsComponent_mat_cell_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r20.genre);
} }
function AllpatientsComponent_mat_header_cell_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Telephone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "tbl-col-width-per-15");
} }
function AllpatientsComponent_mat_cell_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "tbl-col-width-per-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", row_r21.telephone, " ");
} }
function AllpatientsComponent_mat_header_cell_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AllpatientsComponent_mat_cell_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r22.adresse);
} }
function AllpatientsComponent_mat_header_cell_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Profession ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AllpatientsComponent_mat_cell_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", row_r23.profession, " ");
} }
function AllpatientsComponent_mat_header_cell_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AllpatientsComponent_mat_cell_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r24.email);
} }
function AllpatientsComponent_mat_header_row_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function AllpatientsComponent_mat_row_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row", 46);
} }
function AllpatientsComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Y'a pas encore de patients ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class AllpatientsComponent {
    constructor(dialog, restApi) {
        this.dialog = dialog;
        this.restApi = restApi;
        this.displayedColumns = [
            "nom",
            "prenom",
            "genre",
            "telephone",
            "adresse",
            "profession",
            "email"
        ];
        this.listPatients = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource([]);
    }
    //pour recuperé la liste des patients dans la base
    ngOnInit() {
        this.restApi.getUserByProfile("PATIENT", localStorage.getItem("token")).subscribe({
            next: result => {
                this.listPatients.data = result;
                this.listPatients.data = this.listPatients.data.sort((a, b) => b - a);
            }
        });
    }
    //Angular Pagination
    ngAfterViewInit() {
        this.listPatients.paginator = this.paginator; //make pagination
        this.listPatients.sort = this.sort;
    }
    //Search filter table
    applyFilter(filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.listPatients.filter = filterValue;
    }
}
AllpatientsComponent.ɵfac = function AllpatientsComponent_Factory(t) { return new (t || AllpatientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_0__.RestApiService)); };
AllpatientsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AllpatientsComponent, selectors: [["app-allpatients"]], viewQuery: function AllpatientsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 63, vars: 8, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Recherche", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["matColumnDef", "nom"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "prenom"], ["matColumnDef", "genre"], ["matColumnDef", "telephone"], ["mat-sort-header", "", 3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "adresse"], ["matColumnDef", "profession"], ["matColumnDef", "email"], [4, "matHeaderRowDef"], ["matRipple", "", 4, "matRowDef", "matRowDefColumns"], ["class", "no-results text-center mt-3", 4, "ngIf"], [3, "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-sort-header", ""], ["mat-sort-header", "", 3, "ngClass"], [3, "ngClass"], ["matRipple", ""], [1, "no-results", "text-center", "mt-3"]], template: function AllpatientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Liste des patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Liste");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AllpatientsComponent_Template_input_keyup_35_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](37, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, AllpatientsComponent_mat_header_cell_38_Template, 2, 0, "mat-header-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, AllpatientsComponent_mat_cell_39_Template, 2, 1, "mat-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](40, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, AllpatientsComponent_mat_header_cell_41_Template, 2, 0, "mat-header-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, AllpatientsComponent_mat_cell_42_Template, 2, 1, "mat-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](43, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, AllpatientsComponent_mat_header_cell_44_Template, 2, 0, "mat-header-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, AllpatientsComponent_mat_cell_45_Template, 2, 1, "mat-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](46, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AllpatientsComponent_mat_header_cell_47_Template, 2, 1, "mat-header-cell", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, AllpatientsComponent_mat_cell_48_Template, 2, 2, "mat-cell", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](49, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, AllpatientsComponent_mat_header_cell_50_Template, 2, 0, "mat-header-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, AllpatientsComponent_mat_cell_51_Template, 2, 1, "mat-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](52, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, AllpatientsComponent_mat_header_cell_53_Template, 2, 0, "mat-header-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, AllpatientsComponent_mat_cell_54_Template, 2, 1, "mat-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](55, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, AllpatientsComponent_mat_header_cell_56_Template, 2, 0, "mat-header-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, AllpatientsComponent_mat_cell_57_Template, 2, 1, "mat-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, AllpatientsComponent_mat_header_row_58_Template, 1, 0, "mat-header-row", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, AllpatientsComponent_mat_row_59_Template, 1, 0, "mat-row", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, AllpatientsComponent_div_60_Template, 2, 0, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "mat-paginator", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.listPatients);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listPatients.data.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGxwYXRpZW50cy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 92106:
/*!***********************************************************!*\
  !*** ./src/app/admin/patients/patients-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientsRoutingModule": function() { return /* binding */ PatientsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _allpatients_allpatients_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allpatients/allpatients.component */ 77743);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: "all-patients",
        component: _allpatients_allpatients_component__WEBPACK_IMPORTED_MODULE_0__.AllpatientsComponent,
    }
];
class PatientsRoutingModule {
}
PatientsRoutingModule.ɵfac = function PatientsRoutingModule_Factory(t) { return new (t || PatientsRoutingModule)(); };
PatientsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PatientsRoutingModule });
PatientsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PatientsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 91496:
/*!***************************************************!*\
  !*** ./src/app/admin/patients/patients.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientsModule": function() { return /* binding */ PatientsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-material-file-input */ 4904);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _patients_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patients-routing.module */ 92106);
/* harmony import */ var _allpatients_allpatients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allpatients/allpatients.component */ 77743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);






















class PatientsModule {
}
PatientsModule.ɵfac = function PatientsModule_Factory(t) { return new (t || PatientsModule)(); };
PatientsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PatientsModule });
PatientsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _patients_routing_module__WEBPACK_IMPORTED_MODULE_0__.PatientsRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule,
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_20__.MaterialFileInputModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PatientsModule, { declarations: [_allpatients_allpatients_component__WEBPACK_IMPORTED_MODULE_1__.AllpatientsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _patients_routing_module__WEBPACK_IMPORTED_MODULE_0__.PatientsRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule,
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_20__.MaterialFileInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_patients_patients_module_ts-es2015.js.map