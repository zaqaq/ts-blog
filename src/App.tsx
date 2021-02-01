import React from 'react'
import {GlobalStyle} from './assets/utils/reset'
import renderRoutes from './routes/renderRoutes'
import routes from './routes';

import styled from 'styled-components'
import Header from "@/components/Header"
import SideBar from "@/components/SideBar"

const Layout = styled.div`
    display: flex;
    max-width: 1200px;
    min-width: 1060px;
    padding-bottom: 30px;
    margin: 74px auto 0;
`

function App() {

  return (
    <>
      <GlobalStyle />
      <Header/>
      <Layout>
        {renderRoutes(routes)}
        <SideBar/>
      </Layout>
    </>
  );
}

export default App;
