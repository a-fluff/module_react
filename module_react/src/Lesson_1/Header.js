import './Header.css';

function Header() {
  const user = "Adukar";
  const user2 = "Anna";
  const users = [
    {
      name: 'Alex',
      age: 20
    },
    {
      name: 'Egor',
      age: 53
    },
    {
      name: 'Yan',
      age: 53
    }
  ];
  // const header = <header>Header</header>;

  const isActive = true;

  if(isActive) {
    users[0].age = 50;
  } else {
    users[0].age = 10;
  };
  
  const header = (
  // <header className="header">
  <>
    <div>Header</div>
    <div className="user">
      <p className="user__name" id={users[0].age >= 30 ? 'open' : 'close'}>{users[0].name}</p>
      <p className="user__age">{users[0].age + 1}</p>
    </div>
    <div className="user">
      <p className="user__name">{users[1].name}</p>
      <p className="user__age">{users[1].age + 1}</p>
    </div>
    <div className="user">
      <p className="user__name">{users[2].name}</p>
      <p className="user__age">{users[2].age + 1}</p>
    </div>
  {/* </header> */}
  </>
  );

  return (
    <div>
      {header}
    </div>
  )
}

export default Header