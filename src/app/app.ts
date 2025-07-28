import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Services } from "./services/services";
import { Contact } from "./contact/contact";
import { Footer } from "./footer/footer";
import { About } from "./about/about";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, Services, Contact, Footer, About]
})
export class App {
  //
}
