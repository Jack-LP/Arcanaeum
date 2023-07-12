interface Props {
  text: string;
  replaceWithBr: any;
}

const Text = ({ text, replaceWithBr }: Props) => {
  return (
    <p dangerouslySetInnerHTML={{ __html: replaceWithBr() }} className='' />
  );
};
export default Text;
