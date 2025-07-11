type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread message.`
          : "Welcome User!"}
      </h2>
    </>
  );
}
