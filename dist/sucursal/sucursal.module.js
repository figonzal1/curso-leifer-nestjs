"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SucursalModule = void 0;
const common_1 = require("@nestjs/common");
const sucursal_service_1 = require("./sucursal.service");
const sucursal_controller_1 = require("./sucursal.controller");
const mongoose_1 = require("@nestjs/mongoose");
const sucursal_entity_1 = require("./entities/sucursal.entity");
const sucursal_schema_1 = require("./schema/sucursal.schema");
let SucursalModule = class SucursalModule {
};
exports.SucursalModule = SucursalModule;
exports.SucursalModule = SucursalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: sucursal_entity_1.Sucursal.name,
                    schema: sucursal_schema_1.SucursalSchema,
                },
            ]),
        ],
        controllers: [sucursal_controller_1.SucursalController],
        providers: [sucursal_service_1.SucursalService],
        exports: [sucursal_service_1.SucursalService],
    })
], SucursalModule);
//# sourceMappingURL=sucursal.module.js.map