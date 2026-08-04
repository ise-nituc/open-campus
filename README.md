# 宇部高専 制御情報工学科 オープンキャンパス案内

宇部工業高等専門学校 制御情報工学科のオープンキャンパスにおける、
体験テーマ紹介・しおり閲覧用Webサイトです。

## 公開サイト

GitHub Pagesで公開しています。

- トップページ  
  https://ise-nituc.github.io/open-campus/

- 2026年度  
  https://ise-nituc.github.io/open-campus/2026/

## ディレクトリ構成

```text
open-campus/
├─ README.md
└─ 2026/
   ├─ index.html
   ├─ style.css
   └─ images/
      ├─ s1.png
      ├─ s2.png
      ├─ s3.png
      ├─ s4.png
      ├─ s5.png
      ├─ s6.png
      ├─ s7.png
      └─ s8.png
```

## 2026年度サイトについて

2026年度第1回オープンキャンパスの制御情報工学科しおりを掲載しています。

各教員が作成したPowerPoint原稿は内容を変更せず、
PNG形式に変換して掲載しています。

トップページには、各体験テーマの名称・概要と、
しおり画像へのリンクを掲載しています。

## 画像ファイルの作成

PowerPointからPNG形式で書き出します。

書き出し解像度は200 dpiを使用し、
画像サイズはおおむね次のとおりです。

```text
1654 × 2338 px
```

画像ファイル名は、URLやOSによる問題を避けるため、
半角英数字で統一します。

```text
s1.png ～ s8.png
```

## ローカルでの確認方法

リポジトリの2026年度ディレクトリで、簡易Webサーバを起動します。

```bash
cd 2026
python -m http.server 8000
```

ブラウザで次のURLを開きます。

```text
http://localhost:8000/
```

HTMLファイルを直接開くこともできますが、
GitHub Pages公開時に近い状態で確認するため、
Webサーバ経由での確認を推奨します。

## 更新方法

1. PowerPoint原稿をPNG形式で書き出す
2. `2026/images/` の対応する画像を差し替える
3. 必要に応じて `2026/index.html` のテーマ名・概要・リンクを修正する
4. ローカルで表示を確認する
5. GitHubへcommit・pushする

例：

```bash
git add .
git commit -m "Update open campus guide"
git push
```

## 公開上の注意

- PowerPoint原稿そのものは公開しません
- 個人情報や公開不可の情報が含まれていないことを確認します
- 写真に写っている人物の公開可否を確認します
- 開催日時やリンク先が最新であることを確認します
- GitHub Pages公開後、スマートフォンでも表示確認を行います

## 管理

宇部工業高等専門学校  
制御情報工学科
