<template>
  <div class="q-pa-md bg">
    <div class="q-gutter-y-md" style="max-width: 600px">
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
import { ref } from 'vue';
import WelcomeComp from '../components/WelcomeComp.vue';

const tab = ref('welcome');
</script>

<style scoped>
.bg {
  background-image: url('@/assets/Hero-Top-Image-1.webp');
}
</style>
