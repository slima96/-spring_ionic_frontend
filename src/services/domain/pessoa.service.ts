import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { PessoaDTO } from "../../models/pessoa.dto";
import { StorageService } from "../storage.service";

@Injectable()
export class PessoaService {

    constructor(
        public http: HttpClient,
        public storage: StorageService) {
    }

    findByUsuario(usuario: string) : Observable<PessoaDTO> {
         return this.http.get<PessoaDTO>(`${API_CONFIG.baseUrl}/pessoas/usuario?value=${usuario}`);

    }

    getImageFromBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/user${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }
}