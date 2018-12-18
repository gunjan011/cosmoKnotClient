import { Component } from '@angular/core';
import { AdminService } from './services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cosmoknot';

  constructor (
    private auth: AdminService,
    private router: Router,
  ) { }

  logout() {
    this.auth.logout();
    this.router.navigate(['/home']);
    window.alert("Logged out");
  }
}
