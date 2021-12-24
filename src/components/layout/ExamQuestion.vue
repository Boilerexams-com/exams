<template lang="html">

  <section class="exam-question">
    <template v-if="isExamChoosen">
      <div class="px-4 title-page new-page">
        <b-button class="title-header" variant="outline-light">CS 159</b-button>
        <h2 v-html='choosenExam.semester + " " + choosenExam.exam'></h2>
        <h4 v-html='numQuestions + " questions"'></h4>
        <img class="center-logo m-2" src="../../assets/boilerexams-logo.png">
        <p>The content of these exams does not belong to Boilerexams. The Purdue CS 159 staff created and owns the rights to these exams.</p>
      </div>
      <template v-for="(questions, index) in choosenExam.questions">
        <b-row :key="index" class="d-flex new-page py-4 h-100">
          <template v-if="questions.type !== 'tf'">
            <b-col sm="5">
              <h6 v-html="'<b>' + (index).toString() + '. </b>' + questions.question"></h6>
              <template v-for="(answer, index) in questions.answers">
                <div :key="answer" class="d-flex">
                  <p v-html="index + ')'" class="px-2"></p>
                  <pre :class="index !== 'D' ? 'code-answer' : ''" v-html="answer"></pre>
                  <template v-if="questions['correct-answer'] === index && showAnswers">
                      <b-icon icon="check2" font-scale="1.5" class="mx-2 text-success"></b-icon>
                  </template>
                </div>
              </template>
            </b-col>
            <b-col sm="auto">
              <code-highlight language="c">
                <pre v-html="questions.code" class="z-index: 2;"></pre>
              </code-highlight>
            </b-col>
          </template>
          <template v-else>
            <b-col sm="8">
              <h6 v-html="'<b>' + (index).toString() + '. </b>' + questions.question"></h6>
              <template v-for="(answer, index) in questions.answers">
                <div :key="answer" class="d-flex">
                  <p v-html="index + ')'" class="px-2"></p>
                  <p v-html="' ' + answer"></p>
                  <template v-if="questions['correct-answer'] === index && showAnswers">
                      <b-icon icon="check2" font-scale="1.5" class="mx-2 text-success"></b-icon>
                  </template>
                </div>
              </template>
            </b-col>
          </template>
        </b-row>
      </template>
    </template>
  </section>

</template>

<script lang="js">
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "../../assets/prism-vscode-dark.css";
import 'prism-es6/components/prism-markup-templating';
import 'prism-es6/components/prism-c';

  export default  {
    name: 'exam-question',
    props: ['isExamChoosen', 'choosenExam','numQuestions'],
    components: {
      CodeHighlight
    },
    mounted () {
      this.$root.$on('toggle answer mode', (showAnswers) => {
        this.showAnswers = showAnswers;
      })
    },
    data () {
      return {
        showAnswers: false
      }
    },
    methods: {
  
    },
    computed: {
      
    },
    watch: {
      
    }
}


</script>

<style scoped lang="css">
  .exam-question {
    text-align: left;
    color: white;
    font-family: 'Times New Roman';
  }
  .new-page {
    height: 100%;
  }
  @media print {
    .new-page {
      page-break-after: always;
    }
    .title-page {
      padding-top: 120px;
    }
  }
  .correct-answer {
    color: green;
  }
  .code-answer {
    font-family: 'Courier New';
  }
  h6 {
    line-height: 1.6;
  }
  .title-page {
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  .title-page p{
    margin: 440px auto auto auto;
    width: 50%;
  }
  .title-header {
    color: #d0ba92;
    border: #d0ba92 1px solid;
    margin-bottom: 20px;
    font-size: 48px;
    font-weight: 600;
  }
  .center-logo {
    width: 108px;
    height: 108px;
    display: none;
  }
  pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
  }
  /* pre {
    line-height: 17px;
  } */

</style>
