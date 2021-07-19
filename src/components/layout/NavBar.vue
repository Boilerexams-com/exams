<template lang="html">
  <transition name="fade">
    <section v-if="toggle" class="nav-bar position-fixed w-100">
      <b-navbar toggleable="lg" style="background: white">
        <b-navbar-brand class="mx-3" href="#">Exams</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown :text="classNames.activeClass" right>
              <template v-for="className in classNames.classes">
                <b-dropdown-item :key="className" @click="selectClass(className)">{{className}}</b-dropdown-item>
              </template>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown :text="semesters.activeSemester" right :disabled="classNames.activeClass === 'Class'">
              <template v-for="semester in semesters.semesterList">
                <b-dropdown-item :key="semester" @click="selectSemester(semester)">{{semester}}</b-dropdown-item>
              </template>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown :text="exams.activeExam" right :disabled="semesters.activeSemester === 'Semester'">
              <template v-for="exam in exams.examList">
                <b-dropdown-item :key="exam" @click="selectExam(exam)">{{exam}}</b-dropdown-item>
              </template>
            </b-nav-item-dropdown>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </section>
  </transition>
</template>

<script lang="js">
  export default  {
    name: 'nav-bar',
    components: {
      
    },
    props: ['cs159Exams'],
    mounted () {
      this.$root.$on('toggle fullscreen', () => {
        this.toggle = !this.toggle;
      });
    },
    data () {
      return {
        toggle: true,
        className: "Class",
        classNames: {
          activeClass: "Class",
          classes: ["CS 159"]
        },
        semesters: {
          activeSemester: "Semester",
          semesterList: []
        },
        exams: {
          activeExam: "Exam",
          examList: []
        }
      }
    },
    methods: {
      selectClass(className) {
        this.classNames.activeClass = className;

        this.semesters.semesterList = []
        if(className === "CS 159") {
          for(var i = 0; i < this.cs159Exams.length; i++) {
            if(!this.semesters.semesterList.includes(this.cs159Exams[i]["semester"])) {
              this.semesters.semesterList.push(this.cs159Exams[i]["semester"]);
            }
          }
        }
      },
      selectSemester(semesterName) {
        this.semesters.activeSemester = semesterName;

        this.exams.examList = []
        for(var i = 0; i < this.cs159Exams.length; i++) {
          if(this.cs159Exams[i]["semester"] === semesterName) {
            this.exams.examList.push(this.cs159Exams[i]["exam"])
          }
        }

        if(this.exams.activeExam !== "Exam") {
          var examObject = this.findExam();
          if(examObject != null) {
            this.$root.$emit("exam selected", examObject);
          }
        }
      },
      selectExam(examName) {
        this.exams.activeExam = examName;

        var examObject = this.findExam();
        if(examObject != null) {
          this.$root.$emit("exam selected", examObject);
        }
      },
      findExam() {
        var examObject = null;
        for(var i = 0; i < this.cs159Exams.length; i++) {
          if(this.cs159Exams[i]["semester"] === this.semesters.activeSemester &&
                this.cs159Exams[i]["exam"] === this.exams.activeExam) {
            examObject = this.cs159Exams[i];
          }
        }

        return examObject;
      }
    },
    computed: {
      
    }
}

</script>

<style scoped lang="css">
.nav-bar {
  opacity: 1;
  z-index: 1;
}
.nav-bar:hover {
  opacity: 1;
}
</style>
