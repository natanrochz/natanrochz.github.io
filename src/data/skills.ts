export const skills = [
  {
    title: { pt: 'Linguagens', en: 'Languages' },
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'Go', 'SQL'],
  },
  {
    title: { pt: 'Front-end', en: 'Front-end' },
    items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Astro', 'Vite'],
  },
  {
    title: { pt: 'Back-end e banco de dados', en: 'Back-end & databases' },
    items: ['Node.js', 'Express', 'Django', 'PostgreSQL', 'Oracle'],
  },
  {
    title: { pt: 'Ferramentas', en: 'Tools' },
    items: ['Git', 'GitHub', 'Docker', 'Linux'],
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
