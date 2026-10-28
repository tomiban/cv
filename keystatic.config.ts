import { collection, config, fields, singleton } from '@keystatic/core';

const orden = fields.integer({ label: 'Orden', defaultValue: 10 });

export default config({
  storage: { kind: 'local' },
  ui: {
    brand: { name: 'Televideo — tomiban.github.io' },
    navigation: {
      Contenido: ['perfil', 'experiencia', 'proyectosTrabajo', 'repos', 'estudios', 'certificados', 'contacto'],
    },
  },
  singletons: {
    perfil: singleton({
      label: 'Perfil (P200)',
      path: 'content/perfil/',
      schema: {
        nombre: fields.text({ label: 'Nombre' }),
        rol: fields.text({ label: 'Rol' }),
        ubicacion: fields.text({ label: 'Ubicación' }),
        ficha: fields.array(
          fields.object({
            etiqueta: fields.text({ label: 'Etiqueta' }),
            valor: fields.text({ label: 'Valor', multiline: true }),
          }),
          { label: 'Ficha', itemLabel: (props) => props.fields.etiqueta.value },
        ),
      },
    }),
    contacto: singleton({
      label: 'Contacto (P800)',
      path: 'content/contacto/',
      schema: {
        email: fields.text({ label: 'Mail' }),
        github: fields.text({ label: 'GitHub (texto)' }),
        githubUrl: fields.url({ label: 'GitHub (URL)' }),
        linkedin: fields.text({ label: 'LinkedIn (texto)' }),
        linkedinUrl: fields.url({ label: 'LinkedIn (URL)' }),
        actualizado: fields.text({ label: 'Actualizado' }),
      },
    }),
  },
  collections: {
    experiencia: collection({
      label: 'Experiencia (P300)',
      path: 'content/experiencia/*',
      schema: {
        empresa: fields.text({ label: 'Empresa' }),
        puesto: fields.text({ label: 'Puesto' }),
        desde: fields.text({ label: 'Desde' }),
        hasta: fields.text({ label: 'Hasta' }),
        enCurso: fields.checkbox({ label: 'En curso' }),
        orden,
        vinetas: fields.array(fields.text({ label: 'Viñeta', multiline: true }), {
          label: 'Viñetas',
          itemLabel: (props) => props.value.slice(0, 48),
        }),
      },
    }),
    proyectosTrabajo: collection({
      label: 'Proyectos profesionales (P500)',
      path: 'content/proyectos-trabajo/*',
      schema: {
        nombre: fields.text({ label: 'Nombre' }),
        empleador: fields.text({ label: 'Empleador' }),
        descripcion: fields.text({ label: 'Descripción', multiline: true }),
        web: fields.url({ label: 'Página del producto' }),
        orden,
      },
    }),
    repos: collection({
      label: 'Proyectos personales (P600)',
      path: 'content/repos/*',
      schema: {
        nombre: fields.text({ label: 'Nombre' }),
        lenguaje: fields.text({ label: 'Lenguaje' }),
        anio: fields.integer({ label: 'Año de creación' }),
        descripcion: fields.text({ label: 'Descripción', multiline: true }),
        web: fields.url({ label: 'Página del producto' }),
        demo: fields.url({ label: 'Demo', validation: { isRequired: false } }),
        orden,
      },
    }),
    estudios: collection({
      label: 'Estudios (P700)',
      path: 'content/estudios/*',
      schema: {
        etiqueta: fields.text({ label: 'Etiqueta' }),
        titulo: fields.text({ label: 'Título' }),
        institucion: fields.text({ label: 'Institución' }),
        periodo: fields.text({ label: 'Periodo' }),
        orden,
      },
    }),
    certificados: collection({
      label: 'Certificados (P700)',
      path: 'content/certificados/*',
      schema: {
        titulo: fields.text({ label: 'Título' }),
        emisor: fields.text({ label: 'Emisor' }),
        detalle: fields.text({ label: 'Detalle (horas, duración)', validation: { isRequired: false } }),
        anio: fields.text({ label: 'Año', validation: { isRequired: false } }),
        url: fields.url({ label: 'Verificación', validation: { isRequired: false } }),
        orden,
      },
    }),
  },
});
