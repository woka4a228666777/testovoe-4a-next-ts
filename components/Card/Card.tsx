export interface CardProps {
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

export default function Card({ 
  period, 
  price, 
  full_price, 
  is_best, 
  text, 
  isSelected = false, 
  onSelect 
}: CardProps) {
  if (is_best) {
    // Верстка для BEST карточки
    return (
      <div 
        className={`h-full w-full rounded-[34px] bg-[#313637] flex flex-col justify-center items-center gap-3 cursor-pointer transition-all duration-200 ring-2 relative ${
          isSelected ? 'ring-2 ring-[#FDB056]' : ' ring-[#484D4E]'
        }`}
        onClick={onSelect}
      >
        <div className="absolute top-[10px] right-[20px]">
          <span className="text-[#FDB056] text-[16px] font-medium">хит!</span>
        </div>
        <div className="flex w-full flex-row items-center gap-2 max-w-[546px] justify-between">
          <div className="flex flex-col items-center">
            <h2 id="period" className="text-[28px] font-bold text-white">{period}</h2>
            <div className="flex flex-col items-center gap-2">
              <p id="price" className="text-[60px] font-bold text-[#FDB056]">{price} ₽</p>
              <p id="full_price" className="text-[24px] font-bold line-through text-white/80 self-end">{full_price} ₽</p>
            </div>
          </div>
          <p id="text" className="text-white text-[18px] max-w-[328px]">{text}</p>
        </div>
      </div>
    );
  }

  // Верстка для обычной карточки
  return (
    <div 
      className={`h-full w-full rounded-[34px] bg-[#313637] flex flex-col justify-center items-center gap-4 cursor-pointer transition-all duration-200 ring-2 ${
        isSelected ? 'ring-[#FDB056]' : 'ring-[#484D4E]'
      }`}
      onClick={onSelect}
    >
      <h2 id="period" className="text-[24px] font-medium text-white">{period}</h2>
      <p id="price" className="text-[50px] font-bold text-white">{price} ₽</p>
      <p id="full_price" className="text-[24px] font-bold line-through text-white/60">{full_price} ₽</p>
      <p id="text" className="text-white/80">{text}</p>
    </div>
  );
}