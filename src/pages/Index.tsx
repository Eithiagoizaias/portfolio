import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import ProofOfWorkSection from "@/components/ProofOfWorkSection";
import StackSection from "@/components/StackSection";
import ExperienceSection from "@/components/ExperienceSection";
import ReachOutSection from "@/components/ReachOutSection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <div className="relative z-10">
        <Header />
        <main className="max-w-3xl mx-auto px-6 py-10 space-y-12">
          <ProfileSection />
          <ProofOfWorkSection />
          <StackSection />
          <ExperienceSection />
          <ReachOutSection />
        </main>
      </div>
    </div>
  );
};

export default Index;
