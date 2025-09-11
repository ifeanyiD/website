import { Player } from "@lottiefiles/react-lottie-player";

export default function CartoonHero() {
  return (
    <div style={{maxWidth : "450px", width : "100%"}}>
      <Player
        autoplay
        loop
        src="https://assets7.lottiefiles.com/packages/lf20_0yfsb3a1.json" 
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}