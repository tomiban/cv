import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  angular,
  csharp,
  docker,
  dotnet,
  firebase,
  go,
  jira,
  mongoDb,
  postman,
  react,
  sqlite,
  sqlserver,
  supabase,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Habilidades',
    slug: 'Xskills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Tecnologías que manejo',
      skills: [
        csharp({ level: 3, description: "Colecciones y genericos, POO, métodos virtuales y override, LINQ, métodos lambda, programación asincrónica, diseño de interfaces y clases abstractas." }),
        dotnet({ level: 2, description: "APIs RESTful con Entity Framework, servicios y filtros, patrón repositorio y DTO, AutoMapper, Identity y JWT." }),
       
        react({
          level: 2,
          description:
            "Diseño de layouts y componentes, React hooks, configuración de rutas públicas y privadas, autorizacion y autenticacion con JWT, consumo de APIs y servicios externos.",
        }),
        typescript({
          level: 2,
        }),
        tailwindCss({ level: 3 }),
        sqlserver({ level: 3 , description: "Procedimientos almacenados, funciones y triggers"} ),
        mongoDb({ level: 2 }),
        sqlite({ level: 2 }),
        firebase({ level: 2 }),
        postman({ level: 2 }),
        docker({level: 1}),
        jira({level: 2}),
      ],
    },
    {
      title: 'Quiero aprender',
      skills: [go(), angular(), supabase()],
    },
    {
      title: 'Idiomas',
      skills: [
        { icon: 'circle-flags:es-variant', name: 'Español (Nativo)' },
        { icon: 'circle-flags:us', name: 'Ingles - B1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
