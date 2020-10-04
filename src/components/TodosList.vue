<template>
<div width="50%">
    <h4><u>Completed Task :</u> <span class="text-green">{{ $store.getters.returnCompletedTodo }}</span>  <u>Pending :</u> <span class="text-red">{{$store.getters.returnNotCompletedTodo}}</span>  </h4>
    <TodoForm/>
    <div width="50%">
        <div>
            <th width="30%">Todo Name</th>
            <th width="30%">Completed ?</th>
            <th width="40%">Action</th>
        </div>
        <hr>
        <div v-for="(todo,index) of todos() " :key="index">
            <td width="30%" @click="toggleStatus(todo)"><span :class="{completed: !todo.completed}"> {{todo.title}} </span></td>
            <td width="30%">{{todo.completed}}</td>
            <td width="40%" @click="removeTodo(index)"><a href="#"> Remove </a></td>
             <hr>
        </div>
    </div>
    <Todo/>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import  Todo  from './Todo.vue';
import  TodoForm  from './TodoForm.vue';

@Component({
    components:{
        Todo,
        TodoForm
    }
})
export default class TodosList extends Vue {

    computed()
    {
        
    }

    private todos()
    {
        return this.$store.state.todos;
    }
    private removeTodo(index:number)
    {
        this.$store.dispatch('removeTodoItem',index);
    }
    private toggleStatus(todoItem:[])
    {
        this.$store.dispatch('toggleTodoStatus',todoItem);
    }

}
</script>
<style scoped>
    .completed{
        text-decoration: line-through;
    }
    .text-green {
        color:green;
    }
    .text-red {
        color:red;
    }
</style>
