// Vue.component('menu-index', {
//     template: `
//         <div>this is index page</div>
//     `
// });
let index_component_data = {};
let index = Vue.extend({
    template: `
        <div class="index"> 
            <div class="title">
            </div>
            <div class="body">
                <div class="item"><index-recommand-panel product_name="山楂" product_price="6元/500g" product_comments="治疗食欲不振的利器"></index-recommand-panel></div>
                <div class="item"><index-recommand-panel></index-recommand-panel></div>
                <div class="item"><index-recommand-panel></index-recommand-panel></div>
                <div class="item"><index-recommand-panel></index-recommand-panel></div>
            </div>
        </div>
    `,
    data: function(){
        return index_component_data;
    }
});