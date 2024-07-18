//En una empresa se tiene personal obrero y personal administrativo. La empresa necesita 
//determinar cuál es alguno de los nombres del personal que gana menos (si no se repite, sólo 
//reportar 1, si se repite, reportar cualquiera) y también el monto promedio pagado sólo los 
//administrativos. 
//Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
//el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana 
//$50, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) 
//gana $150:
import Cl_empleados from "./Cl_empleados.js";
import Cl_empresa from "./Cl_empresa.js";

let emp1=  new Cl_empleados("Juan","obrero",100);
let emp2=  new Cl_empleados("Ana","obrero",50);
let emp3=  new Cl_empleados("Lin","administrativo",200);
let emp4=  new Cl_empleados("Mary","obrero",50);
let emp5=  new Cl_empleados("Carlos","administrativo",150);
let todoempresa = new Cl_empresa();
todoempresa.procesarempleados(emp1);
todoempresa.procesarempleados(emp2);
todoempresa.procesarempleados(emp3);
todoempresa.procesarempleados(emp4);
todoempresa.procesarempleados(emp5);

let salida = document.getElementById("salida");
salida.innerHTML += " uno de los que gana menos : "+todoempresa.devolvermenor()+"<br>";
salida.innerHTML += " monto promedio pagado a los administrativos : $"+todoempresa.promediosueldo();