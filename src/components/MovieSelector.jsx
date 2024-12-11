const moods = [
    { id: 1, name: "Action", genreId: 28 },
    { id: 2, name: "Romantic", genreId: 10749 },
    { id: 3, name: "Sad", genreId: 18 },
    { id: 4, name: "Happy", genreId: 35 },
  ];
  
  const MoodSelector = ({ onSelect }) => {
    return (
      <div className="py-4 bg-gray-100">
        <h2 className="text-center font-semibold text-lg">Select Your Mood</h2>
        <div className="flex justify-center gap-4 mt-4">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => onSelect(mood.genreId)}
              className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            >
              {mood.name}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default MoodSelector;
  