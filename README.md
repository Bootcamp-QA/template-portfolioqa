# Portfolio QA – Reyes Díaz  
Este portafolio web muestra mis proyectos de **QA**. Incluye un **formulario de contacto** conectado a una API que permite guardar los datos del formulario en la base de datos y mostrarlos en la página de Admin.

🔗 [Ver Web Portfolio QA](https://bootcamp-qa.github.io/template-portfolioqa/)

---

## ⚙️ Funcionalidades principales
- Menú de navegación
- Cabecera con información personal.
- Sección con enlaces y descripción de proyectos QA.
- Sección de formación.  
- Formulario de contacto.  
- Página Admin para consulta de datos del formulario.

---

## 🛠 Tecnologías y herramientas utilizadas
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

![SQL](https://img.shields.io/badge/sql-%23007ACC.svg?style=for-the-badge&logo=database&logoColor=white)

![Postman](https://img.shields.io/badge/postman-%23FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white)

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232088FF.svg?style=for-the-badge&logo=githubactions&logoColor=white)




---

## 🗄 Base de Datos
Se ha creado una base de datos en Supabase para almacenar los datos enviados desde el formulario de contacto.  
- La carpeta `sql` incluye todas las **consultas SQL de prueba**, que permiten generar, consultar, editar o eliminar datos de prueba según sea necesario.  
- Proyecto Supabase (requiere acceso): [Supabase Project](https://supabase.com/dashboard/project/vtizuqohukyyxvcshmbs)  

## 🗄 API de Formulario
Se ha generado una API que permite agregar, editar, consultar y eliminar datos de la base de datos creada en supabase.
- URL API (requiere acceso): [Supabase API](https://vtizuqohukyyxvcshmbs.supabase.co)  
- Documentación de la API: [Documentación API](./apidoc.pdf) 
---

## ⚙️ QA Testing
### Pruebas exploratorias de la web
Se realizaron pruebas exploratorias en navegadores web y móviles para asegurar el correcto funcionamiento de la interfaz y la interacción con el usuario.

### Pruebas de API
- Colección en POSTMAN (requiere acceso): [POSTMAN Collection](https://www.postman.com/bootcampqatesting/api-usuarios/collection/x5mwyvf/api-de-usuarios) 
Se probó la **API del formulario de contacto** y se validó el correcto almacenamiento de los datos en la base de datos. 
- Se probaron las operaciones **GET, POST, PATCH y DELETE**, verificando respuestas correctas y manejo de errores.  
- Se implementó un **flujo de integración continua** con GitHub Actions, ejecutando automáticamente las pruebas de API mediante Newman cada semana. 

---

## 👩‍💻 Autor
**Reyes Díaz – QA Junior**  
[🔗 LinkedIn](https://www.linkedin.com/in/reyescuesta)

