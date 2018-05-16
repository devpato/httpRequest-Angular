import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        //This will only create an observable, but is not sending it yet
        return this.http.post('https://http-tamo.firebaseio.com/data.json', servers);
    }

    getServers() {
        return this.http.get('https://http-tamo.firebaseio.com/data.json');
    }

}