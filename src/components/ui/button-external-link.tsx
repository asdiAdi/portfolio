import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link, { LinkProps } from "next/link";

type ButtonTitleProps = {
  /**
   * Button title
   */
  text: string;
} & LinkProps;

export default function ButtonExternalLink(props: ButtonTitleProps) {
  const { text, ...rest } = props;
  return (
    <Link
      target="_blank"
      rel="noreferrer noopener"
      className="group flex items-center justify-center gap-1 rounded-md bg-primary px-4 py-2 font-mono text-white hover:cursor-pointer"
      {...rest}
    >
      <span>{text}</span>
      <ArrowTopRightIcon
        height={20}
        width={20}
        className="transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110"
      />
    </Link>
  );
}
