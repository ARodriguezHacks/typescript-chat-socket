function greeter(person: string): string {
  return "Hello, my name is" + person;
}

let user = "Angie";

document.body.textContent = greeter(user);
