export default function ValueCard({ Icon, title, text }) {
  return (
    <li className="flex flex-col relative bg-starCommandBlue pl-8 pr-8 pt-7 pb-8 rounded-brand max-w-sm justify-self-center">
      <div className="absolute -top-4">
        <Icon className="w-9" />
      </div>
      <div className="ml-8">
        <h3 className="text-brandWhite inline font-bold text-xl">{title}</h3>
        <p className="text-brandWhite text-sm max-w-[300px] mt-4">{text}</p>
      </div>
    </li>
  );
}
