import RoadMapItem from '@/components/Roadmap/RoadMapItem';
import { roadmapData } from '@/components/Roadmap/RoadmapData';

const RoadMap = () => {
  return (
    <div className="">
      <section className="roadmap">
          <div className="roadmap__timeline">
          <div className="roadmap__line"></div>

          {roadmapData.map((item, index) => (
            <RoadMapItem
              key={item.id}
              stage={item.stage}
              goal={item.goal}
              activities={item.activities}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RoadMap;
