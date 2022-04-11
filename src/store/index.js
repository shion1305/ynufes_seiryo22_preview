import {createStore} from 'vuex'

export default createStore({
    state: {
        //アイコン画像
        //企画名
        //団体名
        //企画説明文
        //団体説明文
        entities: {
            imgLocation: "/preview/sample_icon.png",
            eventName: "YNUお菓子の展覧会",
            orgName: "YNU Sweets Lab.",
            eventDescription: "お菓子の",
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
