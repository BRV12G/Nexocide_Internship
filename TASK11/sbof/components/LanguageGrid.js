// components/LanguageGrid.js
const languages = [
    { name: "हिंदी", bgColor: "bg-blue-100", letter: "ह" },
    { name: "தமிழ்", bgColor: "bg-green-100", letter: "த" },
    { name: "తెలుగు", bgColor: "bg-orange-100", letter: "త" },
    { name: "English", bgColor: "bg-purple-100", letter: "E" },
    { name: "मराठी", bgColor: "bg-red-100", letter: "म" },
    { name: "ಕನ್ನಡ", bgColor: "bg-blue-200", letter: "ಕ" },
    { name: "ଓଡ଼ିଆ", bgColor: "bg-green-200", letter: "ଓ" },
    { name: "മലയാളം", bgColor: "bg-orange-200", letter: "മ" },
    { name: "ਪੰਜਾਬੀ", bgColor: "bg-purple-200", letter: "ਪ" },
    { name: "ગુજરાતી", bgColor: "bg-yellow-100", letter: "ગ" },
    { name: "বাংলা", bgColor: "bg-blue-300", letter: "ব" },
  ];
  
  export default function LanguageGrid() {
    return (
      <div className="grid grid-cols-2 gap-4 p-4 ">
        {languages.map((language, index) => (
          <button
            key={index}
            className={`${language.bgColor} shadow-xl p-4 rounded-lg text-lg font-semibold flex flex-col items-start justify-between`}
          >
             <span className="text-sm ">{language.name}</span>
            <span className="text-2xl mt-3 self-center">{language.letter}</span>
            
          </button>
        ))}
      </div>
    );
  }
  
  
  
  