import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

// user.service.ts

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profile_photo: string;
  header_photo: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  getUser(id: User['id']) {
    return this.http.get<User>(`/api/users/${id}`);
  }
}
