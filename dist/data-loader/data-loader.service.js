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
exports.DataLoaderService = void 0;
const common_1 = require("@nestjs/common");
const sucursal_service_1 = require("../sucursal/sucursal.service");
let DataLoaderService = class DataLoaderService {
    constructor(sucursalService) {
        this.sucursalService = sucursalService;
    }
    async loadData() {
        const sucursales = await this.sucursalService.findAll();
        if (sucursales.length == 0) {
            await this.sucursalService.create({
                nombre: 'Santa Cruz',
            });
            await this.sucursalService.create({
                nombre: 'Providencia',
            });
            await this.sucursalService.create({
                nombre: 'Las Condes',
            });
            await this.sucursalService.create({
                nombre: 'San bernardo',
            });
            await this.sucursalService.create({
                nombre: 'Puente alto',
            });
        }
    }
};
exports.DataLoaderService = DataLoaderService;
exports.DataLoaderService = DataLoaderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [sucursal_service_1.SucursalService])
], DataLoaderService);
//# sourceMappingURL=data-loader.service.js.map