import { useState } from "react";

const App = () => {
  let age = [10, 12, 14, 15, 15];

  let [value, newValue] = useState([100,200,300,400]);

  // function ageKoChangeKarDiya() {
  //   age = 10;
  //   newValue(20);
  //   // console.log(age, "call from ageKoChangekardiya")
  // }

  return (
    <div>
      <h1>
        App - {age[0]} - {value[0]}
      </h1>

      {/* <button onClick={ageKoChangeKarDiya}> Age ko change kro </button> */}
    </div>
  );
};

export default App;
