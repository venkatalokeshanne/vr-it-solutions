export const TrustedCompanies = () => {
    return (
        <div className="border-y border-gray-200 bg-white mb-16" >
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-center text-gray-600 mb-6">
            Trusted by over 14,400 companies and millions of learners
          </p>
          <div className="flex justify-center space-x-12 opacity-60" style={{ overflow: "auto" }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src="/api/placeholder/120/40"
                alt={`Company ${i}`}
                className="h-8"
              />
            ))}
          </div>
        </div>
      </div>
    )
}