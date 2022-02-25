const app = new Vue({

    el: '#app',
    data: {

        todo: '',

        toDoList: [
            {
                text: 'Fare la spesa',
                done: false
            },
            {
                text: 'Comprare il latte',
                done: true
            },
            {
                text: 'Fare esercizi',
                done: false
            },
        ]

    },

    methods: {

        deleteTodo: function(i){

            this.toDoList.splice(i,1);

        },

        addTodo: function(){

            if(this.todo !== '') {

                const newTodo = {
                    text: this.todo,
                    done: false
                }

                this.toDoList.push(newTodo);

            }

            this.todo = '';

        }

    }

});