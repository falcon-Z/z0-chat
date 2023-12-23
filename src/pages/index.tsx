import { Link } from "@tanstack/react-router";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/auth/login">Login</Link>
    </div>
  );
}
