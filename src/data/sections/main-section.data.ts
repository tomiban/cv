import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/cv.jpg'),
  fullName: 'Tomás Banchio',
  role: 'Desarrollador de Software',
  details: [
    { label: 'Telefono', value: '3496547076', url: 'tel:3496547076' },
    { label: 'Email', value: 'tbanchio15@gmail.com', url: 'mailto:tbanchio15@gmail.com' },
    { label: 'Ciudad', value: 'Esperanza, Argentina' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '3496547076' },
    { label: 'Email', value: 'tbanchio15@gmail.com' },
    { label: 'LinkedIn', value: 'tbanchio', url: 'https://linkedin.com/in/tbanchio' },
    { label: 'GitHub', value: 'tomiban', url: 'https://github.com/tomiban' },
  ],
  description: 'Estoy estudiando Desarrollo de Software en el Instituto Tecnológico El Molino y soy un desarrollador web autodidacta con un perfil de Backend. Manejo C# .NET, SQL y Firebase. También conozco tecnologías para el frontend como TypeScript, React y Tailwind. Me esfuerzo por seguir buenas prácticas de programación, implementando principios SOLID, arquitecturas de diseño como MVC o Clean Architecture, y manteniéndome al día con los cambios tecnológicos. Me encanta programar y estoy dispuesto a aprender y trabajar duro para crecer profesionalmente en este rubro.',  tags: [{ name: 'Open to Work' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Tomas_Banchio.pdf',
  },
  links: [github({ url: 'https://github.com/tomiban' }), linkedin({ url: 'https://www.linkedin.com/in/tbanchio' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
