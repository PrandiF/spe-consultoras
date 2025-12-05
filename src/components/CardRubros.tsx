type CardRubrosProps = {
  titulo?: string;
  reverse?: boolean;
  orange?: boolean;
};

function CardRubros({ titulo, reverse, orange }: CardRubrosProps) {
  return (
    <div>
      <h3
        className={`text-2xl font-semibold mt-2 text-center ${
          orange ? "text-[#FF7C28]" : " text-[#003DA6]"
        }`}
      >
        {titulo}
      </h3>
    </div>
  );
}

export default CardRubros;
