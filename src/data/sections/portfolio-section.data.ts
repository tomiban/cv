import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, website } from '../helpers/links';
import {
  angular,
  csharp,
  css,
  dotnet,
  firebase,
  react,
  sqlserver,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Proyectos',
    slug: 'proyectos',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'VeterinariApp UI',
      image: import('@/assets/portfolio/pet-vaccination.jpg'),
      dates: [new Date('2024-02'), new Date('2024-02')],
      details: [
        { label: 'Rol', value: ['Front-end Developer', 'Designer'] },
        { label: 'Categoria', value: ['Web app', 'Open source', 'Proyecto personal'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/tomiban/veterinariapp-FE', url: '#' },
      ],
      description:
      "Aplicación cliente desarrollada con Angular 17 y Angular Material, diseñada para consumir la API interna.",
      tagsList: {
        title: 'Tecnologías',
        tags: [typescript(), angular(), css()],
      },
      links: [github({ url: 'https://github.com/tomiban/veterinariapp-FE' }), demo({ url: '#' })],
    },
    {
      name: 'VeterinariApp API',
      image: import('@/assets/portfolio/pet-vaccination.jpg'),
      dates: [new Date('2023-09'), new Date('2024-01')],
      details: [
        { label: 'Rol', value: ['Back-end Developer', 'System designer'] },
        { label: 'Categoria', value: ['Web API', 'Open source', 'Proyecto personal'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/tomiban/veterinariapp-API', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      ],
      description:
        'Web Api ASP NET 8 para la gestión de pacientes en VeterinariAPP, incluyendo registro de mascotas, dueños, vacunas y dosis aplicadas.',
      tagsList: {
        title: 'Tecnologías',
        tags: [csharp(), dotnet(), sqlserver()],
      },
      links: [github({ url: '#' })],
    },
    {
      name: 'Sitio Web Muebleria Modikra',
      image: import('@/assets/portfolio/modikra.jpg'),
      dates: [new Date('2022-08'), new Date('2022-11')],
      details: [
        { label: 'Role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Compañia', value: 'Freelance' },
        { label: 'Categoria', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://modikra-website.web.app/', url: '#' },
        { label: 'Repository', value: 'https://github.com/tomiban/modikra-website', url: '#' },
      ],
      description:
        'Aplicación web SPA desarrollada para Mueblería Modikra. Cuenta con una página de inicio del sitio y un catálogo de productos para que el cliente pueda consultar vía WhatsApp. Realizada con React, Tailwind CSS y Firebase para la persistencia de los datos y el despliegue.',
      tagsList: {
        title: 'Tecnologías',
        tags: [react(), tailwindCss(), firebase()],
      },
      links: [github({ url: 'https://github.com/tomiban/modikra-website' }),website({ url: 'https://modikra-website.web.app/' })],
    },
   
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
