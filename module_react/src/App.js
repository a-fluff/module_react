import { useState } from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './Lesson_3/components/Home';
import About from './Lesson_3/components/About';
import ListRickAndMorty from './Lesson_3/components/ListRickAndMorty';
import ThisPerson from './Lesson_3/components/ThisPerson';
import NotFound from './Lesson_3/components/NotFound';

// import Header from './Lesson_1/Header';
// import Homework from './Lesson_1/Homework/Homework';

// import Functions from './Lesson_2/Functions';
// import TagsInArr from './Lesson_2/TagsInArr';
// import States from './Lesson_2/States';
// import Inputs from './Lesson_2/Inputs';
// import TextArea from './Lesson_2/TextArea';
// import Checkbox from './Lesson_2/Checkbox';
// import Select from './Lesson_2/Select';
// import Radio from './Lesson_2/Radio';

// import Button from './Lesson_3/components/Button';


function App() {
  // const [value, setValue] = useState('Кнопка');

  // setTimeout(() => {
  //   setValue('ссылка')
  // }, 3000)

  return (
    <>
    <Router>
      {/* <div> */}
        {/* Hello React!

        <Header />
      </div>
      <div>
        <Homework />
      </div>
      <div>
        <Functions />
        <TagsInArr />
        <States />
        <Inputs />
        <TextArea />
        <Checkbox />
        <Select />
        <Radio /> */}
        {/* <Button value={value}></Button> */}
      {/* </div> */}

      <Link to="/">Home</Link>
      <Link to="/all-persons">All persons</Link>
      <Link to="/about">About</Link>
        
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/all-person/:id">
          <ThisPerson/>
        </Route>

        <Route exact path="/all-persons">
          <ListRickAndMorty/>
        </Route>

        <Route exact path="/about">
          <About></About>
        </Route>

        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;