import axios ,{type AxiosInstance} from "axios";
import { Sala } from "../models/sala";

export class SalaClient{
static listarTodos() {
throw new Error('Method not implemented.');
}

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/sala',
            headers: {'Content-Type' : 'application/json'}
        });
    }

    public async buscaPorId(id : number): Promise<Sala> {
        try{
            return (await this.axiosClient.get<Sala>(`/buscar?id=${id}`)).data

        } catch (error : any){
            return Promise.reject(error.response)
        }
    }


    public async listarTodos(): Promise<Sala[]>{
        try{
            return (await this.axiosClient.get<Sala[]>(`/listar`)).data

        } catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(sala: Sala) : Promise<string>{
        try{
            return (await this.axiosClient.post<string>(``, sala)).data

        } catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar (id: number, sala: Sala): Promise<string>{
        try{
            return (await this.axiosClient.put(`/editar?id=${id}`, sala)).data

        } catch (error: any) {  
            return Promise.reject(error.response)
        }
    }

    public async desativar(sala: Sala): Promise<string>{
        try{
            return (await this.axiosClient.put(`/desativar?id=${sala.id}`, sala)).data

        } catch (error: any){
            return Promise.reject(error.response)
        }
    }

    public async ativar(sala: Sala): Promise<string>{
        try{
            return (await this.axiosClient.put(`/ativar?id=${sala.id}`, sala)).data

        } catch (error: any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(id: number): Promise<string>{
        try{
            return (await this.axiosClient.delete(`/deletar?id=${id}`)).data

        } catch (error: any){
            return Promise.reject(error.response)
        }
    }
}

export default new SalaClient();