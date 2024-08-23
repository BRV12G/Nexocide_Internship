export default function CategoryCardsoptions({ imageSrc, altText, title }) {
    return (
      <div className="flex flex-col items-center p-2 sm:p-4 min-w-[80px] sm:min-w-[150px] max-w-[80px] sm:max-w-[150px]">
        <div className="w-16 h-16 sm:w-32 sm:h-32 bg-stone-100 shadow-lg rounded-lg shadow-2xl flex items-center justify-center">
          <img src={imageSrc} alt={altText} className="max-w-full max-h-full" />
        </div>
        <p className="text-[10px] sm:text-sm text-center mt-2">{title}</p>
      </div>
    );
  }
  