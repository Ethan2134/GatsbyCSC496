import * as React from 'react'
import Layout from '../components/layout'
import { GlobalStyles } from '../components/globalStyles'
import { light, dark } from '../components/themeLayout'
import { ThemeProvider} from 'styled-components'
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}
export default AboutPage