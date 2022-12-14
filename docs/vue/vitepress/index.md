# VitePress 紹介

## VitePress とは

VitePressとは、マークダウンから手軽に静的サイトを作成できる、Vue.js（3.x）とViteをベースとする静的サイトジェネレーター（SSG）です。
Vue.jsの開発チームによって作成および保守されています。<br>

::: warning 注意
現在のVitePressのバージョンはalpha版となっており、構成やテーマAPIに変更が入る可能性があります。2022年12月13日時点での最新バージョンは、「1.0.0-alpha.31」となっています。
:::


## 特徴
### マークダウン形式で記述
HTML/CSSやVue.jsの知識がなくても、Markdown記法で簡単にレスポンシブな静的サイトを作成することができます。

### Viteの利用
Viteの利用により、次のメリットがあります。
- 高速な開発サーバーの起動
- 高速なホットリロード
- 高速なビルド

### Markdown内でVueが使用可能
VitePressでは、各マークダウンファイルはHTMLにコンパイルされた後、単一ファイルコンポーネント（SFC）として処理されます。
よって、マークダウン内でVueの動的なtemplateやコンポーネント、ディレクティブが利用でき、部分的に動的なページを作成することができます。

### テーマの利用
VitePressには、多くの機能を提供するデフォルトのテーマが用意されており、ナビゲーション、サイドバー、フッター等の機能を簡単に実装することができます。


## マークダウン記法紹介
VitePressではMarkrownのレンダリングにMarkdown-itが利用されています。

### ヘッダー

```md
#### h4 Heading
##### h5 Heading
##### h6 Heading
```
#### h4 Heading
##### h5 Heading
##### h6 Heading

### リンク
```
[vuejs.org](https://vuejs.org)
```
[vuejs.org](https://vuejs.org)

### 引用
```md
> 引用です。
>> ネストされた引用です。
```
> 引用です。
>> ネストされた引用です。

### コードブロック

````
```html
<div class="hello">
    <p>Hello VitePress</p>
</div>
```
````

```html
<div class="hello">
    <p>Hello VitePress</p>
</div>
```

### 絵文字
```
:100:
```
:100:

### カスタムコンテナ
```
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::


## Markdown内でVueを使ってみる
```
<PersonList />
```
<PersonList />

## VuePress vs VitePress

VuePressとVitePressはどちらもVueを利用したSSGであり、どちらもマークダウンから静的サイトが作成できるという点で似ていますが、以下の違いがあります。

### VitePress
- Viteのみのサポート
- シンプルで最小限な構成になっており、カスタマイズはVueまたはViteで行う
- デフォルトのデザインが、VuePressに比べてより洗練されている。（根本の主観）

### VuePress 
- webpackとViteを両方サポートしている
- 固有のプラグインシステムがあり、VitePressと比べてカスタマイズ性が高い

[VitePressは次世代のVuePressとなるのか](https://github.com/vuejs/vitepress/discussions/548)
## 参考情報
[vitepress.vuejs.org](https://vitepress.vuejs.org/)<br>
[github](https://github.com/vuejs/vitepress/discussions/548)<br>
[v1.vuepress.vuejs.org](https://v1.vuepress.vuejs.org/)<br>
[vuejs.org](https://vuejs.org)