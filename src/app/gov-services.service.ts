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

    {
      title: "REQUISITOS PARA INSCRIBIR UN CONSEJO COMUNITRARIO DE DESARROLLO (COCODE) COMITES DE AGUA POTABLE, CONSEJOS EDUCATIVOS, CONSEJOS DE PADRES DE FAMILIA, JUNTAS ESCOLARES Y ASOCIACIONES COMUNITARIAS",
      requirements: [
        "COCODES:",
        "Acta de formación del Consejo Comunitario de Desarrollo COCODE",
        "Fotocopia de DPI del órgano de Coordinación del COCODE ",
        "2 fotografías recientes del órgano de Coordinación",
        "Libro de actas",
        "Traer Sello del Consejo Comunitario De Desarrollo en Buen Estado.",
        "COMITES DE AGUA POTABLE:",
        "Solicitud de Inscripción.",
        "Acta de formación del Comité.",
        "Fotocopia de DPI de la Junta Directiva",
        "Fotocopia de Escritura Pública",
        "Fotocopia de Acta Notarial reciente",
        "Período: 1 sola vez",
        "CONSEJOS EDUCATIVOS, CONSEJOS DE PADRES DE FAMILIA, Y JUNTAS ESCOLARES:",
        "Fotocopia de la Certificación del Acta de Elección De Nueva Directiva de la Organización.",
        "Fotocopia del Acta de Nombramiento de Representante Legal de la Organización.",
        "Fotocopias de DPI de la Directiva.",
        "ASOCIACIONES COMUNITARIAS:",
        "Fotocopia de Escritura Pública.",
        "Fotocopia de Acta Notarial.",
        "Fotocopias de los miembros de la Asociación."
      ]
    },

    {
      title: "REQUISITOS SOLICITUD SERVICIO DE AGUA",
      requirements: [
        "PERSONA QUE SOLICITA: Todos los vecinos que soliciten 1/2 paja de agua (Concesión del Servicio del Agua) a la Municipalidad.",
        "Deberá presentar la siguiente papelería en el Departamento del Agua Potable anexo a Receptoría.-",
        "Documento Personal de Identificación DPI.-",
        "Fotocopia de documentos que acrediten la legitima propiedad del Bien Inmueble",
        "Testimonio de la escritura Pública o Declaración Jurada de Derechos de Posesión",
        "Presentar Recibo de Pago del IUSI-",
        "Si aún no lo ha pagado deberá presentarse al Departamento del Impuesto Sobre Inmuebles a tramitar el respectivo pago).",
        "Presentar Recibo de pago de Licencia de Construcción",
        "Si aún no lo ha gestionado deberá presentar al Departamento de Licencias de Construcción anexo a la Policía Municipal de Transito, frente al Polideportivo Barrio La Cancha.",
        "Deberá comprar Medidor del agua Marca Arad, con estructura de metal y lente de vidrio."

      ]
    },

    {
      title: "COSTO POR MEDIA PAJA DE AGUA",
      requirements: [
        "Venta a precio de contado Q.1,420.00",
        "VVenta a precio de Crédito Q.1,520.00 Convenio de Pago en la Oficina de Servicios Públicos",
        "Primera Cuota Q.520.00",
        "Segunda Cuota Q.500.00",
        "Tercera Cuota Q.500.00"

      ]
    },

    {
      title: "PAGO CONSUMO DE AGUA",
      requirements: [
        "TASAS:",
        "Q. 25.00-Período Mensual",
        "Lo considerado a 30,000 litros equivalente a 30 metros cúbicos al mes.",
        "OBSERVACIONES:   Por el exceso de consumo del agua se pagará Q0.50 por mil Litros."
      ]
    },


  ]

  constructor() { }

  getInfo(){
    return this.services;
  }


}
