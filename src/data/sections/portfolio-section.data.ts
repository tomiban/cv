import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, website } from '../helpers/links';
import { angular, csharp, css, dotnet, firebase, react, sqlserver, tailwindCss, typescript } from '../helpers/skills';

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
        { label: 'Demo', value: 'https://clinicaveterina.netlify.app', url: 'https://clinicaveterina.netlify.app' },
        {
          label: 'Repositorio',
          value: 'https://github.com/tomiban/veterinariapp-FE',
          url: 'https://github.com/tomiban/veterinariapp-FE',
        },
      ],
      description:
        'Aplicación cliente desarrollada con Angular 17 y Angular Material, diseñada para consumir la API interna.',
      tagsList: {
        title: 'Tecnologías',
        tags: [typescript(), angular(), css()],
      },
      links: [
        github({ url: 'https://github.com/tomiban/veterinariapp-FE' }),
        demo({ url: 'https://clinicaveterina.netlify.app' }),
      ],
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
        {
          label: 'Demo',
          value: 'http://veterinariapp.runasp.net/api/mascotas/',
          url: 'http://veterinariapp.runasp.net/api/mascotas/',
        },
        {
          label: 'Repositorio',
          value: 'https://github.com/tomiban/veterinariapp-API',
          url: 'https://github.com/tomiban/veterinariapp-API',
        },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/swagger2.png'), alt: ' First screenshot' },
        { src: import('@/assets/portfolio/swagger3.png'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/swagger4.png'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/home.png'), alt: 'Fourth screenshot' },
        { src: import('@/assets/portfolio/detail.png'), alt: 'Five screenshot' },
      ],
      description:
        'Web Api ASP NET 8 para la gestión de pacientes en VeterinariAPP, incluyendo registro de mascotas, dueños, vacunas y dosis aplicadas.',
      tagsList: {
        title: 'Tecnologías',
        tags: [csharp(), dotnet(), sqlserver()],
      },
      links: [github({ url: 'https://github.com/tomiban/veterinariapp-API' })],
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
        { label: 'Sitio web', value: 'https://modikra-website.web.app/', url: 'https://modikra-website.web.app/' },
        {
          label: 'Repositorio',
          value: 'https://github.com/tomiban/modikra-website',
          url: 'https://github.com/tomiban/modikra-website',
        },
      ],
      description:
        'Aplicación web SPA desarrollada para Mueblería Modikra. Cuenta con una página de inicio del sitio y un catálogo de productos para que el cliente pueda consultar vía WhatsApp. Realizada con React, Tailwind CSS y Firebase para la persistencia de los datos y el despliegue.',
      tagsList: {
        title: 'Tecnologías',
        tags: [react(), tailwindCss(), firebase()],
      },
      links: [
        github({ url: 'https://github.com/tomiban/modikra-website' }),
        website({ url: 'https://modikra-website.web.app/' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
