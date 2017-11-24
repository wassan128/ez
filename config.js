/***** 設定ファイル *****/
/*** タイトル文字です、何も指定しないと「no title」になります。 ***/
const title = "Sample";

/*** ここには一問一答したい問題文を書きます。 ***/
// - 章ごとに表示の四角が区切られます。
// - 穴埋めにしたい部分は「{}」で囲んで、その中に答えを書きます(書き込まれていない場合、空欄として認識されません)。
// - 空欄はいくつでも作れます。順不同には対応していません2017。
/* フォーマット:
const questions = [
	[ //1章
		"あいうえおかきく{け}こ",
		"abcdef{g}hijklmn",
		"", ...
	],
	[ //2章
		"",
		"" ...
	] ...
];
*/
const questions = [
	[
		"林檎は英語で{apple}",
		"{オレンジ}は英語でorange",
		"ぶどうは英語で{grape}、マスカットは{muscat}"
	],
	[
		"今年は{2017}年です"
	]
];

/*** 空欄のエフェクトを指定します ***/
// デフォルトは「正答: #41C041, 誤答: #C02323」です。空欄を指定するとエフェクトは起こりません。
const effect = {
	"correct": "0 0 10px 0px #41C041",
	"wrong": "0 0 10px 0px #C02323",
	"nothing": ""
};
