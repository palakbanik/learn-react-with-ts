import React from "react";
type ContainerProps = {
  style: React.CSSProperties;
};

export default function Container(props: ContainerProps) {
  return (
    <div>
      <div style={props.style}>container</div>
    </div>
  );
}
