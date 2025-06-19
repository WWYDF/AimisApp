const sampleGames = [
  {
    title: 'Game1',
    genre: 'Game',
    image: '/games/Game1.png',
  },
  {
    title: 'Game2',
    genre: 'Game',
    image: '/games/Game2.png',
  },
  {
    title: 'Game3',
    genre: 'Game',
    image: '/games/Game3.png',
  },
]

export default function GameGallery() {
  return (
    <section className="text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Explore the Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sampleGames.map((game, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-lg">
              <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{game.title}</h3>
                <p className="text-zinc-400 text-sm">{game.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
