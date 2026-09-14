import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Blog } from '../../features/blog/blog';

@Component({
  selector: 'app-main-layout',
  imports: [Header,Footer, RouterLink, RouterOutlet, Blog],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
