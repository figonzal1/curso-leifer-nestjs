import { SucursalService } from 'src/sucursal/sucursal.service';
export declare class DataLoaderService {
    private readonly sucursalService;
    constructor(sucursalService: SucursalService);
    loadData(): Promise<void>;
}
