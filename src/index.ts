function greet(name: string): string {
  if (name.length === 0) {
    throw new Error('Invalid name!');
  }
  return `Hello, ${name}!`;
}

export default greet;
