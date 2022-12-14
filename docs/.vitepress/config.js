export default {
	lang: 'ja',
	title: 'UX Team Dev Guide',
	description: 'This is UX Team Development Guideline.',
  lastUpdated: true,
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
    outlineTitle: '目次',
    lastUpdatedText: '最終更新',
    editLink: {
      pattern: 'https://github.com/',
      text: 'このページをgithubで編集'
    },
    docFooter: {
      prev: '前のページ',
      next: '次のページ'
    },
    logo: '/logo/favicon.ico',
    nav: [
			{
				text: 'MENU',
				items: [
					{ text: 'Home', link: '/home/' },
					{ text: 'Web Accessibility', link: '/a11y/introduction/' },
					{ text: 'React', link: '/react/' },
					{ text: 'Vue', link: '/vue/introduction/' }
				],
			}
		],
		sidebar: {
			'/home/': [
        {
          text: 'Home',
          items: [
            { text: 'Home', link: '/home/' },
            { text: 'Web Accessibility', link: '/a11y/introduction/' },
            { text: 'React', link: '/react/' },
						{ text: 'Vue.js', link: '/vue/introduction/' }
          ]
        }
      ],
      '/a11y/': [
        {
          text: 'Web Accessibility Introduction',
          collapsible: true,
          items: [
            { text: 'ウェブアクセシビリティとは', link: '/a11y/introduction/' },
            { text: 'WCAG', link: '/a11y/introduction/wcag' }
          ]
        },
        {
          text: 'WCAG 2.1 達成基準<br>レベルA',
          collapsible: true,
          items: [
            { text: 'WCAG 2.1の構成 レベルA', link: '/a11y/standard-a/' },
            { text: '1.1.1 非テキストコンテンツ', link: '/a11y/standard-a/non-text-content' },
            { text: '1.2.1 音声のみ及び映像のみ (収録済)', link: '/a11y/standard-a/audio-only-and-video-only-prerecorded' },
            { text: '1.2.2 キャプション（収録済み）', link: '/a11y/standard-a/captions-prerecorded' },
            { text: '1.2.3 音声解説、又はメディアに対する代替 (収録済)', link: '/a11y/standard-a/audio-description-or-media-alternative-prerecorded' },
            { text: '1.3.1 情報及び関係性', link: '/a11y/standard-a/info-and-relationships' },
            { text: '1.3.2 意味のある順序', link: '/a11y/standard-a/meaningful-sequence' },
            { text: '1.3.3 感覚的な特徴', link: '/a11y/standard-a/sensory-characteristics' },
            { text: '1.4.1 色の使用', link: '/a11y/standard-a/use-of-color' },
            { text: '1.4.2 音声の制御', link: '/a11y/standard-a/audio-control' },
            { text: '2.1.1 キーボード', link: '/a11y/standard-a/keyboard' },
            { text: '2.1.2 キーボードトラップなし', link: '/a11y/standard-a/no-keyboard-trap' },
            { text: '2.1.4 文字キーのショートカット', link: '/a11y/standard-a/character-key-shortcuts' },
            { text: '2.2.1 タイミング調整可能', link: '/a11y/standard-a/timing-adjustable' },
            { text: '2.2.2 一時停止、停止、非表示', link: '/a11y/standard-a/pause-stop-hide' },
            { text: '2.3.1 3回の閃光、又は閾値以下', link: '/a11y/standard-a/three-flashes-or-below-threshold' },
            { text: '2.4.1 ブロックスキップ', link: '/a11y/standard-a/bypass-blocks' },
            { text: '2.4.2 ページタイトル', link: '/a11y/standard-a/page-titled' },
            { text: '2.4.3 フォーカス順序', link: '/a11y/standard-a/focus-order' },
            { text: '2.4.4 リンクの目的 (コンテキスト内)', link: '/a11y/standard-a/link-purpose-in-context' },
            { text: '2.5.1 ポインタのジェスチャ', link: '/a11y/standard-a/pointer-gestures' },
            { text: '2.5.2 ポインタのキャンセル', link: '/a11y/standard-a/pointer-cancellation' },
            { text: '2.5.3 名前 (name) のラベル', link: '/a11y/standard-a/label-in-name' },
            { text: '2.5.4 動きによる起動', link: '/a11y/standard-a/motion-actuation' },
            { text: '3.1.1 ページの言語', link: '/a11y/standard-a/language-of-page' },
            { text: '3.2.1 フォーカス時', link: '/a11y/standard-a/on-focus' },
            { text: '3.2.2 入力時', link: '/a11y/standard-a/on-input' },
            { text: '3.3.1 エラーの特定', link: '/a11y/standard-a/error-identification' },
            { text: '3.3.2 ラベル又は説明', link: '/a11y/standard-a/labels-or-instructions' },
            { text: '4.1.1 構文解析', link: '/a11y/standard-a/parsing' },
            { text: '4.1.2 名前 (name) ・役割 (role) 及び値 (value)', link: '/a11y/standard-a/name-role-value' }
          ]
        },
        {
          text: 'WCAG 2.1 実装ガイドライン<br>レベルA',
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
            { text: 'Vue.jsとは', link: '/vue/introduction/' },
          ]
        },
        {
          text: 'VitePress',
          items: [
            { text: 'VitePress', link: '/vue/vitepress/' },
          ]
        }
      ]
    }
	}
}