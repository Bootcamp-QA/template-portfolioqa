// CONFIG SUPABASE
//URL API y API KEY
const SUPABASE_URL = 'https://ifgzperqnxoomyvvytzr.supabase.co/rest/v1/forms';
const SUPABASE_API_KEY = 'sb_publishable_s4C8y1rgb321cEF5B969MA_3jMwVpNJ';


//OBTENER DATOS DEL FORMULARIO Y ENVIARLOS A LA API
function enviarFormulario(event) {
  event.preventDefault(); 

  //Se extrae del formulario los datos a enviar a la api, incluyendo en primer lugar los campos de la api, y en segundo lugar el id del elemento del formulario de donde se reciben los datos.
  var data = {
    email: document.getElementById('email').value, //campo email de la api, se obtiene del input del formulario con id email
    subject: document.getElementById('asunto').value, //campo subject de la api, se obtiene del input del formulario con id asunto
    message: document.getElementById('mensaje').value, //campo message de la api, se obtiene del input del formulario con id mensaje
    name: document.getElementById('nombre').value //campo name de la api, se obtiene del input del formulario con id nombre
  };
  //Funcion para enviar los datos a la api con POST.
  postAPI(data);

   return false; // evita submit normal
}
//MOSTRAR MENSAJE SI SE HA ENVIADO BIEN LOS DATOS
function mostrarMensajeExito(){
  var formMessage = document.getElementById('formMessage'); //id del elemento de la pagina donde se va a mostrar mensaje
  formMessage.textContent = "Formulario enviado correctamente"; //mensaje que va a mostrarse
  formMessage.style.color  = "green"; //color en el que se va a mostrar
};

//MOSTRAR MENSAJE SI SE HAN ENVIADO MAL LOS DATOS
function mostrarMensajeError(){
  var formMessage = document.getElementById('formMessage'); //id del elemento de la pagina donde se va a mostrar el mensaje
  formMessage.textContent = "Error al enviar el formulario"; //mensaje que va a mostrarse
  formMessage.style.color  = "red"; //color en el que se va a mostrar
};

//FUNCION GENERICA PARA ENVIAR DATOS A UNA API POST Y MOSTRAR UN MENSAJE DE ERROR O EXITO.
function postAPI (data){
  fetch(SUPABASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_API_KEY,
      'Authorization': SUPABASE_API_KEY
    },
    body: JSON.stringify(data)
  })
  .then(function(response) {
    if (!response.ok) throw new Error('Error');
    return true;
  })
  .then(function() {
    //Si se envian los datos bien, muestra un mensaje de exito
    mostrarMensajeExito();
  })
  .catch(function(error) {
    //Muestra mensaje de error y muestra error en la consola
    console.log(error)
    mostrarMensajeError();
  });

 
};
  //FUNCIÓN PARA OBTENER LOS DATOS DE LA API CON GET
function getAPI() {
  return fetch(SUPABASE_URL, {
    method: 'GET',
    headers: {
      'apikey': SUPABASE_API_KEY,
      'Authorization': 'Bearer ' + SUPABASE_API_KEY
    }
  })
  .then(function(response) {
    if (!response.ok) throw new Error('Error al cargar');
    return response.json();
  });
};
// ----------------------------
// FUNCION PARA MOSTRAR DATOS EN UNA PAGINA
// ----------------------------
function mostrarDatos() {
 //INDICAR AQUI EL ID DE LA TABLA DONDE QUIERE MOSTRAR LOS DATOS
  const table = document.getElementById("formsTable");
  if (!table) return;

  getAPI()
    .then(function(data) {

      if (!Array.isArray(data) || data.length === 0) {
        table.innerHTML = '<tr><td>No hay datos</td></tr>';
        return;
      }

      table.innerHTML = '';

      // CABECERA
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');

      Object.keys(data[0]).forEach(function(key) {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
      });

      thead.appendChild(headerRow);
      table.appendChild(thead);

      // CUERPO
      const tbody = document.createElement('tbody');

      data.forEach(function(item) {
        const row = document.createElement('tr');

        Object.values(item).forEach(function(value) {
          const td = document.createElement('td');
          td.textContent = value ?? '';
          row.appendChild(td);
        });

        tbody.appendChild(row);
      });

      table.appendChild(tbody);
    })
    .catch(function(error) {
      console.error(error);
      table.innerHTML = '<tr><td>Error al cargar los datos</td></tr>';
    });
}



