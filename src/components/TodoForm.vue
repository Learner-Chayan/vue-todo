<template>
<div>
    <input type="text" v-model="todo">  <input v-model="completed" type="checkbox">
    <button @click="addTodo">Submit</button>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import  Todo  from './Todo.vue';

@Component
export default class TodoForm extends Vue {
    private todo:string = "";
    private completed:boolean = false;

    private addTodo()
    {
        let todoInfo = {
            title:this.todo,
            completed:this.completed
        }

       this.$store.dispatch('addTodoItem',todoInfo);
        
    }
}
</script>

</style>
