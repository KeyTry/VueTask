var app = new Vue({
    el: '#app',
    data: {
        newTask: '',
        item: 0,
        tasks: [
            //priority: High, Low, Medium
            { id:int, description:string, completed:boolean, priority:string, style:string }
        ],
        dynamicId: int,
        priority:string,
        priorityStyle:string
        
    },
    computed: {
        
        pendingTasks(){ return this.tasks.filter(task => !task.completed); },
        
        completedTasks(){ return this.tasks.filter(task => task.completed); }
        
    },
    
    methods:{
        
        addTask(){
            this.tasks.push({ 
                id:this.dynamicId, 
                description: this.newTask, 
                completed: false, 
                priority:this.priority, 
                style:this.priorityStyle 
            });
            this.dynamicId++;
            this.newTask = '';
        },
        
        findItem(item) {
            
            for(var i=0; i<this.tasks.length; i++){
                if(item == this.tasks[i].id) return i;
            }
        },
        
        checkTask(event){
            element = event.currentTarget;
            id = element.getAttribute('id');
            index = this.findItem(id);
            
            if(this.tasks[index].completed) this.tasks[index].completed = false;
            else this.tasks[index].completed = true;
            
        },
        
        selectPriority(event){
            element = event.currentTarget;
            style = element.getAttribute('data-priority');
            id = element.getAttribute('id');
            priority = document.getElementById(id).value;
           
            this.priority = priority;
            this.priorityStyle = style;
        }
    }
});