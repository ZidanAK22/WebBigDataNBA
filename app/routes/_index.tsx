import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "NBA Tier List" },
    { name: "description", content: "Big Data" },
  ];
};

const tierData = [
  {
    tier: "Superstars",
    players: [
      { id: "doncilu01", name: "Luka Doncic" },
      { id: "jokicni01", name: "Nikola Jokic" },
      { id: "wembavi01", name: "V. Wembanyama" },
      { id: "gilgesh01", name: "Shai G." },
      { id: "antetgi01", name: "Giannis A." },
      { id: "curryst01", name: "Stephen Curry" }
    ],
    cluster: 1
  },
  {
    tier: "All-Stars",
    players: [
      { id: "davisan02", name: "Anthony Davis" },
      { id: "tatumja01", name: "Jayson Tatum" },
      { id: "jamesle01", name: "LeBron James" },
      { id: "halibty01", name: "Tyrese Haliburton" },
      { id: "leonaka01", name: "Kawhi Leonard" }
    ],
    cluster: 4
  },
  {
    tier: "Starters",
    players: [
      { id: "sextoco01", name: "Collin Sexton" },
      { id: "hardeja01", name: "James Harden" },
      { id: "willizi01", name: "Zion Williamson" },
      { id: "jacksja02", name: "Jaren Jackson Jr." },
      { id: "murrade01", name: "Dejounte Murray" }
    ],
    cluster: 2
  },
  {
    tier: "Role-Players",
    players: [
      { id: "hieldbu01", name: "Buddy Hield" },
      { id: "reaveau01", name: "Austin Reaves" },
      { id: "johnske04", name: "Keldon Johnson" },
      { id: "nurkiju01", name: "Jusuf Nurkic" },
      { id: "avdijde01", name: "Deni Avdija" }
    ],
    cluster: 0
  },
  {
    tier: "Benchwarmer",
    players: [
      { id: "washipj01", name: "PJ Washington" },
      { id: "strusma01", name: "Max Strus" },
      { id: "dosunay01", name: "Ayo Dosunmu" },
      { id: "walkeja01", name: "Jabari Walker" },
      { id: "gordoer01", name: "Eric Gordon" }
    ],
    cluster: 3
  }
];

export default function Index() {
  return (
    <div className="space-y-4 p-12">
      <div className="text-center space-y-1">
        <h1 className="font-bold text-5xl">NBA Player Tier List</h1>
        <p className="font-light">..using basic stats and MVP eligibility</p>
      </div>

      <div>
        <p className="text-justify">
          The NBA has always been about who is the best.
          In the past, you can maybe clearly say that Jordan
          is the goat of the 90s. But even then, fans can only
          debate so much to put caveats into everybodies achievement.
          <br />
          Using basic stats, regardless of advanced metrics. I clustered
          players, and was able to see how, in the regular season. Some players
          are just very very productive.
          <br />
          But the fact is that, impact and your overall image over the league is
          what matters the most for the MVP voters. Take this data with a grain of salt
          <span> ( please.. )</span>

          Except for superstars, the rest of the players are the top 5 of their tier.
          Hopefully, the best representation of the tier.
        </p>
      </div>

      <div className="grid grid-rows-5 border rounded">
        {tierData.map((tier, index) => (
          <div key={tier.tier} className="row-span-1 border flex flex-row">
            <div className="bg-blue-500 min-w-32 flex items-center justify-center text-white">
              {tier.tier}
            </div>

            <div className="w-full flex flex-row justify-evenly items-center">
              {tier.players.map((player) => (
                <div key={player.id} className="text-center">
                  <img
                    src={`/Cluster ${tier.cluster}/${player.id}.jpg`}
                    alt={player.name}                    
                  />
                  <span className="block mt-2 text-sm">{player.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}