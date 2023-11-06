import axios ,{type AxiosInstance} from "axios";
import { Professor } from '../models/professor';

export class ProfessorClient{
static listarTodos() {
throw new Error('Method not implemented.');
}

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/professor',
            headers: {'Content-Type' : 'application/json'}
        });
    }

    public async buscaPorId(id : number): Promise<Professor> {
        try{
            return (await this.axiosClient.get<Professor>(`/${id}`)).data

        } catch (error : any){
            return Promise.reject(error.response)
        }
    }


    public async listarTodos(): Promise<Professor[]>{
        try{
            return (await this.axiosClient.get<Professor[]>(`/listar`)).data

        } catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(professor: Professor) : Promise<string>{
        try{
            return (await this.axiosClient.post<string>('', professor)).data

        } catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar (id: number, professor: Professor): Promise<string>{
        try{
            return (await this.axiosClient.put(`/editar?id=${id}`, professor)).data

        } catch (error: any) {  
            return Promise.reject(error.response)
        }
    }

    public async desativar(professor: Professor): Promise<string>{
        try{
            return (await this.axiosClient.put(`/desativar?id=${professor.id}`, professor)).data

        } catch (error: any){
            return Promise.reject(error.response)
        }
    }

    public async ativar(professor: Professor): Promise<string>{
        try{
            return (await this.axiosClient.put(`/ativar?id=${professor.id}`, professor)).data

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

export default new ProfessorClient();