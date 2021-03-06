/***** 設定ファイル *****/
/*** タイトル文字です、空文字を指定すると「no title」になります。 ***/
const title = "Sample";

/*** ここには一問一答したい問題文を書きます。 ***/
// - 章ごとに表示の四角が区切られます。
// - 穴埋めにしたい部分は「#{}」で囲んで、その中に答えを書きます(書き込まれていない場合、空欄として認識されません)。
// - 画像を配置したい場合は表示したい画像を「image」ディレクトリ直下に配置します。問題文内に書くときは「%{}」で囲んで、その中にファイル名(拡張子まで)を書きます。
// - 空欄はいくつでも作れます。
// - 20171201 複数正答に対応しました。「;」区切り(空白なし)で指定します。
// - 20171228 選択問題に対応しました。「;」区切り(空白なし)の選択肢を「[]」で囲みます。正答の選択肢は一番「左」に書きます。
/* 例 */
const questions = {
	"1) Fruits names": [
		"林檎は英語で#{apple}",
		"#{おれんじ;オレンジ;みかん;ミカン}は英語でorange",
		"ぶどうは英語で#{grape}、マスカットは#{muscat}"
	],
	"2) Trivia": [
		"2018年の前は#{2017;平成29;H29}年です",
		"2018年の干支は#{[戌;酉;兎;亥;子]}です",
	],
	"3) I have an apple": [
		"次の画像に写っている食べ物の名称は「#{バナナ;ばなな}」である。%{banana.png}",
	]
};


/***** 任意のオプション(変更の必要が無いときはそのままにしてください) *****/
/*** 空欄のエフェクトを指定します ***/
// デフォルトは「正答: #41C041, 誤答: #C02323」です。空欄を指定するとエフェクトは起こりません。
const effect = {
	"correct": "0 0 10px 0px #41C041",
	"wrong": "0 0 10px 0px #C02323",
	"nothing": ""
};
/*** 空欄の横幅余白(半角文字幅単位)を指定できます ***/
// デフォルトは半角2文字分
const padding = 2;
