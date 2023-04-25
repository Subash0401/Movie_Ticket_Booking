(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/admin/admin-dashboard/add-location/add-location.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/admin/admin-dashboard/add-location/add-location.component.ts ***!
      \******************************************************************************/

    /*! exports provided: AddLocationComponent */

    /***/
    function srcAppAdminAdminDashboardAddLocationAddLocationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddLocationComponent", function () {
        return AddLocationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/locations.service */
      "./src/app/services/locations.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AddLocationComponent_div_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var location_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", location_r1.location_name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", location_r1.area, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var AddLocationComponent = /*#__PURE__*/function () {
        function AddLocationComponent(locationService) {
          _classCallCheck(this, AddLocationComponent);

          this.locationService = locationService;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            location_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cast: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            bannerimage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(AddLocationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadLocations();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.locationService.addLocation(JSON.stringify(this.form.value)).subscribe(function (data) {
              if (data == true) {
                alert("Movie Added");
              } else {
                alert('Something went wrong');
              }
            });
          }
        }, {
          key: "loadLocations",
          value: function loadLocations() {
            var _this = this;

            return this.locationService.getLocations().subscribe(function (data) {
              return _this.locations$ = data;
            });
          }
        }]);

        return AddLocationComponent;
      }();

      AddLocationComponent.ɵfac = function AddLocationComponent_Factory(t) {
        return new (t || AddLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"]));
      };

      AddLocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddLocationComponent,
        selectors: [["app-add-location"]],
        decls: 54,
        vars: 15,
        consts: [[1, "row", "mt-3", "justify-content-center"], [1, "col-md-11", "card"], [1, "row", 2, "background", "#cc3d00 radial-gradient(circle at 60% 100%,#ffa436 5%,#cc3d00 94%)", "color", "black", "margin", "10px", "padding", "10px"], [1, "col-md-12", "d-flex", "justify-content-center"], [1, "row", "mt-2"], [1, "col-md-12"], [1, "row", "mb-3"], ["name", "form", 1, "card", "m-2", 3, "formGroup", "ngSubmit"], [1, "m-1"], ["formControlName", "location_name", "name", "location_name", "type", "text", "placeholder", "Movie Name", "autocomplete", "off", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["formControlName", "area", "name", "area", "type", "text", "placeholder", "Theatre Name", "required", "", 1, "input", "form-control", 3, "ngClass"], ["formControlName", "cast", "name", "area", "type", "text", "placeholder", "About the Movie and Cast", "required", "", 1, "input", "form-control", 3, "ngClass"], ["formControlName", "bannerimage", "name", "bannerimage", "type", "text", "placeholder", "Paste the Poster Image URL", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "col-md-12", "mt-2", "mb-5"], [1, "m-1", "mt-4"], ["type", "submit", 1, "button", 3, "disabled"], [1, "m-2"], [1, "font-weight-bold"], [1, "card", "m-2"], [1, "row", "p-2"], [1, "col"], ["class", "row p-2", 4, "ngFor", "ngForOf"]],
        template: function AddLocationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Movie");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddLocationComponent_Template_form_ngSubmit_11_listener() {
              return ctx.form.valid && ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " This Field is required! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Movies Available:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Movie");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Theatre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "hr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AddLocationComponent_div_53_Template, 5, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.form.get("location_name").touched && ctx.form.get("location_name").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.form.get("area").touched && ctx.form.get("area").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.form.get("cast").touched && ctx.form.get("cast").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.form.get("bannerimage").touched && ctx.form.get("bannerimage").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locations$);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".wrapper[_ngcontent-%COMP%]{\r\n    background-color: #ff4f5a;\r\n    -webkit-clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\r\n            clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\r\n}\r\n\r\n.formwrapper[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    margin-left: 7px;\r\n    margin-right: 7px;\r\n    border: none;\r\n    width: 150px;\r\n    color: white;\r\n    height: 35px;\r\n    background-color: #ff4f5a;\r\n    font-weight: 900;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 1px 5px rgba(128, 128, 128, 0.589);\r\n}\r\n\r\n.input[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    padding: 5px 10px;\r\n    border: none;\r\n\r\n    border-bottom: 1px solid #1b2f36;\r\n    color: black;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.input[_ngcontent-%COMP%]:focus{\r\n    border: none;\r\n    outline: none;\r\n    border-bottom: 1px solid #ff4f5a;   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkZC1sb2NhdGlvbi9hZGQtbG9jYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qiw0REFBb0Q7WUFBcEQsb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7O0lBRVosZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZGQtbG9jYXRpb24vYWRkLWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjRmNWE7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAxNiUsIDEwMCUgMCwgMTAwJSA4NCUsIDAlIDEwMCUpO1xyXG59XHJcblxyXG4uZm9ybXdyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjRmNWE7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjU4OSk7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFiMmYzNjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5pbnB1dDpmb2N1c3tcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmNGY1YTsgICBcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddLocationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-location',
            templateUrl: './add-location.component.html',
            styleUrls: ['./add-location.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/admin/admin-dashboard/add-slot/add-slot.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/admin/admin-dashboard/add-slot/add-slot.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AddSlotComponent */

    /***/
    function srcAppAdminAdminDashboardAddSlotAddSlotComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSlotComponent", function () {
        return AddSlotComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_services_slots_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/slots.service */
      "./src/app/services/slots.service.ts");
      /* harmony import */


      var src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/locations.service */
      "./src/app/services/locations.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AddSlotComponent_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var location_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", location_r2.locationid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", location_r2.locationid, ". ", location_r2.location_name, "");
        }
      }

      function AddSlotComponent_div_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slot_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slot_r3.locationid, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slot_r3.slotid, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slot_r3.slotno, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var AddSlotComponent = /*#__PURE__*/function () {
        function AddSlotComponent(slotService, locationService) {
          _classCallCheck(this, AddSlotComponent);

          this.slotService = slotService;
          this.locationService = locationService;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            locationid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            slotid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            slotno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(AddSlotComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllSlots();
            this.loadLocations();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.slotService.addSlot(JSON.stringify(this.form.value)).subscribe(function (data) {
              if (data == true) {
                alert("Show Added");
              } else {
                alert('Something went wrong');
              }
            });
          }
        }, {
          key: "getAllSlots",
          value: function getAllSlots() {
            var _this2 = this;

            this.slotService.getAllSlots().subscribe(function (data) {
              return _this2.slots$ = data;
            });
          }
        }, {
          key: "loadLocations",
          value: function loadLocations() {
            var _this3 = this;

            return this.locationService.getLocations().subscribe(function (data) {
              return _this3.locations$ = data;
            });
          }
        }]);

        return AddSlotComponent;
      }();

      AddSlotComponent.ɵfac = function AddSlotComponent_Factory(t) {
        return new (t || AddSlotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_slots_service__WEBPACK_IMPORTED_MODULE_2__["SlotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_3__["LocationsService"]));
      };

      AddSlotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddSlotComponent,
        selectors: [["app-add-slot"]],
        decls: 56,
        vars: 13,
        consts: [[1, "row", "mt-3", "justify-content-center"], [1, "col-md-11", "card"], [1, "row", 2, "background", "#cc3d00 radial-gradient(circle at 60% 100%,#ffa436 5%,#cc3d00 94%)", "color", "black", "margin", "10px", "padding", "10px"], [1, "col-md-12", "d-flex", "justify-content-center"], [1, "row", "mt-2"], [1, "col-md-12"], [1, "row", "mb-3"], ["name", "form", 1, "card", "m-2", 3, "formGroup", "ngSubmit"], [1, "m-1"], [1, "form-group"], [1, "font-weight-bold", "m-0"], ["formControlName", "locationid", "name", "locationid", 1, "form-control", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], [1, "invalid-feedback"], ["formControlName", "slotid", "name", "slotid", "type", "text", "placeholder", "Show ID", "autocomplete", "off", "required", "", 1, "input", "form-control", 3, "ngClass"], ["formControlName", "slotno", "name", "slotno", "type", "text", "placeholder", "Show Time", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "col-md-12", "mt-2", "mb-2"], [1, "m-1", "mt-4"], ["type", "submit", 1, "button", 3, "disabled"], [1, "m-2"], [1, "font-weight-bold"], [1, "card", "m-2", "slots"], [1, "row", "p-2"], [1, "col-2"], [1, "col-4"], ["class", "row p-2", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function AddSlotComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Shows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddSlotComponent_Template_form_ngSubmit_11_listener() {
              return ctx.form.valid && ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Select Movie:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddSlotComponent_option_19_Template, 2, 3, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Shows Available:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Movie ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Show ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Show Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AddSlotComponent_div_55_Template, 7, 3, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.form.get("locationid").touched && ctx.form.get("locationid").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locations$);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.form.get("slotid").touched && ctx.form.get("slotid").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.form.get("slotno").touched && ctx.form.get("slotno").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slots$);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: [".wrapper[_ngcontent-%COMP%]{\r\n    background-color: #ff4f5a;\r\n    -webkit-clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\r\n            clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\r\n}\r\n\r\n.formwrapper[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    margin-left: 7px;\r\n    margin-right: 7px;\r\n    border: none;\r\n    width: 150px;\r\n    color: white;\r\n    height: 35px;\r\n    background-color: #ff4f5a;\r\n    font-weight: 900;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 1px 5px rgba(128, 128, 128, 0.589);\r\n}\r\n\r\n.input[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    padding: 5px 10px;\r\n    border: none;\r\n    border-bottom: 1px solid #1b2f36;\r\n    color: black;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.input[_ngcontent-%COMP%]:focus{\r\n    border: none;\r\n    outline: none;\r\n    border-bottom: 1px solid #ff4f5a;   \r\n}\r\n\r\n.slots[_ngcontent-%COMP%]{\r\n    overflow-x: hidden;\r\n    height: 15rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkZC1zbG90L2FkZC1zbG90LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNERBQW9EO1lBQXBELG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkZC1zbG90L2FkZC1zbG90LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjRmNWE7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAxNiUsIDEwMCUgMCwgMTAwJSA4NCUsIDAlIDEwMCUpO1xyXG59XHJcblxyXG4uZm9ybXdyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjRmNWE7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjU4OSk7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWIyZjM2O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmlucHV0OmZvY3Vze1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY0ZjVhOyAgIFxyXG59XHJcblxyXG4uc2xvdHN7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDE1cmVtO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddSlotComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-slot',
            templateUrl: './add-slot.component.html',
            styleUrls: ['./add-slot.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_slots_service__WEBPACK_IMPORTED_MODULE_2__["SlotsService"]
          }, {
            type: src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_3__["LocationsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/admin/admin-dashboard/add-vehicle/add-vehicle.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/admin/admin-dashboard/add-vehicle/add-vehicle.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AddVehicleComponent */

    /***/
    function srcAppAdminAdminDashboardAddVehicleAddVehicleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddVehicleComponent", function () {
        return AddVehicleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/vehicle.service */
      "./src/app/services/vehicle.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AddVehicleComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vehicle_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vehicle_r1.vehicleid, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vehicle_r1.vehicle_type, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vehicle_r1.cost, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var AddVehicleComponent = /*#__PURE__*/function () {
        function AddVehicleComponent(vehicleservice) {
          _classCallCheck(this, AddVehicleComponent);

          this.vehicleservice = vehicleservice;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            vehicle_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(AddVehicleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadVehicle();
          }
        }, {
          key: "loadVehicle",
          value: function loadVehicle() {
            var _this4 = this;

            this.vehicleservice.getVehicles().subscribe(function (data) {
              return _this4.vehicles$ = data;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.vehicleservice.addVehicle(JSON.stringify(this.form.value)).subscribe(function (data) {
              return console.log(data);
            });
            alert('Seating Added');
            location.reload();
          }
        }]);

        return AddVehicleComponent;
      }();

      AddVehicleComponent.ɵfac = function AddVehicleComponent_Factory(t) {
        return new (t || AddVehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"]));
      };

      AddVehicleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddVehicleComponent,
        selectors: [["app-add-vehicle"]],
        decls: 45,
        vars: 9,
        consts: [[1, "row", "mt-3", "justify-content-center"], [1, "col-md-11", "card"], [1, "row", 2, "background", "#cc3d00 radial-gradient(circle at 60% 100%,#ffa436 5%,#cc3d00 94%)", "color", "black", "margin", "10px", "padding", "10px"], [1, "col-md-12", "d-flex", "justify-content-center"], [1, "row", "mt-2"], [1, "col-md-12"], [1, "row", "mb-3"], ["name", "form", 1, "card", "m-2", 3, "formGroup", "ngSubmit"], [1, "m-1"], ["formControlName", "vehicle_type", "name", "vehicle_type", "type", "text", "placeholder", "Seating Type", "autocomplete", "off", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["formControlName", "cost", "name", "cost", "type", "text", "placeholder", "Price", "autocomplete", "off", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "col-md-12", "mt-2", "mb-2"], [1, "m-1", "mt-4"], ["type", "submit", 1, "button", 3, "disabled"], [1, "m-2"], [1, "font-weight-bold"], [1, "card", "m-2", "slots"], [1, "row", "p-2"], [1, "col-2"], [1, "col-4"], ["class", "row p-2", 4, "ngFor", "ngForOf"]],
        template: function AddVehicleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Seating");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddVehicleComponent_Template_form_ngSubmit_11_listener() {
              return ctx.form.valid && ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Seatings Available:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Seating ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Seating Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddVehicleComponent_div_44_Template, 7, 3, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.form.get("vehicle_type").touched && ctx.form.get("vehicle_type").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.form.get("cost").touched && ctx.form.get("cost").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vehicles$);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".wrapper[_ngcontent-%COMP%]{\r\n    background-color: #ff4f5a;\r\n    -webkit-clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\r\n            clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\r\n}\r\n\r\n.formwrapper[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    margin-left: 7px;\r\n    margin-right: 7px;\r\n    border: none;\r\n    width: 150px;\r\n    color: white;\r\n    height: 35px;\r\n    background-color: #ff4f5a;\r\n    font-weight: 900;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 1px 5px rgba(128, 128, 128, 0.589);\r\n}\r\n\r\n.input[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    padding: 5px 10px;\r\n    border: none;\r\n    border-bottom: 1px solid #1b2f36;\r\n    color: black;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.input[_ngcontent-%COMP%]:focus{\r\n    border: none;\r\n    outline: none;\r\n    border-bottom: 1px solid #ff4f5a;   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkZC12ZWhpY2xlL2FkZC12ZWhpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNERBQW9EO1lBQXBELG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZGQtdmVoaWNsZS9hZGQtdmVoaWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0ZjVhO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMTYlLCAxMDAlIDAsIDEwMCUgODQlLCAwJSAxMDAlKTtcclxufVxyXG5cclxuLmZvcm13cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0ZjVhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41ODkpO1xyXG59XHJcblxyXG4uaW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFiMmYzNjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5pbnB1dDpmb2N1c3tcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmNGY1YTsgICBcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddVehicleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-vehicle',
            templateUrl: './add-vehicle.component.html',
            styleUrls: ['./add-vehicle.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
      \********************************************************************/

    /*! exports provided: AdminDashboardComponent */

    /***/
    function srcAppAdminAdminDashboardAdminDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
        return AdminDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AdminDashboardComponent = /*#__PURE__*/function () {
        function AdminDashboardComponent(route) {
          _classCallCheck(this, AdminDashboardComponent);

          this.route = route;
        }

        _createClass(AdminDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkLogin();
          }
        }, {
          key: "logout",
          value: function logout() {
            sessionStorage.clear();
            this.route.navigate(['admin']);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin() {
            if (sessionStorage.length == 0) {
              this.route.navigate(['admin']);
            }
          }
        }]);

        return AdminDashboardComponent;
      }();

      AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) {
        return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminDashboardComponent,
        selectors: [["app-admin-dashboard"]],
        decls: 19,
        vars: 0,
        consts: [[1, "row", "justify-content-center"], [1, "col-md-2", "p-0", "sidebar", "d-flex", "align-items-center", "flex-column"], ["routerLink", "/admin-dashboard", 1, "button"], ["routerLink", "/admin-dashboard/add-slot", 1, "button"], ["routerLink", "/admin-dashboard/add-vehicle", 1, "button"], ["routerLink", "/admin-dashboard/allbookings", 1, "button"], [1, "button", 3, "click"], [1, "col-md-10"]],
        template: function AdminDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Movies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Shows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Seating");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "All Bookings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_15_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".sidebar[_ngcontent-%COMP%]{\r\n    box-shadow: 5px 0 5px -5px #333 ;\r\n    height: 90vh;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    border: none;\r\n    width: 220px;\r\n    margin-top: 10px;\r\n    color: white;\r\n    height: 35px;\r\n    background-color: #ff4f5a;\r\n    font-weight: 900;\r\n    border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJ7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMCA1cHggLTVweCAjMzMzIDtcclxuICAgIGhlaWdodDogOTB2aDtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0ZjVhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin-dashboard',
            templateUrl: './admin-dashboard.component.html',
            styleUrls: ['./admin-dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/admin/admin-dashboard/allbookings/allbookings.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/admin/admin-dashboard/allbookings/allbookings.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AllbookingsComponent */

    /***/
    function srcAppAdminAdminDashboardAllbookingsAllbookingsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllbookingsComponent", function () {
        return AllbookingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/bookings.service */
      "./src/app/services/bookings.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AllbookingsComponent_tr_31_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirmed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AllbookingsComponent_tr_31_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AllbookingsComponent_tr_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AllbookingsComponent_tr_31_div_17_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AllbookingsComponent_tr_31_div_18_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var booking_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.bookingid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.vehicle_type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.time);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.duration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.cost);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.locationid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.slotid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", booking_r1.paid == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", booking_r1.paid == 0);
        }
      }

      var AllbookingsComponent = /*#__PURE__*/function () {
        function AllbookingsComponent(bookingsService) {
          _classCallCheck(this, AllbookingsComponent);

          this.bookingsService = bookingsService;
        }

        _createClass(AllbookingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllBookings();
          }
        }, {
          key: "getAllBookings",
          value: function getAllBookings() {
            var _this5 = this;

            return this.bookingsService.getAllBookings().subscribe(function (data) {
              return _this5.AllBookings$ = data;
            });
          }
        }]);

        return AllbookingsComponent;
      }();

      AllbookingsComponent.ɵfac = function AllbookingsComponent_Factory(t) {
        return new (t || AllbookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__["BookingsService"]));
      };

      AllbookingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AllbookingsComponent,
        selectors: [["app-allbookings"]],
        decls: 32,
        vars: 1,
        consts: [[1, "row", "mt-3", "justify-content-center"], [1, "col-md-11", "card"], [1, "row", 2, "background", "#cc3d00 radial-gradient(circle at 60% 100%,#ffa436 5%,#cc3d00 94%)", "color", "black", "margin", "10px", "padding", "10px"], [1, "col-md-12", "d-flex", "justify-content-center"], [1, "row", "mt-2"], [1, "col-md-12"], [1, "table"], [1, "thead"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [4, "ngIf"], [1, "text-success"], [1, "text-danger"]],
        template: function AllbookingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Bookings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Booking ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Seating");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Count");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cost");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Location ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Slot ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AllbookingsComponent_tr_31_Template, 19, 10, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AllBookings$);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: [".thead[_ngcontent-%COMP%]{\r\n    background: #cc3d00 radial-gradient(circle at 60% 100%,#ffa436 5%,#cc3d00 94%);color: black;\r\n    -webkit-clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\r\n            clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FsbGJvb2tpbmdzL2FsbGJvb2tpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4RUFBOEUsQ0FBQyxZQUFZO0lBQzNGLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hbGxib29raW5ncy9hbGxib29raW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoZWFke1xyXG4gICAgYmFja2dyb3VuZDogI2NjM2QwMCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDYwJSAxMDAlLCNmZmE0MzYgNSUsI2NjM2QwMCA5NCUpO2NvbG9yOiBibGFjaztcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDE2JSwgMTAwJSAwLCAxMDAlIDg0JSwgMCUgMTAwJSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllbookingsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-allbookings',
            templateUrl: './allbookings.component.html',
            styleUrls: ['./allbookings.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__["BookingsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/admin/admin-login/admin-login.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/admin/admin-login/admin-login.component.ts ***!
      \************************************************************/

    /*! exports provided: AdminLoginComponent */

    /***/
    function srcAppAdminAdminLoginAdminLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function () {
        return AdminLoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/admin.service */
      "./src/app/services/admin.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AdminLoginComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is required!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var AdminLoginComponent = /*#__PURE__*/function () {
        function AdminLoginComponent(route, adminService) {
          _classCallCheck(this, AdminLoginComponent);

          this.route = route;
          this.adminService = adminService;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            adminid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(AdminLoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this6 = this;

            var loginJson = JSON.stringify(this.form.value);
            this.adminService.loginCheck(loginJson).subscribe(function (data) {
              if (data == true) {
                alert("Login successful");
                var jsonData = JSON.parse(loginJson);

                _this6.storeLogin(jsonData['email']);

                _this6.route.navigate(['/admin-dashboard']);
              } else {
                alert("Invalid Login");
              }
            });
          }
        }, {
          key: "storeLogin",
          value: function storeLogin(email) {
            sessionStorage.setItem('admin', email);
          }
        }]);

        return AdminLoginComponent;
      }();

      AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) {
        return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]));
      };

      AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminLoginComponent,
        selectors: [["app-admin-login"]],
        decls: 28,
        vars: 9,
        consts: [[1, "row"], [1, "col-md-12", "wrapper", "d-flex", "justify-content-center", "align-items-center", 2, "height", "95vh"], [1, "row", "d-flex", "justify-content-center", "align-items-center", "formwrapper", "card"], ["name", "form", 3, "formGroup", "ngSubmit"], [1, "col-md-12", "mt-4", "d-flex", "flex-row", "justify-content-center"], [1, "m-1"], [1, "col-md-12", "d-flex", "flex-row", "justify-content-center"], ["formControlName", "adminid", "name", "adminid", "type", "email", "placeholder", "Admin ID", "autocomplete", "off", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["formControlName", "password", "type", "password", "placeholder", "Password", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "mt-4"], [1, "danger"], [2, "border", "none", "background-color", "transparent", "color", "#ff4f5a"], [1, "col-md-12", "mt-2", "mb-5", "d-flex", "flex-row", "justify-content-center"], [1, "m-1", "mt-4"], ["type", "submit", 1, "button", 3, "disabled"]],
        template: function AdminLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_3_listener() {
              return ctx.form.valid && ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Admin Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminLoginComponent_div_12_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Forgot Password ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.form.get("adminid").touched && ctx.form.get("adminid").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("adminid").errors == null ? null : ctx.form.get("adminid").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.form.get("password").touched && ctx.form.get("password").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: [".wrapper[_ngcontent-%COMP%]{\r\n    background: #cc3d00 radial-gradient(circle at 60% 100%,#ffa436 5%,#cc3d00 94%);\r\n    \r\n    -webkit-clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\r\n            clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\r\n}\r\n\r\n.formwrapper[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    margin-left: 7px;\r\n    margin-right: 7px;\r\n    border: none;\r\n    width: 150px;\r\n    color: white;\r\n    height: 35px;\r\n    background-color: #ff4f5a;\r\n    font-weight: 900;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 1px 5px rgba(128, 128, 128, 0.589);\r\n}\r\n\r\n.input[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    padding: 5px 10px;\r\n    border: none;\r\n    width: 290px;\r\n    border-bottom: 1px solid #1b2f36;\r\n    color: black;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.input[_ngcontent-%COMP%]:focus{\r\n    border: none;\r\n    outline: none;\r\n    border-bottom: 1px solid #ff4f5a;   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhFQUE4RTtJQUM5RSw2QkFBNkI7SUFDN0IsNERBQW9EO1lBQXBELG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1sb2dpbi9hZG1pbi1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2MzZDAwIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNjAlIDEwMCUsI2ZmYTQzNiA1JSwjY2MzZDAwIDk0JSk7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNmZjRmNWE7Ki9cclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDE2JSwgMTAwJSAwLCAxMDAlIDg0JSwgMCUgMTAwJSk7XHJcbn1cclxuXHJcbi5mb3Jtd3JhcHBlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNGY1YTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTg5KTtcclxufVxyXG5cclxuLmlucHV0e1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxYjJmMzY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaW5wdXQ6Zm9jdXN7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjRmNWE7ICAgXHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin-login',
            templateUrl: './admin-login.component.html',
            styleUrls: ['./admin-login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/admin/admin.component.ts":
    /*!******************************************!*\
      !*** ./src/app/admin/admin.component.ts ***!
      \******************************************/

    /*! exports provided: AdminComponent */

    /***/
    function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return AdminComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AdminComponent = /*#__PURE__*/function () {
        function AdminComponent() {
          _classCallCheck(this, AdminComponent);
        }

        _createClass(AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminComponent;
      }();

      AdminComponent.ɵfac = function AdminComponent_Factory(t) {
        return new (t || AdminComponent)();
      };

      AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminComponent,
        selectors: [["app-admin"]],
        decls: 1,
        vars: 0,
        template: function AdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth/login/login.component */
      "./src/app/auth/login/login.component.ts");
      /* harmony import */


      var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/signup/signup.component */
      "./src/app/auth/signup/signup.component.ts");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      "./src/app/home/home.component.ts");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "./src/app/dashboard/dashboard.component.ts");
      /* harmony import */


      var _dashboard_slots_slots_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard/slots/slots.component */
      "./src/app/dashboard/slots/slots.component.ts");
      /* harmony import */


      var _dashboard_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dashboard/bookings/bookings.component */
      "./src/app/dashboard/bookings/bookings.component.ts");
      /* harmony import */


      var _dashboard_bookslot_bookslot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./dashboard/bookslot/bookslot.component */
      "./src/app/dashboard/bookslot/bookslot.component.ts");
      /* harmony import */


      var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./admin/admin.component */
      "./src/app/admin/admin.component.ts");
      /* harmony import */


      var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./admin/admin-login/admin-login.component */
      "./src/app/admin/admin-login/admin-login.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./admin/admin-dashboard/admin-dashboard.component */
      "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./admin/admin-dashboard/add-location/add-location.component */
      "./src/app/admin/admin-dashboard/add-location/add-location.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_add_slot_add_slot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./admin/admin-dashboard/add-slot/add-slot.component */
      "./src/app/admin/admin-dashboard/add-slot/add-slot.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_allbookings_allbookings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./admin/admin-dashboard/allbookings/allbookings.component */
      "./src/app/admin/admin-dashboard/allbookings/allbookings.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./admin/admin-dashboard/add-vehicle/add-vehicle.component */
      "./src/app/admin/admin-dashboard/add-vehicle/add-vehicle.component.ts");

      var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
      }, {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'signup',
        component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        children: [{
          path: '',
          component: _dashboard_slots_slots_component__WEBPACK_IMPORTED_MODULE_6__["SlotsComponent"]
        }, {
          path: 'bookings',
          component: _dashboard_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_7__["BookingsComponent"]
        }, {
          path: 'bookslot/:locationid',
          component: _dashboard_bookslot_bookslot_component__WEBPACK_IMPORTED_MODULE_8__["BookslotComponent"]
        }]
      }, {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
        children: [{
          path: '',
          component: _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__["AdminLoginComponent"]
        }]
      }, {
        path: 'admin-dashboard',
        component: _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["AdminDashboardComponent"],
        children: [{
          path: '',
          component: _admin_admin_dashboard_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_12__["AddLocationComponent"]
        }, {
          path: 'add-slot',
          component: _admin_admin_dashboard_add_slot_add_slot_component__WEBPACK_IMPORTED_MODULE_13__["AddSlotComponent"]
        }, {
          path: 'allbookings',
          component: _admin_admin_dashboard_allbookings_allbookings_component__WEBPACK_IMPORTED_MODULE_14__["AllbookingsComponent"]
        }, {
          path: 'add-vehicle',
          component: _admin_admin_dashboard_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_15__["AddVehicleComponent"]
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'car-parking';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _home_main_section_home_main_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home-main-section/home-main-section.component */
      "./src/app/home-main-section/home-main-section.component.ts");
      /* harmony import */


      var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./auth/signup/signup.component */
      "./src/app/auth/signup/signup.component.ts");
      /* harmony import */


      var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./auth/login/login.component */
      "./src/app/auth/login/login.component.ts");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./home/home.component */
      "./src/app/home/home.component.ts");
      /* harmony import */


      var _dashboard_slots_slots_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./dashboard/slots/slots.component */
      "./src/app/dashboard/slots/slots.component.ts");
      /* harmony import */


      var _dashboard_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./dashboard/bookings/bookings.component */
      "./src/app/dashboard/bookings/bookings.component.ts");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "./src/app/dashboard/dashboard.component.ts");
      /* harmony import */


      var _dashboard_bookslot_bookslot_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./dashboard/bookslot/bookslot.component */
      "./src/app/dashboard/bookslot/bookslot.component.ts");
      /* harmony import */


      var _services_admin_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./services/admin.service */
      "./src/app/services/admin.service.ts");
      /* harmony import */


      var _services_locations_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./services/locations.service */
      "./src/app/services/locations.service.ts");
      /* harmony import */


      var _services_bookings_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./services/bookings.service */
      "./src/app/services/bookings.service.ts");
      /* harmony import */


      var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/vehicle.service */
      "./src/app/services/vehicle.service.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _header_login_header_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./header-login/header-login.component */
      "./src/app/header-login/header-login.component.ts");
      /* harmony import */


      var _services_users_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./services/users.service */
      "./src/app/services/users.service.ts");
      /* harmony import */


      var _admin_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./admin/admin.component */
      "./src/app/admin/admin.component.ts");
      /* harmony import */


      var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./admin/admin-login/admin-login.component */
      "./src/app/admin/admin-login/admin-login.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./admin/admin-dashboard/admin-dashboard.component */
      "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./admin/admin-dashboard/add-location/add-location.component */
      "./src/app/admin/admin-dashboard/add-location/add-location.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_add_slot_add_slot_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./admin/admin-dashboard/add-slot/add-slot.component */
      "./src/app/admin/admin-dashboard/add-slot/add-slot.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_allbookings_allbookings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./admin/admin-dashboard/allbookings/allbookings.component */
      "./src/app/admin/admin-dashboard/allbookings/allbookings.component.ts");
      /* harmony import */


      var _services_slots_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./services/slots.service */
      "./src/app/services/slots.service.ts");
      /* harmony import */


      var _admin_admin_dashboard_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./admin/admin-dashboard/add-vehicle/add-vehicle.component */
      "./src/app/admin/admin-dashboard/add-vehicle/add-vehicle.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_locations_service__WEBPACK_IMPORTED_MODULE_16__["LocationsService"], _services_bookings_service__WEBPACK_IMPORTED_MODULE_17__["BookingsService"], _services_vehicle_service__WEBPACK_IMPORTED_MODULE_18__["VehicleService"], _services_users_service__WEBPACK_IMPORTED_MODULE_21__["UsersService"], _services_slots_service__WEBPACK_IMPORTED_MODULE_28__["SlotsService"], _services_admin_service__WEBPACK_IMPORTED_MODULE_15__["AdminService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["NoopAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _home_main_section_home_main_section_component__WEBPACK_IMPORTED_MODULE_7__["HomeMainSectionComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _dashboard_slots_slots_component__WEBPACK_IMPORTED_MODULE_11__["SlotsComponent"], _dashboard_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__["BookingsComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _dashboard_bookslot_bookslot_component__WEBPACK_IMPORTED_MODULE_14__["BookslotComponent"], _header_login_header_login_component__WEBPACK_IMPORTED_MODULE_20__["HeaderLoginComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_22__["AdminComponent"], _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_23__["AdminLoginComponent"], _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["AdminDashboardComponent"], _admin_admin_dashboard_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_25__["AddLocationComponent"], _admin_admin_dashboard_add_slot_add_slot_component__WEBPACK_IMPORTED_MODULE_26__["AddSlotComponent"], _admin_admin_dashboard_allbookings_allbookings_component__WEBPACK_IMPORTED_MODULE_27__["AllbookingsComponent"], _admin_admin_dashboard_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_29__["AddVehicleComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["NoopAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _home_main_section_home_main_section_component__WEBPACK_IMPORTED_MODULE_7__["HomeMainSectionComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _dashboard_slots_slots_component__WEBPACK_IMPORTED_MODULE_11__["SlotsComponent"], _dashboard_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__["BookingsComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _dashboard_bookslot_bookslot_component__WEBPACK_IMPORTED_MODULE_14__["BookslotComponent"], _header_login_header_login_component__WEBPACK_IMPORTED_MODULE_20__["HeaderLoginComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_22__["AdminComponent"], _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_23__["AdminLoginComponent"], _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["AdminDashboardComponent"], _admin_admin_dashboard_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_25__["AddLocationComponent"], _admin_admin_dashboard_add_slot_add_slot_component__WEBPACK_IMPORTED_MODULE_26__["AddSlotComponent"], _admin_admin_dashboard_allbookings_allbookings_component__WEBPACK_IMPORTED_MODULE_27__["AllbookingsComponent"], _admin_admin_dashboard_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_29__["AddVehicleComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["NoopAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            providers: [_services_locations_service__WEBPACK_IMPORTED_MODULE_16__["LocationsService"], _services_bookings_service__WEBPACK_IMPORTED_MODULE_17__["BookingsService"], _services_vehicle_service__WEBPACK_IMPORTED_MODULE_18__["VehicleService"], _services_users_service__WEBPACK_IMPORTED_MODULE_21__["UsersService"], _services_slots_service__WEBPACK_IMPORTED_MODULE_28__["SlotsService"], _services_admin_service__WEBPACK_IMPORTED_MODULE_15__["AdminService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/auth/login/login.component.ts":
    /*!***********************************************!*\
      !*** ./src/app/auth/login/login.component.ts ***!
      \***********************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/users.service */
      "./src/app/services/users.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function LoginComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is required!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter Valid Email Address!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(usersService, router) {
          _classCallCheck(this, LoginComponent);

          this.usersService = usersService;
          this.router = router;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkLogin();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            var loginJson = JSON.stringify(this.form.value);
            this.usersService.loginCheck(loginJson).subscribe(function (data) {
              if (data == true) {
                alert("Login successful");
                var jsonData = JSON.parse(loginJson);

                _this7.storeLogin(jsonData['email']);

                _this7.router.navigate(['/dashboard']);
              } else {
                alert("Invalid Login");
              }
            });
          }
        }, {
          key: "storeLogin",
          value: function storeLogin(email) {
            sessionStorage.setItem("email", email);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin() {
            if (sessionStorage.length != 0) {
              this.router.navigate(['/']);
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 32,
        vars: 9,
        consts: [[1, "container"], [1, "row", "h-100"], [1, "row", "d-flex", "align-items-center"], [1, "col-md-6", "my-auto", "image"], ["src", "https://image.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg", "alt", "Boy on Computer"], [1, "col-md-6", "my-auto"], [1, "profile"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhnkpqR8kJoVqpOXDej-weTgEBgeABIe8jw&usqp=CAU", "alt", "profile"], [2, "text-align", "center", "font-weight", "bold"], [1, "form"], ["name", "form", 3, "formGroup", "ngSubmit"], [1, "form-group", "user"], [1, "m-1"], ["formControlName", "email", "name", "email", "type", "email", "placeholder", "Email", "autocomplete", "off", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], [1, "form-group", "pass"], ["formControlName", "password", "type", "password", "placeholder", "Password", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "forgot"], ["href", "#"], [1, "button"], ["type", "submit", "onsubmit", "form.valid", 1, "btn", "btn-outline-success"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "WELCOME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_13_listener() {
              return ctx.form.valid && ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 2, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 2, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Forgot Password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.form.get("email").touched && ctx.form.get("email").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").errors == null ? null : ctx.form.get("email").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").errors == null ? null : ctx.form.get("email").errors.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.form.get("password").touched && ctx.form.get("password").invalid));
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["body[_ngcontent-%COMP%]{\r\n    font-family: sans-serif;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]{\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    text-align: justify;\r\n    margin-left: -8%;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height : 500px;\r\n    background-color: black;\r\n}\r\n\r\n@media screen and (max-width:768px){\r\n    .image[_ngcontent-%COMP%]{\r\n            display: none;\r\n    }\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]{\r\n    text-align: center; \r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 90px;\r\n    height: 90px;\r\n    box-shadow: 2px 2px  gray;\r\n    border-radius: 50%;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-size: 25px;\r\n    position: relative;\r\n}\r\n\r\ni[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    color: #00BFA6;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\n    border-radius: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus{\r\n    padding: 5px;\r\n}\r\n\r\n.forgot[_ngcontent-%COMP%]{\r\n    font-size: 10px;\r\n    text-align: center;\r\n    width: 50%;\r\n    float: right;\r\n}\r\n\r\n.forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color : black;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    clear: both;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    margin-top: 3%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNDRTs7QUFFRixTQUFTOztBQUNUO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJO1lBQ1EsYUFBYTtJQUNyQjtBQUNKOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLndyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0ZjVhO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMTYlLCAxMDAlIDAsIDEwMCUgODQlLCAwJSAxMDAlKTtcclxufVxyXG5cclxuLmZvcm13cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0ZjVhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41ODkpO1xyXG59XHJcblxyXG4uaW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMjkwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFiMmYzNjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5pbnB1dDpmb2N1c3tcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmNGY1YTsgICBcclxufSovXHJcblxyXG4vKkthcnRoaSovXHJcbmJvZHl7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC04JTtcclxufVxyXG4uaW1hZ2UgaW1ne1xyXG4gICAgaGVpZ2h0IDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIC5pbWFnZXtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG4ucHJvZmlsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn1cclxuLnByb2ZpbGUgaW1ne1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4ICBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5mb3Jte1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbml7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzAwQkZBNjtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5mb3Jnb3R7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5mb3Jnb3QgYXtcclxuICAgIGNvbG9yIDogYmxhY2s7XHJcbn1cclxuLmJ1dHRvbntcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/auth/signup/signup.component.ts":
    /*!*************************************************!*\
      !*** ./src/app/auth/signup/signup.component.ts ***!
      \*************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function srcAppAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/users.service */
      "./src/app/services/users.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function SignupComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is required!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter Valid Email Address!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is required!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password does not match!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(usersService, router) {
          _classCallCheck(this, SignupComponent);

          this.usersService = usersService;
          this.router = router;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            mobno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            confPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.confirmPasswordCheck])
          });
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkLogin();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this8 = this;

            var loginJson = JSON.stringify(this.form.value);
            var x;
            this.usersService.signup(loginJson).subscribe(function (data) {
              if (data == false) {
                alert("Signup successful");
                /* It is to be added If user needs to be autmatic login if signup is succesfull */

                /*var jsonData = JSON.parse(loginJson);
                this.storeLogin(jsonData['email']);*/

                _this8.router.navigate(['/login']);

                return true;
              } else {
                alert(data);
                return;
              }
            });
          }
        }, {
          key: "storeLogin",
          value: function storeLogin(email) {
            sessionStorage.setItem("email", email);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin() {
            if (sessionStorage.length != 0) {
              this.router.navigate(['/']);
            }
          }
        }, {
          key: "confirmPasswordCheck",
          value: function confirmPasswordCheck(control) {
            if (control && control.value !== null || control.value != undefined) {
              var cnfPassword = control.value;
              var passControl = control.root.get('password');

              if (passControl) {
                var passValue = passControl.value;

                if (passValue !== cnfPassword) {
                  return {
                    isError: true
                  };
                }
              }
            }

            return null;
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 50,
        vars: 21,
        consts: [[1, "container"], [1, "row", "h-100"], [1, "row", "d-flex", "align-items-center"], [1, "col-md-6", "my-auto", "image"], ["src", "https://image.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg", "alt", "Boy on Computer"], [1, "col-md-6", "my-auto"], [1, "profile"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhnkpqR8kJoVqpOXDej-weTgEBgeABIe8jw&usqp=CAU", "alt", "profile"], [2, "text-align", "center", "font-weight", "bold"], [1, "form"], ["name", "form", 3, "formGroup", "ngSubmit"], [1, "form-group", "user"], [1, "m-1"], ["formControlName", "email", "autocomplete", "off", "type", "email", "placeholder", "Email", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["formControlName", "fullname", "type", "text", "placeholder", "Full Name", 1, "input", "form-control", 3, "ngClass"], ["formControlName", "mobno", "type", "text", "placeholder", "Mobile Number", 1, "input", "form-control", 3, "ngClass"], [1, "form-group", "pass"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "input", "form-control", 3, "ngClass"], ["type", "Password", "formControlName", "confPassword", "formControlName", "confPassword", "placeholder", "Confirm Password", 1, "input", "form-control", 3, "ngClass"], [1, "col-md-12", "mt-2", "mb-5", "d-flex", "flex-row", "justify-content-center"], [1, "m-1", "mt-4"], ["type", "reset", 1, "btn", "btn-outline-secondary"], ["type", "submit", 1, "btn", "btn-outline-success", 3, "disabled"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "WELCOME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_13_listener() {
              return ctx.form.valid && ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SignupComponent_div_18_Template, 2, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupComponent_div_19_Template, 2, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, SignupComponent_div_42_Template, 2, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SignupComponent_div_43_Template, 2, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.form.get("email").touched && ctx.form.get("email").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").errors == null ? null : ctx.form.get("email").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").errors == null ? null : ctx.form.get("email").errors.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.form.get("fullname").touched && ctx.form.get("fullname").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.form.get("mobno").touched && ctx.form.get("mobno").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.form.get("password").touched && ctx.form.get("password").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.form.get("confPassword").touched && ctx.form.get("confPassword").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("confPassword").errors == null ? null : ctx.form.get("confPassword").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("confPassword").errors == null ? null : ctx.form.get("confPassword").errors.isError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["body[_ngcontent-%COMP%]{\r\n    font-family: sans-serif;\r\n}\r\n.row[_ngcontent-%COMP%]{\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    text-align: justify;\r\n    margin-left: -8%;\r\n}\r\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height : 500px;\r\n    background-color: black;\r\n}\r\n@media screen and (max-width:768px){\r\n    .image[_ngcontent-%COMP%]{\r\n            display: none;\r\n    }\r\n}\r\n.profile[_ngcontent-%COMP%]{\r\n    text-align: center; \r\n}\r\n.profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 90px;\r\n    height: 90px;\r\n    box-shadow: 2px 2px  gray;\r\n    border-radius: 50%;\r\n}\r\n.form[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-size: 25px;\r\n    position: relative;\r\n}\r\ni[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    color: #00BFA6;\r\n}\r\n.form-control[_ngcontent-%COMP%]{\r\n    border-radius: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n}\r\n.form-control[_ngcontent-%COMP%]:focus{\r\n    padding: 5px;\r\n}\r\n.forgot[_ngcontent-%COMP%]{\r\n    font-size: 10px;\r\n    text-align: center;\r\n    width: 50%;\r\n    float: right;\r\n}\r\n.forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color : black;\r\n}\r\nbutton.btn.btn-outline-success[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    margin-top: 3%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBc0NFO0FBQ0YsU0FBUztBQUNUO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJO1lBQ1EsYUFBYTtJQUNyQjtBQUNKO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi53cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZDogI2ZkYzVhZiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDYwJSAxMDAlLCNmZmE0MzYgNSUsI2NjM2QwMCA5NCUpOztcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDE2JSwgMTAwJSAwLCAxMDAlIDg0JSwgMCUgMTAwJSk7XHJcbn1cclxuXHJcbi5mb3Jtd3JhcHBlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNGY1YTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTg5KTtcclxufVxyXG5cclxuLmlucHV0e1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxYjJmMzY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaW5wdXQ6Zm9jdXN7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjRmNWE7ICAgXHJcbn0qL1xyXG4vKkthcnRoaSovXHJcbmJvZHl7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC04JTtcclxufVxyXG4uaW1hZ2UgaW1ne1xyXG4gICAgaGVpZ2h0IDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIC5pbWFnZXtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG4ucHJvZmlsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn1cclxuLnByb2ZpbGUgaW1ne1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4ICBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5mb3Jte1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbml7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzAwQkZBNjtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5mb3Jnb3R7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5mb3Jnb3QgYXtcclxuICAgIGNvbG9yIDogYmxhY2s7XHJcbn1cclxuYnV0dG9uLmJ0bi5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/bookings/bookings.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/dashboard/bookings/bookings.component.ts ***!
      \**********************************************************/

    /*! exports provided: BookingsComponent */

    /***/
    function srcAppDashboardBookingsBookingsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingsComponent", function () {
        return BookingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/bookings.service */
      "./src/app/services/bookings.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function BookingsComponent_div_12_div_1_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cost :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var booking_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r3.cost, " Rs ");
        }
      }

      function BookingsComponent_div_12_div_1_div_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingsComponent_div_12_div_1_div_30_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var booking_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.endBooking(booking_r3.bookingid);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BookingsComponent_div_12_div_1_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Booking Completed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BookingsComponent_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Location :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Show Time : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Seating Type :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Count :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, BookingsComponent_div_12_div_1_div_29_Template, 4, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BookingsComponent_div_12_div_1_div_30_Template, 3, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BookingsComponent_div_12_div_1_div_31_Template, 3, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var booking_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r3.locationid, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r3.time, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r3.slotid, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r3.vehicle_type, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r3.duration, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", booking_r3.paid != 0 || booking_r3.paid == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", booking_r3.paid == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", booking_r3.paid != 0);
        }
      }

      function BookingsComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingsComponent_div_12_div_1_Template, 32, 8, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.bookings$);
        }
      }

      function BookingsComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No Bookings Found... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Book Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var BookingsComponent = /*#__PURE__*/function () {
        function BookingsComponent(bookingsService, router) {
          _classCallCheck(this, BookingsComponent);

          this.bookingsService = bookingsService;
          this.router = router;
          this.email$ = sessionStorage.getItem('email');
          this.bookings$ = [];
        }

        _createClass(BookingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkLogin();
            this.getBookingById();
          }
        }, {
          key: "getBookingById",
          value: function getBookingById() {
            var _this9 = this;

            return this.bookingsService.getBookings(this.email$).subscribe(function (data) {
              _this9.bookings$ = data, _this9.checkBookingFn();
            });
          }
        }, {
          key: "endBooking",
          value: function endBooking(bookingid) {
            var _this10 = this;

            return this.bookingsService.endBooking(bookingid).subscribe(function (data) {
              alert('Booking Confirmed');
              location.reload();

              _this10.router.navigate(['dashboard/bookings']);
            });
          }
        }, {
          key: "checkBookingFn",
          value: function checkBookingFn() {
            console.log();

            if (this.bookings$.length == 0) {
              this.show = true;
            } else {
              this.show = false;
            }
          }
        }, {
          key: "checkLogin",
          value: function checkLogin() {
            if (sessionStorage.length == 0) {
              this.router.navigate(['login']);
            }
          }
        }]);

        return BookingsComponent;
      }();

      BookingsComponent.ɵfac = function BookingsComponent_Factory(t) {
        return new (t || BookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__["BookingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      BookingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BookingsComponent,
        selectors: [["app-bookings"]],
        decls: 14,
        vars: 2,
        consts: [[1, "row", "mt-3", "justify-content-center"], [1, "col-md-11", "card"], [1, "row", 2, "background", "#cc3d00 radial-gradient(circle at 60% 100%,#ffa436 5%,#cc3d00 94%)", ";color", "black", "margin", "10px", "padding", "10px"], [1, "col-md-12", "d-flex", "justify-content-center"], [1, "row", "mt-2"], [1, "col-md-12"], [1, "row", "mb-3"], [1, "col-md-12", "overflow-auto", 2, "height", "35rem"], ["id", "accordionExample", 1, "accordion"], [4, "ngIf"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["id", "headingTwo", 1, "card-header"], [1, "row"], [1, "col-md-3"], [1, "col-md-7"], [1, "card-body"], [1, "col-auto", "mr-auto"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "button", 3, "click"], [1, "text-success", "font-weight-bold"], ["routerLink", "/dashboard", 1, "button"]],
        template: function BookingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Bookings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BookingsComponent_div_12_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BookingsComponent_div_13_Template, 5, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: [".button[_ngcontent-%COMP%]{\r\n    margin-left: 7px;\r\n    margin-right: 7px;\r\n    border: none;\r\n    width: 120px;\r\n    color: white;\r\n    height: 35px;\r\n    background-color: #ff4f5a;\r\n    font-weight: 900;\r\n    border-radius: 5px;\r\n}\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 0px;\r\n    background: transparent; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Jvb2tpbmdzL2Jvb2tpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QixFQUFFLCtCQUErQjtBQUM1RCIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ib29raW5ncy9ib29raW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjRmNWE7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAvKiBtYWtlIHNjcm9sbGJhciB0cmFuc3BhcmVudCAqL1xyXG59ICAgIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bookings',
            templateUrl: './bookings.component.html',
            styleUrls: ['./bookings.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__["BookingsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/bookslot/bookslot.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/dashboard/bookslot/bookslot.component.ts ***!
      \**********************************************************/

    /*! exports provided: BookslotComponent */

    /***/
    function srcAppDashboardBookslotBookslotComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookslotComponent", function () {
        return BookslotComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/bookings.service */
      "./src/app/services/bookings.service.ts");
      /* harmony import */


      var src_app_services_slots_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/slots.service */
      "./src/app/services/slots.service.ts");
      /* harmony import */


      var src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/vehicle.service */
      "./src/app/services/vehicle.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function BookslotComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BookslotComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookslotComponent_div_24_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.bookingdetails.slotid = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slot_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", slot_r3.slotno);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", slot_r3.slotid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.bookingdetails.slotid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", slot_r3.slotno);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slot_r3.slotno);
        }
      }

      function BookslotComponent_option_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vehicle_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", vehicle_r6.vehicle_type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vehicle_r6.vehicle_type);
        }
      }

      var BookslotComponent = /*#__PURE__*/function () {
        function BookslotComponent(bookings, slotsService, vehicleService, actRoute, router) {
          _classCallCheck(this, BookslotComponent);

          this.bookings = bookings;
          this.slotsService = slotsService;
          this.vehicleService = vehicleService;
          this.actRoute = actRoute;
          this.router = router;
          this.locationid = this.actRoute.snapshot.params['locationid']; //bannerimage = this.actRoute.snapshot.params['bannerimage'];
          //locationname = this.actRoute.snapshot.params['location_image'];

          this.currentDate = new Date();
          this.date = this.currentDate.getDate() + '-' + this.currentDate.getMonth() + '-' + this.currentDate.getFullYear();
          this.bookingdetails = {
            'email': '',
            'locationid': '',
            'vehicle_type': '',
            'duration': 0,
            'time': '',
            'slotid': '',
            'date': '',
            'vehicle_no': ''
          };
        }

        _createClass(BookslotComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.load = false;
            this.getVehicles();
            this.getSlotById();
          }
        }, {
          key: "getVehicles",
          value: function getVehicles() {
            var _this11 = this;

            return this.vehicleService.getVehicles().subscribe(function (data) {
              return _this11.vehicles$ = data;
            });
          }
        }, {
          key: "getSlotById",
          value: function getSlotById() {
            var _this12 = this;

            return this.slotsService.getSlotById(this.locationid).subscribe(function (data) {
              return _this12.slots$ = data;
            });
          }
        }, {
          key: "addBooking",
          value: function addBooking() {
            var _this13 = this;

            if (this.bookingdetails.vehicle_type == '' || this.bookingdetails.slotid == '' || this.bookingdetails.duration == 0) {
              alert('Kindly fill all the data');
              return;
            }
            /*if (!this.checkTime(this.bookingdetails.time)){
              alert("OOPS!! Try booking 2 hours earlier..")
              return
            }*/


            this.load = true;
            this.bookings.addBooking(this.locationid, this.bookingdetails).subscribe(function (data) {
              alert('Show Booked');

              _this13.router.navigate(['/dashboard/bookings']);
            });
          }
        }]);

        return BookslotComponent;
      }();

      BookslotComponent.ɵfac = function BookslotComponent_Factory(t) {
        return new (t || BookslotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__["BookingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_slots_service__WEBPACK_IMPORTED_MODULE_2__["SlotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      BookslotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BookslotComponent,
        selectors: [["app-bookslot"]],
        inputs: {
          bookingdetails: "bookingdetails"
        },
        decls: 114,
        vars: 7,
        consts: [[1, "row", "mt-3", "justify-content-center"], [1, "col-md-11", "card"], [1, "row", 2, "background", "#cc3d00 radial-gradient(circle at 60% 100%,#ffa436 5%,#cc3d00 94%)", ";color", "black", "margin", "10px", "padding", "10px"], [1, "col-md-12", "d-flex", "justify-content-center"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "row", "mt-2"], [1, "col-md-12"], [1, "row", "mb-3"], ["name", "bookingForm", 1, "card"], [1, "col-md-12", "mt-2", "mb-3"], [1, "row", "m-2"], ["type", "date", "id", "time", "min", "27", "max", "2026-03-24", "name", "time", 3, "ngModel", "ngModelChange"], [1, "m-2"], [1, "row", "border"], ["class", "col-2 m-1 pt-3 pb-0", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mb-3", "ml-2"], ["name", "duration", "id", "duration", "type", "number", "min", "1", "max", "24", "id", "duration", "placeholder", "No Of Tickets", "autocomplete", "off", "required", "", 1, "input", "mt-0", 3, "ngModel", "ngModelChange"], [1, "seater"], [1, "showcase"], [1, "seat"], [1, "seat", "selected"], [1, "seat", "occupied"], [1, "container"], [1, "screen"], [1, "seating"], [1, "row"], [1, "col-md-12", "m-2"], [1, "form-group"], ["for", "vehicle_type"], ["name", "vehicle_type", "id", "vehicle_type", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mt-3", "mb-5"], [1, "m-1", "mt-2"], [1, "col-2"], ["type", "reset", "value", "Reset", 1, "button"], [1, "col"], [1, "button", 3, "click"], [1, "d-flex", "justify-content-center"], [1, "loadingio-spinner-pulse-f18fi8swilg"], [1, "ldio-letfb25733"], [1, "col-2", "m-1", "pt-3", "pb-0"], ["type", "radio", "name", "disabled", 3, "ngModel", "id", "value", "ngModelChange"], ["id", "slot", 3, "for"], [3, "value"]],
        template: function BookslotComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Book Ticket");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BookslotComponent_div_6_Template, 6, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Select Date : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookslotComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.bookingdetails.time = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Select Show");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BookslotComponent_div_24_Template, 6, 5, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Enter the Number of Tickets : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookslotComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.bookingdetails.duration = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "N/A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Selected");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Occupied");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Select Seating");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookslotComponent_Template_select_ngModelChange_104_listener($event) {
              return ctx.bookingdetails.vehicle_type = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, BookslotComponent_option_105_Template, 2, 2, "option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookslotComponent_Template_button_click_112_listener() {
              return ctx.addBooking();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Book Show");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID: ", ctx.locationid, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookingdetails.time);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slots$);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookingdetails.duration);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookingdetails.vehicle_type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vehicles$);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]],
        styles: [".formwrapper[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n.button[_ngcontent-%COMP%]{\r\n    border: none;\r\n    width: 220px;\r\n    margin-top: 10px;\r\n    color: white;\r\n    height: 35px;\r\n    background-color: #ff4f5a;\r\n    font-weight: 900;\r\n    border-radius: 5px;\r\n    margin-left: 10%;\r\n}\r\n.input[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    padding: 5px 10px;\r\n    border: none;\r\n    width: 100%;\r\n    border-bottom: 1px solid #1b2f36;\r\n    color: black;\r\n    transition: all .2s ease-in-out;\r\n}\r\n.input[_ngcontent-%COMP%]:focus{\r\n    border: none;\r\n    outline: none;\r\n    border-bottom: 1px solid #ff4f5a;   \r\n}\r\n.button-slot[_ngcontent-%COMP%]{\r\n    border: none;\r\n    width: 120px;\r\n    margin-top: 10px;\r\n    color: white;\r\n    height: 35px;\r\n    background-color: #ff4f5a;\r\n    font-weight: 900;\r\n    border-radius: 5px;\r\n}\r\n.button-slot[_ngcontent-%COMP%]:focus{\r\n    border: none;\r\n    width: 120px;\r\n    margin-top: 10px;\r\n    color: white;\r\n    height: 35px;\r\n    background-color: #17a2b8;\r\n    font-weight: 900;\r\n    border-radius: 5px;\r\n}\r\n.button-slot[_ngcontent-%COMP%]:disabled{\r\n    border: none;\r\n    width: 120px;\r\n    margin-top: 10px;\r\n    color: #000;\r\n    height: 35px;\r\n    background-color: #b5aeae;\r\n    font-weight: 900;\r\n    border-radius: 5px;\r\n}\r\ninput[type=\"radio\"][_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\ninput[type=\"radio\"][_ngcontent-%COMP%]:checked    + #slot[_ngcontent-%COMP%] {\r\n    background: hsla(150, 75%, 50%, 1);\r\n    color: hsla(215, 0%, 100%, 1);\r\n    box-shadow: 0px 0px 10px hsla(150, 100%, 50%, 0.75);\r\n\r\n  }\r\ninput[type = \"radio\"][_ngcontent-%COMP%]:disabled    + #slot[_ngcontent-%COMP%]{\r\n    color: hsla(150, 5%, 75%, 1);\r\n    border-color: hsla(150, 5%, 75%, 1);\r\n    box-shadow: none;\r\n    cursor: not-allowed;\r\n  }\r\n#slot[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    display: block;\r\n    background: white;\r\n    border: 2px solid hsla(150, 75%, 50%, 1);\r\n    text-align: center;\r\n    box-shadow: 0px 3px 10px -2px hsla(150, 5%, 65%, 0.5);\r\n    cursor: pointer;\r\n  }\r\n@-webkit-keyframes ldio-letfb25733-1 {\r\n    0% { top: 36px; height: 128px }\r\n    50% { top: 60px; height: 80px }\r\n    100% { top: 60px; height: 80px }\r\n  }\r\n@keyframes ldio-letfb25733-1 {\r\n    0% { top: 36px; height: 128px }\r\n    50% { top: 60px; height: 80px }\r\n    100% { top: 60px; height: 80px }\r\n  }\r\n@-webkit-keyframes ldio-letfb25733-2 {\r\n    0% { top: 41.99999999999999px; height: 116.00000000000001px }\r\n    50% { top: 60px; height: 80px }\r\n    100% { top: 60px; height: 80px }\r\n  }\r\n@keyframes ldio-letfb25733-2 {\r\n    0% { top: 41.99999999999999px; height: 116.00000000000001px }\r\n    50% { top: 60px; height: 80px }\r\n    100% { top: 60px; height: 80px }\r\n  }\r\n@-webkit-keyframes ldio-letfb25733-3 {\r\n    0% { top: 48px; height: 104px }\r\n    50% { top: 60px; height: 80px }\r\n    100% { top: 60px; height: 80px }\r\n  }\r\n@keyframes ldio-letfb25733-3 {\r\n    0% { top: 48px; height: 104px }\r\n    50% { top: 60px; height: 80px }\r\n    100% { top: 60px; height: 80px }\r\n  }\r\n.ldio-letfb25733[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { position: absolute; width: 30px }\r\n.ldio-letfb25733[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n    left: 35px;\r\n    background: #e15b64;\r\n    -webkit-animation: ldio-letfb25733-1 1s cubic-bezier(0,0.5,0.5,1) infinite;\r\n            animation: ldio-letfb25733-1 1s cubic-bezier(0,0.5,0.5,1) infinite;\r\n    -webkit-animation-delay: -0.2s;\r\n            animation-delay: -0.2s\r\n  }\r\n.ldio-letfb25733[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n    left: 85px;\r\n    background: #f8b26a;\r\n    -webkit-animation: ldio-letfb25733-2 1s cubic-bezier(0,0.5,0.5,1) infinite;\r\n            animation: ldio-letfb25733-2 1s cubic-bezier(0,0.5,0.5,1) infinite;\r\n    -webkit-animation-delay: -0.1s;\r\n            animation-delay: -0.1s\r\n  }\r\n.ldio-letfb25733[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n    left: 135px;\r\n    background: #abbd81;\r\n    -webkit-animation: ldio-letfb25733-3 1s cubic-bezier(0,0.5,0.5,1) infinite;\r\n            animation: ldio-letfb25733-3 1s cubic-bezier(0,0.5,0.5,1) infinite;\r\n    -webkit-animation-delay: undefineds;\r\n            animation-delay: undefineds\r\n  }\r\n.loadingio-spinner-pulse-f18fi8swilg[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 200px;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    background: #ffffff;\r\n  }\r\n.ldio-letfb25733[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    transform: translateZ(0) scale(1);\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    transform-origin: 0 0; \r\n  }\r\n.ldio-letfb25733[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: content-box; }\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n.seater[_ngcontent-%COMP%]{\r\n  width: 25%;\r\n  margin-left: 25%;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  background-color: #242333;\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  font-family: 'Lato', sans-serif;\r\n  margin: 0;\r\n}\r\n.movie-container[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n}\r\n.movie-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  border: 0;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  margin-left: 10px;\r\n  padding: 5px 15px 5px 15px;\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  perspective: 1000px;\r\n  margin-bottom: 30px;\r\n}\r\n.seat[_ngcontent-%COMP%] {\r\n  background-color: #444451;\r\n  height: 12px;\r\n  width: 15px;\r\n  margin: 3px;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n.seat.selected[_ngcontent-%COMP%] {\r\n  background-color: #6feaf6;\r\n}\r\n.seat.occupied[_ngcontent-%COMP%] {\r\n  background-color: red;\r\n}\r\n.seat[_ngcontent-%COMP%]:nth-of-type(2) {\r\n  margin-right: 18px;\r\n}\r\n.seat[_ngcontent-%COMP%]:nth-last-of-type(2) {\r\n  margin-left: 18px;\r\n}\r\n.seat[_ngcontent-%COMP%]:not(.occupied):hover {\r\n  cursor: pointer;\r\n  transform: scale(1.2);\r\n  background-color: #6feaf6;\r\n}\r\n.showcase[_ngcontent-%COMP%]   .seat[_ngcontent-%COMP%]:not(.occupied):hover {\r\n  cursor: default;\r\n  transform: scale(1);\r\n}\r\n.showcase[_ngcontent-%COMP%] {\r\n  background:  #6feaf6(0, 0, 0, 0.1);\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  color: black;\r\n  list-style-type: none;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.showcase[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 10px;\r\n}\r\n.showcase[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  margin-left: 2px;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n.screen[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  height: 70px;\r\n  width: 100%;\r\n  margin: 15px 0;\r\n  transform: rotateX(-45deg);\r\n  box-shadow: 0 3px 10px rgba(255, 255, 255, 0.103);\r\n}\r\np.text[_ngcontent-%COMP%] {\r\n  margin: 5px 0;\r\n}\r\np.text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #6feaf6;\r\n}\r\n.seat[_ngcontent-%COMP%]:not(.occupied):focus{\r\n  background-color: #6feaf6;\r\n}\r\n.seat[_ngcontent-%COMP%]:not(.occupied):active{\r\n  background-color: #6feaf6;\r\n}\r\n.seat[_ngcontent-%COMP%]:not(.occupied):visited{\r\n  background-color: #6feaf6;\r\n}\r\n.seating[_ngcontent-%COMP%]{\r\n  margin-left: 15%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Jvb2tzbG90L2Jvb2tzbG90LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLCtCQUErQjtBQUNuQztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGFBQWE7RUFDZjtBQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3QixtREFBbUQ7O0VBRXJEO0FBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIscURBQXFEO0lBQ3JELGVBQWU7RUFDakI7QUFFQTtJQUNFLEtBQUssU0FBUyxFQUFFLGNBQWM7SUFDOUIsTUFBTSxTQUFTLEVBQUUsYUFBYTtJQUM5QixPQUFPLFNBQVMsRUFBRSxhQUFhO0VBQ2pDO0FBSkE7SUFDRSxLQUFLLFNBQVMsRUFBRSxjQUFjO0lBQzlCLE1BQU0sU0FBUyxFQUFFLGFBQWE7SUFDOUIsT0FBTyxTQUFTLEVBQUUsYUFBYTtFQUNqQztBQUNBO0lBQ0UsS0FBSyx3QkFBd0IsRUFBRSw2QkFBNkI7SUFDNUQsTUFBTSxTQUFTLEVBQUUsYUFBYTtJQUM5QixPQUFPLFNBQVMsRUFBRSxhQUFhO0VBQ2pDO0FBSkE7SUFDRSxLQUFLLHdCQUF3QixFQUFFLDZCQUE2QjtJQUM1RCxNQUFNLFNBQVMsRUFBRSxhQUFhO0lBQzlCLE9BQU8sU0FBUyxFQUFFLGFBQWE7RUFDakM7QUFDQTtJQUNFLEtBQUssU0FBUyxFQUFFLGNBQWM7SUFDOUIsTUFBTSxTQUFTLEVBQUUsYUFBYTtJQUM5QixPQUFPLFNBQVMsRUFBRSxhQUFhO0VBQ2pDO0FBSkE7SUFDRSxLQUFLLFNBQVMsRUFBRSxjQUFjO0lBQzlCLE1BQU0sU0FBUyxFQUFFLGFBQWE7SUFDOUIsT0FBTyxTQUFTLEVBQUUsYUFBYTtFQUNqQztBQUNBLHVCQUF1QixrQkFBa0IsRUFBRSxZQUFZO0FBQUM7SUFDdEQsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiwwRUFBa0U7WUFBbEUsa0VBQWtFO0lBQ2xFLDhCQUFxQjtZQUFyQjtFQUNGO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDBFQUFrRTtZQUFsRSxrRUFBa0U7SUFDbEUsOEJBQXFCO1lBQXJCO0VBQ0Y7QUFDQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsMEVBQWtFO1lBQWxFLGtFQUFrRTtJQUNsRSxtQ0FBMEI7WUFBMUI7RUFDRjtBQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IscUJBQXFCLEVBQUUsbUJBQW1CO0VBQzVDO0FBQ0EsdUJBQXVCLHVCQUF1QixFQUFFO0FBR2hELHFCQUFxQjtBQUN2QjtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixTQUFTO0FBQ1g7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixpREFBaUQ7QUFDbkQ7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Jvb2tzbG90L2Jvb2tzbG90LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybXdyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uYnV0dG9ue1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjRmNWE7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuXHJcbi5pbnB1dHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxYjJmMzY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaW5wdXQ6Zm9jdXN7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjRmNWE7ICAgXHJcbn1cclxuXHJcbi5idXR0b24tc2xvdHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0ZjVhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uYnV0dG9uLXNsb3Q6Zm9jdXN7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmJ1dHRvbi1zbG90OmRpc2FibGVke1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I1YWVhZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyAjc2xvdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDE1MCwgNzUlLCA1MCUsIDEpO1xyXG4gICAgY29sb3I6IGhzbGEoMjE1LCAwJSwgMTAwJSwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggaHNsYSgxNTAsIDEwMCUsIDUwJSwgMC43NSk7XHJcblxyXG4gIH1cclxuICBpbnB1dFt0eXBlID0gXCJyYWRpb1wiXTpkaXNhYmxlZCArICNzbG90e1xyXG4gICAgY29sb3I6IGhzbGEoMTUwLCA1JSwgNzUlLCAxKTtcclxuICAgIGJvcmRlci1jb2xvcjogaHNsYSgxNTAsIDUlLCA3NSUsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG4gICNzbG90IHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBoc2xhKDE1MCwgNzUlLCA1MCUsIDEpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IC0ycHggaHNsYSgxNTAsIDUlLCA2NSUsIDAuNSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfSAgICAgXHJcbiBcclxuICBAa2V5ZnJhbWVzIGxkaW8tbGV0ZmIyNTczMy0xIHtcclxuICAgIDAlIHsgdG9wOiAzNnB4OyBoZWlnaHQ6IDEyOHB4IH1cclxuICAgIDUwJSB7IHRvcDogNjBweDsgaGVpZ2h0OiA4MHB4IH1cclxuICAgIDEwMCUgeyB0b3A6IDYwcHg7IGhlaWdodDogODBweCB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbGRpby1sZXRmYjI1NzMzLTIge1xyXG4gICAgMCUgeyB0b3A6IDQxLjk5OTk5OTk5OTk5OTk5cHg7IGhlaWdodDogMTE2LjAwMDAwMDAwMDAwMDAxcHggfVxyXG4gICAgNTAlIHsgdG9wOiA2MHB4OyBoZWlnaHQ6IDgwcHggfVxyXG4gICAgMTAwJSB7IHRvcDogNjBweDsgaGVpZ2h0OiA4MHB4IH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZGlvLWxldGZiMjU3MzMtMyB7XHJcbiAgICAwJSB7IHRvcDogNDhweDsgaGVpZ2h0OiAxMDRweCB9XHJcbiAgICA1MCUgeyB0b3A6IDYwcHg7IGhlaWdodDogODBweCB9XHJcbiAgICAxMDAlIHsgdG9wOiA2MHB4OyBoZWlnaHQ6IDgwcHggfVxyXG4gIH1cclxuICAubGRpby1sZXRmYjI1NzMzIGRpdiB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDMwcHggfS5sZGlvLWxldGZiMjU3MzMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICBsZWZ0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2UxNWI2NDtcclxuICAgIGFuaW1hdGlvbjogbGRpby1sZXRmYjI1NzMzLTEgMXMgY3ViaWMtYmV6aWVyKDAsMC41LDAuNSwxKSBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMnNcclxuICB9XHJcbiAgLmxkaW8tbGV0ZmIyNTczMyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIGxlZnQ6IDg1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhiMjZhO1xyXG4gICAgYW5pbWF0aW9uOiBsZGlvLWxldGZiMjU3MzMtMiAxcyBjdWJpYy1iZXppZXIoMCwwLjUsMC41LDEpIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xc1xyXG4gIH1cclxuICAubGRpby1sZXRmYjI1NzMzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgbGVmdDogMTM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWJiZDgxO1xyXG4gICAgYW5pbWF0aW9uOiBsZGlvLWxldGZiMjU3MzMtMyAxcyBjdWJpYy1iZXppZXIoMCwwLjUsMC41LDEpIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiB1bmRlZmluZWRzXHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkaW5naW8tc3Bpbm5lci1wdWxzZS1mMThmaThzd2lsZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5sZGlvLWxldGZiMjU3MzMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7IC8qIHNlZSBub3RlIGFib3ZlICovXHJcbiAgfVxyXG4gIC5sZGlvLWxldGZiMjU3MzMgZGl2IHsgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cclxuXHJcblxyXG4gIC8qRm9yIFNlYXQgU2VsZWN0aW9uKi9cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uc2VhdGVye1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyMzMzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tb3ZpZS1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4ubW92aWUtY29udGFpbmVyIHNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnNlYXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NTE7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIG1hcmdpbjogM3B4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWF0LnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZlYWY2O1xyXG59XHJcblxyXG4uc2VhdC5vY2N1cGllZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uc2VhdDpudGgtb2YtdHlwZSgyKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uc2VhdDpudGgtbGFzdC1vZi10eXBlKDIpIHtcclxuICBtYXJnaW4tbGVmdDogMThweDtcclxufVxyXG5cclxuLnNlYXQ6bm90KC5vY2N1cGllZCk6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmZWFmNjtcclxufVxyXG5cclxuLnNob3djYXNlIC5zZWF0Om5vdCgub2NjdXBpZWQpOmhvdmVyIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuLnNob3djYXNlIHtcclxuICBiYWNrZ3JvdW5kOiAgIzZmZWFmNigwLCAwLCAwLCAwLjEpO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2hvd2Nhc2UgbGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLnNob3djYXNlIGxpIHNtYWxsIHtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc2NyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC00NWRlZyk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTAzKTtcclxufVxyXG5cclxucC50ZXh0IHtcclxuICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG5wLnRleHQgc3BhbiB7XHJcbiAgY29sb3I6ICM2ZmVhZjY7XHJcbn1cclxuLnNlYXQ6bm90KC5vY2N1cGllZCk6Zm9jdXN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmZWFmNjtcclxufVxyXG4uc2VhdDpub3QoLm9jY3VwaWVkKTphY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmZWFmNjtcclxufVxyXG4uc2VhdDpub3QoLm9jY3VwaWVkKTp2aXNpdGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZmVhZjY7XHJcbn1cclxuLnNlYXRpbmd7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookslotComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bookslot',
            templateUrl: './bookslot.component.html',
            styleUrls: ['./bookslot.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__["BookingsService"]
          }, {
            type: src_app_services_slots_service__WEBPACK_IMPORTED_MODULE_2__["SlotsService"]
          }, {
            type: src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, {
          bookingdetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/dashboard.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _header_login_header_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../header-login/header-login.component */
      "./src/app/header-login/header-login.component.ts");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(router) {
          _classCallCheck(this, DashboardComponent);

          this.router = router;
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkLogin();
          }
        }, {
          key: "checkLogin",
          value: function checkLogin() {
            if (sessionStorage.length == 0) {
              this.router.navigate(['login']);
            }
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 11,
        vars: 0,
        consts: [[1, "row", "justify-content-center"], [1, "col-md-2", "p-0", "sidebar", "d-flex", "align-items-center", "flex-column"], ["routerLink", "/dashboard", 1, "button"], ["routerLink", "/dashboard/bookings", 1, "button"], [1, "col-md-10"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Available Movies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "My Bookings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_header_login_header_login_component__WEBPACK_IMPORTED_MODULE_2__["HeaderLoginComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".sidebar[_ngcontent-%COMP%]{\r\n    box-shadow: 5px 0 5px -5px #333 ;\r\n    height: 90vh;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    border: none;\r\n    width: 220px;\r\n    margin-top: 10px;\r\n    color: white;\r\n    height: 35px;\r\n    background-color: #ff4f5a;\r\n    font-weight: 900;\r\n    border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJ7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMCA1cHggLTVweCAjMzMzIDtcclxuICAgIGhlaWdodDogOTB2aDtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0ZjVhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/slots/slots.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/dashboard/slots/slots.component.ts ***!
      \****************************************************/

    /*! exports provided: SlotsComponent */

    /***/
    function srcAppDashboardSlotsSlotsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlotsComponent", function () {
        return SlotsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/locations.service */
      "./src/app/services/locations.service.ts");
      /* harmony import */


      var src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/vehicle.service */
      "./src/app/services/vehicle.service.ts");
      /* harmony import */


      var src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/dashboard/dashboard.component */
      "./src/app/dashboard/dashboard.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function SlotsComponent_div_12_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vehicle_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", vehicle_r3.vehicle_type, " : Rs ", vehicle_r3.cost, "");
        }
      }

      function SlotsComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Book Now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Location :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " About : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Shows :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Seatings : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SlotsComponent_div_12_div_36_Template, 3, 2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var location_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r1.location_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/bookslot/", location_r1.locationid, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r1.area);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r1.cast);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", location_r1.slots, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.vehicles$);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", location_r1.bannerimage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var SlotsComponent = /*#__PURE__*/function () {
        function SlotsComponent(locationsService, vehicleService, dashboardComponent) {
          _classCallCheck(this, SlotsComponent);

          this.locationsService = locationsService;
          this.vehicleService = vehicleService;
          this.dashboardComponent = dashboardComponent;
          this.sessionValue = "";
        }

        _createClass(SlotsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dashboardComponent.checkLogin();
            this.loadLocations();
            this.loadVehicle();
          }
        }, {
          key: "loadLocations",
          value: function loadLocations() {
            var _this14 = this;

            return this.locationsService.getLocations().subscribe(function (data) {
              return _this14.locations$ = data;
            });
          }
        }, {
          key: "loadVehicle",
          value: function loadVehicle() {
            var _this15 = this;

            return this.vehicleService.getVehicles().subscribe(function (data) {
              return _this15.vehicles$ = data;
            });
          }
        }]);

        return SlotsComponent;
      }();

      SlotsComponent.ɵfac = function SlotsComponent_Factory(t) {
        return new (t || SlotsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_1__["LocationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]));
      };

      SlotsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SlotsComponent,
        selectors: [["app-slots"]],
        decls: 13,
        vars: 1,
        consts: [[1, "row", "mt-3", "justify-content-center"], [1, "col-md-11", "card"], [1, "row", 2, "background", "#cc3d00 radial-gradient(circle at 60% 100%,#ffa436 5%,#cc3d00 94%)", "color", "Black", "margin", "10px", "padding", "10px"], [1, "col-md-12", "d-flex", "justify-content-center"], [1, "row", "mt-2"], [1, "col-md-12"], [1, "row", "mb-3"], [1, "col-md-12", "overflow-auto", 2, "height", "35rem"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-header", "flex-row"], [1, "row"], [1, "col-md-8"], [1, "col-auto"], ["type", "button", 1, "button", 3, "routerLink"], [1, "card-body"], [1, "col-md-7", "mr-auto"], [1, "col-auto", "mr-auto"], [4, "ngFor", "ngForOf"], ["width", "163px", "height", "208px", "alt", "error", 3, "src"]],
        template: function SlotsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Movies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SlotsComponent_div_12_Template, 41, 7, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locations$);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
        styles: [".button[_ngcontent-%COMP%]{\r\n    margin-left: 160%;\r\n    border: none;\r\n    width: 120px;\r\n    color: white;\r\n    height: 35px;\r\n    background-color: #ff4f5a;\r\n    font-weight: 900;\r\n    border-radius: 5px;\r\n    margin-top: 10px;\r\n}\r\n.image[_ngcontent-%COMP%]{\r\n    margin-left: 80%;\r\n}\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 0px;\r\n    background: transparent; \r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    margin-bottom: 6%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Nsb3RzL3Nsb3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCLEVBQUUsK0JBQStCO0FBQzVEO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc2xvdHMvc2xvdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogMTYwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjRmNWE7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uaW1hZ2V7XHJcbiAgICBtYXJnaW4tbGVmdDogODAlO1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAvKiBtYWtlIHNjcm9sbGJhciB0cmFuc3BhcmVudCAqL1xyXG59XHJcbi5jYXJke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNiU7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlotsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-slots',
            templateUrl: './slots.component.html',
            styleUrls: ['./slots.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_1__["LocationsService"]
          }, {
            type: src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"]
          }, {
            type: src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/header-login/header-login.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/header-login/header-login.component.ts ***!
      \********************************************************/

    /*! exports provided: HeaderLoginComponent */

    /***/
    function srcAppHeaderLoginHeaderLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderLoginComponent", function () {
        return HeaderLoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var HeaderLoginComponent = /*#__PURE__*/function () {
        function HeaderLoginComponent(router) {
          _classCallCheck(this, HeaderLoginComponent);

          this.router = router;
        }

        _createClass(HeaderLoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            sessionStorage.clear();
            console.log(sessionStorage);
            this.router.navigate(['login']);
          }
        }]);

        return HeaderLoginComponent;
      }();

      HeaderLoginComponent.ɵfac = function HeaderLoginComponent_Factory(t) {
        return new (t || HeaderLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      HeaderLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderLoginComponent,
        selectors: [["app-header-login"]],
        decls: 14,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 2, "background-color", "#2089E4 !important", "box-shadow", "0px 0px 8px rgba(128, 128, 128, 0.438)"], ["href", "#", 1, "navbar-brand", 2, "color", "white"], [1, "fas", "fa-film", 2, "color", "white", "font-size", "30px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "form-inline", "my-2", "my-lg-0"], ["routerLink", "/", 1, "button"], [1, "button", 3, "click"]],
        template: function HeaderLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My-Movies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderLoginComponent_Template_button_click_12_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: [".button[_ngcontent-%COMP%]{\r\n    margin-left: 7px;\r\n    margin-right: 7px;\r\n    border: none;\r\n    width: 120px;\r\n    color: BLACK;\r\n    height: 35px;\r\n    font-weight: 900;\r\n    border-radius: 4px;\r\n    border: 1PX SOLID #FFDC5A;\r\n    background-color: #FFDC5A;\r\n}\r\n.button[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    border: 1PX SOLID #FFDC5A;\r\n    background-color: #ffa436;\r\n}\r\n.navbar[_ngcontent-%COMP%]{\r\n    background: #cc3d00 radial-gradient(circle at 60% 100%,#ffa436 5%,#cc3d00 94%);\r\n}\r\nb[_ngcontent-%COMP%]{\r\n    margin-left: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLWxvZ2luL2hlYWRlci1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksOEVBQThFO0FBQ2xGO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXItbG9naW4vaGVhZGVyLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgY29sb3I6IEJMQUNLO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMVBYIFNPTElEICNGRkRDNUE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQzVBO1xyXG59XHJcbi5idXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IDFQWCBTT0xJRCAjRkZEQzVBO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTQzNjtcclxufVxyXG4ubmF2YmFye1xyXG4gICAgYmFja2dyb3VuZDogI2NjM2QwMCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDYwJSAxMDAlLCNmZmE0MzYgNSUsI2NjM2QwMCA5NCUpO1xyXG59XHJcbmJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderLoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header-login',
            templateUrl: './header-login.component.html',
            styleUrls: ['./header-login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/header/header.component.ts":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 16,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 2, "background-color", "#2089E4 !important", "box-shadow", "0px 0px 8px rgba(128, 128, 128, 0.438)"], ["href", "#", 1, "navbar-brand", 2, "color", "white"], [1, "fas", "fa-film", 2, "color", "white", "font-size", "30px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "form-inline", "my-2", "my-lg-0"], ["routerLink", "/", 1, "button"], ["routerLink", "/signup", 1, "button"], ["routerLink", "/login", 1, "button"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My-Movies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: [".button[_ngcontent-%COMP%]{\r\n    margin-left: 7px;\r\n    margin-right: 7px;\r\n    border: none;\r\n    width: 120px;\r\n    color: BLACK;\r\n    height: 35px;\r\n    font-weight: 900;\r\n    border-radius: 4px;\r\n    border: 1PX SOLID #FFDC5A;\r\n    background-color: #FFDC5A;\r\n}\r\n.button[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    border: 1PX SOLID #FFDC5A;\r\n    background-color: #ffa436;\r\n}\r\n.navbar[_ngcontent-%COMP%]{\r\n    background: #cc3d00 radial-gradient(circle at 60% 100%,#ffa436 5%,#cc3d00 94%);\r\n}\r\nb[_ngcontent-%COMP%]{\r\n    margin-left: 15px;\r\n}\r\n.fas[_ngcontent-%COMP%]   fa-film[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksOEVBQThFO0FBQ2xGO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgY29sb3I6IEJMQUNLO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMVBYIFNPTElEICNGRkRDNUE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQzVBO1xyXG59XHJcbi5idXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IDFQWCBTT0xJRCAjRkZEQzVBO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTQzNjtcclxufVxyXG4ubmF2YmFye1xyXG4gICAgYmFja2dyb3VuZDogI2NjM2QwMCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDYwJSAxMDAlLCNmZmE0MzYgNSUsI2NjM2QwMCA5NCUpO1xyXG59XHJcbmJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4uZmFzIGZhLWZpbG17XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/home-main-section/home-main-section.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/home-main-section/home-main-section.component.ts ***!
      \******************************************************************/

    /*! exports provided: HomeMainSectionComponent */

    /***/
    function srcAppHomeMainSectionHomeMainSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeMainSectionComponent", function () {
        return HomeMainSectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var HomeMainSectionComponent = /*#__PURE__*/function () {
        function HomeMainSectionComponent(router) {
          _classCallCheck(this, HomeMainSectionComponent);

          this.router = router;
        }

        _createClass(HomeMainSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "checkSession",
          value: function checkSession() {
            if (sessionStorage.length == 0) {
              this.router.navigate(['/login']);
            } else {
              this.router.navigate(['/dashboard']);
            }
          }
        }]);

        return HomeMainSectionComponent;
      }();

      HomeMainSectionComponent.ɵfac = function HomeMainSectionComponent_Factory(t) {
        return new (t || HomeMainSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      HomeMainSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeMainSectionComponent,
        selectors: [["app-home-main-section"]],
        decls: 49,
        vars: 0,
        consts: [[1, "row", "d-flex", "justify-content-center", 2, "height", "70vh"], [1, "col-md-6", "d-flex", "justify-content-center", "p-0", "align-items-center", "flex-column"], [1, ""], [1, "getquotebtn", "btn-warning", 3, "click"], [1, "col-md-6", "d-flex", "justify-content-center", "align-items-center"], ["src", "https://vectorified.com/image/cinema-ticket-vector-10.jpg", "alt", ""], [1, "row"], [1, "col-md-3", "options-primary", "p-0", "d-flex", "justify-content-center", "align-items-center", "flex-column"], [1, "far", "fa-money-bill-alt", 2, "font-size", "60px", "margin-bottom", "10px"], [1, "col-md-3", "options-secondary", "p-0", "d-flex", "justify-content-center", "align-items-center", "flex-column"], [1, "fas", "fa-history", 2, "font-size", "60px", "margin-bottom", "10px"], [1, "fas", "fa-user-shield", 2, "font-size", "60px", "margin-bottom", "10px"], [1, "fas", "fa-calendar-alt", 2, "font-size", "60px", "margin-bottom", "10px"], ["src", "https://thumbs.dreamstime.com/b/concept-booking-movie-ticket-men-women-buy-online-application-mobile-phone-tablet-laptop-devices-isometric-d-flat-188578887.jpg", "alt", ""], [1, "col-md-6", "d-flex", "justify-content-center", "flex-column"], [1, "getquotebtn", 3, "click"]],
        template: function HomeMainSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Waiting to See your Hero on Screen ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Just Make it By an Click !!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeMainSectionComponent_Template_button_click_9_listener() {
              return ctx.checkSession();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Book Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Economical");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Fast");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Easy Booking");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "24/7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "How It Works?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "You can easily choose from any tickets you like without going to the actual theatre for cinema ticket booking. You can sit back at home and book in advance whenever the movie tickets booking starts according to your own convenience.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeMainSectionComponent_Template_button_click_47_listener() {
              return ctx.checkSession();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Book Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["h1[_ngcontent-%COMP%]{\r\n    color: #1b2f36;\r\n    font-size: 2rem;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    color:#9c9b9b;\r\n}\r\n\r\n.getquote[_ngcontent-%COMP%]{\r\n    border: none;\r\n    background-color: #ececec;\r\n    height: 50px;\r\n    width: 300px;\r\n    padding: 15px;\r\n    margin-right: 20px;\r\n    border-radius: 8px;\r\n}\r\n\r\n.getquotebtn[_ngcontent-%COMP%]{\r\n    border: none;\r\n    background-color: #ffa436;\r\n    height: 50px;\r\n    padding: 15px;\r\n    margin-right: 20px;\r\n    border-radius: 8px;\r\n    color:white;\r\n    font-weight: 900;\r\n}\r\n\r\n\r\n\r\n.options-primary[_ngcontent-%COMP%]{\r\n    height: 20vh;\r\n    background-color: #ffa436;\r\n    font-size: 20px;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.options-secondary[_ngcontent-%COMP%]{\r\n    height: 20vh;\r\n    background-color: #ececec;\r\n    font-size: 20px;\r\n    color: #ffa436;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1tYWluLXNlY3Rpb24vaG9tZS1tYWluLXNlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBQ0E7O0VBRUU7O0FBQ0Y7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtbWFpbi1zZWN0aW9uL2hvbWUtbWFpbi1zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGNvbG9yOiAjMWIyZjM2O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5oMntcclxuICAgIGNvbG9yOiM5YzliOWI7XHJcbn1cclxuXHJcbi5nZXRxdW90ZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi5nZXRxdW90ZWJ0bntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE0MzY7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcbi8qLmdldHF1b3RlYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGM1YTtcclxufSovXHJcbi5vcHRpb25zLXByaW1hcnl7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNDM2O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5vcHRpb25zLXNlY29uZGFyeXtcclxuICAgIGhlaWdodDogMjB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmYTQzNjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeMainSectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home-main-section',
            templateUrl: './home-main-section.component.html',
            styleUrls: ['./home-main-section.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/home/home.component.ts":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _home_main_section_home_main_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../home-main-section/home-main-section.component */
      "./src/app/home-main-section/home-main-section.component.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _header_login_header_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../header-login/header-login.component */
      "./src/app/header-login/header-login.component.ts");

      function HomeComponent_app_header_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        }
      }

      function HomeComponent_app_header_login_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-login");
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checklogin();
          }
        }, {
          key: "checklogin",
          value: function checklogin() {
            if (sessionStorage.length == 0) {
              this.show = true;
            } else {
              this.show = false;
            }
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_app_header_0_Template, 1, 0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_app_header_login_1_Template, 1, 0, "app-header-login", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home-main-section");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _home_main_section_home_main_section_component__WEBPACK_IMPORTED_MODULE_2__["HomeMainSectionComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _header_login_header_login_component__WEBPACK_IMPORTED_MODULE_4__["HeaderLoginComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/admin.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/admin.service.ts ***!
      \*******************************************/

    /*! exports provided: AdminService */

    /***/
    function srcAppServicesAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminService", function () {
        return AdminService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var AdminService = /*#__PURE__*/function () {
        function AdminService(_http) {
          _classCallCheck(this, AdminService);

          this._http = _http;
          this.apiUrl = 'http://localhost:8080/admin';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(AdminService, [{
          key: "loginCheck",
          value: function loginCheck(loginDetails) {
            return this._http.post(this.apiUrl, loginDetails, this.httpOptions);
          }
        }]);

        return AdminService;
      }();

      AdminService.ɵfac = function AdminService_Factory(t) {
        return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AdminService,
        factory: AdminService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/bookings.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/bookings.service.ts ***!
      \**********************************************/

    /*! exports provided: BookingsService */

    /***/
    function srcAppServicesBookingsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingsService", function () {
        return BookingsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var BookingsService = /*#__PURE__*/function () {
        function BookingsService(_http) {
          _classCallCheck(this, BookingsService);

          this._http = _http;
          this.apiUrl = 'http://localhost:8080';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(BookingsService, [{
          key: "getAllBookings",
          value: function getAllBookings() {
            return this._http.get(this.apiUrl + '/bookings/allBookings');
          }
        }, {
          key: "getBookings",
          value: function getBookings(email) {
            return this._http.get(this.apiUrl + '/bookings/getByUser/' + email);
          }
        }, {
          key: "addBooking",
          value: function addBooking(id, bookings) {
            bookings.locationid = id;
            bookings.email = sessionStorage.getItem('email');
            console.log(bookings);
            return this._http.post(this.apiUrl + '/bookings/add', JSON.stringify(bookings), this.httpOptions);
          }
        }, {
          key: "endBooking",
          value: function endBooking(bookingid) {
            return this._http.get(this.apiUrl + '/bookings/endBooking/' + bookingid);
          }
        }]);

        return BookingsService;
      }();

      BookingsService.ɵfac = function BookingsService_Factory(t) {
        return new (t || BookingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      BookingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BookingsService,
        factory: BookingsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/locations.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/locations.service.ts ***!
      \***********************************************/

    /*! exports provided: LocationsService */

    /***/
    function srcAppServicesLocationsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationsService", function () {
        return LocationsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var LocationsService = /*#__PURE__*/function () {
        function LocationsService(_http) {
          _classCallCheck(this, LocationsService);

          this._http = _http;
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          this.apiUrl = 'http://localhost:8080/locations';
        }

        _createClass(LocationsService, [{
          key: "getLocations",
          value: function getLocations() {
            return this._http.get(this.apiUrl);
          }
        }, {
          key: "addLocation",
          value: function addLocation(location) {
            return this._http.post(this.apiUrl + '/add', location, this.httpOptions);
          }
        }]);

        return LocationsService;
      }();

      LocationsService.ɵfac = function LocationsService_Factory(t) {
        return new (t || LocationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      LocationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LocationsService,
        factory: LocationsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/slots.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/slots.service.ts ***!
      \*******************************************/

    /*! exports provided: SlotsService */

    /***/
    function srcAppServicesSlotsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlotsService", function () {
        return SlotsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var SlotsService = /*#__PURE__*/function () {
        function SlotsService(_http) {
          _classCallCheck(this, SlotsService);

          this._http = _http;
          this.apiUrl = 'http://localhost:8080';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(SlotsService, [{
          key: "getSlotById",
          value: function getSlotById(locationid) {
            return this._http.get(this.apiUrl + '/slots/getbyid/' + locationid);
          }
        }, {
          key: "getAllSlots",
          value: function getAllSlots() {
            return this._http.get(this.apiUrl + '/slots');
          }
        }, {
          key: "addSlot",
          value: function addSlot(slot) {
            return this._http.post(this.apiUrl + '/slots/add', slot, this.httpOptions);
          }
        }]);

        return SlotsService;
      }();

      SlotsService.ɵfac = function SlotsService_Factory(t) {
        return new (t || SlotsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      SlotsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SlotsService,
        factory: SlotsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlotsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/users.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/users.service.ts ***!
      \*******************************************/

    /*! exports provided: UsersService */

    /***/
    function srcAppServicesUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersService", function () {
        return UsersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var UsersService = /*#__PURE__*/function () {
        function UsersService(_http) {
          _classCallCheck(this, UsersService);

          this._http = _http;
          this.apiUrl = 'http://localhost:8080/users';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(UsersService, [{
          key: "loginCheck",
          value: function loginCheck(loginDetails) {
            return this._http.post(this.apiUrl + '/login', loginDetails, this.httpOptions);
          }
        }, {
          key: "signup",
          value: function signup(signupDetails) {
            return this._http.post(this.apiUrl + '/signup', signupDetails, this.httpOptions);
          }
        }]);

        return UsersService;
      }();

      UsersService.ɵfac = function UsersService_Factory(t) {
        return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UsersService,
        factory: UsersService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/vehicle.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/vehicle.service.ts ***!
      \*********************************************/

    /*! exports provided: VehicleService */

    /***/
    function srcAppServicesVehicleServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VehicleService", function () {
        return VehicleService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var VehicleService = /*#__PURE__*/function () {
        function VehicleService(_http) {
          _classCallCheck(this, VehicleService);

          this._http = _http;
          this.apiUrl = 'http://localhost:8080/vehicle';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(VehicleService, [{
          key: "getVehicles",
          value: function getVehicles() {
            return this._http.get(this.apiUrl);
          }
        }, {
          key: "addVehicle",
          value: function addVehicle(vehicle) {
            return this._http.post(this.apiUrl + '/add', vehicle, this.httpOptions);
          }
        }]);

        return VehicleService;
      }();

      VehicleService.ɵfac = function VehicleService_Factory(t) {
        return new (t || VehicleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      VehicleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: VehicleService,
        factory: VehicleService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Deepak\TICKETBOOKING\Online-Movie-Ticket\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map