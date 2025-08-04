// export const texts: string[] = [
//   `  // user.service.ts

//   interface User {
//     id: string;
//     firstName: string;
//     lastName: string;
//     email: string;
//     profile_photo: string;
//     header_photo: string;
//   }

//   @Injectable({
//     providedIn: 'root',
//   })
//   export class UserService {
//     http = inject(HttpClient);

//     getUser(id: User['id']): Observable<User> {
//       return this.http.get<User>(\`/api/users/$\{id}\`);
//     }
//   }`,

//   `   // user-profile.component.ts

//   @Component({
//     standalone: true,
//     selector: 'user-profile',
//     templateUrl: './user-profile.html',
//     styleUrl: './user-profile.scss',
//     changeDetection: ChangeDetectionStrategy.OnPush,
//     imports: [],
//   })
//   export class UserProfile {}
// `,

//   `   // user-profile.component.ts

//   @Component({
//     standalone: true,
//     selector: 'user-profile',
//     templateUrl: './user-profile.html',
//     styleUrl: './user-profile.scss',
//     changeDetection: ChangeDetectionStrategy.OnPush,
//     imports: [],
//   })
//   export class UserProfile {
//     userService = inject(UserService)~animate
//   }
// `,
//   '',
// ];

export const texts: string[] = [
  `  // user.service.ts

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

    getUser(id: User['id']): Observable<User> {
      return this.http.get<User>(\`/api/users/$\{id}\`);
    }
  }`,

  `   // user-profile.component.ts

  @Component({
    standalone: true,
    selector: 'user-profile',
    templateUrl: './user-profile.html',
    styleUrl: './user-profile.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
  })
  export class UserProfile {}
`,

  `   // user-profile.component.ts

  @Component({
    standalone: true,
    selector: 'user-profile',
    templateUrl: './user-profile.html',
    styleUrl: './user-profile.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
  })
  export class UserProfile {
    userService = inject(UserService)~animate
  }
`,
  '',
];
