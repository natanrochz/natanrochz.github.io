export const skills = [
  {
    title: { pt: 'Linguagens', en: 'Languages' },
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'Go'],
  },
  {
    title: { pt: 'Front-end', en: 'Front-end' },
    items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Astro'],
  },
  {
    title: { pt: 'Back-end', en: 'Back-end' },
    items: ['Node.js', 'Express', 'Django', 'JWT'],
  },
  {
    title: { pt: 'Banco de dados', en: 'Databases' },
    items: ['PostgreSQL', 'Oracle', 'SQL'],
  },
  {
    title: { pt: 'Ferramentas', en: 'Tools' },
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'Vite'],
  },
  {
    // essa lista muda de acordo com o idioma
    title: { pt: 'Práticas', en: 'Practices' },
    items: {
      pt: ['APIs REST', 'POO', 'Metodologias ágeis', 'Análise de requisitos', 'Design de software'],
      en: ['REST APIs', 'OOP', 'Agile', 'Requirements analysis', 'Software design'],
    },
  },
];

// o card de "aprendendo agora" só aparece se tiver algo aqui
export const learning: string[] = [];
