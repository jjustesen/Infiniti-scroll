import Theme from "./theme";

interface Props {}

const Providers: React.FC<Props> = ({ children }) => {
  return <Theme>{children}</Theme>;
};

export default Providers;
