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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EjecutivoController = void 0;
const common_1 = require("@nestjs/common");
const ejecutivo_service_1 = require("./ejecutivo.service");
const create_ejecutivo_dto_1 = require("./dto/create-ejecutivo.dto");
let EjecutivoController = class EjecutivoController {
    constructor(ejecutivoService) {
        this.ejecutivoService = ejecutivoService;
    }
    create(createEjecutivoDto) {
        return this.ejecutivoService.create(createEjecutivoDto);
    }
    findAll() {
        return this.ejecutivoService.findAll();
    }
    findOne(id) {
        return this.ejecutivoService.findOne(id);
    }
};
exports.EjecutivoController = EjecutivoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ejecutivo_dto_1.CreateEjecutivoDto]),
    __metadata("design:returntype", void 0)
], EjecutivoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EjecutivoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EjecutivoController.prototype, "findOne", null);
exports.EjecutivoController = EjecutivoController = __decorate([
    (0, common_1.Controller)('ejecutivo'),
    __metadata("design:paramtypes", [ejecutivo_service_1.EjecutivoService])
], EjecutivoController);
//# sourceMappingURL=ejecutivo.controller.js.map