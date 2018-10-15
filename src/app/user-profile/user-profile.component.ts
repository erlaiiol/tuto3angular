import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  imageSrc = "https://via.placeholder.com/350x150";
  nom : string ="poids";
  
  constructor() { }

  ngOnInit() {
  }
  direBonjour() {
    console.log("bonjour " + this.nom);
  } 
  amage(){
    if (document.getElementById("lage").hidden==false){
    document.getElementById("lage").hidden=true;
    }
    else {
      document.getElementById("lage").hidden=false;
    }
  }

}
