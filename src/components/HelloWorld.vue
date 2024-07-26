<!-- JS -->

<script setup>
import NestedComponent from '@/components/NestedComponent.vue'
import TextInterpolation from '@/components/TextInterpolation.vue'
import AttributeBinding from '@/components/AttributeBinding.vue'
import GlobalStyle from '@/components/GlobalStyle.vue'
import LocalStyle from '@/components/LocalStyle.vue'
import CombinedStyle from '@/components/CombinedStyle.vue'
import ModuleStyle from '@/components/ModuleStyle.vue'
import MyEvent from '@/components/MyEvent.vue'
import MyReactiveComponent from '@/components/MyReactiveComponent.vue'
import MyRefComponent from '@/components/MyRefComponent.vue'
import ComputedProperties from '@/components/ComputedProperties.vue'
import ConditionalRenderingComponent from '@/components/ConditionalRenderingComponent.vue'
import IterationComponent from '@/components/IterationComponent.vue'
import TwoBindingComponent from '@/components/TwoBindingComponent.vue'
import StaticPropsComponent from '@/components/StaticPropsComponent.vue'
import DynamicPropsComponent from '@/components/DynamicPropsComponent.vue'
import ChangingPropsValueComponent from '@/components/ChangingPropsValueComponent.vue'
import PropValidationComponent from '@/components/PropValidationComponent.vue'
import ParentComponent from '@/components/ParentAndChildComponents/ParentComponent.vue'
import SlotComponent from '@/components/SlotComponent.vue'
import FallbackContent from '@/components/FallbackContent.vue'

import NamedSlotComponent from '@/components/NamedSlotComponent.vue'
import MasterParentComponent from '@/components/ProvideAndInject/MasterParentComponent.vue'
import LifeCycleComponent from '@/components/LifeCycleComponents/LifeCycleComponent.vue'

import WatchersComponent from '@/components/Watchers/WatchersComponent.vue'
import WatcherReactiveObject from '@/components/Watchers/WatcherReactiveObject.vue'
import MultipleSourcesComponent from '@/components/Watchers/MultipleSourcesComponent.vue'

import TempleteRefComponent from '@/components/RefTemplates/TempleteRefComponent.vue'
import FunctionRefComponent from '@/components/RefTemplates/FunctionRefComponent.vue'
import RefComponent from '@/components/RefTemplates/RefComponent.vue'
import ToggleFriends from '@/components/AsyncComponents/ToggleFriends.vue'

import { ref } from 'vue'
const firstName = ref('Mar')
const lastName = ref('Martinez')
const myFavoriteNumber = ref(7)

let showHide = ref(true)

console.log('Hello World')
</script>

<!-- Html -->

<template>
  <div class="container">
    <h1>Hello World (this is a parent component)</h1>
    <NestedComponent />
    <TextInterpolation />
    <AttributeBinding />
    <GlobalStyle />
    <LocalStyle />
    <CombinedStyle />
    <ModuleStyle />
    <MyEvent />
    <MyReactiveComponent />
    <MyRefComponent />
    <ComputedProperties />
    <ConditionalRenderingComponent />
    <IterationComponent />
    <TwoBindingComponent />
    <StaticPropsComponent name="Jordan" />
    <DynamicPropsComponent :firstName="firstName" :lastName="lastName" />
    <ChangingPropsValueComponent :myFavoriteNumber="myFavoriteNumber" />
    <PropValidationComponent fullName="Mar" :age="20" />
    <ParentComponent />
    <!-- Slot components are called differently , is not an autoclosing tag -->

    <SlotComponent>
      <h1>Content 1</h1>
    </SlotComponent>

    <FallbackContent />

    <FallbackContent>
      <p>Fallback will not work, because I am providing content inside the Parent</p>
    </FallbackContent>

    <hr />

    <NamedSlotComponent>
      <!-- v-slot:one -->

      <template v-slot:one> this content will go to slot 1 </template>

      <!-- #two -->

      <template #two> This content will go to slot 2 </template>
    </NamedSlotComponent>

    <MasterParentComponent />
    <div>
      <LifeCycleComponent v-if="showHide" />
      <button @click="showHide = !showHide">Unmount component</button>
    </div>
    <WatchersComponent />
    <WatcherReactiveObject />
    <MultipleSourcesComponent />
    <TempleteRefComponent />
    <FunctionRefComponent />

    <RefComponent />

    <ToggleFriends />
  </div>
</template>
<!-- Css -->

<style>
.container {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: blueviolet;
}
</style>
