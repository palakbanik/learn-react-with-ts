type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export default function Greet({ name, messageCount, isLoggedIn }: GreetProps) {
  return (
    <>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}! You have ${messageCount} unread message.`
          : "Welcome User!"}
      </h2>
    </>
  );
}
