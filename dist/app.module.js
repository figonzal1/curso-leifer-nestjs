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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const data_loader_service_1 = require("./data-loader/data-loader.service");
const sucursal_module_1 = require("./sucursal/sucursal.module");
const ejecutivo_module_1 = require("./ejecutivo/ejecutivo.module");
let AppModule = class AppModule {
    constructor(dataLoaderService) {
        this.dataLoaderService = dataLoaderService;
    }
    async onModuleInit() {
        await this.dataLoaderService.loadData();
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://58260b04751ebfbd9aaa9cd592d374ac:whj5out7@16a.mongo.evennode.com:27019/58260b04751ebfbd9aaa9cd592d374ac'),
            sucursal_module_1.SucursalModule,
            ejecutivo_module_1.EjecutivoModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, data_loader_service_1.DataLoaderService],
    }),
    __metadata("design:paramtypes", [data_loader_service_1.DataLoaderService])
], AppModule);
//# sourceMappingURL=app.module.js.map