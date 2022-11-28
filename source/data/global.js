export default {
  description: 'Сайт по организации туров в Антарктику.',
  projectName: 'Антарктика',
  socials: [
    {
      id: 'ok',
      title: 'Мы в Одноклассниках.',
      url: '#!',
    },
    {
      id: 'vk',
      title: 'Мы в Контакте.',
      url: '#!',
    },
    {
      id: 'pinterest',
      title: 'Мы в Pinterest',
      url: '#!',
    },
  ],
  navLinks: {
    list: [
      'Преимущества',
      'Направления',
      'Ближайшие круизы',
      'Контакты',
    ].map((title) => ({
      title,
      url: '#!',
    })),
  },
  navTogglerText: 'Список ссылок.',
};
