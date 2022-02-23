type Credentials = {
  username: string
  password?: string
}
declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(credentials?: Credentials): Chainable<Element>;
    logout(): Chainable<Element>;
  }
}
