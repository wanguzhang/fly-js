<template>
    <div>
        <button @click="changeDivClass">改变 div 样式</button>
        <div v-for="item in data" :key="item.id" :class="classObject" @click="log(item.id)">1124</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            classObject: { active: true, 'text-dabger': false },
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
        };
    },
    methods: {
        changeDivClass() {
            this.classObject.active = !this.classObject.active;
        },
        log(value) {
            console.log(value);
        },
    },
};
</script>
<style>
button{
  text-decoration: none;
  background-color: red;
  padding: 2px 2px;
  /* margin: 2px 2px; */
  margin-bottom: 2px;
  border: none;
}

.active {
    width: 200px;
    color: #fff;
    background-color: black;
}
.active:hover {
  background-color: red;
}
</style>
