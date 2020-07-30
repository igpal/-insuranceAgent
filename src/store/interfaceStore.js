export default {
  state: {
    drawer: false,
    items: [
      {
        text: 'Menu 1',
        href: '#!'
      },
      {
        text: 'Menu 2',
        href: '#!'
      },
      {
        text: 'Menu 3',
        href: '#!'
      },
      {
        text: 'Menu 4',
        href: '#!'
      },
      {
        text: 'Menu 5',
        href: '#!'
      }
    ]
  },
  getters: {
    links: state => state.items,

    getDrawer: state => state.drawer
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {}
};
