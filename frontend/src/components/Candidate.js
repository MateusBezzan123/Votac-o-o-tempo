import React from "react";
import Position from "./Position";
import Picture from "./Picture";
import Info from "./Info";
import Name from "./Name";
import Votes from "./Votes";
import Porcetenge from "./Porcetenge";
import Populary from "./Populary";

import css from "./candidate.module.css";
import { formatNumber, percent } from "../helpers/formatHelpers";

export default function Candidate({ candidate, position }) {
  const { id, name, votes, percentage, popularity } = candidate;

  const imageSource = `${id}.jpg`;

  return (
    <div className={css.flexRow}>
      <Position>{position}</Position>
      <Picture imageSource={imageSource} description={name} />
      <Info>
        <Name> {name} </Name>
        <Votes> {formatNumber(votes)}</Votes>
        <Porcetenge>{percent(percentage)}</Porcetenge>
        <Populary value={popularity} />
      </Info>
    </div>
  );
}
