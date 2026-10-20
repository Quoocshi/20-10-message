import React from 'react';
import { FlipCard } from './components/FlipCard';

// Component bông cúc trắng nhụy vàng tinh tế
const DaisyFlower: React.FC<{
  className?: string;
  size?: number;
  opacity?: number;
  blur?: boolean;
}> = ({ className = '', size = 26, opacity = 0.85, blur = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${className} ${blur ? 'blur-[1.5px]' : ''}`}
      style={{ opacity }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 12 cánh hoa trắng ngà */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <ellipse
          key={deg}
          cx="50"
          cy="22"
          rx="7"
          ry="19"
          fill="#fffefb"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      {/* Nhụy vàng hoa cúc */}
      <circle cx="50" cy="50" r="14" fill="#facc15" stroke="#eab308" strokeWidth="2" />
    </svg>
  );
};

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-[#4e0c1e] via-[#63142e] to-[#3b0816] overflow-hidden select-none">
      {/* Quầng sáng trung tâm (Ambient glow) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(163,29,71,0.3)_0%,_transparent_70%)]" />

      {/* ================= CÁC BÔNG HOA CÚC VÀ ĐỐM SÁNG BAY BỔNG ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Góc trên bên trái */}
        <div className="absolute top-[8%] left-[12%] animate-float-slow">
          <DaisyFlower size={28} opacity={0.8} />
        </div>
        <div className="absolute top-[22%] left-[6%] animate-float-gentle">
          <DaisyFlower size={18} opacity={0.6} blur />
        </div>

        {/* Góc trên bên phải */}
        <div className="absolute top-[12%] right-[14%] animate-float-gentle">
          <DaisyFlower size={32} opacity={0.85} />
        </div>
        <div className="absolute top-[28%] right-[8%] animate-float-slow">
          <DaisyFlower size={20} opacity={0.65} />
        </div>

        {/* Phía dưới bên trái */}
        <div className="absolute bottom-[18%] left-[10%] animate-float-gentle">
          <DaisyFlower size={30} opacity={0.75} />
        </div>
        <div className="absolute bottom-[8%] left-[22%] animate-float-slow">
          <DaisyFlower size={18} opacity={0.5} blur />
        </div>

        {/* Phía dưới bên phải */}
        <div className="absolute bottom-[22%] right-[10%] animate-float-slow">
          <DaisyFlower size={34} opacity={0.9} />
        </div>
        <div className="absolute bottom-[10%] right-[18%] animate-float-gentle">
          <DaisyFlower size={20} opacity={0.6} blur />
        </div>

        {/* Các đốm bụi vàng lấp lánh (Golden bokeh sparkles) */}
        <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-amber-300/60 blur-[0.5px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-amber-200/50 blur-[1px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-amber-300/50 blur-[1px] animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-amber-200/60 blur-[0.5px] animate-pulse" style={{ animationDuration: '5s' }} />
      </div>

      {/* ================= THẺ TRUNG TÂM ================= */}
      <main className="relative z-10 w-full max-w-[520px] flex items-center justify-center">
        <FlipCard />
      </main>
    </div>
  );
};

export default App;
