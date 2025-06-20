export interface Quiz {
    question: string;
    options: string[];
    answerIndex: number;
}

const quizData: Quiz[] = [
    {
        question:"ルフィの悪魔の実は?",
        options: ["ゴムゴムの実","メラメラの実","ヒエヒエの実","スベスベの実","ピカピカの実"],
        answerIndex: 0,
    },
    {
        question:"ナルトの必殺技は?",
        options: ["千鳥","螺旋丸","火遁・豪火球の術","水遁・水龍弾の術"],
        answerIndex: 1,
    },
    {
        question:"ヒトカゲの最終進化系は?",
        options: ["バシャーモ","バグフーン","リザードン","ゴウカザル","ファイアー"],
        answerIndex: 2,
    },
    {
        question:"エヴァンゲリオンのヒロインは?",
        options: ["ナミ","サクラ","禰󠄀豆子","アスカ"],
        answerIndex: 3,
    },
    {
        question:"スラムダンクの連載が終わった年は?",
        options: ["2000年","1999年","1998年","1997年","1996年"],
        answerIndex: 4,
    },

]

export default quizData;
