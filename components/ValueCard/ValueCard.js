export default function ValueCard({ Icon, title, text }) {
  return (
    <li className="relative bg-starCommandBlue pl-8 pr-10 py-6 rounded-brand">
      <div className="absolute -top-4">
        <Icon className="w-8" />
      </div>
      <div className="ml-6">
        <h3 className="text-brandWhite inline">{title}</h3>
        <p className="text-brandWhite">{text}</p>
      </div>
    </li>
  );
}
