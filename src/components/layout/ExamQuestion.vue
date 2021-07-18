<template lang="html">

  <section class="exam-question">
    <template v-if="isExamChoosen">
      <template v-for="(questions, index) in choosenExam.questions">
        <b-row :key="index" class="d-flex new-page py-4">
          <template v-if="questions.type === 'code'">
            <b-col sm="auto">
              <pre v-html="questions.code"></pre>
            </b-col>
            <b-col sm="4">
              <h6 v-html="'<b>' + (index).toString() + '. </b>' + questions.question"></h6>
              <template v-for="(answer, index) in questions.answers">
                <p :key="answer" v-html="index + ') ' + answer"></p>
              </template>
            </b-col>
          </template>
          <template v-else>
            <b-col sm="4">
              <h6 v-html="'<b>' + (index).toString() + '. </b>' + questions.question"></h6>
              <template v-for="(answer, index) in questions.answers">
                <p :key="answer" v-html="index + ') ' + answer"></p>
              </template>
            </b-col>
          </template>
        </b-row>
      </template>
    </template>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'exam-question',
    props: ['isExamChoosen', 'choosenExam'],
    mounted () {

    },
    data () {
      return {
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
  @media print {
    .new-page {
      page-break-after: always;
    }
  }

</style>
