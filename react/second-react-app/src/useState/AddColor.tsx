type Props = {
    addColor: (color: string) => void;
};

export default function AddColor(_: Props) {
  return <div>
    <label> Add Color  </label>
    <input type="color">
    </input>
    <button> Add </button>
  </div>;
}
