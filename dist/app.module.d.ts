import { DataLoaderService } from './data-loader/data-loader.service';
export declare class AppModule {
    private readonly dataLoaderService;
    constructor(dataLoaderService: DataLoaderService);
    onModuleInit(): Promise<void>;
}
