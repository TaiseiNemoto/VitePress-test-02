<script setup>
import { ref } from "vue";

// const personList = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     }
// ];
const personList = ref([]);

const getPersonList = () => {
    personList
}
</script>

<template>
    <div>
        <button>ユーザーリストを取得</button>
    </div>
    <div>
        <ul>
            <li v-for="person in personList" :key="person.id">
                <p>Name：{{ person.name }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
</style>
