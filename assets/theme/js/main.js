// VALIDACIÓN DE FORMULARIO DE CONTACTO

let btn;

window.onload = ()=>{

    btn = document.getElementById("btn_cotizar");

    btn.addEventListener("click", enviar);


    function enviar(event){
  

        frm = document.getElementById("formulario");
        

          if(frm.checkValidity()){
            
                        
           // info Nombre de quién contacta 
            
           let nombre = document.getElementById("textarea-form02-6");
            
           nombre.value = "";
           
            
            // info de Empresa que contacta

            let empresa = document.getElementById("name-form02-6");
            
            empresa.value = "";

            // info de Email de quién contacta
            
            let mail = document.getElementById("email-form02-6");
            
            mail.value = "";


            // info del Telefono  Celular de quién contacta
            
            let phone = document.getElementById("phone-form02-6");
            
            phone.value = "";



            // info del Requerimiento o Solicitud de quién contacta  (Mensaje, Cotización, etc)
              
            let solicitud = document.getElementById("textarea-form02-6-2");
              
            solicitud.value = "";


           alert("¡Gracias por su requerimiento, su solicitud será procesada lo más pronta posible, Por favor, espere a que nuestros asesores lo contacten!");
            
            event.preventDefault(); 
            
          } else{

            alert("Error!\n Diligencie correctamente y por completo!\n El formulario debe dilicenciarse correctamente y por completo.\n El campo nombre solo admite letras.\n El campo Email debe contener la letra arroba y un dominio válido.\n El campo teléfono solo admite números.\n El formulario NO admite carecteres especiales salvo el _\n Ánimo, inténtalo de nuevo!"); 

          }

    }

}



// Comentarios

// alert("Prueba de Validación!"); return;
