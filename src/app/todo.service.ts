import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';  // Adjust path to schema

@Injectable({ providedIn: 'root' })
export class TodoService {
  private client = generateClient<Schema>();

  async listTodos() {
    const { data, errors } = await this.client.models.Todo.list();
    if (errors) throw errors;
    return data;
  }

  async createTodo(content: string) {
    const { data, errors } = await this.client.models.Todo.create({ content });
    if (errors) throw errors;
    return data;
  }

  // Add update/delete as needed for full CRUD
}
