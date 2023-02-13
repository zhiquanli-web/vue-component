export interface IAccount {
  username: string;
  password: string;
}

export interface ILoginResult {
  id: string | number;
  username: string;
  token: string;
}
