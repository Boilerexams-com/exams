<template lang="html">

  <section class="exam-question">
    <template v-if="isExamChoosen">
      <template v-for="(questions, index) in choosenExam.questions">
        <b-row :key="index" class="d-flex new-page py-4 h-100">
          <template v-if="questions.type !== 'tf'">
            <b-col sm="5">
              <h6 v-html="'<b>' + (index).toString() + '. </b>' + questions.question"></h6>
              <template v-for="(answer, index) in questions.answers">
                <div :key="answer" class="d-flex">
                  <p v-html="index + ')'" class="px-2"></p>
                  <p :class="index !== 'D' ? 'code-answer' : ''" v-html="answer"></p>
                  <template v-if="questions['correct-answer'] === index && showAnswers">
                      <b-icon icon="check2" font-scale="1.5" class="mx-2 text-success"></b-icon>
                  </template>
                </div>
              </template>
            </b-col>
            <b-col sm="auto">
              <code-highlight language="c">
                <pre v-html="questions.code"></pre>
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
    props: ['isExamChoosen', 'choosenExam'],
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
  /* pre {
    line-height: 17px;
  } */

</style>
