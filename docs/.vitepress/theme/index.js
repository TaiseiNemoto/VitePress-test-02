import DefaultTheme from 'vitepress/theme'
import './custom.css'
import PersonList from '../../components/PersonList.vue'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
      app.component('PersonList', PersonList);
    }
  }