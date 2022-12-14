# 2.4.1 ブロックスキップ

## 達成基準
複数のウェブページ上で繰り返されているコンテンツのブロックをスキップするメカニズムが利用できる。
## 達成方法
### 次に挙げるいずれかを用いて、繰り返されるブロックをスキップするリンクを作成する
- メインコンテンツエリアへ直接移動するリンクを各ページの先頭に追加する（G1）
- 繰り返しているコンテンツのブロックの先頭に、そのブロックの末尾へのリンクを追加する（G123）
- ページの先頭に、コンテンツの各エリアへのリンクを追加する（G124）

### 次に挙げるいずれかを用いて、スキップ可能な方法で繰り返されるブロックをグループ化する 
- ページのリージョンを特定するために ARIA ランドマークを使用する（ARIA11）
- コンテンツの各セクションの開始位置に見出し要素を提供する（H69）
- 繰り返されているコンテンツのブロックをグループ化するために、frame 要素を使用する、かつ、frame 要素及び iframe 要素の title 属性を使用する（H70）（H64）
- コンテンツのブロックをバイパスするために、展開可能及び折り畳み可能なメニューを使用する（SCR28）
## 実装ガイドライン

**コンテンツの各セクション開始位置に見出しを作成する**

```HTML
<section>
    <h2>セクション1タイトル</h2>
    <div>セクション1内容</div>
</section>

<aside>
  <h2>サイドバータイトル</h2>
  <div>サイドバー内容</div>
</aside>
```