type Props = {
    changeColor: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    colorToAdd?: string;
};

export default function Select(props: Props) {
  return <select name="colors" onChange={props.changeColor} >
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="yellow">yellow</option>
        </select>;
}
