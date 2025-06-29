export interface QuizData {
    question: string;
    options: string[];
    answerIndex: number;
}

const quizData: Data[] = [
    {
        question:'ルフィが食べた悪魔の実の名前は？',
        options:['ゴムゴムの実','メラメラの実','バラバラの実','ピカピカの実','ヒエヒエの実'],
        answerIndex:0,
    },
    {
        question:'ナルトの必殺技は？',
        options:['千鳥','螺旋丸','火遁・豪火球の術','水遁・水龍弾の術','土遁・土砂崩し'],
        answerIndex:1,
    },
    {
        question:'ヒトカゲの最終進化は？',
        options:['バシャーモ','ゴウカザル','リザードン','ファイアー','バグフーン'],
        answerIndex:2,
    },
    {
        question:'エヴァンゲリオンのヒロインは?',
        options:['ハンコック','蘭','ナミ','アスカ','サクラ'],
        answerIndex:3,
    },
    {
        question:'スラムダンクの連載が終了した年は？',
        options:['1998年','1997年','1995年','1999年','1996年'],
        answerIndex:4,
    }
]

export default quizData;