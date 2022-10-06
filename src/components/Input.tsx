export default function Input({ type }) {
  return (
    <>
      {type === "label" && (
        <input
          placeholder="Filter labels"
          className="block w-full py-[5px] px-[12px] text-sm leading-5 rounded-md border border-solid border-[#d0d7de] focus:border-[2px] focus:border-solid  focus:border-[#0969da] focus:outline-none focus:shadow-innerblue"
        />
      )}
      {type === "assignee" && (
        <input
          placeholder="Type or choose a user"
          className="block w-full py-[5px] px-[12px] text-sm leading-5 rounded-md border border-solid border-[#d0d7de] focus:border-[2px] focus:border-solid focus:border-[#0969da] focus:outline-none focus:shadow-innerblue"
        />
      )}
    </>
  );
}
