Vue.component('index-recommand-panel', {
    template:`
        <div class="index-recommand-panel" v-bind:style="styleObject">
            <div class="recommand-content">
                <div class="recommand-top">
                    <div class="item-1">
                        <slot name="product_name">{{product_name}}</slot>
                    </div>
                    <div class="item-2">
                        <slot name="product_price">{{product_price}}</slot>
                    </div>
                </div>

                <div class="recommand-bottom">
                    <div class="item-1">
                    <slot name="product_comments">{{product_comments}}</slot>
                    </div>
                    <div class="item-2">
                    <slot name="product_score">{{product_score}}分</slot>
                    </div>
                </div>
            </div>
        </div>
    `,
    props:{
        background_image:{
            type: String,
            default: "/images/default_recommand.png"
        },
        product_name: {
            type: String,
            default: "NULL"
        },
        product_price: {
            type: String,
            default: "0元/500g"
        },
        product_comments: {
            type: String,
            default: "未知商品"
        },
        product_score: {
            type: Number,
            default: 5
        }
    },
    data: function(){
        return {
            styleObject: {
                backgroundImage: `url(${this.background_image})`
            }
        };
    }
});