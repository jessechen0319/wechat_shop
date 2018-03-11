
let search_component_data = {product_test:{
    icon: "/images/products/product_1/icon.png"
}};

let search_component_methods = {
    
};

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
                    <div slot="name">山楂</div>
                    <div slot="description">酸酸又甜甜</div>
                    <div slot="location">
                        <div class="location_head">原产地</div>山东
                    </div>
                    <div slot="sell_amount">100人已买</div>
                    <div slot="price">¥10</div>
                    <div slot="per">500g</div>
                </list-item>
            </div>
            <div class="item">
                <list-item>
                    <div slot="image">
                        <img :src="product_test.icon" />
                    </div>
                    <div slot="name">山楂</div>
                    <div slot="description">酸酸又甜甜</div>
                    <div slot="location">
                        <div class="location_head">原产地</div>山东
                    </div>
                    <div slot="sell_amount">100人已买</div>
                    <div slot="price">¥10</div>
                    <div slot="per">500g</div>
                </list-item>
            </div>
            <div class="item">
                <list-item>
                    <div slot="image">
                        <img :src="product_test.icon" />
                    </div>
                    <div slot="name">山楂</div>
                    <div slot="description">酸酸又甜甜</div>
                    <div slot="location">
                        <div class="location_head">原产地</div>山东
                    </div>
                    <div slot="sell_amount">100人已买</div>
                    <div slot="price">¥10</div>
                    <div slot="per">500g</div>
                </list-item>
            </div>
            <div class="item">
                <list-item>
                    <div slot="image">
                        <img :src="product_test.icon" />
                    </div>
                    <div slot="name">山楂</div>
                    <div slot="description">酸酸又甜甜</div>
                    <div slot="location">
                        <div class="location_head">原产地</div>山东
                    </div>
                    <div slot="sell_amount">100人已买</div>
                    <div slot="price">¥10</div>
                    <div slot="per">500g</div>
                </list-item>
            </div>
            <div class="item">
                <list-item>
                    <div slot="image">
                        <img :src="product_test.icon" />
                    </div>
                    <div slot="name">山楂</div>
                    <div slot="description">酸酸又甜甜</div>
                    <div slot="location">
                        <div class="location_head">原产地</div>山东
                    </div>
                    <div slot="sell_amount">100人已买</div>
                    <div slot="price">¥10</div>
                    <div slot="per">500g</div>
                </list-item>
            </div>
        </div>
    </div>
    `,
    data: function(){
        return search_component_data;
    },
    beforeCreate: function(){
        Vue.component('list-item', ItemList);
    },
    methods: search_component_methods
});