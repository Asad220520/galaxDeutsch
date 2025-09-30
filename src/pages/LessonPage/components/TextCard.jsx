function TextCard({ title, content, icon }) {
  return (
    <div className="rounded-lg shadow overflow-hidden hover:shadow-lg transition">
      <div className="p-4 bg-blue-500 text-white flex items-center gap-3">
        {icon}
        <span className="font-semibold">{title}</span>
      </div>
      <div className="p-4 bg-gray-50 text-gray-800">
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
    </div>
  );
}

export default TextCard;
