import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

export default new Vuetify({
    icons:{
        iconsfont: 'md' || 'fa'
    },
    theme: {
        themes:{
            light:{
                background: colors.grey.lighten2,
            },
            dark:{
                background: colors.shades.white,
            }
        }
    }
});

Vue.use(Vuetify);


