import { Question } from "../../../types";

export const jlptn5_30: Question[] = [
  {
    q: "【レストランの案内】\n営業時間：午前１１時　～　午後９時\n定休日：火曜日\n\n質問：火曜日の　午後７時に　レストランへ　行きます。レストランは　開いていますか。",
    options: ["はい、開いています", "いいえ、閉まっています", "午前だけ開いています", "午後だけ閉まっています"],
    correct: 1,
    type: "JLPT_N5",
    inputType: "CHOICE",
    explanation: "Teikyuubi (hari libur reguler) adalah hari Selasa (Kayoubi), jadi restoran tutup."
  },
  {
    q: "【図書館のルール】\n・図書館の中では　静かに　してください。\n・食べたり　飲んだり　しないでください。\n・本は　２週間　借りることが　できます。\n\n質問：図書館で　しては　いけないことは　何ですか。",
    options: ["本を借りること", "静かにすること", "ジュースを飲むこと", "勉強すること"],
    correct: 2,
    type: "JLPT_N5",
    inputType: "CHOICE",
    explanation: "Aturan menyatakan 'tabetari nondari shinaide kudasai' (jangan makan atau minum)."
  }
];
