const RoadMapItem = ({ stage, goal , activities, isEven }) => {
  return (
    <div
      className={`roadmap-item transition duration-500 hover:-translate-y-3  ${
        isEven ? 'roadmap-item--even' : 'roadmap-item--odd'
      }`}
    >
      <div className="roadmap-item__marker"></div>
    
      <div className="roadmap-item__content bg-black/70 shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]">
        <h3 className="roadmap-item__stage"> {stage} </h3>     
           <dl className="text-left align-top">           
              <dl className="font-semibold"> Goal : </dl>
              <dd className="font-extralight text-sm">  - {goal} </dd>         
              <dl className="font-semibold"> Activities : </dl>
              <dd className="font-extralight text-sm"> - {activities} </dd>
            </dl>
       
     
      </div>
    </div>
  );
};

export default RoadMapItem;
