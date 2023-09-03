type Props = {color: string};

export default function Card(props: Props) {
  return <div style={{backgroundColor : props.color, padding: '10px'} }>
  <h2>Card</h2>;
  <img src="https://picsum.photos/200/300" alt="random" />
  <p> card text </p>
  </div> 
}
