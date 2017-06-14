import { NgModule, } from "@angular/core";
import { Http } from "@angular/http"
import { EndpointsDirectoryService } from "./endpoints-directory.service"
import { StorageService } from "./endpoints-storage.service";

@NgModule({
    imports: [],
    exports: [EndpointsDirectoryService],
    declarations: [EndpointsDirectoryService],
    providers: [Http, StorageService],
})

export class EndpointsDirectoryModule { }