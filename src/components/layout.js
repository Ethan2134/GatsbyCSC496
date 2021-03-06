import React, {useState} from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'
import { GlobalStyles } from '../components/globalStyles'
import { light, dark } from '../components/themeLayout'
import { ThemeProvider} from 'styled-components'
const Layout = ({ pageTitle, children}) => {
	const data = useStaticQuery(graphql`
		query{
			site{
				siteMetadata{
					title
				}
			}
		}
	`)
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
	  <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
	  
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText} >
              Home
            </Link>
          </li>
		  
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
		  
		  <li className={navLinkItem}>
			<Link to="/blog" className={navLinkText}>
				Blog
			</Link>
		  </li>
		  <li className={navLinkItem}>
			<Link to="/pokemon/" className={navLinkText}>
				Starters
			</Link>
		  </li>
		  <li className={navLinkItem}>
			<Link to="/pokemon/1" className={navLinkText}>
				Hoenn Pokemon
			</Link>
		  </li>
		  <li className={navLinkItem}>
			<Link to="/map" className={navLinkText}>
				Map
			</Link>
		  </li>

        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout