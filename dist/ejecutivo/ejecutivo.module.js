"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EjecutivoModule = void 0;
const common_1 = require("@nestjs/common");
const ejecutivo_service_1 = require("./ejecutivo.service");
const ejecutivo_controller_1 = require("./ejecutivo.controller");
const mongoose_1 = require("@nestjs/mongoose");
const ejecutivo_schema_1 = require("./schema/ejecutivo.schema");
const ejecutivo_entity_1 = require("./entities/ejecutivo.entity");
let EjecutivoModule = class EjecutivoModule {
};
exports.EjecutivoModule = EjecutivoModule;
exports.EjecutivoModule = EjecutivoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: ejecutivo_entity_1.Ejecutivo.name,
                    schema: ejecutivo_schema_1.EjecutivoSchema,
                },
            ]),
        ],
        controllers: [ejecutivo_controller_1.EjecutivoController],
        providers: [ejecutivo_service_1.EjecutivoService],
    })
], EjecutivoModule);
//# sourceMappingURL=ejecutivo.module.js.map