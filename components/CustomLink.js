import Link from 'next/link';
import { useRouter } from 'next/router';

// @https://flaviocopes.com/nextjs-active-link/
export default function CustomLink({ href, children, component = 'navbar' }) {
  const router = useRouter();
  let className = children.props.className || '';
  let splitedRouter = router.pathname.split('/');
  let splitedHref = href.split('/');

  if (component === 'sidebar' && router.pathname === href) {
    className = `${className} active`;
  }
  if (component === 'navbar' && splitedHref[1] === splitedRouter[1]) {
    className = `${className} active`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}
