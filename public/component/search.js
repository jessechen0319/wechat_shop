
let search_component_data = {product_test:{
    icon: "/images/products/product_1/icon.png"
},
    searchresult: [
        {
            productId: 1,
            icon: "/images/products/product_1/icon.png",
            productName: "山楂",
            productDescription: "酸酸又甜甜",
            productLocation: "山东",
            productSellAmount: 100,
            priceString: "¥10",
            price: 10,
            per: "500g",
            cart_description: "酸甜山楂，开吃前先给自己来个山楂buff",
            cartSelectStyle: {
                "cart-unselected": false,
                "cart-selected": true
            }
        },
        {
            productId: 2,
            icon: "/images/products/product_1/icon.png",
            productName: "水饺",
            productDescription: "酸酸又甜甜",
            productLocation: "山东",
            productSellAmount: 120,
            priceString: "¥15",
            price: 15,
            per: "500g",
            cart_description: "酸甜山楂，开吃前先给自己来个山楂buff",
            cartSelectStyle: {
                "cart-unselected": false,
                "cart-selected": true
            }
        },
        {
            productId: 3,
            icon: "/images/products/product_1/icon.png",
            productName: "水饺",
            productDescription: "酸酸又甜甜",
            productLocation: "山东",
            productSellAmount: 120,
            priceString: "¥15",
            price: 15,
            per: "500g",
            cart_description: "酸甜山楂，开吃前先给自己来个山楂buff",
            cartSelectStyle: {
                "cart-unselected": false,
                "cart-selected": true
            }
        },
        {
            productId: 4,
            icon: "/images/products/product_1/icon.png",
            productName: "水饺",
            productDescription: "酸酸又甜甜",
            productLocation: "山东",
            productSellAmount: 120,
            priceString: "¥15",
            price: 15,
            per: "500g",
            cart_description: "酸甜山楂，开吃前先给自己来个山楂buff",
            cartSelectStyle: {
                "cart-unselected": false,
                "cart-selected": true
            }
        },
        {
            productId: 5,
            icon: "/images/products/product_1/icon.png",
            productName: "水饺",
            productDescription: "酸酸又甜甜",
            productLocation: "山东",
            productSellAmount: 120,
            priceString: "¥15",
            price: 15,
            per: "500g",
            cart_description: "酸甜山楂，开吃前先给自己来个山楂buff",
            cartSelectStyle: {
                "cart-unselected": false,
                "cart-selected": true
            }
        }
        ,
        {
            productId: 6,
            icon: "/images/products/product_1/icon.png",
            productName: "水饺",
            productDescription: "酸酸又甜甜",
            productLocation: "山东",
            productSellAmount: 120,
            priceString: "¥15",
            price: 15,
            per: "500g",
            cart_description: "酸甜山楂，开吃前先给自己来个山楂buff",
            cartSelectStyle: {
                "cart-unselected": false,
                "cart-selected": true
            }
        }
    ]
};

let search_component_methods = {
    addCart: function(item){
        let existCart = false;
        dataBus.$data.cart_items.forEach(function(cert_item){
            if(cert_item.productId == item.productId){
                existCart = true;
                cert_item.amount += 1;
                cert_item.selected = true;
            }
        });
        if(!existCart){
            item.amount = 1;
            dataBus.$data.cart_amount += 1;
            item.selected = true;
            dataBus.$data.cart_items.push(item);
        }
    }
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
            <div class="item" v-for="item in searchresult">
                <list-item @addtocart="addCart(item)">
                    <div slot="image">
                        <img :src="product_test.icon" />
                    </div>
                    <div slot="name">{{item.productName}}</div>
                    <div slot="description">{{item.productDescription}}</div>
                    <div slot="location">
                        <div class="location_head">原产地</div>{{item.productLocation}}
                    </div>
                    <div slot="sell_amount">{{item.productSellAmount}}人已买</div>
                    <div slot="price">{{item.priceString}}</div>
                    <div slot="per">{{item.per}}</div>
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