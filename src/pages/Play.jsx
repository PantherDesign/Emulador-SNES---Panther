import { useLocation } from "react-router-dom";

export default function Play() {

  const query = new URLSearchParams(useLocation().search);
  const rom = query.get("rom");

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#111"
      }}
    >

      <iframe
        src={`/emulator.html?rom=${rom}`}
        width="900"
        height="700"
        style={{ border: "none" }}
        title="emulator"
      />

    </div>

  );

}