import { Container } from './components/Container';
import { List } from './components/List';

import './styles/main.css';

export default function App() {
  return (
    <Container>
      <h1 
        className="text-3xl font-semibold text-white tracking-wider text-center mb-4 uppercase"
      >
        Task List
      </h1>

      <List/>

      <p 
        className="text-sm font-semibold text-white tracking-wider text-center mt-4"
      >
        Developed by <a href="https://github.com/ErickKS" target="_blank" className='text-indigo-500 underline'>Erick Kuwahara</a>
      </p>
    </Container>
  )   
}