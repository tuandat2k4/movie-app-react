const Info = ({ title, value }) => {
  return (
    <div>
      <p className="mb-2 text-sm text-gray-500">{title}</p>

      <p className="font-medium">{value}</p>
    </div>
  );
};

export default Info;
