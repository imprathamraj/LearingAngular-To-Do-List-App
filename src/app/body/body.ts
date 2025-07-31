import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  imports: [FormsModule],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {
  task=""
  taskList:{id:number, task:string}[]=[]

  addTask(){
    this.taskList.push({id:this.taskList.length+1, task:this.task})
    this.task=''
  }
  deleteTask(taskId:number){
     this.taskList=this.taskList.filter((item)=>item.id!=taskId)
  }
}
