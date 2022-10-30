◉ 見出し

# Title1

## Title2

### Title3

#### Title4

## Title1

## Title2

---

◉ 通常文

Normal Sentence1
Normal Sentence2

---

◉ 文字修飾

_Note_
**Note**
**_Note_**

`npm`
_`npm`_
**`npm`**
**_`npm`_**

`See 'Quote'` という書き方も可能

`` See `Quote` `` という書き方も可能

~~打ち消し~~

---

◉ リスト(= \*)

- list1
- list2
  - list1
    - list2

1. list1
1. list2
   1. list1-1
1. list1

1\. list1

2\. list2

<dl>
  <dt>リンゴ</dt>
  <dd>赤いフルーツ</dd>
  <dt>オレンジ</dt>
  <dd>橙色のフルーツ</dd>
</dl>

---

◉ チェックボックス(VSCode では無効)

[ ] タスク 1
[x] タスク 2

---

◉ 線

===
(VSCode では無効)

---

◉ リンク

Open [Local host](http://localhost:3000)

[Some Link Name](http://localhost:3000, "Click Here")

![Qiita](https://qiita-image-store.s3.amazonaws.com/0/45617/015bd058-7ea0-e6a5-b9cb-36a4fb38e59c.png "Qiita")

<img width="50" src="https://qiita-image-store.s3.amazonaws.com/0/45617/015bd058-7ea0-e6a5-b9cb-36a4fb38e59c.png">

---

◉ 数式

x^3 + y^4 = 20 のインライン表示: $x^3 + y^4 = 20$

$a = \{1, 2, 3\}$

---

◉ 折りたたみ

<details><summary>サンプルコード</summary>

```rb
puts 'Hello, World'
```

</details>

---

◉ 表

| name  | address | phone     | point |
| ----- | :-----: | --------- | ----: |
| John  |  Tokyo  | 090-5644- |    20 |
| Smith |  Osaka  | 070-?     |  1000 |

---

◉ 引用

> 引用はこのようにすると良い。長い文章でも適宜改行しつつ全部表示してくれます。
> 複数行の場合、改行するたびに記号を書く必要あり。
>
> > 再引用は記号を２回書くことで表現可能
> > 複数行の場合、改行するたびに記号を書く必要あり。

---

◉ コード

```js
JavaScript //comment
const id = getNewNumber("0")
```

```ts
TypeScript //comment
const id: number = getNewNumber<string>(`age`)
```

```js
cy.get(`.todo-list li`) //BackQuoteもOK
  .should("have.length", 1)
  .first()
  .should("have.text", "Address")
```

---

◉ コード(拡張)

```diff_js(*Qiita)
- const takeout = ()=>{ ... }
+ const takeout = ()=>{ ... }
```

```math
\left( \sum_{k=1}^n a_k b_k \right)^{\!\!2} \leq
\left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
```

```plantuml
Bob->Alice : Hello!
```

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
