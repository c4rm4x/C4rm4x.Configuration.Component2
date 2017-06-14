import { IStorageConfig } from "./endpoints-storage.interface";
export declare class StorageService {
    private config;
    constructor(config?: IStorageConfig);
    getEndpoints(): any;
    setEndpoints(cache: any): void;
}
