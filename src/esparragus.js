import * as componentes from '@/_configuracion/arr_componentes.js';

const listaComponentes = componentes?.default;
const esparragus = {
  install(Vue) {
    Object.keys(listaComponentes).forEach(name => {
      Vue.component(name, listaComponentes[name]);
    })
  },
};
export default esparragus;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(esparragus);
}
