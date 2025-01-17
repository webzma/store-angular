import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <div class="max-w-[1200px] mx-auto p-4">
      <app-header />
      <router-outlet />
    </div>
  `,
})
export class AppComponent {
  title = 'store';
}
