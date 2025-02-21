import { motion } from "framer-motion";
import {
    Book,
    Building2,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Code,
    Globe,
    Heart,
    Monitor,
    Play,
} from "lucide-react";

export const Features = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Play className="h-12 w-12" />,
              title: "Learn at your own pace",
              description: "Access courses on your schedule"
            },
            {
              icon: <Globe className="h-12 w-12" />,
              title: "Access anywhere",
              description: "Learn on any device, anytime"
            },
            {
              icon: <Book className="h-12 w-12" />,
              title: "Expert instruction",
              description: "Find the right instructor for you"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};