import { Component } from '@angular/core';


interface iItem{
  id:number|any;
  description:string | any;
  status:string | any;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idCount:number = 0;
  title = 'TODO-List';
  description:string | any;
  list:iItem[] = [];
  status:string | any;
  sample:iItem = {
    id:this.idCount,
    description:'Buy Eggs',
    status:'completed'
  }
  constructor(){
    this.list.push(this.sample)
  }
  addItem(){
    if(this.description != null){
      this.idCount ++;
      var item:iItem = {
        id:this.idCount,
        description:this.description,
        status:'new'
      }
      this.description = null;
      this.list.push(item)
    }
  }

  getClass(status:string){
    var cssClass = '';
    if(status == null){
      cssClass = 'white'
    }
    else if(status == 'new'){
      cssClass='red lighten-3'
    }
    else if(status == 'progress'){
      cssClass='blue lighten-3'
    }
    else if(status == 'completed'){
      cssClass='teal lighten-3'
    }
    return cssClass;
  }

  checkStatus(status:string){
    if(status=='completed'){
      return false;
    }
    return true;
  }

  changeStatus(item:iItem){
    if(item.status == 'new'){
      item.status = 'progress'
    }else if(item.status == 'progress'){
      item.status = 'completed'
    }
  }


  deleteItem(item:iItem){
    const filteredList = this.list.filter(x=>x.id!=item.id)
    this.list = filteredList
  }

  checkList(){
    if(this.list.length == 0){
      return false
    }
    return true
  }

  statusFilter(status:string){
    var temp:iItem[] = []
    this.list.forEach(element => {
      if(element.status == status){
        temp.push(element)
      }
    });
    this.list.forEach(element => {
      if(element.status != status){
        temp.push(element)
      }
    });
    this.list = temp
  }


}
