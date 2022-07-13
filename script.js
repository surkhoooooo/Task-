const todoList = {
    items: [
        {
            text: 'Завершить текущий челлендж',
            completed: false,
        },
        {
            text: 'Отдохнуть во время перерыва',
            completed: false,
        },
        {
            text: 'Помочь напарнику понять код',
            completed: false,
        },
        {
            text: 'Выиграть в мафию',
            completed: true,
        },
    ],

    printAll: function () {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].completed === false) {
                console.log('[ ] ' + this.items[i].text)
            } else {
                console.log('[x] ' + this.items[i].text)
            }
            
            console.log(this.items[i].text)

        }
    },

    add: function (text) { 
        let newText = {
            text: text,
            completed: false,
        }
        this.items.unshift(newText)
    },

    remove: function (index) {
        this.items.splice(index, 1);
     },

    print: function (index) {
        if (this.items[index].completed === false) {
            console.log( '[ ] ' + this.items[index].text)
        } else {
            console.log( '[x] ' + this.items[index].text)
        }
        
     },

    complete: function (index) { 
        if (this.items[index].completed === false) {
            this.items[index].completed = true;
        };
    },
};

todoList.complete(1)
todoList.printAll()

