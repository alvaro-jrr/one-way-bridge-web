export function Street() {
  return (
    <div className="flex h-20 w-full items-center gap-6 bg-gray-600 p-6">
      <Road />
      <Road />
      <Road />
    </div>
  );
}

function Road() {
  return <div className="h-1 w-full bg-white"></div>;
}
