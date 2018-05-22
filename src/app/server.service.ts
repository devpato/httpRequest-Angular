import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        //This will only create an observable, but is not sending it yet
        return this.http.post('https://http-tamo.firebaseio.com/data.json', servers);
    }

    getServers() {
        return this.http.get('https://http-tamo.firebaseio.com/data')
            .map(
                (res: Response)=>{
                    const data = res.json();
                    for(const server of data) {
                        server.name = 'FETCHED_' + server.name;
                    }
                    return data;
                }
            ).catch(
                (error : Response) => { 
                    console.log(error)
                    return Observable.throw('Something went wrong ' + error);
                }
            );
    }

    updateServers(servers: any[]) {
        return this.http.put('https://http-tamo.firebaseio.com/data.json', servers);
    }

    getAppName() {
        return this.http.get('https://http-tamo.firebaseio.com/myHttpApp.json').map(
            (res : Response) => {
                return res.json();
            }
        );
     }

}