function TravelOptions({ emoji, title, active }) {
  return (
    <div
      className={
        active
          ? 'bg-orange h-32 w-16 rounded-full items-center justify-center shadow-lg text-white cursor-pointer'
          : 'bg-white h-32 w-16 rounded-full items-center justify-center shadow-lg text-black hover:bg-orange cursor-pointer duration-200 delay-50 hover:scale-125 '
      }
    >
      <p className="bg-lightGray rounded-full p-1 mt-4 m-4 w-8 h-8">{emoji} </p>
      <p className="m-3 ">{title} </p>
    </div>
  );
}

export default TravelOptions;
