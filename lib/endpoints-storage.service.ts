import { Injectable } from "@angular/core";
import { IStorageConfig } from "./endpoints-storage.interface"

const StorageConfigDefaults : IStorageConfig = {
    key: "endpoints"
}

@Injectable()
export class StorageService {

    constructor(private config? : IStorageConfig) {        
        config = config || StorageConfigDefaults;
    }

    public getEndpoints() : any {
        let cache = sessionStorage.getItem(this.config.key);        

        return cache ? JSON.parse(cache) : null;
    }

    public setEndpoints(cache: any) : void {
        let cacheAsString = JSON.stringify(cache);
        
        sessionStorage.setItem(this.config.key, cacheAsString);
    }
}