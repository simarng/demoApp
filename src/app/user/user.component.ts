import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any;
  
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    ) { 
    this.activatedRoute.params.subscribe(params => {
      this.getUserById(params['id'])
    });
  }

  ngOnInit() {
  }

  getUserById(id){
    this.userService.getUserById(id).subscribe((data: any) => {
      this.user = data;
    },
      (err: HttpErrorResponse) => {
      });
  }

}
