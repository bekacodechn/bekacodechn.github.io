type D = {
  name: string;
  age: number;
}
type Simplify<T> = Pick<T, keyof T>;
type E = Simplify<D>;

const fn = (val: D) => {
  console.log('val', val)
}
