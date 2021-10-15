import { useState } from 'react';

import './App.css';
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
import ListRickAndMorty from './Lesson_3/components/ListRickAndMorty';


function App() {
  // const [value, setValue] = useState('Кнопка');

  // setTimeout(() => {
  //   setValue('ссылка')
  // }, 3000)

  return (
    <>
    <div>
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
      <ListRickAndMorty/>
    </div>
    </>
  );
}

export default App;