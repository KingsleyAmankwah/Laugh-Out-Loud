import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="mx-1 md:max-w-2xl md:mx-auto font-[system-ui]">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
