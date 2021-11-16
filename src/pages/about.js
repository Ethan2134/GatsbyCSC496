import * as React from 'react'
import Layout from '../components/layout'
import { GlobalStyles } from '../components/globalStyles'
import { light, dark } from '../components/themeLayout'
import { ThemeProvider} from 'styled-components'
const AboutPage = ({selectedTheme}) => {
  return (
  <ThemeProvider theme={selectedTheme === 'dark' ? dark : light}>
    <Layout pageTitle="About Me">
	<GlobalStyles />
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
	  <p>{selectedTheme}</p>
	</Layout>
	</ThemeProvider>
  )
}
export default AboutPage