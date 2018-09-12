import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpengovService {

publicInfo:any= [

    {
      name:"Estructura Organica",
      documents: [
        {name:"Organigrama", location:"http://munimorales.gob.gt/documentos/ORGANIGRAMA%20MUNICIPALIDAD%20DE%20MORALES%20%202016%20%20.pdf"}
      ]
    },

    {
      name:"Directorio de empleados",
      documents: [
        {name:"DIRETORIO EMPLEADOS MUNICIPALES", location:"http://munimorales.gob.gt/documentos/INFO%20PAGINA%20DE%20ENERO%202017/INFORME%20DE%20RRHH/DIRETORIO%20EMPLEADOS%20MPALES.pdf"}
      ]
    },

    {
      name:"Puesto y numero de funcionarios",
      documents: [
        {name:"PERSONAL PERMANENTE -011-", location:"http://munimorales.gob.gt/documentos/INFO%20PAGINA%20DE%20ENERO%202017/INFORME%20DE%20RRHH/PERSONAL%20011.pdf"},
        {name:"PERSONAL POR CONTRATO -022-", location:"http://munimorales.gob.gt/documentos/INFO%20PAGINA%20DE%20ENERO%202017/INFORME%20DE%20RRHH/PERSONAL%20022.pdf"},
        {name:"PLANILLAS MAYO 2018", location:"http://munimorales.gob.gt/documentos/05%20inf.Mayo%202018/RHH%20Mayo%202018.pdf"}
      ]
    },

    {
      name:"Plan pratico anual",
      documents: [
        {name:"Direccion y telefono", location:"http://munimorales.gob.gt/documentos/NUMEROSDEEXTENCIoN.No.2.pdf"}
      ]
    },

  ]

  constructor() {

  }

  getPublicInfo(): any {
    return this.publicInfo;
  }


}
