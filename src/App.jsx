import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Flame, Star, Map, ChevronRight, Axe, Pickaxe, Sprout, Hammer, Home,
  Tractor, Utensils, Shield, Target, ShoppingCart, Gem, Crosshair,
  Briefcase, Skull, Wrench, FlaskConical, Crown, Users, Landmark,
  Gamepad2, PlayCircle, ScrollText, Zap, AlertCircle, Trophy, ShieldAlert,
  Leaf, RefreshCw, Store, TrendingUp, Coins, BarChart3, History, ArrowUpRight, Layers
} from 'lucide-react';

function App() {
  const [activeRace, setActiveRace] = useState(0);

  const races = [
    {
      id: 1,
      name: 'ชนผิวขาว',
      image: '/race_white.png',
      description: 'คนขาว (Balance)\nStamina + 10%',
      role: 'COWBOY'
    },
    {
      id: 2,
      name: 'ชนผิวสี',
      image: '/race_black.png',
      description: 'เลือด +15%\nวิ่งช้า 15%',
      role: 'OUTLAW / BANDIT'
    },
    {
      id: 3,
      name: 'ชนเผ่า',
      image: '/race_tribal.png',
      description: 'ธนูแรงขึ้น 10%\nStamina -20%',
      role: 'NATIVE WARRIOR'
    },
    {
      id: 4,
      name: 'เอเชีย',
      image: '/race_asian.png',
      description: 'วิ่งเร็ว 10%\nเลือด - 10%',
      role: 'YAKUZA'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a0505] text-white flex flex-col items-center p-8 relative overflow-x-hidden font-kanit">
      {/* Background Image & Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src="/bg.png" alt="Background" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0505]/80 via-[#1a0505]/60 to-[#0a0000] mix-blend-multiply" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-600/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-orange-600/20 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full z-10 pt-16"
      >
        {/* Header Section */}
        <header className="mb-16 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-white/5 border border-red-500/30 px-6 py-3 rounded-full mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)]"
          >
            <Flame className="w-5 h-5 text-red-500" />
            <span className="text-sm font-bold tracking-widest text-red-200 uppercase">TEXAS RP</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-[5.5rem] font-bold mb-8 text-[#ffdac4] uppercase tracking-wide [text-shadow:4px_4px_0px_#4a0d0d,_0px_10px_20px_rgba(0,0,0,0.8)]"
          >
            แนวทางของเซิฟเวอร์
          </motion.h1>

          <motion.p
            className="text-xl md:text-[1.4rem] text-orange-50/90 font-medium max-w-4xl mx-auto leading-loose [text-shadow:1px_1px_5px_rgba(0,0,0,1)]"
          >
            เป็นแนวเซิฟเวอร์ แนวยิง แบบ Texas เน้นการสู้กันระหว่าง เเก๊งและ เเก๊ง ผสมผสาน การเอาชีวิตรอด ในแดนเถื่อน และนำแนวทางการสร้างการปกครอง รัฐให้เกิด Community
          </motion.p>
        </header>

        {/* Two-Column Info Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 mb-32">
          <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-red-950/40 to-black/60 border border-red-900/50 hover:border-red-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm shadow-xl text-left">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-red-950/80 flex items-center justify-center mb-6 border border-red-500/30 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <Star className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white tracking-wide">บรรยากาศของเมือง</h2>
              <ul className="space-y-4">
                {[
                  "การแบ่งแยกดินแดนเถื่อน และดินแดนการเมือง การปกครองของผู้คน และอำนาจ",
                  "โดยจะวางให้เนื้อเรื่อง แบ่งออกเป็น 2 แกน คือ แกนของการเมืองการพัฒนารัฐของตัวเอง และ แกน การเอาชีวิตรอด ของพื้นที่ (Thief Land)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-orange-100/70">
                    <ChevronRight className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-orange-950/40 to-black/60 border border-orange-900/50 hover:border-orange-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm shadow-xl text-left">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-orange-950/80 flex items-center justify-center mb-6 border border-orange-500/30 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <Map className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white tracking-wide">ทิศทางของเมือง</h2>
              <ul className="space-y-4">
                {[
                  "สร้าง 2 มาตราฐาน ในการขับเคลื่อนเมือง",
                  "เซิฟเวอร์เน้น มี Story การสวมบทบาท ในโซนมาตราฐานกฎ RP",
                  "เซิฟเวอร์ที่ดุเดือดในโซน เอาชีวิตรอด มาตราฐานกฎ Gameplay เน้นการยิง เอาใจคนที่ชอบการยิง",
                  "แนวทางการผสมระหว่าง แนว MMO + Extraction",
                  "การนำเอาแนวทางการเมืองมา มาเป็นระบบ การขับเคลื่อน Community"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-orange-100/70">
                    <ChevronRight className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Race Selection Section */}
        <div className="w-full mb-32">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-white tracking-wide [text-shadow:3px_3px_0px_#4a0d0d,_0px_5px_10px_rgba(0,0,0,0.8)]">
            การเลือกเผ่าพันธ์ตัวละคร
          </h2>
          <div className="flex flex-col md:flex-row gap-4 h-[600px] w-full">
            {races.map((race, index) => {
              const isActive = activeRace === index;
              return (
                <motion.div
                  key={race.id}
                  layout
                  onClick={() => setActiveRace(index)}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out border-2 ${isActive
                    ? 'border-red-600 shadow-[0_0_25px_rgba(220,38,38,0.5)] flex-[3] md:flex-[5]'
                    : 'border-red-900/20 hover:border-red-600/40 flex-1'
                    }`}
                >
                  <img
                    src={race.image}
                    alt={race.name}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ${isActive ? 'scale-105 brightness-100' : 'scale-110 grayscale-[60%] brightness-[0.35]'
                      }`}
                  />
                  <div className={`absolute inset-0 transition-all duration-500 ${isActive
                    ? 'bg-gradient-to-t from-black/95 via-black/30 to-transparent'
                    : 'bg-gradient-to-t from-black/80 via-black/50 to-black/30'
                    }`} />

                  {isActive ? (
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-left">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-4xl md:text-5xl font-black text-white mb-4 [text-shadow:2px_2px_8px_rgba(0,0,0,0.9)]"
                      >
                        {race.name}
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex items-stretch w-fit"
                      >
                        <div className="w-14 bg-red-700 flex items-center justify-center shrink-0 rounded-l-lg px-4 py-3">
                          <span className="text-2xl md:text-3xl font-black text-white">{race.id}</span>
                        </div>
                        <div className="w-[3px] bg-red-500 shrink-0" />
                        <div className="px-5 py-3">
                          <p className="text-red-500 font-black uppercase text-sm md:text-base tracking-wider">{race.role}</p>
                          <p className="text-gray-300 text-sm md:text-base whitespace-pre-line leading-snug mt-0.5">{race.description}</p>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-6">
                      <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-red-700/90 flex items-center justify-center shadow-[0_0_12px_rgba(220,38,38,0.4)]">
                        <span className="text-xl md:text-2xl font-black text-white">{race.id}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Skill Tree Section */}
        <SkillTreeSection />

        {/* Business Section */}
        <BusinessSection />

        {/* Governance Section */}
        <GovernanceSection />

        {/* Gameplay Section */}
        <GameplaySection />

        {/* Event Section */}
        <EventSection />

        {/* Ecosystem Section */}
        <EcosystemSection />

        {/* Marketplace Section */}
        <MarketplaceSection />

        {/* Legacy Systems Section */}
        <LegacySection />

      </motion.div>
    </div>
  );
}

const SkillTreeSection = () => {
  const skillTrees = [
    {
      category: "การตัดไม้ (Woodcutting)",
      icon: Axe,
      nodes: [
        { icon: Axe, title: "ผลผลิตไม้", description: "ได้รับไม้มากขึ้น 1 ชิ้น", isActive: true },
        { icon: Hammer, title: "เพิ่มพลังงาน", description: "เพิ่มพลังงานการตัดไม้ 5%", isActive: true },
        { icon: Sprout, title: "ความเร็วตัดไม้", description: "ตัดไม้เร็วขึ้น 5%", isActive: false },
        { icon: Home, title: "ช่างไม้พื้นฐาน", description: "สร้างสิ่งก่อสร้างเบื้องต้นได้", isActive: false }
      ]
    },
    {
      category: "การขุดเหมือง (Mining)",
      icon: Pickaxe,
      nodes: [
        { icon: Pickaxe, title: "ผลผลิตแร่", description: "ได้รับแร่มากขึ้น 1 ชิ้น", isActive: true },
        { icon: Shield, title: "เพิ่มพลังงาน", description: "เพิ่มพลังงานการขุดเหมือง 5%", isActive: true },
        { icon: Gem, title: "ความเร็วขุดแร่", description: "ขุดแร่เร็วขึ้น 5%", isActive: false },
        { icon: Landmark, title: "นักธรณีวิทยา", description: "มองเห็นแร่หายากได้ดีขึ้น", isActive: false }
      ]
    },
    {
      category: "การทำเกษตร (Farming)",
      icon: Sprout,
      nodes: [
        { icon: Sprout, title: "ผลผลิตเกษตร", description: "ได้รับผลผลิตมากขึ้น 1 ชิ้น", isActive: true },
        { icon: Tractor, title: "เพิ่มพลังงาน", description: "เพิ่มพลังงานการทำเกษตร 5%", isActive: true },
        { icon: Utensils, title: "ความเร็วเก็บเกี่ยว", description: "เก็บเกี่ยวเร็วขึ้น 5%", isActive: false },
        { icon: ShoppingCart, title: "เกษตรกรค้าขาย", description: "ขายผลผลิตได้ราคาสูงขึ้น 10%", isActive: false }
      ]
    }
  ];

  const specialAbilities = [
    {
      category: "มือปืน",
      icon: Crosshair,
      nodes: [
        { icon: Target, title: "คราฟกระสุนพิเศษ", description: "Revolver & Pistol", isActive: true },
        { icon: Briefcase, title: "คราฟกระเป๋า", description: "กระเป๋าสำหรับสายมือปืน", isActive: true },
        { icon: Crosshair, title: "พกปืนคู่", description: "สามารถพกปืน 2 กระบอกได้", isActive: false },
        { icon: Skull, title: "ดาเมจปืนพก", description: "+ ดาเมจ ปืนพก 3%", isActive: false }
      ]
    },
    {
      category: "นายหน้า",
      icon: Briefcase,
      nodes: [
        { icon: ShoppingCart, title: "ขายสินค้า Lv.1", description: "ขายสินค้าแพงขึ้น 2%", isActive: true },
        { icon: Briefcase, title: "คราฟกระเป๋า", description: "กระเป๋าสำหรับสายนายหน้า", isActive: true },
        { icon: Landmark, title: "ขายสินค้า Lv.2", description: "ขายสินค้าแพงขึ้น 4%", isActive: false },
        { icon: Crown, title: "ขายสินค้า Lv.3", description: "ขายสินค้าแพงขึ้น 10%", isActive: false }
      ]
    },
    {
      category: "นักล่า",
      icon: Skull,
      nodes: [
        { icon: Map, title: "ล่าสัตว์ขั้นสูง", description: "ล่าสัตว์ได้หนัง และเนื้อมากขึ้น", isActive: true },
        { icon: Briefcase, title: "คราฟกระเป๋า", description: "กระเป๋าสำหรับสาย Hunter", isActive: true },
        { icon: FlaskConical, title: "คราฟอาวุธปา", description: "คราฟอาวุธปา หรือ ระเบิดได้", isActive: false },
        { icon: Target, title: "Melee เพิ่ม", description: "+ อาวุธ Melee 5%", isActive: false }
      ]
    },
    {
      category: "ช่างทำอาวุธ",
      icon: Hammer,
      nodes: [
        { icon: Wrench, title: "เครื่องมือขั้นสูง", description: "ปลดล็อคเครื่องมือขั้นสูงบางอย่าง", isActive: true },
        { icon: Briefcase, title: "คราฟกระเป๋า", description: "กระเป๋าสำหรับสาย BlackSmith", isActive: true },
        { icon: Gem, title: "ขายทอง", description: "ขายทองได้แพงขึ้น 3%", isActive: false },
        { icon: Hammer, title: "คราฟอาวุธ", description: "+ 5% คราฟอาวุธทุกชนิด 10%", isActive: false }
      ]
    },
    {
      category: "หมอยาขั้นสูง",
      icon: FlaskConical,
      nodes: [
        { icon: FlaskConical, title: "คราฟยาขั้นสูง", description: "คราฟยาขั้นสูงได้", isActive: true },
        { icon: Briefcase, title: "คราฟกระเป๋าหมอ", description: "คราฟกระเป๋าหมอได้", isActive: true },
        { icon: Flame, title: "ยาวิ่งเร็ว", description: "คราฟยาวิ่งเร็วได้ 5 วินาที", isActive: false },
        { icon: Shield, title: "ยาอึด", description: "คราฟยาอมตะ 2 วินาที", isActive: false }
      ]
    }
  ];

  return (
    <div className="w-full mb-32 relative text-left">
      <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-white [text-shadow:3px_3px_0px_#4a0d0d,_0px_5px_15px_rgba(0,0,0,0.8)] uppercase">ระบบทักษะการเอาชีวิตรอด</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
        {skillTrees.map((tree, idx) => (
          <div key={idx} className="bg-black/40 p-8 rounded-3xl border border-red-900/30 backdrop-blur-md relative overflow-hidden group hover:border-red-500/50 transition-all shadow-xl">
            <div className="flex items-center gap-4 mb-8 border-b border-orange-500/30 pb-4">
              <div className="p-3 bg-orange-950/80 rounded-xl text-orange-400 border border-orange-500/30"><tree.icon className="w-6 h-6" /></div>
              <h3 className="text-2xl font-bold text-white">{tree.category}</h3>
            </div>
            <div className="flex flex-col items-center">
              {tree.nodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <div key={i} className="w-full flex flex-col items-center">
                    {i > 0 && (
                      <div className={`w-[3px] h-6 rounded-full ${node.isActive ? 'bg-red-500' : 'bg-red-500/30'}`} />
                    )}
                    <div className={`w-full flex items-center gap-5 p-4 rounded-2xl border transition-all ${node.isActive ? 'border-red-500 bg-red-500/10 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'border-white/10 opacity-70'}`}>
                      <div className="p-3 bg-black/50 rounded-xl text-red-400 border border-red-500/20"><Icon className="w-6 h-6" /></div>
                      <div>
                        <h4 className="font-bold text-white text-base">{node.title}</h4>
                        <p className="text-sm text-orange-100/60 leading-tight">{node.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Convergence Point */}
      <div className="flex flex-col items-center justify-center mb-16 relative">
        <div className="w-[3px] h-10 bg-gradient-to-b from-red-600 to-orange-500 rounded-full" />
        <div className="bg-[#2a0808] border-2 border-orange-500 px-10 py-6 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.4)]">
          <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-[0.2em]">เลือกสายความสามารถพิเศษ</h3>
        </div>
        <div className="w-[3px] h-10 bg-gradient-to-b from-orange-500 to-red-600 rounded-full" />
      </div>

      {/* 5 Branches of Special Abilities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 w-full max-w-[1400px] mx-auto px-4">
        {specialAbilities.map((tree, idx) => (
          <div key={idx} className="bg-gradient-to-b from-black/60 to-red-950/20 p-5 rounded-2xl border border-orange-900/30 backdrop-blur-sm group hover:border-orange-500/50 transition-all flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-orange-950/80 border-2 border-orange-500/50 flex items-center justify-center mb-2 text-orange-400 group-hover:scale-110 transition-transform">
              <tree.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-orange-500/30 pb-2 w-full text-center">{tree.category}</h3>
            <div className="flex flex-col items-center w-full">
              {tree.nodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <div key={i} className="w-full flex flex-col items-center">
                    {i > 0 && (
                      <div className={`w-[2px] h-4 rounded-full ${node.isActive ? 'bg-orange-500' : 'bg-orange-500/30'}`} />
                    )}
                    <div className={`w-full flex flex-col items-center text-center p-3 rounded-xl border transition-all ${node.isActive ? 'border-orange-500 bg-orange-500/10' : 'border-white/10 opacity-65'}`}>
                      <Icon className="w-5 h-5 text-orange-400 mb-2" />
                      <h4 className="font-bold text-white text-xs mb-1">{node.title}</h4>
                      <p className="text-[10px] text-orange-100/60 leading-tight">{node.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BusinessSection = () => {
  return (
    <div className="w-full mb-32 text-left">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="flex items-center gap-6 mb-4">
          <Landmark className="w-16 h-16 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
          <h2 className="text-5xl md:text-7xl font-black text-white [text-shadow:4px_4px_0px_#4a0d0d] uppercase">โครงสร้างระบบ ธุรกิจ</h2>
        </div>
        <div className="w-32 h-2 bg-yellow-500 rounded-full mb-8" />
        <p className="max-w-4xl text-orange-100/80 text-xl md:text-2xl font-medium leading-relaxed italic border-x-2 border-yellow-500/30 px-8">
          "ระบบธุรกิจจะออกแบบมาให้เป็นจุด Community ที่ทุกคนเข้าถึง พร้อมทั้งส่งเสริมให้ผู้เล่นเกิดการสร้าง Story ต่างๆ ภายในเมือง ซึ่งแต่ละธุรกิจจะไม่ซ้ำกัน และจะมีรูปแบบเฉพาะตัวของมันเอง"
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-1 bg-red-600" />
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">แนะนำธุรกิจ: Saloon & Casino</h3>
        </div>

        {/* Intro Highlight */}
        <div className="relative group overflow-hidden rounded-[3rem] border-2 border-orange-900/50 bg-black/40 backdrop-blur-lg mb-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-stretch">
            <div className="w-full lg:w-[45%] h-[400px] lg:h-auto relative overflow-hidden">
              <img src="/cowboy_businessman.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Businessman" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60 hidden lg:block" />
            </div>
            <div className="w-full lg:w-[55%] p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-yellow-500" />
                <p className="text-yellow-500 font-bold uppercase tracking-widest text-lg">Unified Business Model</p>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-snug">
                โมเดลธุรกิจแบบบูรณาการ: อาหาร เครื่องดื่ม และการเสี่ยงโชคครบวงจรในที่เดียว
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 rounded-full bg-yellow-500 text-black font-black uppercase text-sm">Community Hub</div>
                <div className="px-6 py-3 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 font-bold uppercase text-sm">High Risk High Reward</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Branches Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Branch 1: Saloon Service */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border-2 border-red-900/30 bg-black/40 backdrop-blur-md hover:border-red-500/50 transition-all shadow-xl">
            <div className="relative h-72 overflow-hidden">
              <img src="/saloon_cook.png" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" alt="Saloon" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-8 flex items-center gap-4">
                <div className="p-3 bg-red-600 rounded-xl text-white shadow-lg"><Utensils className="w-8 h-8" /></div>
                <h4 className="text-3xl font-black text-white uppercase tracking-wider">ส่วนของ Saloon</h4>
              </div>
            </div>
            <div className="p-8">
              <p className="text-orange-100/70 text-lg leading-relaxed mb-6 font-medium italic border-l-4 border-red-600 pl-6">
                "เน้นการทำอาหาร และการสร้างพื้นที่ส่วนกลาง สำหรับผู้คนในเมือง ให้มาพบปะพูดคุยและสร้างความสัมพันธ์"
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> แหล่งรวมข่าวสารและภารกิจ</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> บริการอาหารและเครื่องดื่มเพิ่มบัฟ</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> พื้นที่ปลอดภัยสำหรับการเจรจา</li>
              </ul>
            </div>
          </div>

          {/* Branch 2: Casino Operation */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border-2 border-yellow-900/30 bg-black/40 backdrop-blur-md hover:border-yellow-500/50 transition-all shadow-xl">
            <div className="relative h-72 overflow-hidden">
              <img src="/casino_interior.png" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" alt="Casino" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-8 flex items-center gap-4">
                <div className="p-3 bg-yellow-600 rounded-xl text-white shadow-lg"><Gem className="w-8 h-8" /></div>
                <h4 className="text-3xl font-black text-white uppercase tracking-wider">ส่วนของ Casino</h4>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <h5 className="text-yellow-500 font-bold uppercase text-sm mb-2 tracking-widest">ระบบต้นทุนการดำเนินงาน</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Casino จะทำงานได้เมื่อมี <span className="text-white font-bold">ต้นทุนสำรอง</span> เช่น ลงทุน 100,000$ หากเงินทุนหมด ระบบจะหยุดทำงานทันที
                  </p>
                </div>

                <div className="pt-4 border-t border-yellow-900/20">
                  <h5 className="text-yellow-500 font-bold uppercase text-sm mb-3 tracking-widest">ทางเลือกการเสียภาษี</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-900/20 p-4 rounded-2xl border border-green-500/20">
                      <p className="text-green-400 font-bold text-xs uppercase mb-1">ถูกกฎหมาย</p>
                      <p className="text-white text-sm">จ่าย 15% VAT ให้รัฐบาล (Lawman)</p>
                    </div>
                    <div className="bg-red-900/20 p-4 rounded-2xl border border-red-500/20">
                      <p className="text-red-400 font-bold text-xs uppercase mb-1">ผิดกฎหมาย</p>
                      <p className="text-white text-sm">ไม่ต้องจ่ายภาษี (ความเสี่ยงสูง)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GovernanceSection = () => {
  return (
    <div className="w-full mb-32 text-left">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-white [text-shadow:4px_4px_0px_#4a0d0d] uppercase mb-4 text-center">ระบบการปกครองรัฐ</h2>
        <p className="text-orange-400 font-bold tracking-widest uppercase">3 เสาหลักแห่งอำนาจและการปกครอง</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="group relative p-10 rounded-[2.5rem] bg-gradient-to-b from-yellow-950/40 to-black/80 border-2 border-yellow-500/30 hover:border-yellow-500 transition-all duration-500 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
          <div className="w-20 h-20 rounded-3xl bg-yellow-500 flex items-center justify-center mb-8 border-4 border-yellow-300/30 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]">
            <Crown className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            ประธานณาธิปดี รัฐ
          </h3>
          <p className="text-orange-100/70 text-lg leading-loose font-medium">
            การออกกฎหมาย บังคับใช้ในรัฐของตัวเอง การเก็บภาษี รัฐ เพื่อไปพัฒนา รัฐ
          </p>
          <div className="mt-8 flex items-center gap-2 text-yellow-500 text-sm font-black uppercase">
            <Landmark className="w-5 h-5" />
            <span>LEGISLATION & TAXATION</span>
          </div>
        </div>

        <div className="group relative p-10 rounded-[2.5rem] bg-gradient-to-b from-blue-950/40 to-black/80 border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
          <div className="w-20 h-20 rounded-3xl bg-blue-500 flex items-center justify-center mb-8 border-4 border-blue-300/30 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            <Shield className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            Lawman
          </h3>
          <p className="text-orange-100/70 text-lg leading-loose font-medium">
            มีหน้าที่ปกป้องรัฐ จากอาชญากรรม โดย Lawman จะขึ้นตรงต่อ รัฐของตัวเองเท่านั้น ไม่จำเป็นต้องรับคำสั่งจากผู้นำรัฐอื่น
          </p>
          <div className="mt-8 flex items-center gap-2 text-blue-400 text-sm font-black uppercase">
            <Shield className="w-5 h-5" />
            <span>LAW ENFORCEMENT</span>
          </div>
        </div>

        <div className="group relative p-10 rounded-[2.5rem] bg-gradient-to-b from-green-950/40 to-black/80 border-2 border-green-500/30 hover:border-green-500 transition-all duration-500 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
          <div className="w-20 h-20 rounded-3xl bg-green-500 flex items-center justify-center mb-8 border-4 border-green-300/30 text-black shadow-[0_0_20px_rgba(34,197,94,0.4)]">
            <Users className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            ประชาชน
          </h3>
          <p className="text-orange-100/70 text-lg leading-loose font-medium">
            ตัวขับเคลื่อน เศรษฐกิจ ของเมือง และ เป็นส่วนหนึ่งของการ พัฒนา และรักษารัฐของตัวเองให้เติบโต
          </p>
          <div className="mt-8 flex items-center gap-2 text-green-400 text-sm font-black uppercase">
            <Users className="w-5 h-5" />
            <span>ECONOMIC DRIVER</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventSection = () => {
  return (
    <div className="w-full mb-40 text-left">
      <div className="flex flex-col items-center mb-16 px-4">
        <div className="flex items-center gap-6 mb-6">
          <Trophy className="w-16 h-16 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
          <h2 className="text-5xl md:text-7xl font-black text-white [text-shadow:4px_4px_0px_#4a3a05] uppercase">World Events</h2>
        </div>
        <div className="w-32 h-2 bg-yellow-500 rounded-full mb-8" />
        <p className="max-w-4xl text-center text-orange-100/60 text-xl font-medium leading-relaxed italic">
          "ออกแบบให้ครอบคลุมทั้งผู้เล่นสาย <span className="text-red-500 font-bold">Gameplay</span> และผู้เล่นฝั่ง <span className="text-blue-500 font-bold">State</span> เพื่อให้ทุกคนสามารถ Enjoy กับกิจกรรมในรัฐได้อย่างเท่าเทียม"
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Category: Combat Events (Gameplay Players) */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-red-500/30" />
          <span className="text-red-500 font-black uppercase tracking-[0.3em] text-sm flex items-center gap-2">
            <Skull className="w-4 h-4" /> Combat & Gameplay Events
          </span>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-red-500/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Extraction Mode */}
          <motion.div whileHover={{ y: -10 }} className="relative group overflow-hidden rounded-[3rem] border-2 border-yellow-500/30 bg-gradient-to-br from-yellow-950/20 to-black shadow-2xl p-1">
            <div className="bg-black/80 rounded-[2.9rem] p-10 md:p-12 h-full flex flex-col relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
                  <Map className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase">ระบบ Extraction</h3>
              </div>
              <div className="space-y-6 text-orange-100/70 text-lg leading-relaxed font-medium">
                <p>
                  <span className="text-yellow-500 font-bold uppercase">New Mode:</span> คือการนำ ปืน ยา เข้าไปใน Map Guama จัดปาร์ตี้สูงสุด 4 คน จัดเป็น 6 ทีม มีเวลาจำกัด 30 นาทีต่อรอบ เพื่อให้ผู้เล่นเข้าไปหาของในนั้น หาของมูลค่าสูงเพื่อไปขาย Economy และหาของ Rare ต่างๆ เพื่อต่อยอดในอาชีพนั้น
                </p>
                <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 font-bold italic">
                  "ถ้าหากตาย ของที่ฟาร์มได้จะตกและคุณสามารถโดนขโมยของที่ฟาร์มจากพื้นที่ในนั้นได้ และออกมาตัวเปล่า"
                </div>
              </div>
            </div>
          </motion.div>

          {/* Armory Heist */}
          <motion.div whileHover={{ y: -10 }} className="relative group overflow-hidden rounded-[3rem] border-2 border-red-500/30 bg-gradient-to-br from-red-950/20 to-black shadow-2xl p-1">
            <div className="bg-black/80 rounded-[2.9rem] p-10 md:p-12 h-full flex flex-col relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center border border-red-500/30">
                  <ShieldAlert className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase">ปล้นคลังอาวุธ</h3>
              </div>
              <div className="space-y-6 text-orange-100/70 text-lg leading-relaxed font-medium">
                <p>
                  ออกแบบมาเพื่อให้ผู้เล่นแย่ง กล่องสินค้าอาวุธ สำหรับกล่องที่ได้ไป จะสุ่ม ปืน Tier อาวุธของ Patch นั้นๆ
                </p>
                <div className="pt-4 border-t border-red-500/20">
                  <div className="flex items-center gap-3 text-red-500 font-black uppercase text-xs tracking-widest animate-pulse">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    Randomized Tier Weapon Rewards
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Category: Community Events (State Players) */}
        <div className="flex items-center gap-4 pt-12 mb-8">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-blue-500/30" />
          <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-sm flex items-center gap-2">
            <Users className="w-4 h-4" /> State & Community Events
          </span>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-blue-500/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Horse Racing */}
          <motion.div whileHover={{ y: -10 }} className="relative group overflow-hidden rounded-[3rem] border-2 border-blue-500/30 bg-gradient-to-br from-blue-950/20 to-black shadow-2xl p-1">
            <div className="bg-black/80 rounded-[2.9rem] p-10 md:p-12 h-full flex flex-col relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <Star className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase">แข่งม้าระหว่าง State</h3>
              </div>
              <p className="text-orange-100/70 text-lg leading-relaxed">
                การประชันความเร็วและความผูกพันระหว่างผู้เล่นกับพาหนะคู่ใจ ชิงเกียรติยศและรางวัลใหญ่ให้กับรัฐของคุณ
              </p>
            </div>
          </motion.div>

          {/* Boxing Tournament */}
          <motion.div whileHover={{ y: -10 }} className="relative group overflow-hidden rounded-[3rem] border-2 border-purple-500/30 bg-gradient-to-br from-purple-950/20 to-black shadow-2xl p-1">
            <div className="bg-black/80 rounded-[2.9rem] p-10 md:p-12 h-full flex flex-col relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                  <Target className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase">ศึกมวยตัวแทนรัฐ</h3>
              </div>
              <p className="text-orange-100/70 text-lg leading-relaxed">
                การต่อสู้ด้วยพละกำลังและชั้นเชิงของตัวแทนในแต่ละรัฐ เพื่อพิสูจน์ว่ารัฐใดคือหนึ่งในด้านความแข็งแกร่ง
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const LegacySection = () => {
  return (
    <div className="w-full mb-40 text-left">
      <div className="flex flex-col items-center mb-16 px-4">
        <div className="flex items-center gap-6 mb-6">
          <History className="w-16 h-16 text-slate-400 drop-shadow-[0_0_10px_rgba(148,163,184,0.5)]" />
          <h2 className="text-5xl md:text-7xl font-black text-white [text-shadow:4px_4px_0px_#1e293b] uppercase">ระบบเดิม ที่นำไปต่อยอด</h2>
        </div>
        <div className="w-32 h-2 bg-slate-600 rounded-full mb-8" />
        <p className="max-w-4xl text-center text-slate-400 text-xl font-medium leading-relaxed italic">
          "การรักษารากฐานที่มั่นคง พร้อมเสริมเติมแต่งด้วยนวัตกรรมใหม่ เพื่อประสบการณ์ที่ลึกซึ้งและยั่งยืนกว่าเดิม"
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="relative p-1 rounded-[3.5rem] bg-gradient-to-br from-slate-700/30 via-slate-900/50 to-black shadow-2xl">
          <div className="bg-black/90 rounded-[3.4rem] p-10 md:p-16 border-4 border-slate-500/10 overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-500/5 blur-[120px] rounded-full -mr-40 -mt-40" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-slate-500/10 flex items-center justify-center border border-slate-500/20">
                    <Layers className="w-7 h-7 text-slate-400" />
                  </div>
                  <span className="text-slate-400 font-black uppercase tracking-[0.2em] text-sm">System Evolution</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-8">
                  การผสมผสานระหว่าง<br/>
                  <span className="text-slate-400">ความคุ้นเคย</span> และ <span className="text-white">ความสดใหม่</span>
                </h3>
                
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium mb-10">
                  เราไม่เพียงแค่นำระบบเดิมกลับมา แต่เรานำมาขัดเกลาและขยายขีดความสามารถให้ตอบโจทย์การเล่นในปัจจุบันมากยิ่งขึ้น 
                  ทุกฟีเจอร์ที่คุณเคยรักจะถูกยกระดับสู่มาตรฐานใหม่ของ Texas RP
                </p>

                <div className="flex flex-wrap gap-4">
                  {["ระบบอาชีพ", "ระบบพาหนะ", "ระบบที่พักอาศัย", "ระบบปฏิสัมพันธ์"].map((tag, i) => (
                    <div key={i} className="px-5 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-bold">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-slate-500/10 blur-xl rounded-[4rem] group-hover:bg-slate-500/20 transition-all duration-700" />
                <div className="relative p-8 rounded-[3rem] border-2 border-slate-500/20 bg-black/40 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-xl font-black text-white uppercase tracking-widest">Expansion Roadmap</h4>
                    <ArrowUpRight className="w-6 h-6 text-slate-500" />
                  </div>
                  
                  <div className="space-y-8">
                    {[
                      { title: "Refined Mechanics", desc: "ปรับปรุงความสมูทและความลึกของระบบดั้งเดิม" },
                      { title: "Seamless Integration", desc: "เชื่อมต่อระบบเดิมเข้ากับ Ecosystem ใหม่" },
                      { title: "Modern Optimization", desc: "เพิ่มประสิทธิภาพการทำงานให้รวดเร็วและเสถียร" }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-5">
                        <div className="w-10 h-10 rounded-xl bg-slate-500/10 flex items-center justify-center shrink-0 border border-slate-500/20 text-slate-400 font-black text-xs">
                          0{i + 1}
                        </div>
                        <div>
                          <h5 className="text-white font-bold mb-1">{item.title}</h5>
                          <p className="text-slate-500 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

const EcosystemSection = () => {
  return (
    <div className="w-full mb-40 text-left">
      <div className="flex flex-col items-center mb-24">
        <div className="flex items-center gap-6 mb-4">
          <Leaf className="w-16 h-16 text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          <h2 className="text-5xl md:text-7xl font-black text-white [text-shadow:4px_4px_0px_#1a2e05] uppercase text-center">Economy Ecosystem</h2>
        </div>
        <div className="w-32 h-2 bg-green-600 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">

          {/* Column 1: Economy Central */}
          <div className="flex flex-col items-center gap-8">
            <motion.div whileHover={{ y: -5 }} className="w-full p-6 rounded-[2rem] bg-gradient-to-br from-green-500/20 to-black border-2 border-green-500/30 text-center shadow-xl">
              <span className="text-green-500 font-black text-xs uppercase tracking-widest mb-1 block">01</span>
              <h3 className="text-xl font-black text-white uppercase">ECONOMY กลไกตลาดกลาง</h3>
            </motion.div>
            <ChevronRight className="w-8 h-8 text-green-500/30 rotate-90" />
            <motion.div className="w-full p-8 rounded-[2.5rem] bg-black border-2 border-green-500/50 text-center relative overflow-hidden h-full">
              <h4 className="text-lg font-black text-white uppercase leading-tight">ทุกอาชีพ มีจุดขายที่เดียวกัน คือจุด Economy กลาง</h4>
            </motion.div>
          </div>

          {/* Column 2: Global Market */}
          <div className="flex flex-col items-center gap-8">
            <motion.div whileHover={{ y: -5 }} className="w-full p-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-black border-2 border-blue-500/30 text-center shadow-xl">
              <span className="text-blue-500 font-black text-xs uppercase tracking-widest mb-1 block">02</span>
              <h3 className="text-xl font-black text-white uppercase">แบบ ตลาดโลก</h3>
            </motion.div>
            <ChevronRight className="w-8 h-8 text-blue-500/30 rotate-90" />
            <motion.div className="w-full p-8 rounded-[2.5rem] bg-black border-2 border-blue-500/50 text-center relative overflow-hidden h-full">
              <h4 className="text-lg font-black text-white uppercase leading-tight">ออกแบบมาเพื่อให้ในแต่ละอาชีพ มาวางสินค้าของตัวเองสู่ตลาด PLAYER</h4>
            </motion.div>
          </div>

          {/* Column 3: Player to Player */}
          <div className="flex flex-col items-center gap-8">
            <motion.div whileHover={{ y: -5 }} className="w-full p-6 rounded-[2rem] bg-gradient-to-br from-orange-500/20 to-black border-2 border-orange-500/30 text-center shadow-xl">
              <span className="text-orange-500 font-black text-xs uppercase tracking-widest mb-1 block">03</span>
              <h3 className="text-xl font-black text-white uppercase">แบบ Player to Player</h3>
            </motion.div>
            <ChevronRight className="w-8 h-8 text-orange-500/30 rotate-90" />
            <motion.div className="w-full p-8 rounded-[2.5rem] bg-black border-2 border-orange-500/50 text-center relative overflow-hidden h-full">
              <h4 className="text-lg font-black text-white uppercase leading-tight">อิสระในการแลกเปลี่ยน สร้าง Story และความสัมพันธ์ในชุมชน</h4>
            </motion.div>
          </div>

        </div>

        {/* Convergence SVG Arrows */}
        <div className="relative h-32 w-full hidden md:block">
          <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M 166 0 Q 166 50, 500 100" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="5 5" />
            <path d="M 500 0 L 500 100" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="5 5" />
            <path d="M 834 0 Q 834 50, 500 100" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="5 5" />
          </svg>
        </div>

        {/* Mobile Connector */}
        <div className="md:hidden flex flex-col items-center gap-4 py-8">
          <ChevronRight className="w-8 h-8 text-white/20 rotate-90" />
        </div>

        {/* Final Convergence Point: Landmark */}
        <div className="flex flex-col items-center relative">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-2xl p-1 rounded-[3rem] bg-gradient-to-br from-yellow-400 via-yellow-600 to-yellow-900 shadow-[0_0_70px_rgba(234,179,8,0.2)] z-10"
          >
            <div className="bg-black rounded-[2.9rem] p-10 md:p-12 border-4 border-yellow-500/30 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent pointer-events-none" />
              <Landmark className="w-16 h-16 text-yellow-500 mb-6 mx-auto animate-pulse" />
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 [text-shadow:0_0_20px_rgba(234,179,8,0.5)]">
                LANDMARK
              </h3>
              <div className="w-48 h-1 bg-yellow-500/50 mx-auto rounded-full mb-6" />
              <p className="text-orange-100/80 text-xl md:text-2xl font-black max-w-lg mx-auto leading-tight italic">
                "เป็นโซนสำหรับ การซื้อขาย, การทำ Community จะมีอยู่จุดเดียวในเซิร์ฟเวอร์"
              </p>
            </div>
          </motion.div>

          {/* Branches below Landmark */}
          <div className="mt-12 flex gap-12 md:gap-32 relative">
            {/* SVG Connector for branches */}
            <div className="absolute top-[-3rem] left-1/2 -translate-x-1/2 w-full h-12 pointer-events-none hidden md:block">
              <svg className="w-full h-full" viewBox="0 0 400 50">
                <path d="M 200 0 Q 200 25, 50 50" stroke="#94a3b8" strokeWidth="2" fill="none" opacity="0.3" />
                <path d="M 200 0 Q 200 25, 350 50" stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.3" />
              </svg>
            </div>

            {/* Silver/Money Branch */}
            <motion.div
              whileHover={{ y: 5 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-24 h-24 rounded-full bg-slate-500/10 border-4 border-slate-400/30 flex items-center justify-center shadow-lg">
                <Coins className="w-10 h-10 text-slate-300" />
              </div>
              <span className="text-2xl font-black text-slate-300 uppercase tracking-widest">เงิน</span>
            </motion.div>

            {/* Gold Branch */}
            <motion.div
              whileHover={{ y: 5 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-24 h-24 rounded-full bg-yellow-500/10 border-4 border-yellow-500/30 flex items-center justify-center shadow-lg">
                <div className="relative">
                  <Coins className="w-10 h-10 text-yellow-500" />
                  <Zap className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 animate-pulse" />
                </div>
              </div>
              <span className="text-2xl font-black text-yellow-500 uppercase tracking-widest">ทอง</span>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

const MarketplaceSection = () => {
  const features = [
    { title: "ตลาด ประมูลสินค้า ประจำวัน", desc: "มีตลาด ประมูลสินค้าให้ผู้เล่นมาประมูลสินค้า ที่เอาไว้ใช้ประมูลสินค้าระหว่าง Player to Player", icon: BarChart3 },
    { title: "ตลาดมืด", icon: Skull, desc: "จะสุ่มพื้นที่ ตลาดมืด มา ในแต่ละรอบสินค้าจะไม่เหมือนกัน และมีสินค้าจำกัด" }
  ];

  return (
    <div className="w-full mb-40 text-left">
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-6 mb-4">
          <Store className="w-16 h-16 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
          <h2 className="text-5xl md:text-7xl font-black text-white [text-shadow:4px_4px_0px_#4a3a05] uppercase">ตลาดแลกเปลี่ยนสินค้า</h2>
        </div>
        <div className="w-32 h-2 bg-yellow-500 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="p-12 rounded-[3rem] bg-black/40 backdrop-blur-xl border-2 border-yellow-500/20 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-yellow-500" />
            <span className="text-yellow-500 font-black uppercase tracking-widest text-sm">Trading Post</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase leading-tight">
            จุดสำหรับการแลกเปลี่ยนสิ่งของ<br />ทั้งถูกกฎหมายและผิดกฎหมาย
          </h3>
          <div className="space-y-6 text-orange-100/60 text-lg leading-relaxed font-medium">
            <p>
              <span className="text-green-500 font-bold">ในรูปแบบถูกกฎหมาย:</span> ออกแบบมาเพื่อแลกเปลี่ยนสินค้าที่ได้มาจากงานที่ออกแบบมาให้ใช้แลกของ หรือ Event มาเป็นของที่มีมูลค่าสูง
            </p>
            <p>
              <span className="text-red-500 font-bold">ในรูปแบบผิดกฎหมาย:</span> ออกแบบมาเพื่อแลกสินค้าจากเงินผิดกฎหมายต่างๆ เช่นการขุดหลุมศพในเขตโซนที่มีการใช้กฎหมายที่อยู่ในเขต RP จะได้เงินผิดกฎหมายมาเพื่อใช้แลกชิ้นส่วนอาวุธปืนหรืออื่นๆ ได้
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/30 text-yellow-500 text-xs font-black uppercase">P2P Trading</div>
            <div className="px-4 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/30 text-yellow-500 text-xs font-black uppercase">Global Auction</div>
          </div>
        </div>

        <div className="space-y-6">
          {features.map((f, i) => (
            <div key={i} className="group p-8 rounded-[2rem] bg-gradient-to-r from-yellow-950/20 to-black/60 border border-white/5 hover:border-yellow-500/30 transition-all duration-500 flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 group-hover:bg-yellow-500 transition-colors">
                <f.icon className="w-7 h-7 text-yellow-500 group-hover:text-black transition-colors" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white uppercase tracking-wide mb-1">{f.title}</h4>
                <p className="text-orange-100/40 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const GameplaySection = () => {
  const topics = [
    {
      title: "การทำอาวุธ",
      icon: Hammer,
      color: "from-orange-500 to-orange-600",
      desc: "ออกแบบมาให้ 'หาของง่ายตีของยาก' เพราะผมมองว่า ของหายาก ทำให้คนรู้สึกว่าการอยู่ในเซิร์ฟเวอร์ยากเกินไป แต่จะไปจำกัด % การตีปืนของปืนในแต่ละ Tier แทน"
    },
    {
      title: "ระดับปืน ตามขอบเขตโซนต่างๆ",
      icon: Target,
      color: "from-yellow-500 to-yellow-600",
      desc: "การกำหนดขอบเขตการใช้อาวุธในโซนต่างๆ ที่กำหนดให้ผู้เล่นสามารถเลือกได้ว่า ตอนนี้ระดับของตัวเองอยู่ในระดับโซนไหน อาวุธที่ผู้เล่นจะต้องสู้ก็จะแตกต่างกันไปในแต่ละโซน"
    },
    {
      title: "ระบบการทำงานผิดกฎหมาย",
      icon: Skull,
      color: "from-red-500 to-red-600",
      desc: "หากมีการกระทำใดๆ เช่น การขุดหลุมศพ เพื่อหาของทำอาวุธ จะให้มีแจ้งเตือนเพื่อผู้เล่นที่อยู่ในโซน เพิ่มความต้องการสู้ของผู้เล่นมากขึ้น และทุกครั้งที่มีผู้เล่นทำงานผิดกฎหมายจุดนั้นๆ ไปแล้ว จะนับถอยหลัง 30 นาที สำหรับเวลาทั่วไป (3.00 น. ถึง 17.00 น.) และจะปรับจาก 30 มาเป็น 20 ในเวลา Peak Time (18.00 น. ถึง 2.00 น.)"
    },
    {
      title: "กฎการเล่น",
      icon: ScrollText,
      color: "from-purple-500 to-purple-600",
      desc: "ออกแบบมาให้ใช้กฎเฉพาะในเขตนั้นๆ แยกไปเลย โดยไม่นับรวมกับกฎ RP เพื่อตัดปัญหาการนำกฎบังคับข้ออื่นๆ มารวมกันและเกิดปัญหาดราม่า ทำให้ผู้เล่นคนอื่นได้รับผลกระทบ และให้ผู้เล่นที่ชอบการยิงในรูปแบบ Gameplay ลื่นไหล ดังนั้นการปล่อยอิสระให้ผู้เล่นในระดับที่ควบคุมได้ จะช่วยให้ผู้เล่นเล่นแล้วมีความสุขในระยะยาว"
    },
  ];

  return (
    <div className="w-full mb-40 text-left">
      <div className="flex flex-col items-center mb-24">
        <div className="flex items-center gap-6 mb-4">
          <Gamepad2 className="w-16 h-16 text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
          <h2 className="text-5xl md:text-7xl font-black text-white [text-shadow:4px_4px_0px_#4a0d0d] uppercase text-center">Gameplay System</h2>
        </div>
        <div className="w-32 h-2 bg-red-600 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-20">

          {/* Left Side: Central Hub (Thief Land) */}
          <div className="lg:w-1/3 flex flex-col justify-center items-center lg:items-end relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative p-1 rounded-[3rem] bg-gradient-to-br from-red-600 to-red-900 shadow-[0_0_50px_rgba(220,38,38,0.3)] z-20"
            >
              <div className="bg-black rounded-[2.9rem] px-10 py-16 border-4 border-red-500/30 flex flex-col items-center text-center max-w-[400px] relative overflow-hidden group">
                {/* Battle-Worn Skull Icon Container */}
                <div className="relative mb-6">
                  <motion.div
                    animate={{ 
                      filter: ["drop-shadow(0 0 10px #ef4444)", "drop-shadow(0 0 20px #ef4444)", "drop-shadow(0 0 10px #ef4444)"]
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Skull className="w-24 h-24 text-red-600" />
                  </motion.div>
                  
                  {/* Bullet Hole */}
                  <div className="absolute top-4 right-8 w-3 h-3 bg-black rounded-full border border-red-900 shadow-[inset_0_0_5px_rgba(255,0,0,0.5)]" />
                  
                  {/* Scar (Jagged Line) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 24 24" fill="none">
                    <path d="M 8 6 L 16 18" stroke="#4a0d0d" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                    <path d="M 7.5 6.5 L 15.5 17.5" stroke="#ef4444" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" />
                  </svg>

                  {/* Blind Eye (Eye Patch/X) */}
                  <div className="absolute top-[38px] left-[26px] w-5 h-5 bg-black rounded-full flex items-center justify-center border border-red-950">
                    <div className="w-3 h-0.5 bg-red-900 rotate-45 absolute" />
                    <div className="w-3 h-0.5 bg-red-900 -rotate-45 absolute" />
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-6">
                  โซน <span className="text-red-500">Thief Land</span>
                </h3>
                <div className="space-y-4 text-orange-100/70 text-lg font-medium leading-relaxed">
                  <p>
                    (โซน Thief Land) ออกแบบมาทั้งหมด 3 โซน แต่ละโซนจะปล่อยตาม Patch ต่างๆ เพื่อเป็นจุดฟาร์มหาของไปทำอาวุธ
                  </p>
                  <p className="text-red-400 font-bold italic underline decoration-red-500/30 underline-offset-8">
                    "ออกแบบมาให้กลุ่มแก๊งได้แย่งชิงของกัน ในโซนที่มีทรัพยากรจำกัด เพื่ออยู่รอดในโลกที่มีแต่การแข่งขันและแย่งชิง"
                  </p>
                </div>
                <div className="mt-8 px-4 py-2 bg-red-600/20 rounded-full border border-red-500/30">
                  <span className="text-red-500 font-bold text-xs uppercase tracking-widest">Outlaw Farming Zone</span>
                </div>
              </div>
            </motion.div>

            {/* Horizontal Connectors Background (Desktop) */}
            <div className="absolute top-1/2 right-[-5rem] w-20 h-0.5 bg-gradient-to-r from-red-600 to-transparent hidden lg:block" />
          </div>

          {/* Right Side: Related Topics */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Visual Flow Lines (Desktop Only) */}
            <div className="absolute top-1/2 left-[-5rem] w-20 h-full -translate-y-1/2 pointer-events-none hidden lg:block">
              <svg className="w-full h-full" viewBox="0 0 100 400" preserveAspectRatio="none">
                {/* Connection to Topic 1 */}
                <path d="M 0 200 C 50 200, 50 60, 100 60" stroke="#ef4444" strokeWidth="3" fill="none" strokeDasharray="8 4" opacity="0.6">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                </path>
                {/* Connection to Topic 2 */}
                <path d="M 0 200 C 50 200, 50 140, 100 140" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="6 4" opacity="0.4">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
                </path>
                {/* Connection to Topic 3 */}
                <path d="M 0 200 C 50 200, 50 260, 100 260" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="6 4" opacity="0.4">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4s" repeatCount="indefinite" />
                </path>
                {/* Connection to Topic 4 */}
                <path d="M 0 200 C 50 200, 50 340, 100 340" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="6 4" opacity="0.4">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="5s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>

            {topics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`relative overflow-hidden rounded-[2.5rem] bg-black/40 backdrop-blur-md border-2 ${i === 0 ? 'border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.2)]' : 'border-white/5'} group-hover:border-red-500/50 transition-all duration-500 p-8 shadow-xl flex items-start gap-6`}>
                  <div className={`w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <topic.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-xl font-black text-white uppercase tracking-wider mb-2 group-hover:text-red-500 transition-colors">{topic.title}</h4>
                    <p className="text-orange-100/40 text-sm leading-relaxed mb-4">{topic.desc}</p>
                    <div className="w-8 h-1 bg-red-600/30 group-hover:w-16 transition-all" />
                  </div>

                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        <div className="flex justify-center mt-20 lg:mt-32">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="flex items-center gap-4 text-red-500/30 uppercase font-black tracking-[0.5em] text-xs"
          >
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-red-500/50" />
            End of gameplay flow
            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-red-500/50" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
