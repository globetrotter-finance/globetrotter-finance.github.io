// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'globetrotter.finance',
		text: 'globetrotter.finance'
	},
	navItems: [
		{ name: 'home', link: '/' },
		{ name: 'kuber', link: '/kuber' },
		{ name: 'mantarays', link: '/mantarays' },
		{ name: 'saras', link: '/saras' },
		{ name: 'contact', link: '/contact' }
	]
}
