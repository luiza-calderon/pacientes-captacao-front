import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Carousel } from "./carousel/carousel";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, Carousel]
})
export class App {
  //
}
