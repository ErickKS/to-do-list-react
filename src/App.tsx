import { List } from "./components/List";

import "./styles/main.css";

export default function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2">
      <List />

      <a
        href="https://github.com/ErickKS"
        target="_blank"
        className="text-white underline"
      >
        Developed by Erick Kuwahara
      </a>
    </div>
  );
}
