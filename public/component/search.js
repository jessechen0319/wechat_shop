
let search_component_data = {product_test:{
    icon: "/images/products/product_1/icon.png"
}};
let search = Vue.extend({
    template: `
    <div class="search">
        <div class="search-bar">
            <input type="text" class="search-input">
            <div class="search-button">
                搜索
            </div>
        </div>
        <div class="catelog">
            <div class="catelog-item">辣椒酱</div>
            <div class="catelog-item">馒头</div>
            <div class="catelog-item">山楂</div>
            <div class="catelog-item">金银花</div>
            <div class="catelog-item">樱桃</div>
        </div>
        <div class="items">
            <div class="item">
                <list-item>
                    <div slot="image">
                        <img :src="product_test.icon" />
                    </div>
                </list-item>
            </div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </div>
    `,
    data: function(){
        return search_component_data;
    },
    beforeCreate: function(){
        Vue.component('list-item', ItemList);
    }
});