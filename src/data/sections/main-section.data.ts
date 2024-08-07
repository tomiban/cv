import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Perfil',
    slug: 'perfil',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Tomás Banchio',
  role: 'Desarrollador de Software',
  details: [
    { label: 'Telefono', value: '3496547076', url: 'tel:3496547076' },
    { label: 'Email', value: 'tbanchio15@gmail.com', url: 'mailto:tbanchio15@gmail.com' },
    { label: 'Ciudad', value: 'Esperanza, Argentina' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '3496547076', url: 'tel:3496547076' },
    { label: 'Email', value: 'tbanchio15@gmail.com', url: 'mailto:tbanchio15@gmail.com' },
    { label: 'LinkedIn', value: 'tbanchio', url: 'https://linkedin.com/in/tbanchio' },
    { label: 'GitHub', value: 'tomiban', url: 'https://github.com/tomiban' },
  ],
  description:
    'Estoy estudiando Desarrollo de Software en el Instituto Tecnológico El Molino, con un perfil de desarrollo web orientado al Backend. Manejo C# .NET y SQL DBs, y tengo experiencia con tecnologías web como JavaScript, React, Firebase y WordPress. Me esfuerzo por seguir buenas prácticas de programación, aplicando principios SOLID y arquitecturas de diseño como MVC y Clean Architecture. Me apasiona la programación y estoy dispuesto a aprender y trabajar arduamente para crecer profesionalmente en este campo.',
  tags: [{ name: 'Open to Work' }],
  action: {
    label: 'Descargar CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Tomas_Banchio.pdf',
  },
  links: [github({ url: 'https://github.com/tomiban' }), linkedin({ url: 'https://www.linkedin.com/in/tbanchio' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
