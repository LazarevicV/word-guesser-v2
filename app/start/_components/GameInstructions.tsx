import Link from "next/link";

const GameInstructions = () => {
  return (
    <div className="mt-8">
      <h2 className="text-4xl font-bold">Instructions:</h2>
      <ul className="mt-4 text-xl">
        <li>Guess the correct word by entering letters.</li>
        <li>You have a limited number of attempts.</li>
        <li>Choose the difficulty level below:</li>
      </ul>
      <div className="mt-4 flex space-x-4">
        <Link
          href="/game?difficulty=easy"
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
        >
          Easy
        </Link>
        <Link
          href="/game?difficulty=medium"
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded"
        >
          Medium
        </Link>
        <Link
          href="/game?difficulty=hard"
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
        >
          Hard
        </Link>
      </div>
    </div>
  )
}

export default GameInstructions