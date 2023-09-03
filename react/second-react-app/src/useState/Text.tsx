type Props = {isVisible: boolean};

export default function Text(props: Props) {
  return props.isVisible? <div>My Website!</div>: null;
}
