import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const csharp = createSkillFactory({
  name: 'C#',
  icon: 'simple-icons:csharp',
  iconColor: '#953CAD',
  url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
})

export const dotnet = createSkillFactory({
  name: 'Asp .NET',
  icon: 'simple-icons:dotnet',
  iconColor: '#512BD4',
  url: 'https://docs.microsoft.com/en-us/dotnet/',
})

export const angular = createSkillFactory({
  name: 'Angular',
  icon: 'simple-icons:angular',
  iconColor: '#DD0031',
  url: 'https://angular.io/',
})

export const sqlserver = createSkillFactory({
  name: 'SQL Server',
  icon: 'simple-icons:microsoftsqlserver',
  iconColor: '#E34E4F',
  url: 'https://docs.microsoft.com/en-us/sql/?view=sql-server-ver16',
})

export const sqlite = createSkillFactory({
  name: 'SQLite',
  icon: 'simple-icons:sqlite',
  iconColor: '#56ABDD',
  url: 'https://www.sqlite.org/',
})

export const mongodb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
})

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#119FED',
  url: 'https://www.docker.com/',
})

export const jira = createSkillFactory({
  name: 'Jira',
  icon: 'simple-icons:jira',
  iconColor: '#1268DF',
  url: 'https://www.jira.com/',
})

export const go = createSkillFactory({
  name: 'Go',
  icon: 'simple-icons:go',
  iconColor: '#00ADD8',
  url: 'https://golang.org/',
})

export const postman = createSkillFactory({
  name: 'Postman',
  icon: 'simple-icons:postman',
  iconColor: '#FF6C37',
  url: 'https://www.postman.com/',
})

export const css = createSkillFactory({
  name: 'CSS',
  icon: 'simple-icons:css3',
  iconColor: '#1572B6',
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
})

export const git = createSkillFactory({
  name: 'Git',
  icon: 'simple-icons:git',
  iconColor: '#F05032',
  url: 'https://git-scm.com/',
})

export const maui = createSkillFactory({
  name: '.NET MAUI',
  icon: 'simple-icons:dotnet',
  iconColor: '#512BD4',
  url: 'https://dotnet.microsoft.com/es-es/apps/maui',
})