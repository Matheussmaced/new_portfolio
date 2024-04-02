'use client'

import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/themes/default'

import { ThemeProvider } from 'styled-components'
import Profile from './components/profile'
import { Main, TitleContainer } from './styles/home'
import About from './components/about'
import Projects from './components/projects'
import Technologys from './components/technologys'

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main>
        <GlobalStyles />

        <Profile />

        <div id="about">
          <About />

          <TitleContainer id="projects">
            <h2>Projetos</h2>
          </TitleContainer>

          <Projects
            picture="/github_blog.jpeg"
            title="GitHubBlog"
            description="O projeto é um Blog que consome a API do perfil do Github.
                        Ele permite pesquisar os repositórios de um perfil do Github,
                        mostrando detalhes como data de criação, descrição, visibilidade
                        e linguagem predominante de cada projeto."
            technology={['React', 'TypeScript', 'Styled-components']}
            URLReposity="https://github.com/Matheussmaced/github_blog"
          />

          <Projects
            picture="/bot_whatsapp.jpeg"
            title="Bot Whatsapp"
            description="mini projeto que desenvolvi usando uma incrível biblioteca! Este projeto consiste em
                        um Bot de mensagens para o Whatsapp. Eu criei um
                        jogo simples de pedra, papel e tesoura para testar o funcionamento dessa
                        biblioteca surpreendente."
            technology={['Node.js']}
            URLReposity="https://github.com/Matheussmaced/BOT_WHATSAPP"
          />

          <Projects
            picture="/Api_full.jpg"
            title="API REST FULL"
            description="API REST desenvolvida com Node.js, fazendo uso do poderoso framework Fastify e da versatilidade da biblioteca Knex.

            📊 Essa API é dedicada ao gerenciamento de transações, permitindo que todos registrem suas atividades financeiras diárias com facilidade e eficiência. O coração do sistema é o banco de dados SQLite, escolhido pela sua confiabilidade e desempenho excepcional.
            
            🍪 Uma característica fantástica dessa implementação é a utilização de cookies, que proporciona uma experiência personalizada aos nossos usuários. Isso permite a separação das transações de cada indivíduo, mesmo em ambientes onde múltiplos usuários acessam a API simultaneamente."
            technology={['Node.js', 'TypeScript', 'KNEX.JS', 'SQLite']}
            URLReposity="https://github.com/Matheussmaced/API_REST_FULL"
          />

          <Projects
            picture="/coffe_delivery.jpg"
            title="Coffe Delivery"
            description="O Coffee delivery é um e-commerce de café simplificado, onde
                        os usuários podem explorar e comprar uma variedade de cafés gourmet. Com uma interface intuitiva e amigável, os usuários podem navegar pelos cafés em cards, adicionar ao carrinho de compras e realizar o checkout de forma rápida e conveniente. O projeto oferece uma experiência de compra online eficiente, desde a seleção dos produtos até a confirmação da compra e aguardo da entrega. Tecnologias utilizadas incluem HTML, CSS, JavaScript e frameworks
                        como React.js, garantindo uma experiência de usuário dinâmica e interativa."
            technology={['React.js', 'TypeScript', 'Styled-componets']}
            URLReposity="https://github.com/Matheussmaced/coffee_delivery"
          />

          <div id="technologys">
            <Technologys />
          </div>
        </div>
      </Main>
    </ThemeProvider>
  )
}
