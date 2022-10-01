export default function Participant (props: any) {
    
  const {data} = props;
  /*
  const {value: rank} = data[0];
  const {value: played} = data[1];
  const {value: won} = data[2];
  const {value: drawn} = data[3];
  const {value: lost} = data[4];
  const {value: scored} = data[5];
  const {value: conceded} = data[6];
  const {value: points} = data[7];
  */

 

  return (
    <tr>
      <td>{data.name.name ?? "name"}</td>
      {/*
      <td>{rank}</td>
      <td>{played}</td>
      <td>{won}</td>
      <td>{drawn}</td>
      <td>{lost}</td>
      <td>{scored}</td>
      <td>{conceded}</td>
      <td>{points}</td>
      */}
    </tr>
  ); 
}