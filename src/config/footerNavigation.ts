// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	// src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'globetrotter.finance',
		aboutText:
			'Empowering businesses with cutting-edge financial security, advanced digital analytics, and comprehensive CA and legal consultancy services. Your trusted partner in safeguarding identities, optimizing performance, and ensuring compliance.',
		logo: {
			alt: 'globetrotter.finance',
			text: 'globetrotter.finance'
		}
	},
	footerColumns: [
		{
			category: 'financial.kuber',
			subCategories: [
				{
					subCategory: 'identity frauds',
					subCategoryLink: '/kuber',
				},
				{
					subCategory: 'deduplication',
					subCategoryLink: '/kuber',
				},
				{
					subCategory: 'anti money laundering',
					subCategoryLink: '/kuber',
				},
				// {
				// 	subCategory: 'stock markets - nudges',
				// 	subCategoryLink: '/pricing',
				// },
				// {
				// 	subCategory: 'stock markets - analysis',
				// 	subCategoryLink: '/pricing',
				// },
				// {
				// 	subCategory: 'stock markets - automation',
				// 	subCategoryLink: '/pricing',
				// }
			]
		},
		{
			category: 'digital.mantarays',
			subCategories: [
				{
					subCategory: 'leakage identification',
					subCategoryLink: '/mantarays',
				},
				{
					subCategory: 'optimization solutions',
					subCategoryLink: '/mantarays',
				}
			]
		},
		{
			category: 'legal.saras',
			subCategories: [
				{
					subCategory: 'due diligence',
					subCategoryLink: '/saras'
				},
				{
					subCategory: 'contracts intelligence',
					subCategoryLink: '/saras'
				},
				{
					subCategory: 'legal excellence',
					subCategoryLink: '/saras'
				}
			]
		},
		{
			category: 'about.us',
			subCategories: [
				{
					subCategory: 'privacy policy',
					subCategoryLink: '/privacy'
				},
				{
					subCategory: 'terms & conditions',
					subCategoryLink: '/terms'
				},
				{
					subCategory: 'contact',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© globetrotter.finance 2024.'
	}
}
