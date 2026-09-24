import Image from "next/image";

interface SectionHeadingProps {
  title: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeading({ 
  title, 
  align = "left" 
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "items-start",
    center: "items-center",
    right: "items-end",
  };

  const textAlignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`flex flex-col gap-1 mb-3 ${alignmentClasses[align]}`}>
      <h3 className={`text-sm uppercase text-muted-navy font-semibold ${textAlignClasses[align]}`}>
        {title}
      </h3>
      <Image
        src="/coral-stroke.png"
        alt="ad.here-stroke"
        width={100}
        height={40}
        className="h-2 w-auto"
        priority
        quality={100}
      />
    </div>
  );
}
