import './App.css';
import Header from './Lesson_1/Header';
import Homework from './Lesson_1/Homework/Homework';

import Functions from './Lesson_2/Functions';
import TagsInArr from './Lesson_2/TagsInArr';
import States from './Lesson_2/States';
import Inputs from './Lesson_2/Inputs';
import TextArea from './Lesson_2/TextArea';
import Checkbox from './Lesson_2/Checkbox';
import Select from './Lesson_2/Select';
import Radio from './Lesson_2/Radio';

function App() {
  return (
    <>
    <div>
      Hello React!

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
      <Radio />
    </div>
    </>
  );
}

export default App;