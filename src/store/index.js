import {createStore} from 'vuex'

export default createStore({
    state: {
        //アイコン画像
        //企画名
        //団体名
        //企画説明文
        //団体説明文
        entities: {
            imgLocation: "/sample_icon.png",
            eventName: "YNUお菓子の展覧会",
            orgName: "YNU Sweets Lab.",
            eventDescription: "普段私たちが普段作っているお菓子のレシピを公開してしまいます!",
            orgDescription: ""
        }
    },
    getters: {
        entities: (state) => state.entities,
    },
    mutations: {
        update(state, entities) {
            state.entities = entities;
        }
    },
    actions: {},
    modules: {}
})
