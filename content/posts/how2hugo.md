---
date: '2025-01-07T10:10:00+09:00'
draft: false
title: 'Hugoで詰まったことと解決方法'
ShowToc: true
categories: ["備忘録"]
tags: ["hugo"]
---

こんにちは、私がこのサイトを作る上でHugoで詰まったことを書いてます

※**前提条件をよく読んでください**

## 前提条件

- Github Pages
- Theme: PaperMod
- Hugo v0.140.2

## CSSが適用されない

`Hugo.yaml`に

```yaml
parans:
    assets:
        disableFingerprinting: true
```

## ToC(目次)を追加する

記事の先頭に

```yaml
---
~略~
ShowToc: true
~略~
---
```

## サイトの言語を設定する

私は`languageCode`というパラメータにja-jpを設定して「あれ、適用されないな」とか言ってました

`Hugo.yaml`に

```yaml
DefaultContentLanguage: "ja"

languages:
  ja:
    languageName: "Japanese"
    weight: 10
```

## `docs/`に出力したい

`Hugo.yaml`に

```yaml
publishDir: docs
```

## その他

`static/`フォルダは`public/`の中にそのまま配置されるようですので、心配しなくても大丈夫です。
