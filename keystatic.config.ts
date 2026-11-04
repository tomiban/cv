import { collection, config, fields, singleton } from '@keystatic/core';

const orden = fields.integer({ label: 'Orden', defaultValue: 10 });

export default config({
  storage: { kind: 'local' },
  ui: {
    brand: { name: 'tomasbanchio.com.ar' },
    navigation: {
      Contenido: ['oferta', 'perfil', 'experiencia', 'proyectosTrabajo', 'repos', 'estudios', 'certificados', 'contacto'],
    },
  },
  singletons: {
    oferta: singleton({
      label: 'Oferta (hero, servicios, proceso)',
      path: 'content/oferta/',
      schema: {
        etiqueta: fields.text({ label: 'Etiqueta sobre el titular' }),
        titular: fields.text({ label: 'Titular' }),
        bajada: fields.text({ label: 'Bajada', multiline: true }),
        mensajeWhatsapp: fields.text({ label: 'Mensaje precargado de WhatsApp' }),
        pruebas: fields.array(
          fields.object({
            valor: fields.text({ label: 'Valor' }),
            detalle: fields.text({ label: 'Detalle' }),
          }),
          { label: 'Pruebas', itemLabel: (props) => props.fields.valor.value },
        ),
        servicios: fields.array(
          fields.object({
            titulo: fields.text({ label: 'Título' }),
            descripcion: fields.text({ label: 'Descripción', multiline: true }),
            para: fields.text({ label: 'Para quién' }),
          }),
          { label: 'Servicios', itemLabel: (props) => props.fields.titulo.value },
        ),
        pasos: fields.array(
          fields.object({
            titulo: fields.text({ label: 'Título' }),
            descripcion: fields.text({ label: 'Descripción', multiline: true }),
          }),
          { label: 'Cómo trabajo', itemLabel: (props) => props.fields.titulo.value },
        ),
      },
    }),
    perfil: singleton({
      label: 'Perfil (P200)',
      path: 'content/perfil/',
      schema: {
        nombre: fields.text({ label: 'Nombre' }),
        rol: fields.text({ label: 'Rol' }),
        especialidad: fields.text({ label: 'Especialidad' }),
        ubicacion: fields.text({ label: 'Ubicación' }),
        foto: fields.image({
          label: 'Foto de perfil',
          info: {
            fileTypes: ['image/*'],
            title: 'Foto de perfil',
          },
        }),
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
        turnstileSiteKey: fields.text({
          label: 'Turnstile (site key)',
          description: 'Clave pública del widget de Cloudflare Turnstile. Con clave, los botones piden el número de WhatsApp al Worker de /api/contacto; vacía, usan el mail.',
        }),
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
        cliente: fields.text({ label: 'Cliente' }),
        descripcion: fields.text({ label: 'Descripción', multiline: true }),
        desafio: fields.text({ label: 'Desafío', multiline: true }),
        solucion: fields.array(fields.text({ label: 'Punto' }), {
          label: 'Qué hice',
          itemLabel: (props) => props.value.slice(0, 48),
        }),
        resultado: fields.text({ label: 'Resultado', multiline: true }),
        stack: fields.text({ label: 'Stack' }),
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
