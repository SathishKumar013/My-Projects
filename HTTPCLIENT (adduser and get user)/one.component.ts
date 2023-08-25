import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

class User {
  name!:string; 
  email!: string;
  id: any;
}

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  users:User[] = [];

  userForm = new FormGroup(
    {
      name : new FormControl(""),
      email : new FormControl(""),
    }
  )


  constructor(private http:HttpClient) {

  }

  ngOnInit() {
    this.getUsers().subscribe((response) => {
        this.users = response
    })
  }

  getUsers() {
      return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  onSubmit() {
    this.addUser().subscribe((response) => {
        this.users.push(response)
    })
  }
  

  addUser() {
      return this.http.post<User>('https://jsonplaceholder.typicode.com/users', {
        name : this.userForm.controls.name.value,
        email : this.userForm.controls.email.value
      })
  }
}
