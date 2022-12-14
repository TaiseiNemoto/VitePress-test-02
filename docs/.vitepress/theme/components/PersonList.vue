<template>
    <div class="buttonBox">
        <button @click="getPersonList">ユーザーリストを取得</button>
    </div>
    <div class="listBox">
        <div v-if="!data.personList.length">
            ユーザーリストがありません。
        </div>
        <ul v-else>
            <li v-for="person in data.personList" :key="person.name">
                <p>Name：{{ person.name }}</p>
                <p>Email：{{ person.email }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/users'
const data = reactive({
    personList: []
});

const getPersonList = () => {
    axios.get(url)
    .then(function (res) {
        data.personList = res.data.map(person => {
            return {
                name: person.name,
                email: person.email
            }
        })
    })
    .catch(function (error) {
        console.log(error);
    });
}
</script>

<style scoped lang="scss">
.buttonBox {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
}
button {
    height: 40px;
    width: 200px;
    color: var(--vp-c-brand);
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}

.listBox {
    display: flex;
    justify-content: center;

    li {
        list-style: none;
    }
}
</style>
