var app = new Vue({ 
    el: '#app',
    data: {
        counter: 20,
        message: "Hi"
    },
    methods: {
        connect: function () { 
            this.counter += 10 
        }   
    }
});
