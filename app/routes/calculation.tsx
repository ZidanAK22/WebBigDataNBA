import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import { Link } from '@remix-run/react';

export default function CalculationPage() {
    return (
        <div className="space-y-8 p-12">
            <div className="text-center space-y-1">
                <h1 className="font-bold text-5xl">Calculation</h1>
                <p className="font-light">Here is how we calculate the "player score" that determines their cluster</p>
            </div>

            <p className="mt-12">
                Using basic NBA stats, since they are linear, we try to combine them all and configure
                weights to better reflect their impact of a player performance indicator.
                <br />
                This formula is largely inspired by <Link to='https://doi.org/10.1016/j.is.2020.101562' className='underline text-fuchsia-500 italic'>This Paper</Link>, although our version is just a way way, inferior
                imitation just to create a working prototype.

                <br />
                <br />

                It is biased towards offensive stats, but the emergence of 3PTS focused offense, simply
                made the word <span className='italic font-bold'>"Offense is the Best Defense"</span> true

                <br />
                <br />

                Here is the csv of the data we preprocessed and use for the clustering

                <br />
                <br />
                <Link to="https://github.com/ZidanAK22/BIgDataNBA/blob/main/filtered_season24_non_normalized_sorted.csv" className='underline text-fuchsia-500 italic'>Data.CSV</Link>
            </p>

            <div>
                <h2 className="font-bold text-3xl">Player Score Formula</h2>

                <div className="p-6 rounded-lg shadow">

                    <div className='bg-white text-black font-semibold p-4 rounded'>
                        <Latex>
                            {`$\\text{Player Score} = 
                            0.15 \\times \\text{PTS} + 
                            0.10 \\times \\text{FG\\%} + 
                            0.08 \\times \\text{FG3M} + 
                            0.08 \\times \\text{FG3A} + 
                            0.07 \\times \\text{FG3\\%} + 
                            0.07 \\times \\text{REB} + 
                            0.08 \\times \\text{AST} + 
                            0.06 \\times \\text{OREB} + 
                            0.06 \\times \\text{DREB} + 
                            0.05 \\times \\text{FTM} + 
                            0.05 \\times \\text{FTA} + 
                            0.05 \\times \\text{FT\\%} + 
                            0.05 \\times \\text{STL} + 
                            0.05 \\times \\text{BLK} - 
                            0.05 \\times \\text{TOV} - 
                            0.05 \\times \\text{PF}$`}
                        </Latex>
                    </div>

                    <div className="mt-6 text-sm">
                        <p>Where:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>PTS: Points</li>
                            <li>FG%: Field Goal Percentage</li>
                            <li>FG3M: Three Pointers Made</li>
                            <li>FG3A: Three Pointers Attempted</li>
                            <li>FG3%: Three Point Percentage</li>
                            <li>REB: Total Rebounds</li>
                            <li>AST: Assists</li>
                            <li>OREB: Offensive Rebounds</li>
                            <li>DREB: Defensive Rebounds</li>
                            <li>FTM: Free Throws Made</li>
                            <li>FTA: Free Throws Attempted</li>
                            <li>FT%: Free Throw Percentage</li>
                            <li>STL: Steals</li>
                            <li>BLK: Blocks</li>
                            <li>TOV: Turnovers</li>
                            <li>PF: Personal Fouls</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="font-bold text-3xl">Cluster Result</h2>
                <p className='mt-8'>
                    Here is the cluster result. Check out this repo for the code used.
                    Since we are defining players by 5 tier, K-Means felt the most appropriate.

                    <br />
                    <br />

                    <Link to="https://github.com/ZidanAK22/BigDataNBA" className='underline text-fuchsia-500 italic'>Python Repo</Link>

                    <img src='clusterhuge.png' className='mt-4 rounded'/>
                </p>

            </div>
        </div>
    )
}