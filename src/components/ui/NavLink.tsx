import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      {children}
    </Link>
  );
}