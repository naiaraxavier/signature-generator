// Component
export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-2 bg-gray-100 dark:bg-black shadow-md w-full">
      <div className="text-[11px] text-center">
        <p>
          &copy; {new Date().getFullYear()} Desenvolvido por Naiara. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
};
