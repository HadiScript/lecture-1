const UsersData = () => {
  const Users = [
    {
      name: "hadi",
      age: 23,
      educaiton: "BSCS",
    },

    {
      name: "Ali",
      age: 22,
      educaiton: "BSIT",
    },
  ];

  return (
    <div>
      {Users.map((x) => (
        <div>
          {" "}
          <h2>{x.educaiton}</h2> <h1> {x.age} </h1>{" "}
        </div>
      ))}
    </div>
  );
};

export default UsersData;
