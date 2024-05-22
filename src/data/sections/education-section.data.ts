import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { diploma, website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Educación',
    slug: 'educación',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Tecnicatura en Desarrollo de Software',
      institution: 'Instituto Tecnologico El Molino',
      image: import('@/assets/logos/itec-logo.jpeg'),
      dates: [new Date('2023.03'), null],
      description: 'Diseño, construcción y verificación de software de complejidad media, correspondientes a sistemas de información, o vinculados indirectamente al hardware o a sistemas de comunicación de datos, respondiendo a especificaciones.',
      links: [website({ url: 'https://itec-elmolino.edu.ar/' })],
    },
    {
      title: 'Carrera en Programación Front End React',
      institution: 'Coderhouse',
      image: import('@/assets/logos/coderhouse-logo.jpg'),
      dates: [new Date('2022.09'), new Date('2023.02')],
      description: "Creación de aplicaciones web con componentes y manejo de estado siguiendo las mejores prácticas de diseño web, utilizando HTML, CSS, SASS y JavaScript con React.js para el desarrollo de interfaces de usuario y Firebase como base de datos.",
      links: [website({ url: 'https://www.coderhouse.com/ar/online/carrera-online-desarrollo-frontend' }), diploma({ url: 'https://www.coderhouse.com/ar/certificados/63f57bb26a2d1f000e7657c4' })],
    },
    {
      title: 'Diplomatura Full Stack Junior - Argentina Programa',
      institution: 'Ministerio de Economía, INTI y CESSI',
      image: import('@/assets/logos/inti-logo.png'),
      dates: [new Date('2021.10'), new Date('2022.08')],
      description: "Formación sólida en programación y pensamiento computacional a través del aprendizaje de los lenguajes Java, SQL y JavaScript, aplicada en la creación de aplicaciones web con Spring Boot y Angular",

      links: [website({ url: 'https://yoprogramo.org.ar/como-aprendo/' }), diploma({ url: 'https://drive.google.com/file/d/1jLEtt_xJjwmFsmA4acZ_R3jndc8iWB5V/view?usp=sharing' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
