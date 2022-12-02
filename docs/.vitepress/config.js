export default {
	lang: 'ja',
	title: 'UX Team Dev Guide',
	description: 'This is UX Team Development Guideline.',
  head: [
    [
      'meta',
      { property: 'og:image', content: '/VitePress-test-02/logo/developer.png' },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/VitePress-test-02/logo/favicon.ico',
      },
    ],
  ],
	themeConfig: {
    editLink: {
      pattern: 'https://github.com/',
      text: 'このページをgithubで編集'
    },
    logo: '/logo/favicon.ico',
    nav: [
			{
				text: 'MENU',
				items: [
					{ text: 'Home', link: '/home/' },
					{ text: 'Web Accessibility', link: '/a11y/' },
					{ text: 'React', link: '/react/' },
					{ text: 'Vue', link: '/vue/' }
				],
			}
		],
		sidebar: {
			'/home/': [
        {
          text: 'Home',
          items: [
            { text: 'Home', link: '/home/' },
            { text: 'Web Accessibility', link: '/a11y/' },
            { text: 'React', link: '/react/' },
						{ text: 'Vue.js', link: '/vue/' }
          ]
        }
      ],
      '/a11y/': [
        {
          text: 'Web Accessibility Introduction',
          collapsible: true,
          items: [
            { text: 'ウェブアクセシビリティとは', link: '/a11y/' }
          ]
        },
        {
          text: 'JIS X 8341-3 レベルA',
          collapsible: true,
          items: [
            { text: 'JIS X 8341-3 レベルA達成基準一覧', link: '/a11y/level-a/' },
            { text: '1.1.1　非テキストコンテンツの達成基準', link: '/a11y/level-a/a-text-equiv-all' },
          ]
        },
        {
          text: 'レベルA 実装ガイドライン',
          collapsible: true,
          items: [
            { text: 'レベルA 実装ガイドライン', link: '/a11y/guideline-a/' }
          ]
        }
      ],
      '/react/': [
        {
          text: 'React',
          items: [
            { text: 'Index', link: '/react/' },
            { text: 'One', link: '/react/one' },
            { text: 'Two', link: '/react/two' }
          ]
        }
      ],
			'/vue/': [
        {
          text: 'Vue.js',
          items: [
            { text: 'Index', link: '/vue/' },
            { text: 'One', link: '/vue/one' },
            { text: 'Two', link: '/vue/two' }
          ]
        }
      ]
    }
	}
}