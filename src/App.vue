<template>
  <div id="app">
    <nav-bar :cs159Exams="JSON.parse(JSON.stringify(cs159Exams))"/>
    <div :class="toggleNavBar" class="d-flex w-100 position-fixed px-2">
      <answer-mode-button/>
      <full-screen-button/>
    </div>
    <div :class="toggleNavBar" class="px-4">
      <exam-question :isExamChoosen="isExamChoosen" :choosenExam="choosenExam" :numQuestions="numQuestions"></exam-question>
    </div>
    <div class="h-100"></div>
    <img class="corner-logo m-2" src="./assets/boilerexams-logo.png">
  </div>
</template>

<script>
//vgc -s ComponentName
import NavBar from './components/layout/NavBar.vue';
import FullScreenButton from './components/layout/FullScreenButton.vue';
import ExamQuestion from './components/layout/ExamQuestion.vue';
import cs159ExamsJson from './assets/cs159exams.json';
import AnswerModeButton from './components/layout/AnswerModeButton.vue';


export default {
  name: 'App',
  components: {
    NavBar,
    FullScreenButton,
    ExamQuestion,
    AnswerModeButton
  },
  mounted () {
    this.$root.$on('toggle fullscreen', () => {
      this.toggleNavBar = this.toggleNavBar === "pt-58" ? "" : "pt-58";
    }),
    this.$root.$on('exam selected', (exam) => {
      console.log(exam.questions.length);
      this.choosenExam = exam;
      var count = 0;
      for(var question in exam.questions) {
        if(question != null)
          count++;
      }
      this.numQuestions = count;
      this.isExamChoosen = true;
    })
  },
  data () {
    return {
      toggleNavBar: "pt-58",
      cs159Exams: cs159ExamsJson["exams"],
      isExamChoosen: false,
      numQuestions: 0,
      choosenExam: {}
    }
  }
}
</script>

<style>

html, body {
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #1b1b1b;
  min-height: 100%;
  height: auto;
}
button:focus,button:active {
    outline: none !important;
    box-shadow: none !important;
  }
.pt-58 {
  padding-top: 60px;
}
.corner-logo {
  position: fixed;
  bottom: 20px;
  opacity: 60%;
  right: 0;
  width: 54px;
  height: 54px;
  display: none;
}

@media print {
    .corner-logo {
      display: block;
    }
  }
</style>
