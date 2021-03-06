let item_list_data = {
};
let item_list_methods = {
    addToCart: function(event){
        let tempElement = $(event.srcElement).clone();
        $(event.srcElement).parent().append(tempElement);
        tempElement.animate({right:"5rem", bottom: "-14rem", "display":"none"}, ()=>{
            tempElement.remove();
        });
        this.$emit("addtocart");
    }
};
let ItemList = Vue.extend( {
    template: `
    <div class="item-list">
        <div class="item-image">
            <slot name="image"></slot>
        </div>
        <div class="item-content">
            <div class="title">
                <slot name="name"></slot>
            </div>
            <div class="description">
                <div class="product-description">
                    <slot name="description"></slot>
                </div>
                <div class="product-location">
                    <slot name="location"></slot>
                </div>
            </div>
            <div class="item-buy">
                <div class="sell-amount">
                    <slot name="sell_amount"></slot>
                </div>
                <div class="buy">
                    <div class="price">
                        <slot name="price"></slot>
                    </div>
                    <div class="line">/</div>
                    <div class="per">
                        <slot name="per"></slot>
                    </div>
                    <div class="add-chart">
                        <img src="/images/add-chat.png" @click="addToCart" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function(){
        return item_list_data;
    },
    methods: item_list_methods
});