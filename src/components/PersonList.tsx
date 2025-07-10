type PersonListProps = {
  names: {
    first: string;
    last: string;
  };
}[];

export default function PersonList(props: PersonListProps) {
  return (
    <>
      <div>
        {props.names.map((name: string) => {
          return (
            <h2>
              {name.first} {name.last}
            </h2>
          );
        })}
      </div>
    </>
  );
}
