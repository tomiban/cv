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
  image: import('@/assets/my-image.jpeg'),
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
    { label: 'LinkedIn', value: '/in/tbanchio', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/tomiban', url: 'https://github.com' },
  ],
  description: 'Estudiante de desarrollo de software apasionado por la tecnología, internet y el mundo del open source. Actualmente, me estoy formando como desarrollador .NET, especializándome en Back-end con tecnologías como Entity Framework, SQL Server y Docker. Mi objetivo es aplicar y ampliar mis habilidades participando en proyectos desafiantes, donde pueda contribuir y aprender junto a los mejores profesionales.',  tags: [{ name: 'Open to Work' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Tomas_Banchio.pdf',
  },
  links: [github({ url: 'https://github.com/tomiban' }), linkedin({ url: 'https://www.linkedin.com/in/tbanchio' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
