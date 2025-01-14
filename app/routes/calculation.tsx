import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

export default function CalculationPage() {
    return (
        <div className="space-y-8 p-12">
            <div className="text-center space-y-1">
                <h1 className="font-bold text-5xl">Calculation</h1>
                <p className="font-light">Here is how we calculate the "player score" that determines their cluster</p>
            </div>

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
        </div>
    )
}