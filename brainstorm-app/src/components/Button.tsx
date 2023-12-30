import "../App.css";

type Props = {
  text: string;
};

export const Button = ({ text }: Props) => {
  return <div className="Button">{text}</div>;
};
