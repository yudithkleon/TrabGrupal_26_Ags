export default class InterfaceUsuario{

 url = 'http://localhost:4000/usuarios';
 
 divMostrarPerfil(){
    axios.get(this.url).then(({data}) => {
         data.forEach(perfil =>{
             //desestructurar el objeto usuario
    const { nombre, apellido, correo, id } = perfil;
    document.getElementById("listarUsuarios").innerHTML += `
        <td>${nombre}</td> 
        <td>${apellido}</td>
        <td>${correo}</td>
        <td>${id}</td>  
     `;
         })
 });
}
}



    // constructor(nombre, apellido, correo){
    //     this.nombre = nombre,
    //     this.apellido = apellido,
    //     this.correo = correo
    // }
    
    // divMostrarPerfil(perfil){

    //     let listarUsuarios = document.querySelector("#listarUsuarios");
    //     listarUsuarios.innerHTML = '';
    //     alert('hola');


    //     const { nombre, apellido, correo, id } = perfil;
    //     listarUsuarios.innerHTML += `
    //           <td>${nombre}</td> 
    //           <td>${apellido}</td>
    //           <td>${correo}</td>
    //           <td>${id}</td>  
    //        `;
        
       
       
           /* 
        return 
          .then(({data}) => {
              data.forEach(perfil =>{
                   //desestructurar el objeto usuario
        const { nombre, apellido, correo, id } = perfil;
        listarUsuarios.innerHTML += `
              <td>${nombre}</td> 
              <td>${apellido}</td>
              <td>${correo}</td>
              <td>${id}</td>  
           `;
              })
          })*/
       
       
          
//}
 

  /*
           .then(({data}) => {
           //console.log(data.find(user => user.correo === email))
           //localStorage.setItem('Buscado',JSON.stringify(data.find(user => user.correo === email)))
            console.log(data);
           data.forEach((usuario) => {
           
     })
    })
    */

