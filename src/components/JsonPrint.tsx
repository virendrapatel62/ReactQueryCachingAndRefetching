export const JsonPrint: React.FC<any> = ({ children }) => {
  return <pre>{JSON.stringify(children, null, 4)}</pre>;
};
