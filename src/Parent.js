
import Child from './Child.js';

const Parent = () => {
  const name = 'Hema';
  const age = 23;


  return (
    <div>
      <Child name={name} age={age} />
    </div>
    
  );
};

export default Parent;
