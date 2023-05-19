import { Component } from '@angular/core';
import { IProduct } from './components/interface/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project-angular';
  firstname = 'Nguyen';
  lastname = 'Phi Anh';
  gioitinh = 'nam';
  age = 20;
  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}
