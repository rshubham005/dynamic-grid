import { useEffect, useState } from "react";

export default function Tiles({ count }) {
  return (
    <div className="grid_container">
      {count > 0 ? (
        <div className="Self_grid">
          Self Grid
        </div>
      ) : null}
      {Array.from({ length: count - 1 }).map((_, index) => (
        <div key={index} className="part_grid">
          Participent {index + 1}
        </div>
      ))}
    </div>
  );
}
