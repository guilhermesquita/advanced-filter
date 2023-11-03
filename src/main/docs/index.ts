import { API } from '@/utils/constants'
import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Backend Projeto - GLX',
    description: 'Ambiente Backend do Projeto - GLX',
    version: '1.0.0',
    contact: {
      name: 'Guilherme Mesquita',
      email: 'guirozmesquita@gmail.com',
      url: 'https://www.linkedin.com/in/guilhermesquita/'
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
    }
  },
  servers: [
    {
      url: API,
      description: 'Servidor Principal'
    }
  ],
  tags: [
    {
      name: 'Products',
      description: 'APIs relacionadas ao Controle de Produtos'
    }
  ],
  paths,
  schemas,
  components
}
