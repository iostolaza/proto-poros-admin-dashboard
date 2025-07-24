
import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../../../amplify/data/resource';
import { from, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private client = generateClient<Schema>();

  getUserSettings(): Observable<any> {
    return from(this.client.models.UserSettings.list({}));
  }

  updateSettings(id: string, updates: any): Observable<any> {
    return from(this.client.models.UserSettings.update({ id, ...updates }));
  }
}