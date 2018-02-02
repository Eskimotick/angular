webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/aluno-detail/aluno-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aluno-detail/aluno-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"aluno\">\r\n\t<h2>Detalhes de {{ aluno.name | uppercase }}</h2>\r\n\t<div><span>id: </span>{{aluno.id}}</div>\r\n\t<div>\r\n\t\t<label>name:\r\n\t\t\t<input [(ngModel)]=\"aluno.name\" placeholder=\"name\">\r\n\t\t</label>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/aluno-detail/aluno-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var aluno_1 = __webpack_require__("../../../../../src/app/aluno.ts");
var AlunoDetailComponent = /** @class */ (function () {
    function AlunoDetailComponent() {
    }
    AlunoDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", aluno_1.Aluno)
    ], AlunoDetailComponent.prototype, "aluno", void 0);
    AlunoDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-aluno-detail',
            template: __webpack_require__("../../../../../src/app/aluno-detail/aluno-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/aluno-detail/aluno-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlunoDetailComponent);
    return AlunoDetailComponent;
}());
exports.AlunoDetailComponent = AlunoDetailComponent;


/***/ }),

/***/ "../../../../../src/app/aluno.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Aluno = /** @class */ (function () {
    function Aluno() {
    }
    return Aluno;
}());
exports.Aluno = Aluno;


/***/ }),

/***/ "../../../../../src/app/alunos/alunos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alunos .remove-button{\r\n    float: right;\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #8B6060;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    margin-left: .8em;\r\n    border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.selected {\r\n  background-color: #CFD8DC !important;\r\n  color: white;\r\n}\r\n\r\n.alunos {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n\r\n.alunos li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n\r\n.alunos li.selected:hover {\r\n  background-color: #BBD8DC !important;\r\n  color: white;\r\n}\r\n\r\n.alunos li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n\r\n.alunos .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n\r\n.alunos .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-aluno-detail [aluno]=\"selectedAluno\"></app-aluno-detail>\r\n\r\n<h2>Meus alunos</h2>\r\nAdicionar novos aluno: <input #novoAluno (keyup)=\"0\"> <button (click)=\"addAluno(novoAluno.value)\">add</button>\r\n\r\n<ul class=\"alunos\">\r\n<li *ngFor=\"let aluno of alunos\" (click)=\"onSelect(aluno)\" [class.selected]=\" aluno === selectedAluno\">\r\n\t<span class=\"badge\">{{ aluno.id }}</span> {{ aluno.name }}\r\n\t<span class=\"remove-button\" (click)=\"deleteAluno(aluno)\">X</span>\r\n</li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var mock_alunos_1 = __webpack_require__("../../../../../src/app/mock-alunos.ts");
var AlunosComponent = /** @class */ (function () {
    function AlunosComponent() {
        this.alunos = mock_alunos_1.ALUNOS;
        this.idNumber = 10;
    }
    AlunosComponent.prototype.ngOnInit = function () {
    };
    AlunosComponent.prototype.onSelect = function (aluno) {
        this.selectedAluno = aluno;
        console.log(aluno);
    };
    AlunosComponent.prototype.deleteAluno = function (aluno) {
        var index = this.alunos.indexOf(aluno);
        this.alunos.splice(index, 1);
    };
    AlunosComponent.prototype.addAluno = function (name) {
        this.alunos.push({ id: this.idNumber++, name: name });
        this.novoAluno.nativeElement.value = '';
    };
    __decorate([
        core_1.ViewChild('novoAluno'),
        __metadata("design:type", core_1.ElementRef)
    ], AlunosComponent.prototype, "novoAluno", void 0);
    AlunosComponent = __decorate([
        core_1.Component({
            selector: 'app-alunos',
            template: __webpack_require__("../../../../../src/app/alunos/alunos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/alunos/alunos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlunosComponent);
    return AlunosComponent;
}());
exports.AlunosComponent = AlunosComponent;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n\tcolor: #369;\r\n\tfont-family: Arial, Helvica, sans-serif;\r\n\tfont-size:250%;\r\n}\r\n\r\nh2, h3 {\r\n  color: #444;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\n\r\nbody {\r\n  margin: 2em;\r\n}\r\n\r\nbody, input[text], button {\r\n  color: #888;\r\n  font-family: Cambria, Georgia;\r\n}\r\n\r\n* {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\r\n<app-alunos></app-alunos>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Projeto de CRUD';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var alunos_component_1 = __webpack_require__("../../../../../src/app/alunos/alunos.component.ts");
var aluno_detail_component_1 = __webpack_require__("../../../../../src/app/aluno-detail/aluno-detail.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                alunos_component_1.AlunosComponent,
                aluno_detail_component_1.AlunoDetailComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/mock-alunos.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ALUNOS = [
    { id: 1, name: 'Fulaninho' },
    { id: 2, name: 'Kiko' },
    { id: 3, name: 'Edward Elric' },
    { id: 4, name: 'Naruto' },
    { id: 5, name: 'Sasuke' },
    { id: 6, name: 'Ted Mosby' },
    { id: 7, name: 'Barney Stinson' },
    { id: 8, name: 'Floki' },
    { id: 9, name: 'Ragnar Lothbrok' },
    { id: 10, name: 'Thorfinn' }
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map