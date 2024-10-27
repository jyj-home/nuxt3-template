import { defineStore } from "pinia";

export interface QuestionPathInterface {
  filePath: string;
  title: string;
}

export interface SettingOptionInterface {
  title: string;
  btnName: string;
  questionPaths: QuestionPathInterface[];
  random: boolean;
  choiceRandom: boolean;
}  
   
export interface QuestionInterface {
  no: number;
  question: string;
  choice: string[];
  answer: string;
}

export const useCommonStore = defineStore("common", {
  state: () => ({
    dispType: "", // 表示する画面情報
    settingOption: {
      title: "",
      btnName: "",
      questionPaths: [] as QuestionPathInterface[],
      random: false,
      choiceRandom: false,
    }, // 設定ファイルの内容
    questionList: [] as QuestionInterface[], // 問題集リスト
    selectAnswerList: [] as string[], // 解答リスト
    correctCount: 0, // 正解数
    selectChoiceStore: "", // 選択した選択肢
  }),
  getters: {
    getDispType: (state) => state.dispType,
    getSettingOption: (state) => state.settingOption,
    getQuestionList: (state) => state.questionList,
    getSelectAnswerList: (state) => state.selectAnswerList,
    getCorrectCount: (state) => state.correctCount,
    getSelectChoiceStore: (state) => state.selectChoiceStore,
  },
  actions: {
    setDispType(dispType: string) {
      this.dispType = dispType;
    },
    setSettingOption(settingOption: SettingOptionInterface) {
      this.settingOption = settingOption;
    },
    setQuestionList(questionList: QuestionInterface[]) {
      this.questionList = questionList;
    },
    setSelectAnswerList(selectAnswerList: string[]) {
      this.selectAnswerList = selectAnswerList;
    },
    setCorrectCount(correctCount: number) {
      this.correctCount = correctCount;
    },
    setSelectChoiceStore(selectChoiceStore: string) {
      this.selectChoiceStore = selectChoiceStore;
    },
  },
});
