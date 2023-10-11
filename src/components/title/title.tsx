interface IRequest {
  title: string;
}

const Title = (data: IRequest) => {
  return (
    <div>
      <h1 className="text-5xl font-medium select-none">
        {data.title}
        <span className="text-red-600 font-extrabold text-6xl select-none">
          {" "}
          .
        </span>
      </h1>
    </div>
  );
};

export default Title;
