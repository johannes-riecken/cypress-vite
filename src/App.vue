<template>
  <div id="app">
    <h1>To-Do App</h1>
    <form @submit.prevent="addTask">
      <input v-model="newTask" placeholder="Add a new task" />
      <button type="submit">Add Task</button>
    </form>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ completed: task.completed }">{{ task.text }}</span>
        <button @click="removeTask(index)">Remove</button>
        <button @click="editTask(index)">Edit</button>
      </li>
    </ul>
    <div v-if="editingTask !== null">
      <input v-model="editingTask.text" placeholder="Edit task" />
      <button @click="saveTask">Save</button>
    </div>
    <h2>Completed Tasks</h2>
    <ul>
      <li v-for="(task, index) in completedTasks" :key="index">
        <span>{{ task.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: '',
      editingTask: null
    };
  },
  methods: {
    addTask() {
      if (this.editingTask !== null) {
        this.editingTask = null;
      } else if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.editingTask = this.tasks[index];
    },
    saveTask() {
      this.editingTask = null;
    }
  },
  computed: {
    completedTasks() {
      return this.tasks.filter(task => task.completed);
    }
  }
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
