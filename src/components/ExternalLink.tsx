import Link from 'next/link';

type LinkProps = React.ComponentProps<typeof Link>;

type Props = {
  external?: boolean;
} & LinkProps;

export default function ExternalLink({
  href,
  className,
  children,
  ...props
}: Props) {
  return (
    <Link
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}>
      {children}
    </Link>
  );
}
