import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Flame, Star, Map, ChevronRight, Axe, Pickaxe, Sprout, Hammer, Home, 
  Tractor, Utensils, Shield, Target, ShoppingCart, Gem, Crosshair, 
  Briefcase, Skull, Wrench, FlaskConical, Crown, Users, Landmark 
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
                  className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out border-2 ${
                    isActive 
                      ? 'border-red-600 shadow-[0_0_25px_rgba(220,38,38,0.5)] flex-[3] md:flex-[5]' 
                      : 'border-red-900/20 hover:border-red-600/40 flex-1'
                  }`}
                >
                  <img 
                    src={race.image} 
                    alt={race.name} 
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ${
                      isActive ? 'scale-105 brightness-100' : 'scale-110 grayscale-[60%] brightness-[0.35]'
                    }`} 
                  />
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    isActive 
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
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-6 mb-4">
          <Landmark className="w-16 h-16 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
          <h2 className="text-5xl md:text-7xl font-black text-white [text-shadow:4px_4px_0px_#4a0d0d] uppercase text-center">ธุรกิจ Saloon & Casino</h2>
        </div>
        <div className="w-32 h-2 bg-yellow-500 rounded-full" />
        <p className="text-orange-100/60 mt-4 text-xl font-medium">โมเดลธุรกิจแบบบูรณาการ: อาหาร เครื่องดื่ม และการเสี่ยงโชค</p>
      </div>

      <div className="max-w-6xl mx-auto">
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
                Saloon และ Casino คือธุรกิจเดียวกันที่มอบประสบการณ์ครบวงจร ตั้งแต่การเป็นศูนย์รวมชุมชนไปจนถึงสถานบันเทิงยามค่ำคืน
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

export default App;
