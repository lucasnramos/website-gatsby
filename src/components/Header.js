import * as React from "react";

export default function Header({ data }) {
  return (
    <>
      <h1>Lucas Nogueira Ramos</h1>
      <p>
        {data.edges.map((edge, index) => (
          <span key={edge.node.id}>
            {index > 0 ? " | " : ""}
            <a href={edge.node.href} target="_blank" rel="noreferrer">
              {edge.node.label}
            </a>
          </span>
        ))}
      </p>
    </>
  );
}
