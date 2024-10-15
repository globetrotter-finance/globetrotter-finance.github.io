// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

// export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'globetrotter.finance | financial security, digital conversion, legal excellence',
	siteDescription:
		'Empowering businesses with cutting-edge financial security, advanced digital analytics, and comprehensive CA and legal consultancy services. Your trusted partner in safeguarding identities, optimizing performance, and ensuring compliance.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'globetrotter.finance'
	},
	canonical: true,
	noindex: false,
	scrollAnimations: true
}
