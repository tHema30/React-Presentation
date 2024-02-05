<!-- 1st example -->


function Avatar() {
  return (
    <img
      className="avatar"
      src={require("./Assets/aboutimg.png")}
      alt="Lin Lanying"
      width={600}
      height={600}
    />
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}


<!-- 2nd Example============================================= -->



import Parent from './Parent.js';

const App = () => {
  return (
    <div>
    
      <Parent />
    </div>
  );
};

export default App;
