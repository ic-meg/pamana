import Gil from '../../../assets/us/gil-1x1.png'; 
import Meg from '../../../assets/us/meg-1x1.png'; 
import Ley from '../../../assets/us/ley-1x1.png'; 
import Pam from '../../../assets/us/pam-1x1.png'; 
import Kate from '../../../assets/us/kate-1x1.png'; 

import Box from '../../../assets/icons/box.svg'; 
import DinoGame from '../../../components/DinoGame';

import GilPage from './Gil';
import MegPage from './Meg';
import ShanleyPage from './Ley';
import PamelaPage from './Pam';
import KatePage from './/Kate';


const team = [
  {
    name: 'Giuliani D. Calais',
    role: 'Designer',
    email: 'gilcalais@gmail.com',
    image: Gil,
  },
  {
    name: 'Meg Angeline V. Fabian',
    role: 'Project Manager,Frontend Developer',
    email: 'fabian.megangeline2003@gmail.com',
    image: Meg,
  },
  {
    name: 'Shanley Q. Galo',
    role: 'Designer, Frontend Developer',
    email: 'shanleygalo0000@gmail.com',
    image: Ley,
  },
  {
    name: 'Pamela T. Murillo',
    role: 'Frontend Developer',
    email: 'pamtena8@gmail.com',
    image: Pam,
  },
  {
    name: 'Kate E. Serrano',
    role: 'Frontend Developer',
    email: 'kateserrano104@gmail.com',
    image: Kate,
  },
];


const Members =  ({ setActiveTab, activeTab }) => {

  return (
    <div className="font-mono  text-black px-4 py-6 max-w-5xl mx-auto space-y-6">
    {activeTab === 'giuliani' && <GilPage />}
    {activeTab === 'meg' && <MegPage />}
    {activeTab === 'shanley' && <ShanleyPage />}
    {activeTab === 'pamela' && <PamelaPage />}
    {activeTab === 'kate' && <KatePage />}

    {!['giuliani', 'meg', 'shanley', 'pam', 'kate'].includes(activeTab) && (
         <>
        {/* Title + Intro */}
        
        <div className="flex items-center gap-2 relative">
            <h3 className="text-left text-[30px] font-bold font-vt323 z-10 text-nowrap">Behind the Screens</h3>
            <DinoGame />
        </div>


        <div className="text-[14px] leading-[1.8] font-mono text-justify px-4 max-w-full">
          <p>
            We make things harder than they need to be, suffer through our own code, and still manage to laugh about it (eventually). Whether it's a broken layout or a last-minute deadline panic, we’re in this together—learning, messing up, fixing things, and occasionally questioning all our life choices.
            But hey, that’s how we grow… right?
          </p>

          <p className="text-center mt-6">
            ── Meet <span className="font-bold">The&lt;Script&gt;</span> — the devs behind the bugs, fixes, and everything in between. ──
          </p>
        </div>


        {/* Centered Profile */}
        <div
            onClick={() => setActiveTab('giuliani')}
            className="flex items-start w-fit mx-auto px-6 py-4 gap-4 cursor-pointer hover:bg-[#f0f0f0] transition"
        >

            {/* Profile Image */}
            <img src={team[0].image} alt={team[0].name} className="w-16 h-16 grayscale-0" />

            <div className="text-left text-sm font-vt323 space-y-1">
                {/* Name */}
                <p className="text-[15px] font-bold">{team[0].name}</p>

                {/* Role + Email */}
                <div className="relative w-[200px] h-[48px]">
                  <img
                      src={Box}
                      alt="Box background"
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                  />
                <div className="absolute left-2 top-[2px] text-[15px] leading-[1.4] font-vt323">
                    <p>{team[0].role}</p>
                    <p className="mt-[2px]">{team[0].email}</p>
                </div>
              </div>
            </div>
        </div>


        {/* Divider */}
        <div className="w-full my-4">
            <div className="h-[2px] bg-black" />
            <div className="h-[12px] bg-[repeating-linear-gradient(-45deg,_black_0px,_black_2px,_transparent_2px,_transparent_4px)]" />
            <div className="h-[2px] bg-black" />
        </div>

        {/* Team Grid (4 members) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm ">
            {team.slice(1).map((member, index) => (
           <div
                key={index}
                onClick={() => {
                    if (member.name.includes('Giuliani')) {
                      
                      setActiveTab('giuliani');
                    } else if (member.name.includes('Meg')) {
                 
                      setActiveTab('meg');
                    } else if (member.name.includes('Shanley')) {
         
                      setActiveTab('shanley');
                    } else if (member.name.includes('Pamela')) {
                    
                      setActiveTab('pamela');
                    } else if (member.name.includes('Kate')) {
                     
                      setActiveTab('kate');
                    }
                  }}
                  
                className="flex items-start px-4 py-3 gap-4 cursor-pointer hover:bg-[#f0f0f0] transition"
            >
         
                <img src={member.image} alt={member.name} className="w-16 h-16 grayscale-0" />

                <div className="text-left text-sm font-vt323 space-y-1">
                <p className="text-[15px] font-bold">{member.name}</p>

                <div className={`relative ${member.name.includes('Meg') ? 'w-[230px]' : 'w-[200px]'} h-[48px] `}>
                    <img
                    src={Box}
                    alt="Box background"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                    />
                    <div className="absolute left-2 top-[5px] text-[13px] leading-[1.4] whitespace-nowrap">
                    <p>{member.role}</p>
                    <p className="mt-[2px]">{member.email}</p>
                    </div>
                </div>
                </div>
            </div>
             
            ))}

        </div>
        </>
    )}
    </div>
   
  );
};
 
export default Members;
