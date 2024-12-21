export namespace Registration {
  export type Input = {
    email: string;
    password: string;
    confirmPassword?: string;
    name: string;
  };
  export type Output = {
    id: string;
    email: string;
    name: string;
  };
}
