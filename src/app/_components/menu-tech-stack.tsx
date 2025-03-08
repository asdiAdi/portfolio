import ButtonTechLink from "@/app/_components/button-tech-link";

type MenuTechStackProps = {
  title: string;
  techStack: string[];
};
export default function MenuTechStack(props: MenuTechStackProps) {
  const { title, techStack } = props;

  return (
    <div className="space-y-1">
      <h3 className="font-mono text-xl font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {techStack.map((tech, index) => (
          <ButtonTechLink key={`menu-tech-stack-${index}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}
