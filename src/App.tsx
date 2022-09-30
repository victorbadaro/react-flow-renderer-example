import { Flow } from './components/Flow';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Hello, React Flow Renderer Example!</h1>
      <Flow />
    </>
  );
}