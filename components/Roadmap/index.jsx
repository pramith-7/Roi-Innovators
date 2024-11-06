import RoadMapItem from '@/components/Roadmap/RoadMapItem';
import { 
  webDesignData , 
  socialMediaManagementData , 
  mobileAppDevelopmentData ,  
  paidAdvertisingData , 
  copywritingData } from '@/components/Roadmap/RoadmapData';

export const WebDesign = () => {
  return (
    <div className="">
      <section className="roadmap">
          <div className="roadmap__timeline">
          <div className="roadmap__line"> </div>
          {webDesignData.map((item, index) => (
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


export const SocialMediaManagement = () => {
  return (
    <div className="">
      <section className="roadmap">
          <div className="roadmap__timeline">
          <div className="roadmap__line"> </div>
          {socialMediaManagementData.map((item, index) => (
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

