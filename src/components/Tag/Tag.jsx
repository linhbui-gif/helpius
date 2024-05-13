'use client';
const Tag = ({ value, onChange, options = [], className }) => {
  const renderTagItems = options.map((item) => {
    return (
      <div className="pr-[2.8rem]" key={item.id}>
        <div
          className={`relative w-[150px]  md:w-auto cursor-pointer font-[400] text-[1.6rem] leading-7 py-[0.5rem] px-[1.2rem] ${
            value && value.value === item.value ? 'font-bold' : ''
          }`}
          onClick={() => {
            onChange?.(item);
          }}
        >
          {value && value.value === item.value && (
            <div className="text-style-31 absolute bottom-[100%] after:absolute after:content-[''] after:bottom-[15px] after:w-[3.1rem]  after:h-[0.2rem] after:bg-style-31 after:top-[40%] after:left-[180%] after:translate-x-[-50%]">
              [06]
            </div>
          )}
          {item.label}
        </div>
      </div>
    );
  });
  return (
    <div
      className={`${`Tags flex items-center overflow-x-scroll md:overflow-x-visible  ${className}  mt-[28px]`}`}
    >
      {renderTagItems}
    </div>
  );
};

export default Tag;
