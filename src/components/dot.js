export default function Dot({setPage, page, number }) {
  return (
    <div
    onClick={() => {setPage(page)}}
      className={`dotPoint 
      ${page === number * -100 ? "Now" : ""}`}
    ></div>
  );
}
