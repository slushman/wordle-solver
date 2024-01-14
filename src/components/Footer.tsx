import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="flex justify-center gap-8 p-8 content-center items-baseline">
      &copy; {new Date().getFullYear()}
      <a className="inline ml-[-24px]" href="https://www.slushman.com">
        <Logo />
      </a>
    </footer>
  );
}
