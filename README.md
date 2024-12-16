🛠️ QA Automation | Trabajo Final 

Este proyecto corresponde al trabajo final para el curso de QA Automation de XAcademy. El objetivo es generar un conjunto de pruebas automatizadas utilizando Cypress para probar la funcionalidad de compra en el sitio web SauceDemo.

🎯 Objetivos del Proyecto

1.	Generar un plan de pruebas para automatizar la funcionalidad de compra en el sitio de SauceDemo.
2.	Instalar Cypress y configurarlo correctamente para realizar las pruebas automatizadas.
3.	Crear el test “myTestSaucedemo.cy.js” que ejecute un flujo de compra para dos usuarios.
4.	Realizar los siguientes casos de prueba:

Compra con usuario 1:
✅ Login con el usuario "standard_user".
🛍️ Agregar productos al carrito.
💳 Realizar el checkout.
✔️ Validar que se haya completado el checkout.
🚪 Realizar logout.

Compra con usuario 2:
✅ Login con el usuario "problem_user".
🛍️ Repetir los pasos de agregar productos al carrito, realizar el checkout, validar la compra y logout.

5.	Utilizar Trello para gestionar los incidentes (defectos o mejoras) y reportarlos en el template de bugs/improvements.

📋 Reporte de Incidencias

Link TRELLO: https://trello.com/invite/b/67601faf5df720c8d5973158/ATTI04658de70cb57d210cf4c531235cb2734FD17281/challenge-final-saucedemo

Durante el proceso de prueba, se utilizará Trello para gestionar cualquier defecto o mejora que se detecte en la aplicación. Para cada incidencia, se reportarán los detalles en el template de reporte de bugs.

🖥️ Tecnologías y Herramientas Utilizadas

Este proyecto está basado en las siguientes herramientas:
•	Cypress: Framework de pruebas de integración y extremo a extremo (E2E).
•	JavaScript: Lenguaje utilizado para escribir los tests.
•	Trello: Herramienta de gestión de incidencias para reportar bugs y mejoras.
•	SauceDemo: Sitio Web de ejemplo para realizar las pruebas de compra.

📋 Requisitos Previos

Antes de comenzar, asegúrate de tener lo siguiente instalado:
•	Node.js (versión 14 o superior) - Descargar Node.js
•	Cypress - Sigue los pasos de instalación a continuación.

🚀 Instalación

Paso 1: Clonar el repositorio

git clone https://github.com/medinaalejandro/ChallengeFInal-QA-Automation-Saucedemo


Paso 2: Instalar dependencias
Si no tienes Cypress instalado globalmente, puedes instalarlo como dependencia del proyecto ejecutando:

npm install

Esto instalará todas las dependencias necesarias, incluida Cypress.

Paso 3: Ejecutar Cypress
Una vez que las dependencias estén instaladas, puedes ejecutar Cypress con:

npx cypress open

Esto abrirá la interfaz gráfica de Cypress, donde podrás ejecutar las pruebas de forma interactiva.

Paso 4: Ejecutar las pruebas
Dentro de la interfaz de Cypress, selecciona el archivo myTestSaucedemo.cy.js y ejecútalo para correr las pruebas automatizadas.

📝 Descripción de los Tests

Test 1: Compra con usuario 1 ("standard_user")
1.	Login: Ingresar al sitio SauceDemo utilizando el usuario "standard_user" y la contraseña "secret_sauce".
2.	Agregar productos: Se agregarán productos al carrito de compras.
3.	Checkout: Procederemos con el checkout y completaremos la compra.
4.	Validación del checkout: Verificaremos que la compra haya sido completada correctamente.
5.	Logout: Finalmente, se procederá con el logout.

Test 2: Compra con usuario 2 ("problem_user")
1.	Login: Ingresar al sitio SauceDemo utilizando el usuario "problem_user" y la contraseña "secret_sauce".
2.	Repetir el flujo de compra: Realizaremos los mismos pasos de agregar productos, realizar checkout, validar la compra y hacer logout.

📜 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

📬 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto conmigo:

Correo electrónico: medinaalejandroar@gmail.com
GitHub: @medinaalejandro


🌟 ¡Gracias por visitar el proyecto! 🌟
