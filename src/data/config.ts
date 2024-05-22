import type { Config } from '@/types/data';
import {  es } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: es,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Tomás Banchio - .NET Developer Jr',
    description:
      'Sitio personal de Tomás Banchio, desarrollador de aplicaciones .NET.',
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {
    footer:
      'Otorgo mi consentimiento para que mis datos personales incluidos en mi solicitud sean procesados con fines de proceso de selección.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
