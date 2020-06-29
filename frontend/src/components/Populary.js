import React from "react";

const STARS = {
  empaty: "☆",
  full: "★",
};

const MAX_STAR = 10;

export default function Populary({ value }) {
  const fullStar = STARS.full.repeat(value);
  const empatyStar = STARS.empaty.repeat(MAX_STAR - value);

  return (
    <div style={{ fontSize: "1.5rem", color: "#f39c12" }}>
      {fullStar}
      {empatyStar}
    </div>
  );
}
