import Image from "next/image";

const memes = [
  {
    src: "/images/sebastian-young.png",
    alt: "Sebastian Meier als Kind",
    topText: "MOM SAID",
    bottomText: 'WE HAVE ANIME AT HOME',
  },
  {
    src: "/images/sebastian-phone.png",
    alt: "Sebastian Meier am Handy",
    topText: "WHEN THE CODE COMPILES",
    bottomText: "BUT THE TESTS FAIL",
  },
  {
    src: "/images/sebastian-phone.png",
    alt: "Sebastian Meier am Handy",
    topText: 'READING "JUST ONE MORE"',
    bottomText: "REDDIT THREAD AT 3AM",
  },
  {
    src: "/images/sebastian-young.png",
    alt: "Sebastian Meier als Kind",
    topText: "TEACHER: WHAT DO YOU WANT TO BE?",
    bottomText: "SEBASTIAN: A MEME",
  },
  {
    src: "/images/sebastian-phone.png",
    alt: "Sebastian Meier am Handy",
    topText: '"I\'LL FIX IT TOMORROW"',
    bottomText: "— SEBASTIAN, 6 MONTHS AGO",
  },
  {
    src: "/images/sebastian-young.png",
    alt: "Sebastian Meier als Kind",
    topText: "BORN TO CODE",
    bottomText: "FORCED TO ATTEND MEETINGS",
  },
];

function MemeCard({
  src,
  alt,
  topText,
  bottomText,
}: {
  src: string;
  alt: string;
  topText: string;
  bottomText: string;
}) {
  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg group">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-between p-4 pointer-events-none">
        <p
          className="text-white text-center font-black text-2xl md:text-3xl drop-shadow-lg uppercase"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 2px 0 0 #000, -2px 0 0 #000",
            fontFamily: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
          }}
        >
          {topText}
        </p>
        <p
          className="text-white text-center font-black text-2xl md:text-3xl drop-shadow-lg uppercase"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 2px 0 0 #000, -2px 0 0 #000",
            fontFamily: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
          }}
        >
          {bottomText}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 via-red-500 to-pink-500">
      <header className="text-center py-12 px-4">
        <h1
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight"
          style={{
            textShadow:
              "3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000",
            fontFamily: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
          }}
        >
          Sebastian Meier
        </h1>
        <p
          className="text-2xl md:text-4xl font-black text-white mt-2 uppercase"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
            fontFamily: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
          }}
        >
          The Meme Page 🔥
        </p>
        <div className="mt-4 text-6xl">😂🤣💀</div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {memes.map((meme, i) => (
          <MemeCard key={i} {...meme} />
        ))}
      </main>

      <footer className="text-center pb-8">
        <p
          className="text-white font-bold text-lg"
          style={{
            textShadow: "1px 1px 0 #000",
          }}
        >
          Made with ❤️ and zero regrets
        </p>
      </footer>
    </div>
  );
}
