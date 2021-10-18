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
	{
		resolve: "gatsby-source-wordpress",
		options: {
			url: `https://csc496wordpress.tldr.dev/graphql`,
			protocol: `https`,
			hostingWPCOM: false,
			useACF: false
		},
	},
  ]
};
