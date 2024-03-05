const App = () => {

  console.log("App() 실행");

  //Map
  const numbers = [1, 2, 3];

  ////////////동일코드////////////
  numbers.map((num) => {  // == foreach
    console.log(num);
    return num;
  });

  numbers.map(function (num) {
    console.log(num);
    return num;
  });
  /////////////////////

  // 배열의 값들을 2배증가 함수
  // function doubleFunc(arr) {
  //   let results = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     results.push(arr[i] * 2);
  //   }
  //  return results;
  // }

  const doubleFunc = (arr) => {
    return arr.map((ele) => ele * 2);
  }

  let rnum = doubleFunc(numbers);
  console.log(rnum);

  const str = numbers.map((num) => {
    return (
      <div>
        hi {num}
      </div>
    )
  });
  //console.log(str);

  //map 사용시
  const fruit = ["사과", "배", "포도"];
  const fruitList = fruit.map((f, index) => (<li key={index}>{index} {f}</li>));

  //table 사용시
  const members = [
    {
      "number": 1,
      "name": "홍길동",
      "age": 24
    },
    {
      "number": 2,
      "name": "성춘향",
      "age": 16
    },
    {
      "number": 3,
      "name": "일지매",
      "age": 28
    },
  ];

  //key 값은 중복되지 않는 번호를 넣어준다.
  const memberList = members.map((member, index) => {
    return (
      <tr key={member.number}>
        <th>{index + 1}</th>
        <td>{member.number}</td>
        <td>{member.name}</td>
        <td>{member.age}</td>
      </tr>
    );
  })

  const myNumbers = [1, 2, 3, 4, 5];

  const listItems = myNumbers.map((number) => (
    <li key={number.toString()}>
      {number}
    </li>
  ));

  return (
    <div>
      {str}
      <br />
      <ul>
        <li>Apple</li>
        <li>Pear</li>
        <li>Grape</li>
      </ul>

      <ul>
        {fruitList}
      </ul>

      <table border={1}>
        <tbody>
          {memberList}
        </tbody>
      </table>
      <br />

      <ul>
        {listItems}
      </ul>

    </div>
  );
}

export default App;