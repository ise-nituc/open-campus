# 宇部高専 制御情報工学科 広報イベントポータル

宇部工業高等専門学校 制御情報工学科が実施する広報イベントの情報と、
オープンキャンパスの体験テーマ・しおりを掲載するWebサイトです。

## 公開サイト

GitHub Pagesで公開しています。

- 広報イベントポータル
  https://ise-nituc.github.io/open-campus/

- 2026年度  
  https://ise-nituc.github.io/open-campus/2026/

## ディレクトリ構成

```text
open-campus/
├─ README.md
├─ index.html                 # 広報イベントポータル
├─ 2026/
   ├─ index.html              # 第1回オープンキャンパス
   ├─ style.css               # ポータル・イベント共通スタイル
   ├─ details/
   │  └─ s1.html
   └─ images/
      ├─ S1.png
      ├─ S2.png
      ├─ S3.png
      ├─ S4.png
      ├─ S5.png
      ├─ S6.png
      ├─ S7.png
      └─ S8.png
└─ events/2026/
   ├─ open-campus-02/
   │  └─ index.html
   └─ kodomo-kagakukan-in-tokiwa/
      ├─ index.html
      └─ images/
```

## 2026年度サイトについて

2026年度第1回オープンキャンパスの制御情報工学科しおりを掲載しています。

各教員が作成したPowerPoint原稿は内容を変更せず、
PNG形式に変換して掲載しています。

トップページには、各体験テーマの名称・概要と、
しおり画像へのリンクを掲載しています。

広報イベントポータルには、次のイベントを掲載しています。

- 8月8日：第1回オープンキャンパス（終了）
- 8月20日：こども科学館inときわ（開催予定）
- 10月31日：第2回オープンキャンパス（開催予定）

## 画像ファイルの作成

PowerPointからPNG形式で書き出します。

書き出し解像度は200 dpiを使用し、
画像サイズは原稿により、現在は次のいずれかです。

```text
1654 × 2338 px（S1）
1500 × 2167 px（S2～S8）
```

画像ファイル名は、URLやOSによる問題を避けるため、
半角英数字で統一します。

```text
S1.png ～ S8.png
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
