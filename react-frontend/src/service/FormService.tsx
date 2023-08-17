import axios from "axios";

const FORMS_REST_API_URL = 'http://localhost:8080/api/forms';

class FormService{
    getForms(){
        return axios.get(FORMS_REST_API_URL);
    }


    async postForm(data:any){
         await axios.post(FORMS_REST_API_URL+"/post", {
            code:data.code,
            name:data.name,
            assignDate:data.assignDate,
            isUpdateable: data.isUpdateable
        });
    }

    async updatePost(data:any){
        await axios.put(FORMS_REST_API_URL+"/update", {
            id:data.id,
            code:data.code,
            name:data.name,
            assignDate:data.assignDate,
            isUpdateable: data.isUpdateable
        })
    }
}

export default new FormService();