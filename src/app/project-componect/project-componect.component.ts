import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MuserviceService } from "../muservice.service";

@Component({
  selector: 'app-project-componect',
  templateUrl: './project-componect.component.html',
  styleUrls: ['./project-componect.component.css']
})
export class ProjectComponectComponent implements OnInit {
res:string="";
saleData = [
  { name: "Mobiles", value: 105000 },
  { name: "Laptop", value: 55000 },
  { name: "AC", value: 15000 },
  { name: "Headset", value: 150000 },
  { name: "Fridge", value: 20000 }
];
  constructor(private http:HttpClient,private Data: MuserviceService) {

   }
  SearchForm=new FormGroup({
    Value:new FormControl(null, [Validators.required],),
      });
  ngOnInit(): void {
  }
  onSubmit(){
this.res=this.SearchForm.get("Value")?.value;
 this.SearchForm.reset('Value');
 var j=this.Data.getQuery('Select * from Users;');
console.log(j);
  }

}
