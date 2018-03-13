var dataBus = new Vue({
    data: function(){
        return {
            cart_amount: 0,
            cart_items: []
        };
    },
    watch: {
        cart_amount: function(val, old){
            app.cart_amount = val;
        },
        cart_items: function(val, old){
            app.$data.cart_items = val;
            app.cart_amount = this.cart_items.length;
        },
        deep: true
    },
    methods: {
        replaceCartItem: function(item, newVal){
            this.cart_items[this.cart_items.indexOf(item)] = item;
        }
    }
});


