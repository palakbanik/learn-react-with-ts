type StatusProps = {
  status: "loading" | "success" | "error";
};

export default function Status(props: StatusProps) {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "data fetching successfully";
  } else if (props.status === "error") {
    message = "error data fetching";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
}
