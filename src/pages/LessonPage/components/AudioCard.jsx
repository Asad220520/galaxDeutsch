function AudioCard({ title, src, icon }) {
  return (
    <div className="rounded-lg shadow overflow-hidden hover:shadow-lg transition">
      <div className="p-4 bg-blue-500 text-white flex items-center gap-3">
        {icon}
        <span className="font-semibold">{title}</span>
      </div>
      <div className="p-4 bg-gray-50 text-gray-800">
        <audio controls className="w-full mt-2">
          <source src={src} type="audio/mpeg" />
          Ваш браузер не поддерживает аудио.
        </audio>
      </div>
    </div>
  );
}

export default AudioCard;
