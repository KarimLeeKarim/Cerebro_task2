import React, { useState } from 'react';
import { DecimalInput } from './Decimal';

function App() {
  const [value, setValue] = useState<number>();

  return (
    <DecimalInput value={value} onChange={setValue} className={'pretty-input'}/>
  );
}

export default App;
