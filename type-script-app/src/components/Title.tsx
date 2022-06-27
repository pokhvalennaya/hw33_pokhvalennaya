type TitleProps = {
  name: string;
  type?: "bold" | "normal";
};

const Title = ({ name, type = "normal" }: TitleProps) => {
  return <h1 style={{ fontWeight: type }}>It's {name}'s first react app</h1>;
};

export default Title;
