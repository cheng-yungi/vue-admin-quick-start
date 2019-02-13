import Vue from 'vue';
import Row from 'iview/src/components/row';
import Col from 'iview/src/components/col';
import Layout from 'iview/src/components/layout';
import Header from 'iview/src/components/header';
import Content from 'iview/src/components/content';
import Menu from 'iview/src/components/menu';

import '../iview-variables.less';
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Layout', Layout);
Vue.component('Header', Header);
Vue.component('Content', Content);
Vue.component('Menu', Menu);
Vue.component('Submenu', Menu.Sub);
Vue.component('MenuItem', Menu.Item);
