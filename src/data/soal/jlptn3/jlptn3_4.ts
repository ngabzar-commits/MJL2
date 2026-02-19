import { Question } from "../../../types";

export const jlptn3_4: Question[] = [
  {
    q: "【メール】\n佐藤さん、明日の会議ですが、急な用事が入ってしまい、出席できなくなりました。\n資料は後で高橋さんに渡しておきます。\nご迷惑をおかけして申し訳ありません。\n田中\n\n質問：田中さんはどうしてメールを送りましたか。",
    options: ["会議の時間を変えてほしいから", "会議に出席できないから", "資料を高橋さんに渡してほしいから", "急な用事の内容を伝えたいから"],
    correct: 1,
    type: "JLPT_N3",
    inputType: "CHOICE",
    explanation: "Tanaka mengirim email untuk memberitahu ketidakhadirannya (shusseki dekinaku narimashita) karena urusan mendadak."
  },
  {
    q: "【注意書き】\nこの薬は食後に飲んでください。飲み忘れた場合は、気がついたときにすぐ飲んでください。\nただし、次の飲む時間が近い場合は、1回分休んでください。\n\n質問：薬を飲み忘れて、次の時間が近いとき、どうしますか。",
    options: ["すぐ飲みます", "2回分飲みます", "飲みません", "半分だけ飲みます"],
    correct: 2,
    type: "JLPT_N3",
    inputType: "CHOICE",
    explanation: "Jika waktu minum berikutnya sudah dekat (tsugi no nomu jikan ga chikai baai), instruksinya adalah 'yasunde kudasai' (lewati 1 kali / jangan minum)."
  }
];