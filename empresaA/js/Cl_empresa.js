export default class Cl_empresa {
    constructor() {
        this.menorsuel=500;
        this.contempl=0;
        this.acumsuel=0;
        this.auxnombre="";
        
    }
    procesarempleados(em) {
     if (em.sueldo < this.menorsuel) {
          this.menorsuel=em.sueldo; 
          this.auxnombre=em.nombre;
        
        } 


        if (em.tipo=="administrativo") {
         this.contempl++;
          this.acumsuel+=em.sueldo;
    }
        
    }
    promediosueldo() {
        return this.acumsuel/this.contempl;
    }
    devolvermenor() { 
        return this.auxnombre;
    }

}