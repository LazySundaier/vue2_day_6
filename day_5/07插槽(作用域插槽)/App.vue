<template>
  <div>
    <MyTable :data="list">
      <template #default="obj">
        <!-- {{ obj }} -->
        <button @click="read(obj.ITEM)">查看</button>
      </template>
    </MyTable>
    <MyTable :data="list2">
      <template #default="obj">
        <button @click="del(obj.ITEM.id)">删除</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
export default {
  data() {
    return {
      list: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 },
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ]
    }
  },
  components: {
    MyTable
  },
  methods: {
    del(id) {
      this.list2 = this.list2.filter((item) => item.id !== id)
    },
    read(item) {
      alert(`姓名:${item.name};年纪:${item.age}`)
    }
  }
}
</script>
