import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Carousel } from "./carousel/carousel";
import { Contact } from "./contact/contact";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, Carousel, Contact]
})
export class App {
  //
}
