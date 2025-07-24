import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layouts/header/header';
import { Sidebar } from './layouts/sidebar/sidebar';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Sidebar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = signal('proto-poros-admin-dashboard');
}
