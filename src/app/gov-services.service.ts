import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GovServicesService {

  services:any = [
    {
      title: "REQUISITOS PARA MATRIMONIO",
      requirements: [
        "Certificación de la partida de nacimiento extendida por el Renap, en original y  sacarle dos fotocopias.",
        "Constancia de Soltería en original extendida por el RENAP y sacarle dos fotocopias.",
        "Presentar DPI original y sacarle dos fotocopias.",
        "Dos fotocopias de DPI de Testigos de la Boda.",
        "Cancelar Q. 75.00 en antes de la 17 horas y Q. 200.00 fines de semana y después de las 17 horas.",
        "Si la pareja a un no convive traer certificado médico prenupcial (de buena salud) extendido por un médico colegiado o por el Director del Centro de salud local.",
        "Para la celebración de matrimonios de  menores de edad es indispensable el consentimiento de ambos padres."
      ]
    },

    {
      title: "REQUISITOS PARA CONSTANCIA DE RESIDENCIA PERMANENTE",
      requirements: [
        "Presentar DPI en original",
        "Presentar constancia de Cocode del lugar en que habita.",
        "Cancelar Q. 10.00 en Tesorería Municipal"
      ]
    },

    {
      title: "REQUISITOS PARA CONSTANCIA DE HONORABILIDAD",
      requirements: [
        "Presentar DPI en original",
        "Presentar solicitud por escrito al Alcalde Municipal.",
        "Mostrar constancia de Cocode.",
        "Cancelar Q. 20.00 en Tesorería Municipal"

      ]
    },

    {
      title: "REQUISITOS PARA CONSTANCIA DE SEPARACIÓN DE CUERPOS",
      requirements: [
        "Presentar DPI en original  del Interesado",
        "Cancelar  Q 10.00 En Tesorería Municipal"
      ]
    },

    {
      title: "REQUISITOS PARA PERMISO PARA BAILE",
      requirements: [
        "Presentar solicitud por escrito al Alcalde Municipal",
        "Presentar DPI en original",
        "Cancelar Q. 20.00 por cada hora del baile."
      ]
    },

    {
      title: "REQUISITOS LICENCIA MUNICIPAL PARA NUEVA EMPRESA O NEGOCIO",
      requirements: [
        "Persona que solicita: Cualquier persona o institución que desee instalar un negocio o empresa en el municipio Morales, Izabal. El trámite es personal.",
        "Solicitud al Concejo Municipal.",
        "Patente de negocio.",
        "Fotocopia de DPI.",
        "Inscripción de la Sat.",
        "Fotocopia del contrato de arrendamiento del establecimiento. (si es alquilado).",
        "Estudio medio ambiental.",
        "Fotocopia de las Tarjetas de Salud y La Sanitaria, así mismo de los empleados (Centro de Salud las extienden).",
        "Si en la empresa hay representante  o administrador legal, deberá presentar documentos donde indique el nombramiento respectivo de la empresa.",
        "Tasas: Depende del tipo de negocio y tamaño así se cobrara el arbitrio municipal en la tesorería municipal.",
        "Período: Anual",
        "Observaciones: El Concejo Municipal decide la cuota de ingreso a pagar según el tipo de empresa, lugar, tamaño y fines."
      ]
    },


  ]

  constructor() { }

  getInfo(){
    return this.services;
  }


}
