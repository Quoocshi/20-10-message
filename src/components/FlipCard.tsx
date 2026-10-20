import React, { useState } from 'react';
import { Copy, Check, RotateCcw } from 'lucide-react';
import { WISHES, getNextRandomWish } from '../data/wishes';
import confetti from 'canvas-confetti';

export const FlipCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [currentWish, setCurrentWish] = useState<string>(() => {
    return WISHES[Math.floor(Math.random() * WISHES.length)];
  });
  const [copied, setCopied] = useState<boolean>(false);

  // Kích hoạt pháo hoa lấp lánh khi mở mặt sau
  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffe599', '#f3c858', '#f43f5e', '#fb7185', '#ffffff'],
    });
  };

  // Lật thẻ
  const handleCardClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      triggerConfetti();
    } else {
      setIsFlipped(false);
      // Đổi lời chúc random mới trong khi thẻ úp lại mặt trước
      setTimeout(() => {
        setCurrentWish((prev) => getNextRandomWish(prev));
      }, 350);
    }
  };

  // Sao chép lời chúc
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(currentWish);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-[480px] sm:max-w-[520px] aspect-[1/1.1] min-h-[460px] sm:min-h-[500px] perspective-1000 cursor-pointer select-none shrink-0">
      <div
        onClick={handleCardClick}
        className={`flip-card-inner relative w-full h-full rounded-3xl transition-transform duration-700 ease-out shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),_0_0_35px_rgba(244,63,94,0.15)] ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* ================= MẶT TRƯỚC (FRONT) ================= */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-gradient-to-b from-[#64142b] via-[#4d0c1f] to-[#3a0815] border border-amber-400/40 p-7 sm:p-9 flex flex-col justify-between items-center text-center overflow-hidden">
          {/* Khung viền chỉ vàng thanh lịch bên trong */}
          <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-amber-300/20 pointer-events-none" />

          {/* Họa tiết 3 ngôi sao vàng trên cùng */}
          <div className="pt-2 z-10 flex items-center justify-center gap-2 text-amber-300/90 text-xs tracking-[0.3em]">
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
          </div>

          {/* Cụm Tiêu Đề & Số 20/10 Sang Trọng */}
          <div className="flex flex-col items-center z-10 my-auto">
            {/* Tiêu đề Chúc Mừng Ngày Phụ Nữ Việt Nam */}
            <h2 className="font-serif italic text-2xl sm:text-3xl text-rose-50 font-medium tracking-wide leading-snug drop-shadow-sm">
              Chúc Mừng Ngày
              <br />
              Phụ Nữ Việt Nam
            </h2>

            {/* Đường gạch ngang ánh vàng */}
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-300/50 to-transparent my-3.5" />

            {/* Số 20/10 Gold Gradient */}
            <div className="text-6xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-[#ffea9f] via-[#f5ca66] to-[#c99a32] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(245,202,102,0.35)]">
              20/10
            </div>

            {/* Lời chúc ngắn gọn tinh tế */}
            <p className="text-xs sm:text-sm text-rose-100/85 font-light leading-relaxed max-w-[340px] mt-4">
              Chúc các chị em luôn rạng rỡ,
              <br />
              hạnh phúc và thành công
            </p>
          </div>

          {/* Họa tiết hoa anh đào & gợi ý lật thẻ */}
          <div className="pb-2 z-10 flex flex-col items-center gap-2">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-pink-300">🌸</span>
              <span className="text-amber-300/80 text-xs">✦</span>
              <span className="text-pink-300">🌸</span>
            </div>
            <span className="text-[11px] text-rose-200/50 tracking-wider">
              Chạm để mở thiệp
            </span>
          </div>
        </div>

        {/* ================= MẶT SAU (BACK) ================= */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-gradient-to-b from-[#64142b] via-[#4d0c1f] to-[#3a0815] border border-amber-400/40 p-7 sm:p-9 flex flex-col justify-between items-center text-center overflow-hidden">
          {/* Khung viền chỉ vàng thanh lịch bên trong */}
          <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-amber-300/20 pointer-events-none" />

          {/* Header mặt sau: Badge & Nút Copy */}
          <div className="w-full flex justify-between items-center z-10 pt-1">
            <div className="text-amber-300/90 text-[11px] tracking-[0.2em] uppercase font-medium flex items-center gap-1.5 mx-auto pl-7">
              <span>✦</span>
              <span>LỜI CHÚC DÀNH CHO BẠN</span>
              <span>✦</span>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="text-amber-200/80 hover:text-amber-100 p-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-300/30 transition-colors"
              title="Sao chép lời chúc"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Nội dung lời chúc ngẫu nhiên */}
          <div className="my-auto px-4 z-10 flex flex-col items-center">
            <blockquote className="font-serif italic text-xl sm:text-2xl text-rose-50 leading-relaxed max-w-[380px] font-normal drop-shadow-sm">
              "{currentWish}"
            </blockquote>

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-300/40 to-transparent mt-5" />
          </div>

          {/* Gợi ý lật lại */}
          <div className="pb-2 z-10 flex items-center justify-center gap-1.5 text-xs text-rose-200/60 font-light tracking-wide">
            <RotateCcw className="w-3.5 h-3.5 text-amber-300/80" />
            <span>Chạm để lật lại</span>
          </div>
        </div>
      </div>
    </div>
  );
};
