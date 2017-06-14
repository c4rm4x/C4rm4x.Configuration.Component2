import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { IEndpointsDirectoryConfig } from "./endpoints-directory.interface"
import { StorageService } from "./endpoints-storage.service"
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/observable/of';

const EndpointsDirectoryConfigDefaults : IEndpointsDirectoryConfig =  {
    configApiUrlEndPoint: "api/config",
    appIdentifier: "app",
    version: "1.0"
}

@Injectable()
export class EndpointsDirectoryService  {
    
    constructor(private http: Http, private storage: StorageService, private config?: IEndpointsDirectoryConfig) {        
        config = config || EndpointsDirectoryConfigDefaults;
    }

    public getEndpointUrl(context: string) : Observable<string> {
        let endpoints = this.storage.getEndpoints();

        if (!endpoints) {
            return Observable.of(endpoints[context]);
        } else {
            let query = `?appIdentifier=${this.config.appIdentifier}&version=${this.config.version}`;

            return this.http.get(this.config.configApiUrlEndPoint + query)
                .map((res: Response) => this.saveAndReturn(context, res.json().endpoints))
                .publishReplay(1)
                .refCount();
        }
    }

    private saveAndReturn(context: string, endpoints: any) : string {
        this.storage.setEndpoints(endpoints);                    
        return endpoints[context];
    }
}