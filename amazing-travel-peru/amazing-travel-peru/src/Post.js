import { BiAlarmAdd } from 'react-icons/bi';
export const Post = () => {
  return (
    <>
      <button
        onClick={() => {
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error) );
        }}
      ><BiAlarmAdd /> Mostrar Fetch</button>
      <ul>
        <li>titulo de publicacion 1</li>
        <li>titulo de publicacion 2</li>
      </ul>
    </>
  );
};
