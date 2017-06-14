import { Http } from "@angular/http";
import { IEndpointsDirectoryConfig } from "./endpoints-directory.interface";
import { StorageService } from "./endpoints-storage.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/observable/of';
export declare class EndpointsDirectoryService {
    private http;
    private storage;
    private config;
    constructor(http: Http, storage: StorageService, config?: IEndpointsDirectoryConfig);
    getEndpointUrl(context: string): Observable<string>;
    private saveAndReturn(context, endpoints);
}
