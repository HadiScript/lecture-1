function Typers() {
  let a = [1, 2, 3, 4, 5, 6];
  // push, pop, shift, unshift, slice, index, find, splice, map, filter, forEach, findIndex....

  // a.push(100) // add 100 at 6th index
  // a.pop(100); // remove 100

  // a.shift() // remove first element from array
  // a.unshift(100); // add 100 at first index

  // let b = [];

  // b = a.slice(0,3); // copy element from a array (from o index to 3 (3th is not included)) to b array

  // a.forEach( (x) => {  console.log(x)  } ); //print all values of array

  let b = [];

  a.map((x) => x > 3);

  return (
    <div>
      <h1> {a[2]} </h1>
      <h2> {a[5]} </h2>
    </div>
  );
}

export default Typers;
