declare module '*.yml' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: { [key: string]: any };
  export default data;
}
