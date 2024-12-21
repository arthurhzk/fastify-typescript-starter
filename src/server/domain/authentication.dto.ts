export namespace Authentication {
  export type Input = {
    email: string;
    password: string;
  };
  export type Output = {
    token?: string;
  };
}
