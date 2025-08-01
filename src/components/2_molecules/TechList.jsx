export default function TechList({ techs }) {
  return (
    <ul className="flex flex-wrap gap-4 md:justify-center">
      {techs.map((t) => (
        <li key={t.name}>
          <img
            src={t.icon}
            alt={`${t.name} icon`}
            title={t.name}
            className="w-7 grayscale hover:grayscale-0"
          />
        </li>
      ))}
    </ul>
  );
}
