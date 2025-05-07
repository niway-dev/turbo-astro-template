export interface AccountInterface {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class Account {
  private readonly id: string;
  private readonly name: string;
  private readonly email: string;
  private readonly password: string;

  constructor(account: AccountInterface) {
    this.id = account.id;
    this.name = account.name;
    this.email = account.email;
    this.password = account.password;
  }

  public getValues() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    };
  }
}