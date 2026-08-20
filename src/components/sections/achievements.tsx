import { ACHIEVEMENTS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const AchievementsSection = () => {
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[60vh] py-20"
    >
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="achievements"
          title="My Achievements"
          desc="Highlights of my journey."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div key={achievement.id} className="relative h-full">
              <AchievementCard achievement={achievement} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: (typeof ACHIEVEMENTS)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border h-full flex flex-col",
          "hover:border-primary/20 transition-all duration-300",
          "shadow-sm hover:shadow-md group overflow-hidden"
        )}
      >
        {achievement.image !== "#" && (
          <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-muted/20">
            <Image
              src={achievement.image}
              alt={achievement.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="pb-3 pt-6">
          <CardTitle className="text-xl font-bold tracking-tight">
            {achievement.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 flex-grow flex flex-col justify-end">
          {achievement.link !== "#" && (
            <Link
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              View Certificate <ExternalLink className="w-4 h-4" />
            </Link>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AchievementsSection;
