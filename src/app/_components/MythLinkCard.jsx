import Link from "next/link";

export default function MythLinkCard({
  title,
  href,
  icon,
  description,
  gradient,
}) {
  return (
    <Link href={href}>
      <div className="group flex flex-col items-center justify-center">
        <span className="text-8xl">{icon}</span>
        <span
          className={`text-5xl font-bold bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}
        >
          {title}
        </span>
        <span className="text-sm text-gray-400 opacity-0 transition-opacity duration-600 group-hover:opacity-100">
          {description}
        </span>
      </div>
    </Link>
  );
}
