import React from 'react';
import { motion } from 'framer-motion';
import {
  Flag, Crown, Flame, Star, Clock, CheckCircle2, Circle,
  Skull, Target, Coins, Gem, Compass
} from 'lucide-react';

const RoadmapPage = () => {
  const phases = [
    {
      id: 'I',
      title: "Settlement",
      thai: "การตั้งรกราก",
      subtitle: "วางรากฐานแห่งดินแดนเถื่อน",
      status: "completed",
      icon: Flag,
      seal: "MDCCCXCIX",
      year: "Chapter I",
      items: [
        "เปิดตัวระบบเลือกเผ่าพันธุ์ (Races Selection) 4 เผ่าหลัก",
        "วางระบบ Skill Tree พื้นฐาน — ตัดไม้, ขุดเหมือง, ทำเกษตร",
        "จัดตั้งระบบการปกครองเบื้องต้น (Governance Foundation)",
        "ระบบเศรษฐกิจแบบ Player-to-Player (P2P)",
        "เปิดเมืองมาตรฐานกฎ RP สำหรับ Story-telling",
      ],
    },
    {
      id: 'II',
      title: "Conflict & Prosperity",
      thai: "ไฟแค้นและทรัพย์สมบัติ",
      subtitle: "ความขัดแย้งและการเติบโตของแดนเถื่อน",
      status: "in-progress",
      icon: Flame,
      seal: "MCM",
      year: "Chapter II",
      items: [
        "เปิดโซน Thief Land สำหรับสายยิง (Gameplay focus)",
        "ระบบ Extraction Mode — High Risk, High Reward",
        "ระบบธุรกิจ Saloon & Casino (Unified Model)",
        "สงครามชิงทรัพยากร และระบบความแค้นระหว่างแก๊ง",
        "ตลาดมืด (Black Market) และการประมูลสินค้าหายาก",
      ],
    },
    {
      id: 'III',
      title: "State Sovereignty",
      thai: "อำนาจอธิปไตย",
      subtitle: "การเมืองระดับรัฐและตำนานที่ไม่สิ้นสุด",
      status: "upcoming",
      icon: Crown,
      seal: "MCMI",
      year: "Chapter III",
      items: [
        "ระบบการเมืองเต็มรูปแบบ — President & Legislation",
        "ศึกมวยตัวแทนรัฐ และแข่งม้าระหว่างรัฐ",
        "ระบบ Raid Camp สำหรับแก๊งในโซน Thief Land",
        "ระบบ Legacy Items — ไอคอนประจำรัฐที่ให้บัฟทั้งเมือง",
        "การขยายอาณาจักรและการทำสนธิสัญญาระหว่างรัฐ",
      ],
    },
  ];

  const StatusBadge = ({ status }) => {
    const map = {
      completed: { label: 'SIGNED & SEALED', Icon: CheckCircle2, ring: 'border-amber-600/60', text: 'text-amber-300', bg: 'bg-amber-900/30' },
      'in-progress': { label: 'IN MOTION', Icon: Circle, ring: 'border-orange-500/60', text: 'text-orange-300', bg: 'bg-orange-900/30' },
      upcoming: { label: 'AWAITING DAWN', Icon: Clock, ring: 'border-stone-500/50', text: 'text-stone-300', bg: 'bg-stone-800/40' },
    };
    const s = map[status];
    return (
      <div className={`inline-flex items-center gap-2 ${s.bg} ${s.text} border ${s.ring} px-3 py-1.5 rounded-sm text-[10px] font-black tracking-[0.25em] uppercase`}>
        <s.Icon className={`w-3.5 h-3.5 ${status === 'in-progress' ? 'animate-pulse' : ''}`} />
        {s.label}
      </div>
    );
  };

  // Ornate corner decoration (SVG flourish)
  const Corner = ({ className = '' }) => (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="0.8">
      <path d="M2 2 L18 2 M2 2 L2 18 M2 2 L14 14" />
      <circle cx="2" cy="2" r="1.2" fill="currentColor" />
      <path d="M6 6 Q10 4 14 8" />
    </svg>
  );

  return (
    <div className="min-h-screen relative overflow-x-hidden font-kanit text-amber-50"
         style={{
           backgroundColor: '#1a0f08',
           backgroundImage:
             'radial-gradient(ellipse at 20% 10%, rgba(180,120,50,0.18), transparent 55%),' +
             'radial-gradient(ellipse at 80% 90%, rgba(120,60,20,0.22), transparent 55%),' +
             'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.55), transparent 70%)',
         }}>

      {/* Aged paper / vignette overlays */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
             style={{
               backgroundImage:
                 "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.3  0 0 0 0 0.2  0 0 0 0 0.1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
             }} />
        <div className="absolute inset-0"
             style={{
               background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
             }} />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Ember particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute block w-1 h-1 rounded-full bg-amber-400/60 shadow-[0_0_8px_2px_rgba(251,191,36,0.5)]"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
            animate={{ y: [-20, -120], opacity: [0, 0.8, 0] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.4, ease: 'easeOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center py-28 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-6xl w-full"
        >
          {/* ===== Header / Wanted Poster ===== */}
          <header className="mb-24">
            <div className="relative mx-auto max-w-4xl border-y-4 border-amber-700/60 py-10 px-6"
                 style={{
                   background:
                     'linear-gradient(180deg, rgba(60,30,10,0.5) 0%, rgba(20,10,5,0.7) 100%)',
                   boxShadow: 'inset 0 0 60px rgba(0,0,0,0.6), 0 0 40px rgba(180,120,50,0.15)',
                 }}>
              {/* Corners */}
              <Corner className="absolute top-2 left-2 w-8 h-8 text-amber-600/70" />
              <Corner className="absolute top-2 right-2 w-8 h-8 text-amber-600/70 -scale-x-100" />
              <Corner className="absolute bottom-2 left-2 w-8 h-8 text-amber-600/70 -scale-y-100" />
              <Corner className="absolute bottom-2 right-2 w-8 h-8 text-amber-600/70 -scale-100" />

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 mb-5"
                >
                  <span className="h-px w-12 bg-amber-600/60" />
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-[11px] font-black tracking-[0.5em] text-amber-400/80 uppercase">
                    Saint Denis Decree
                  </span>
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="h-px w-12 bg-amber-600/60" />
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight mb-3"
                    style={{
                      fontFamily: "'Cinzel', 'Kanit', serif",
                      color: '#f3d9a4',
                      textShadow: '3px 3px 0 #2a1408, 6px 6px 12px rgba(0,0,0,0.7)',
                      letterSpacing: '0.05em',
                    }}>
                  ROADMAP
                </h1>

                <div className="flex items-center justify-center gap-4 my-4">
                  <span className="h-px w-20 bg-gradient-to-r from-transparent to-amber-600" />
                  <span className="text-amber-500/80 text-2xl">✦</span>
                  <span className="h-px w-20 bg-gradient-to-l from-transparent to-amber-600" />
                </div>

                <p className="text-lg md:text-xl text-amber-100/70 max-w-2xl mx-auto italic font-light">
                  “เส้นทางสู่การเป็นตำนานในดินแดน Texas RP — จากก้าวแรกของผู้บุกเบิก สู่อำนาจที่ไร้ขีดจำกัด”
                </p>

                <div className="mt-6 flex items-center justify-center gap-6 text-[10px] tracking-[0.4em] text-amber-700/80 uppercase font-black">
                  <span>Est. MDCCC</span>
                  <span className="text-amber-600">◆</span>
                  <span>Texas RP</span>
                  <span className="text-amber-600">◆</span>
                  <span>Anno Legend</span>
                </div>
              </div>
            </div>
          </header>

          {/* ===== Portrait / The Lawkeeper ===== */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative mb-28 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl mx-auto"
          >
            {/* Frameless Portrait — Feathered Edge / Mask Fade */}
            <div className="relative shrink-0">
              {/* Amber backlight glow */}
              <div className="absolute -inset-16 bg-amber-700/25 blur-[100px] rounded-full" />
              <div className="absolute -inset-8 bg-orange-900/30 blur-[60px] rounded-full" />

              {/* Subtle decorative ring behind portrait */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[360px] h-[360px] rounded-full border border-amber-700/20" />
                <div className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-amber-700/10 animate-[spin_80s_linear_infinite]" />
              </div>

              {/* The image with feathered mask */}
              <div className="relative" style={{ width: '380px', height: '460px' }}>
                <img
                  src="/cowboy_businessman.png"
                  alt="The Lawkeeper of Saint Denis"
                  className="w-full h-full object-cover object-top"
                  style={{
                    filter: 'contrast(1.08) brightness(1.02) saturate(1.1) drop-shadow(0 20px 40px rgba(0,0,0,0.6))',
                    WebkitMaskImage:
                      'radial-gradient(ellipse 70% 75% at 50% 45%, #000 45%, rgba(0,0,0,0.6) 70%, transparent 100%)',
                    maskImage:
                      'radial-gradient(ellipse 70% 75% at 50% 45%, #000 45%, rgba(0,0,0,0.6) 70%, transparent 100%)',
                  }}
                />

                {/* Warm color wash on top */}
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-overlay"
                  style={{
                    background:
                      'radial-gradient(ellipse at 30% 20%, rgba(251,191,36,0.25), transparent 60%)',
                  }}
                />

                {/* Embers/smoke from below */}
                <div
                  className="absolute -bottom-4 inset-x-0 h-32 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center top, rgba(180,90,30,0.4), transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />
              </div>

              {/* Floating brass nameplate (no frame) */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-8 py-2 rounded-sm border border-amber-600/60 backdrop-blur-sm"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(192,138,62,0.85) 0%, rgba(107,52,16,0.85) 100%)',
                  boxShadow:
                    'inset 0 1px 0 rgba(251,191,36,0.5), 0 8px 24px rgba(0,0,0,0.7)',
                }}
              >
                <span
                  className="text-[10px] font-black tracking-[0.4em] uppercase text-amber-50"
                  style={{ fontFamily: "'Cinzel', serif", textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}
                >
                  ✦ The Lawkeeper ✦
                </span>
              </motion.div>
            </div>

            {/* Side Text — Wanted Poster Style */}
            <div className="flex-1 max-w-md text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <span className="text-[10px] font-black tracking-[0.4em] text-red-500/90 uppercase border border-red-700/60 bg-red-950/40 px-3 py-1">
                  ✦ Wanted ✦
                </span>
                <span className="text-[10px] tracking-[0.3em] text-amber-700/80 font-mono">Reward: $10,000</span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-black uppercase mb-3 leading-tight"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: '#f3d9a4',
                  textShadow: '2px 2px 0 #1a0d06, 4px 4px 8px rgba(0,0,0,0.7)',
                }}
              >
                Dead or<br />Alive
              </h2>

              <div className="flex items-center gap-3 my-4 justify-center md:justify-start">
                <span className="h-px w-12 bg-amber-700/60" />
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span className="h-px w-12 bg-amber-700/60" />
              </div>

              <p className="text-amber-100/70 italic leading-relaxed text-sm md:text-base">
                “เขาเดินผ่านควันบุหรี่และแสงตะเกียงของ Saint Denis — สวมหมวกผู้พิทักษ์กฎหมาย แต่กระเป๋าหนักด้วยเหรียญที่ได้มาจากโต๊ะรูเล็ตต์”
              </p>

              <div className="mt-5 flex items-center justify-center md:justify-start gap-2 text-[10px] tracking-[0.35em] text-amber-600/80 font-black uppercase">
                <Compass className="w-3 h-3" />
                Last seen at the casino
              </div>
            </div>
          </motion.section>

          {/* ===== Timeline ===== */}
          <div className="relative">
            {/* Rope/chain vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-amber-700/60 to-transparent" />
              <div className="absolute inset-0 w-[3px] -translate-x-[1px] bg-gradient-to-b from-transparent via-amber-900/40 to-transparent blur-sm" />
            </div>

            <div className="space-y-28">
              {phases.map((phase, index) => {
                const leftSide = index % 2 === 0;
                return (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: index * 0.15 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className={`relative flex flex-col ${leftSide ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}
                  >
                    {/* Sheriff Star Node */}
                    <div className="absolute left-1/2 -translate-x-1/2 z-30 hidden md:block">
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-xl" />
                        <svg viewBox="0 0 64 64" className="absolute inset-0 w-full h-full drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]">
                          <defs>
                            <radialGradient id={`star-${phase.id}`} cx="50%" cy="40%">
                              <stop offset="0%" stopColor="#fde68a" />
                              <stop offset="50%" stopColor="#c08a3e" />
                              <stop offset="100%" stopColor="#5a3210" />
                            </radialGradient>
                          </defs>
                          <polygon
                            points="32,4 38,24 60,24 42,36 48,58 32,46 16,58 22,36 4,24 26,24"
                            fill={`url(#star-${phase.id})`}
                            stroke="#3a1d08"
                            strokeWidth="1.5"
                          />
                          <circle cx="32" cy="32" r="6" fill="#2a1408" stroke="#c08a3e" strokeWidth="1" />
                        </svg>
                        <phase.icon className="relative w-4 h-4 text-amber-200 z-10" />
                      </div>
                    </div>

                    {/* ===== Content Card (Wanted Poster) ===== */}
                    <div className="w-full md:w-[46%]">
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="relative p-[2px] rounded-sm"
                        style={{
                          background: 'linear-gradient(135deg, #8b5a2b 0%, #2a1408 50%, #8b5a2b 100%)',
                          boxShadow: '0 20px 50px rgba(0,0,0,0.7), 0 0 30px rgba(180,120,50,0.15)',
                        }}
                      >
                        <div
                          className="relative p-8 md:p-10 rounded-sm overflow-hidden"
                          style={{
                            background:
                              'linear-gradient(180deg, #2a1810 0%, #1a0d06 100%)',
                            backgroundBlendMode: 'multiply',
                          }}
                        >
                          {/* Paper grain */}
                          <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                               style={{
                                 backgroundImage:
                                   "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
                               }} />

                          {/* Inner ornate border */}
                          <div className="absolute inset-3 border border-amber-700/30 pointer-events-none rounded-sm" />
                          <Corner className="absolute top-4 left-4 w-5 h-5 text-amber-600/60 pointer-events-none" />
                          <Corner className="absolute top-4 right-4 w-5 h-5 text-amber-600/60 -scale-x-100 pointer-events-none" />
                          <Corner className="absolute bottom-4 left-4 w-5 h-5 text-amber-600/60 -scale-y-100 pointer-events-none" />
                          <Corner className="absolute bottom-4 right-4 w-5 h-5 text-amber-600/60 -scale-100 pointer-events-none" />

                          {/* Header row */}
                          <div className="relative flex items-start justify-between mb-6 gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] tracking-[0.4em] text-amber-600/80 font-black uppercase">
                                  {phase.year}
                                </span>
                                <span className="h-px flex-1 bg-amber-700/40" />
                                <span className="text-[10px] tracking-[0.3em] text-amber-600/60 font-mono">
                                  № {phase.seal}
                                </span>
                              </div>
                              <h3
                                className="text-3xl md:text-4xl font-black uppercase tracking-wide leading-none mb-2"
                                style={{
                                  fontFamily: "'Cinzel', 'Kanit', serif",
                                  color: '#f3d9a4',
                                  textShadow: '2px 2px 0 #1a0d06',
                                }}
                              >
                                {phase.title}
                              </h3>
                              <p className="text-amber-300/70 text-base font-medium italic">
                                {phase.thai}
                              </p>
                              <p className="text-amber-100/40 text-xs mt-1 tracking-wider">
                                {phase.subtitle}
                              </p>
                            </div>

                            {/* Wax Seal with Phase ID */}
                            <div className="relative shrink-0">
                              <div className="absolute inset-0 bg-red-900/40 blur-xl rounded-full" />
                              <div
                                className="relative w-20 h-20 rounded-full flex items-center justify-center border-2 border-red-950"
                                style={{
                                  background:
                                    'radial-gradient(circle at 35% 30%, #a53a2a 0%, #6b1a10 55%, #2a0805 100%)',
                                  boxShadow:
                                    'inset 2px 2px 6px rgba(255,200,180,0.25), inset -3px -3px 8px rgba(0,0,0,0.6), 0 6px 18px rgba(0,0,0,0.5)',
                                }}
                              >
                                <span
                                  className="text-2xl font-black text-amber-100/90"
                                  style={{
                                    fontFamily: "'Cinzel', serif",
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                                  }}
                                >
                                  {phase.id}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="relative my-5 flex items-center gap-3">
                            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-700/60" />
                            <StatusBadge status={phase.status} />
                            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-700/60" />
                          </div>

                          {/* Items */}
                          <ul className="relative space-y-3 mt-6">
                            {phase.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 group/item">
                                <div className="mt-1.5 shrink-0">
                                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-amber-500 group-hover/item:text-amber-300 transition-colors">
                                    <polygon
                                      points="8,1 10,6 15,6 11,9 12.5,14 8,11 3.5,14 5,9 1,6 6,6"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <span className="text-amber-100/80 text-[15px] leading-relaxed group-hover/item:text-amber-50 transition-colors">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>

                          {/* Signature line */}
                          <div className="relative mt-8 pt-4 border-t border-dashed border-amber-700/30 flex items-center justify-between">
                            <span className="text-[9px] tracking-[0.4em] text-amber-700/70 font-black uppercase">
                              Signed in Saint Denis
                            </span>
                            <span className="text-amber-700/70 italic text-sm" style={{ fontFamily: "'Cinzel', serif" }}>
                              ~ The Lawkeeper ~
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* ===== Decorative Emblem ===== */}
                    <div className="w-full md:w-[46%] hidden md:flex items-center justify-center">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-amber-700/20 blur-[80px] rounded-full" />

                        {/* Emblem Frame */}
                        <div className="relative w-72 h-72 rounded-full flex items-center justify-center"
                             style={{
                               background:
                                 'radial-gradient(circle at 35% 25%, rgba(180,120,50,0.4) 0%, rgba(40,20,10,0.95) 60%, rgba(15,8,4,1) 100%)',
                               boxShadow:
                                 'inset 0 0 40px rgba(0,0,0,0.7), 0 20px 60px rgba(0,0,0,0.6)',
                             }}>
                          {/* Outer engraved ring */}
                          <div className="absolute inset-2 rounded-full border-2 border-amber-700/40" />
                          <div className="absolute inset-5 rounded-full border border-amber-600/30" />
                          <div className="absolute inset-7 rounded-full border border-dashed border-amber-700/30" />

                          {/* Rotating tick marks */}
                          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-amber-600/40 animate-[spin_60s_linear_infinite]">
                            {[...Array(24)].map((_, i) => (
                              <line
                                key={i}
                                x1="100" y1="14" x2="100" y2={i % 6 === 0 ? 24 : 19}
                                stroke="currentColor"
                                strokeWidth={i % 6 === 0 ? 1.5 : 0.8}
                                transform={`rotate(${i * 15} 100 100)`}
                              />
                            ))}
                          </svg>

                          {/* Center */}
                          <div className="relative flex flex-col items-center justify-center text-center px-6">
                            <phase.icon className="w-14 h-14 text-amber-400/80 mb-3" strokeWidth={1.2} />
                            <span
                              className="text-7xl font-black leading-none"
                              style={{
                                fontFamily: "'Cinzel', serif",
                                color: 'transparent',
                                WebkitTextStroke: '1.5px rgba(243,217,164,0.8)',
                                textShadow: '0 2px 12px rgba(0,0,0,0.8)',
                              }}
                            >
                              {phase.id}
                            </span>
                            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500/80 mt-3">
                              Chapter
                            </p>
                            <span className="h-px w-12 bg-amber-700/50 my-2" />
                            <p className="text-[10px] font-mono tracking-widest text-amber-700/70">
                              {phase.seal}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ===== Footer / Call to Arms ===== */}
          <footer className="mt-32">
            <div className="relative mx-auto max-w-3xl text-center px-8 py-14 border-y-4 border-amber-700/60"
                 style={{
                   background:
                     'linear-gradient(180deg, rgba(60,30,10,0.4) 0%, rgba(20,10,5,0.7) 100%)',
                   boxShadow: 'inset 0 0 80px rgba(0,0,0,0.7), 0 0 50px rgba(180,120,50,0.15)',
                 }}>
              <Corner className="absolute top-2 left-2 w-7 h-7 text-amber-600/70" />
              <Corner className="absolute top-2 right-2 w-7 h-7 text-amber-600/70 -scale-x-100" />
              <Corner className="absolute bottom-2 left-2 w-7 h-7 text-amber-600/70 -scale-y-100" />
              <Corner className="absolute bottom-2 right-2 w-7 h-7 text-amber-600/70 -scale-100" />

              <div className="flex items-center justify-center gap-3 mb-5">
                <Skull className="w-5 h-5 text-amber-600/80" />
                <span className="text-[11px] font-black tracking-[0.5em] text-amber-500/80 uppercase">
                  Join The Outlaws
                </span>
                <Skull className="w-5 h-5 text-amber-600/80" />
              </div>

              <h2
                className="text-4xl md:text-5xl font-black uppercase mb-4"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: '#f3d9a4',
                  textShadow: '2px 2px 0 #2a1408, 4px 4px 10px rgba(0,0,0,0.6)',
                }}
              >
                Ride With Us
              </h2>

              <p className="text-amber-100/60 italic mb-8 max-w-xl mx-auto">
                ร่วมเป็นส่วนหนึ่งของการสร้างรัฐที่ยิ่งใหญ่ที่สุดในประวัติศาสตร์ Texas RP — ตำนานยังไม่จบ
              </p>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-10 py-4 rounded-sm font-black uppercase tracking-[0.3em] text-amber-100 border-2 border-amber-700"
                style={{
                  background:
                    'linear-gradient(180deg, #6b3410 0%, #3a1d08 100%)',
                  boxShadow:
                    'inset 0 1px 0 rgba(251,191,36,0.3), 0 8px 24px rgba(0,0,0,0.6), 0 0 30px rgba(180,120,50,0.25)',
                  fontFamily: "'Cinzel', serif",
                }}
              >
                <span className="flex items-center gap-3">
                  <Compass className="w-4 h-4" />
                  Connect to Discord
                  <Compass className="w-4 h-4" />
                </span>
              </motion.button>

              <p className="mt-6 text-[10px] tracking-[0.4em] text-amber-700/70 uppercase font-black">
                ✦ The Legend Continues ✦
              </p>
            </div>
          </footer>
        </motion.div>
      </div>
    </div>
  );
};

export default RoadmapPage;
