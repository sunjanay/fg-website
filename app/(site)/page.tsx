export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-navy mb-6">
        Welcome to Foster Greatness
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Creating lifelong community and belonging for current and former foster youth nationwide.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          href="/gift-drive"
          className="p-6 border border-gray-200 rounded-lg hover:border-teal hover:shadow-md transition"
        >
          <h2 className="text-2xl font-semibold text-navy mb-2">Holiday Gift Drive</h2>
          <p className="text-gray-600">Support foster youth with holiday gifts</p>
        </a>

        <a
          href="/gingerbread"
          className="p-6 border border-gray-200 rounded-lg hover:border-teal hover:shadow-md transition"
        >
          <h2 className="text-2xl font-semibold text-navy mb-2">Gingerbread Contest</h2>
          <p className="text-gray-600">Vote for your favorite gingerbread house</p>
        </a>

        <a
          href="/meal-kit"
          className="p-6 border border-gray-200 rounded-lg hover:border-teal hover:shadow-md transition"
        >
          <h2 className="text-2xl font-semibold text-navy mb-2">Meal Kit Sponsors</h2>
          <p className="text-gray-600">Thank you to our generous sponsors</p>
        </a>

        <a
          href="/storytellers"
          className="p-6 border border-gray-200 rounded-lg hover:border-teal hover:shadow-md transition"
        >
          <h2 className="text-2xl font-semibold text-navy mb-2">Storytellers Collective</h2>
          <p className="text-gray-600">Powerful stories from our community</p>
        </a>

        <a
          href="/updates"
          className="p-6 border border-gray-200 rounded-lg hover:border-teal hover:shadow-md transition"
        >
          <h2 className="text-2xl font-semibold text-navy mb-2">Community Updates</h2>
          <p className="text-gray-600">Latest news and happenings</p>
        </a>
      </div>
    </div>
  );
}
