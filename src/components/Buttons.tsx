type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function Buttons(props: ButtonProps) {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1)}>click</button>
    </div>
  );
}
