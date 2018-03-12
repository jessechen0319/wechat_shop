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
        }
    }
});