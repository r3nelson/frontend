import Button from "../../Button";

const UploadProduct = () => {
  return (
    <div>
      <div>
        <label>Upload Product Document</label>
        <Button text={"+"} color={"bg-white"} />
      </div>

      <div>
        <label>Upload Source Documents</label>
        <Button text={"+"} color={"bg-white"} />
      </div>
    </div>
  );
};

export default UploadProduct;
