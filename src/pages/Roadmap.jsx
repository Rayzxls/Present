import React from 'react';
import { motion } from 'framer-motion';
import { 
  Flag, Shield, Star, Rocket, Map, Target, Users, 
  Crown, Landmark, Sword, Gem, Flame, ChevronRight, 
  Clock, CheckCircle2, Circle
} from 'lucide-react';

const RoadmapPage = () => {
  const phases = [
    {
      id: 1,
      title: "Phase 1: Settlement",
      subtitle: "การตั้งรกรากและวางรากฐาน",
      status: "completed",
      icon: Flag,
      color: "from-blue-600 to-blue-900",
      items: [
        "เปิดตัวระบบเลือกเผ่าพันธุ์ (Races Selection) 4 เผ่าหลัก",
        "วางระบบ Skill Tree พื้นฐาน (ตัดไม้, ขุดเหมือง, ทำเกษตร)",
        "จัดตั้งระบบการปกครองเบื้องต้น (Governance Foundation)",
        "ระบบเศรษฐกิจแบบ Player-to-Player (P2P)",
        "เปิดเมืองมาตรฐานกฎ RP สำหรับ Story-telling"
      ]
    },
    {
      id: 2,
      title: "Phase 2: Conflict & Prosperity",
      subtitle: "ความขัดแย้งและการเติบโตของแดนเถื่อน",
      status: "in-progress",
      icon: Flame,
      color: "from-red-600 to-red-900",
      items: [
        "เปิดโซน Thief Land สำหรับสายยิง (Gameplay focus)",
        "ระบบ Extraction Mode (High risk, high reward)",
        "ระบบธุรกิจ Saloon & Casino (Unified Model)",
        "สงครามชิงทรัพยากร และระบบความแค้นระหว่างแก๊ง",
        "ตลาดมืด (Black Market) และการประมูลสินค้าหายาก"
      ]
    },
    {
      id: 3,
      title: "Phase 3: State Sovereignty",
      subtitle: "อำนาจอธิปไตยและการเมืองระดับรัฐ",
      status: "upcoming",
      icon: Crown,
      color: "from-yellow-500 to-yellow-800",
      items: [
        "ระบบการเมืองเต็มรูปแบบ (President & Legislation)",
        "ศึกมวยตัวแทนรัฐ และแข่งม้าระหว่างรัฐ",
        "ระบบ Raid Camp สำหรับแก๊งในโซน Thief Land",
        "ระบบ Legacy Items (ไอคอนประจำรัฐที่มีผลต่อบัฟทั้งเมือง)",
        "การขยายอาณาจักรและการทำสนธิสัญญาระหว่างรัฐ"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0000] text-white flex flex-col items-center py-20 px-8 relative overflow-x-hidden font-kanit">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src="/bg.png" alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0505] via-[#0a0000] to-[#000000]" />
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-red-900/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-900/10 rounded-full blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full z-10"
      >
        <header className="mb-24 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-red-600/10 border border-red-500/30 px-6 py-2 rounded-full mb-6 backdrop-blur-md"
          >
            <Clock className="w-4 h-4 text-red-500" />
            <span className="text-xs font-black tracking-[0.3em] text-red-400 uppercase">Evolution Timeline</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-[#ffdac4] uppercase tracking-tighter mb-6 [text-shadow:4px_4px_0px_#4a0d0d]">
            ROADMAP
          </h1>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
          <p className="text-xl md:text-2xl text-orange-100/60 max-w-2xl mx-auto italic">
            "เส้นทางสู่การเป็นตำนานในดินแดน Texas RP จากก้าวแรกของการตั้งรกราก สู่อำนาจที่ไร้ขีดจำกัด"
          </p>
        </header>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-orange-500 to-transparent -translate-x-1/2 opacity-30 hidden md:block" />

          <div className="space-y-32">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
              >
                {/* Connector Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0000] border-4 border-red-600 z-20 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.5)] hidden md:flex">
                  <phase.icon className="w-5 h-5 text-red-500" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] group`}>
                  <div className={`relative p-1 rounded-[2.5rem] bg-gradient-to-br ${phase.color} shadow-2xl transition-all duration-500 group-hover:scale-[1.02]`}>
                    <div className="bg-[#0a0000]/95 rounded-[2.4rem] p-8 md:p-12 h-full border border-white/5 backdrop-blur-xl">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${phase.color} text-white`}>
                            <phase.icon className="w-8 h-8" />
                          </div>
                          <div>
                            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">{phase.title}</h3>
                            <p className="text-orange-200/50 text-sm mt-1 font-bold">{phase.subtitle}</p>
                          </div>
                        </div>
                        <div className="hidden sm:block">
                          {phase.status === 'completed' && <div className="flex items-center gap-2 text-green-500 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20 text-xs font-black uppercase tracking-widest"><CheckCircle2 className="w-4 h-4" /> COMPLETED</div>}
                          {phase.status === 'in-progress' && <div className="flex items-center gap-2 text-yellow-500 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20 text-xs font-black uppercase tracking-widest animate-pulse"><Circle className="w-4 h-4" /> IN PROGRESS</div>}
                          {phase.status === 'upcoming' && <div className="flex items-center gap-2 text-slate-500 bg-slate-500/10 px-4 py-2 rounded-full border border-slate-500/20 text-xs font-black uppercase tracking-widest"><Clock className="w-4 h-4" /> UPCOMING</div>}
                        </div>
                      </div>

                      <ul className="space-y-4">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-orange-100/70 group/item">
                            <div className="mt-1.5 w-5 h-5 shrink-0 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center group-hover/item:bg-red-500 group-hover/item:border-red-400 transition-colors duration-300">
                              <ChevronRight className="w-3 h-3 text-red-500 group-hover/item:text-white" />
                            </div>
                            <span className="text-lg md:text-xl font-medium leading-tight group-hover/item:text-white transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Decorative Visual/Space */}
                <div className="w-full md:w-[45%] hidden md:flex items-center justify-center">
                   <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-20 blur-[80px] rounded-full`} />
                      <div className="relative border-4 border-white/5 rounded-[3rem] p-4 bg-white/5 backdrop-blur-sm overflow-hidden group">
                        <div className={`w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br ${phase.color} rounded-[2.5rem] flex items-center justify-center overflow-hidden`}>
                           <phase.icon className="w-32 h-32 text-white/20 absolute rotate-12 -right-8 -bottom-8 group-hover:scale-110 transition-transform duration-700" />
                           <div className="text-center p-8">
                             <span className="text-8xl font-black text-white/10">{phase.id}</span>
                             <p className="text-white font-black uppercase tracking-[0.5em] text-sm mt-4">Phase Objective</p>
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <footer className="mt-40 text-center">
           <div className="p-12 rounded-[4rem] bg-gradient-to-b from-red-950/20 to-black border border-red-900/30 backdrop-blur-md">
              <h2 className="text-4xl font-black text-white uppercase mb-4">JOIN THE LEGACY</h2>
              <p className="text-orange-100/50 mb-8 max-w-xl mx-auto">ร่วมเป็นส่วนหนึ่งของการสร้างรัฐที่ยิ่งใหญ่ที่สุดในประวัติศาสตร์ Texas RP เตรียมพบกับความระทึกขวัญที่เหนือกว่าเดิม</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-red-600 rounded-full font-black text-white uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(220,38,38,0.4)] hover:bg-red-500 transition-colors"
              >
                Connect to Discord
              </motion.button>
           </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default RoadmapPage;
