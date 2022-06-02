<template>
  <div class="q-pa-md bg fit row wrap justify-center items-start content-start">
    <div class="q-gutter-y-md log">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="welcome" label="Welcome" />
          <q-tab name="student" label="Student Login" />
          <q-tab name="teacher" label="Teacher Login" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="welcome">
            <div class="text-h6">Welcome</div>
            <WelcomeComp></WelcomeComp>
          </q-tab-panel>

          <q-tab-panel name="student">
            <div class="text-h6">Student Login</div>
            <StudentLogin></StudentLogin>
          </q-tab-panel>

          <q-tab-panel name="teacher">
            <div class="text-h6">Teacher Login</div>
            <TeacherLogin></TeacherLogin>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import StudentLogin from '@/components/StudentLogin.vue';
import TeacherLogin from '@/components/TeacherLogin.vue';
import WelcomeComp from '../components/WelcomeComp.vue';
import { ref } from 'vue';

const tab = ref('welcome');
</script>

<style scoped>
.bg {
  background-image: url('@/assets/Hero-Top-Image-1.webp');
  min-height: 44.8rem;
}

.log {
  overflow: auto;
  min-height: 600px;
  max-height: 600px;
  min-width: 600px;
  max-width: 600px;
}
</style>
