const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} - Exercises: {part.exercises}
        </p>
      ))}
    </div>
  );
};

export default Content;
