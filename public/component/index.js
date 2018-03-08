// Vue.component('menu-index', {
//     template: `
//         <div>this is index page</div>
//     `
// });
let index_component_data = {};
let index = Vue.extend({
    template: `
        <div class="index"> 
            <link rel="stylesheet" href="/stylesheets/index.css">
            <div class="title">

            </div>
            <div class="body">
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
            </div>
        </div>
    `,
    data: function(){
        return index_component_data;
    }
});