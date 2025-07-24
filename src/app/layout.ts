// src/app/layout.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private sidebarVisible = new BehaviorSubject<boolean>(false);

  toggleSidebar() {
    this.sidebarVisible.next(!this.sidebarVisible.value);
  }

  getSidebarVisibility() {
    return this.sidebarVisible.asObservable();
  }
}