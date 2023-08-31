type Props = {
    addColor: (color: string) => void;
};

export default function AddColor(props: Props) {
  return <div>
    <label> Add Color  </label>
    <input type="color">
    </input>
    <button> Add </button>
  </div>;
}
