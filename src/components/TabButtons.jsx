export default function TabButtons({ id, name, active, handleClick }) {
  return (
    <button
      key={id}
      className={active ? `active tab-buttons` : `tab-buttons`}
      onClick={() => handleClick(id)}
    >
      {name}
    </button>
  );
}
