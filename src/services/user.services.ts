import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from 'src/models/user.dto';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

    constructor(public http: HttpClient) {

    }

    findAll(): Observable<UserDTO[]> {
        return this.http.get<UserDTO[]>(`https://reqres.in/api/users`)
    }

    getUserById(id: string): Observable<UserDTO>{
        return this.http.get<UserDTO>(`https://reqres.in/api/users/${id}`)
    }

}