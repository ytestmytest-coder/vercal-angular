import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonUtil } from '../../shared/CommonUtil';
import { blog } from '../../features/blog/models/blog';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive, RouterLink, NgIf],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  adminLogged:boolean = false;

  ngOnInit(){
    this.isUserAdmin()
  }

  isUserAdmin() {
    this.adminLogged = CommonUtil.getUserRole().indexOf('ADMIN') != -1 ? true : false;
  }
}
