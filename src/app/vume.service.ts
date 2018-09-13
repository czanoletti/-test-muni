import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VumeService {

  work:any = [
    {
      title:"Auxiliar de promociones - Izabal",
      description: "Persona encargada de asistir en promociones, activaciones, desalojo de producto, apoyo con perifoneo, atracción de los clientes y abordaje de los mismos, experiencia en globoflexia, pintacaritas, deseable poseer licencia tipo B (deseable - no indispensable) Genero Indistinto Diponibilidad para laborar de lunes a domingo descansando entre semana",
      horario: "08:00 a 18:00 hrs",
      salario: "Q2992.37",
      empresa: "POP MANAGEMENT, SOCIEDAD ANONIMA"
    },
    {
      title:"Coordinador de Codistribuidores Ventas Canal Detalle",
      description: "Persona responsable de la estrategia comercial, eficientizar los procesos de venta y dar seguimiento a cierre de negociaciones con clientes en canal ventas detalle y apertura de rutas nuevas, mayoreo, semimayoreo , institucional y codistribuidoras. Deberá realizar análisis de la información comercial para tomar decisiones y crear estrategias. Visitará clientes de la región para dar acompañamiento a los Supervisor de Ventas de los distintos canales para supervisar rutas de ventas, revisar procesos y hacer los cambios que considere necesarios, desarrollar la cartera de clientes existentes y atraer nuevos clientes, impulsar las ventas, realizar análisis de la competencia e identificar nuevas oportunidades de negocio.",
      empresa: "INDUSTRIAS LACTEAS, S.A."
    },
    {
      title:"Promotor de Crédito",
      description: "Conocer el producto de y su metodología para dar seguimiento a la cartera de clientes asignada y buscar nuevos prospectos que permitan originar relaciones comerciales de largo plazo.",
      empresa: "Compartamos, S.A"
    },
    {
      title:"Auxiliar de promociones - Izabal",
      description: "Persona encargada de asistir en promociones, activaciones, desalojo de producto, apoyo con perifoneo, atracción de los clientes y abordaje de los mismos, experiencia en globoflexia, pintacaritas, deseable poseer licencia tipo B (deseable - no indispensable) Genero Indistinto Diponibilidad para laborar de lunes a domingo descansando entre semana",
      horario: "08:00 a 18:00 hrs",
      salario: "Q2992.37",
      empresa: "POP MANAGEMENT, SOCIEDAD ANONIMA"
    },
    {
      title:"Auxiliar de promociones - Izabal",
      description: "Persona encargada de asistir en promociones, activaciones, desalojo de producto, apoyo con perifoneo, atracción de los clientes y abordaje de los mismos, experiencia en globoflexia, pintacaritas, deseable poseer licencia tipo B (deseable - no indispensable) Genero Indistinto Diponibilidad para laborar de lunes a domingo descansando entre semana",
      horario: "08:00 a 18:00 hrs",
      salario: "Q2992.37",
      empresa: "POP MANAGEMENT, SOCIEDAD ANONIMA"
    },
  ]

  constructor() { }

  getInfoJobs(){
    return this.work;
  }
}
