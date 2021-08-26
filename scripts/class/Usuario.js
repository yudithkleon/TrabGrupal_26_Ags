
export default class Usuario{

    url = 'http://localhost:4000/usuarios/';

    constructor(nombre, apellido, correo){
        this.nombre = nombre,
        this.apellido = apellido,
        this.correo = correo
    }

    crearPerfil(perfil){
        axios.post(this.url,perfil)
        .then(data => console.log(data))
        .catch(console.warn)
    }

    buscarPerfil(email){   //recibe el email
      //  return axios.get(this.url)  
      axios.get(this.url) //eliminamos el return estaba regresando informacion incorrecta
      .then(({data}) => {
        //data.find(user => user.correo === email)
           //console.log(data.find(user => user.correo === email)) //esto no hace nada
        localStorage.setItem('Buscado',JSON.stringify(data.find(user => user.correo === email)))
       })
    }

    editarPerfil(perfil,id){
        axios.put(this.url+id,perfil)
        .then(data => console.log(data))
        .catch(console.warn)
    }

    eliminarPerfil(id){
        axios.delete(this.url+id)
        .then(data => console.log(data))
        .catch(console.warn)
    }
  
    
}