# E'z - Easy generate, easy judge!
## What's this?
* 一問一答サイトを簡単に作れるアプリ(?)です
* 設定ファイルを編集して使ってください
* オフラインでも使えます
* 動作確認はGoogle Chrome, Vivaldi, Firefox(Developper Edition)で行いました

## Files
- index.html 					: メインのhtmlファイル
- config.js 					: 問題などの設定ファイル
- config.js.sample 				: config.jsの書き方・サンプル
- README.md 					: このファイル
- js/
  |- ez.js 						: 出題や正誤判定のプログラム
  |_ jquery3.2.1.min.js 		: 外部ライブラリ
- css/
  |- style.css 					: スタイルシート
  |_ font-awesome.min.css 		: font-awesome関連のスタイルシート
- fonts/
  |- Aldrich-Regular.ttf  : アルファベットに適用しているフォントのファイル
  |- 03SmartFontUI.ttf    : 日本語に適用しているフォントのファイル
  |- FontAwesome.otf 			: font-awesome関連のファイル
  |- fontawesome-webfont.eot 	: font-awesome関連のファイル
  |- fontawesome-webfont.svg 	: font-awesome関連のファイル
  |- fontawesome-webfont.ttf 	: font-awesome関連のファイル
  |- fontawesome-webfont.woff 	: font-awesome関連のファイル
  |_ fontawesome-webfont.woff2 	: font-awesome関連のファイル

## How to use
1. config.js.sampleを参考に、config.jsを編集します
　 config.js.sampleの「.sample」を消して作り始めても大丈夫です
2. 編集が終わったら保存して、index.htmlをブラウザで開きます
3. 空欄に文字を打ち込んで回答します。枠からカーソルが外れると自動的に正誤判定されます
4. わからないときは枠はダブルクリックすると答えが表示されます
5. 右下に「クリアボタン(全ての回答をクリアする)」「答え表示ボタン(全ての回答を表示する)」「上へ戻るボタン」があります

## License
MIT License

Copyright (c) 2017 mr_banana

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Last update
* 2017/11/24
