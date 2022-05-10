export class User {
  userName: string;
  userEmail: string;
  userPassword: string;

  constructor(userName: string, userEmail: string, userPassword: string) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.userPassword = userPassword;
  }
}
