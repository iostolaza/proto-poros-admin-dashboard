import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource'; // Update path if needed

@Injectable({ providedIn: 'root' })
export class TodoService {
  private client = generateClient<Schema>();

  async listTodos() {
    const { data: todos, errors } = await this.client.models.Todo.list();
    if (errors) {
      throw new Error(errors.map(e => e.message).join('; '));
    }
    return todos;
  }

  async createTodo(content: string) {
    const { data: newTodo, errors } = await this.client.models.Todo.create({ content });
    if (errors) {
      throw new Error(errors.map(e => e.message).join('; '));
    }
    return newTodo;
  }

  async updateTodo(id: string, content: string) {
    const { data: updatedTodo, errors } = await this.client.models.Todo.update({ id, content });
    if (errors) {
      throw new Error(errors.map(e => e.message).join('; '));
    }
    return updatedTodo;
  }

  async deleteTodo(id: string) {
    const { data: deletedTodo, errors } = await this.client.models.Todo.delete({ id });
    if (errors) {
      throw new Error(errors.map(e => e.message).join('; '));
    }
    return deletedTodo;
  }
}