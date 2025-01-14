import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "NBA Tier List" },
    { name: "description", content: "Big Data" },
  ];
};

export default function Index() {
  return (
    <div className="space-y-4">
      <div className="text-center space-y-1">
        <h1 className="font-bold text-5xl">NBA Player Tier List</h1>
        <p className="font-light">..using basic stats and MVP eligibility</p>
      </div>
      <div>
        <p className="tracking-wider text-justify [word-spacing:5px]">
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
        </p>
      </div>

      {/* grid tier list */}
      <div className="grid grid-rows-5 border rounded">
        <div className="row-span-1 border flex flex-row">
          <div className="bg-blue-500 w-[80px] h-[180px]">Superstars</div>
          <img src="/Cluster 1/doncilu01.jpg" />
          <img src="/Cluster 1/jokicni01.jpg" />
          <img src="/Cluster 1/wembavi01.jpg" />
          <img src="/Cluster 1/gilgesh01.jpg" />
          <img src="/Cluster 1/antetgi01.jpg" />
          <img src="/Cluster 1/curryst01.jpg" />
        </div>
        <div className="row-span-1 border flex flex-row">
        <div className="bg-blue-500 w-[80px] h-[180px]">All-Stars</div>
          <img src="/Cluster 4/davisan02.jpg" />
          <img src="/Cluster 4/tatumja01.jpg" />
          <img src="/Cluster 4/jamesle01.jpg" />
          <img src="/Cluster 4/halibty01.jpg" />
          <img src="/Cluster 4/leonaka01.jpg" />
        </div>
        <div className="row-span-1 border flex flex-row">
        <div className="bg-blue-500 w-[80px] h-[180px]">Starters</div>
          <img src="/Cluster 2/sextoco01.jpg" />
          <img src="/Cluster 2/hardeja01.jpg" />
          <img src="/Cluster 2/willizi01.jpg" />
          <img src="/Cluster 2/jacksja02.jpg" />
          <img src="/Cluster 2/murrade01.jpg" />
        </div>
        <div className="row-span-1 border flex flex-row">
        <div className="bg-blue-500 w-[80px] h-[180px]">Role-Players</div>
          <img src="/Cluster 0/hieldbu01.jpg" />
          <img src="/Cluster 0/reaveau01.jpg" />
          <img src="/Cluster 0/johnske04.jpg" />
          <img src="/Cluster 0/nurkiju01.jpg" />
          <img src="/Cluster 0/avdijde01.jpg" />
        </div>
        <div className="row-span-1 border flex flex-row">
        <div className="bg-blue-500 w-[80px] h-[180px]">Benchwarmer</div>
          <img src="/Cluster 3/washipj01.jpg" />
          <img src="/Cluster 3/strusma01.jpg" />
          <img src="/Cluster 3/dosunay01.jpg" />
          <img src="/Cluster 3/walkeja01.jpg" />
          <img src="/Cluster 3/gordoer01.jpg" />
        </div>
      </div>
    </div>
  );
}
