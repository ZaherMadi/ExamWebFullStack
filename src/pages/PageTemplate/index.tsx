import { Outlet } from 'react-router-dom';

const PageTemplate = () => (
  <>
    <header>
      <h1>Exam Typescript React</h1>
    <nav>
    <a className="goHome" href='/'>Home</a>
    </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <p>
        <i>By Zaher Islah Madi on {new Date().toLocaleDateString()}</i>
      </p>
    </footer>
  </>
);

export default PageTemplate;
