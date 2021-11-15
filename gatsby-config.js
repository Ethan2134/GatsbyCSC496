module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My First Gatsby Site",
  },
  plugins: [
	"gatsby-plugin-image",
	"gatsby-plugin-sharp",
	
	{
		resolve: "gatsby-source-filesystem",
		options: {
			name: `blog`,
			path: `${__dirname}/blog`,
		},
	},
	
	"gatsby-plugin-mdx",
	'gatsby-plugin-styled-components',
	
	{
		resolve: "gatsby-source-wordpress",
		options: {
			url: `https://csc496wordpress.tldr.dev/graphql`,
			protocol: `https`,
			hostingWPCOM: false,
			useACF: false
		},
	},
	
	{
        resolve: 'gatsby-plugin-react-leaflet',
        options: {
            linkStyles: true
        }
    },
    {
        resolve: `gatsby-theme-catalyst-core`,
        options: {
            remarkImagesWidth: 1920,
            imageQuality: 90
        }
    }
  ]
};
