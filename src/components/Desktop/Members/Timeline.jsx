import React, { useEffect, useState, useCallback } from "react"
import { Icons, Images, RizalTimelineImg } from "../../../assets"
import Feather from "../Feather"
import useScrollAnim from "./LegacyScroll"; 

export default function Timeline( {setActiveTab} ) {
  const [rotation, setRotation] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [handRotation, setHandRotation] = useState(0)
  useScrollAnim(); 

  const rizalTimeline = [
    {
      date: "Jun 19, <br/>1861",
      event: "Birth of José Rizal",
      description:
        "Born in Calamba, Laguna, to Francisco Mercado and Teodora Alonso Realonda.",
      image:
        "https://userscontent2.emaze.com/images/3f4fd6a9-6d87-457c-aee0-dee26690bef4/48338910-f81e-4d29-a5e1-8ce0abc37a92",
    },
    {
      date: "1872",
      event: "Enrolled at Ateneo",
      description:
        "Started his formal education at Ateneo Municipal de Manila.",
      image:
        "https://images.saymedia-content.com/.image/t_share/MTc2MjY4ODI0Mjc2OTAzMTAy/education-in-the-philippines-jose-rizal-in-ateneo.jpg",
    },
    {
      date: "1877",
      event: "Graduated with honors",
      description: "Received a Bachelor of Arts with high honors from Ateneo.",
      image: "https://pbs.twimg.com/media/DZPxi9JV4AAYqfk.jpg",
    },
    {
      date: "1878",
      event: "Enrolled in <br/> UST",
      description:
        "Studied medicine and philosophy at the University of Santo Tomas.",
      image:
        "https://varsitarian.net/wp-content/uploads/2009/07/CXd_vHiUoAA7KTu-1.jpg",
    },
    {
      date: "May 03, <br/>1882",
      event: "Departure to Spain",
      description:
        "Left for Europe to continue his studies and escape discrimination.",
      image:
        "https://dimasalanglaonglaan.wordpress.com/wp-content/uploads/2014/07/fra.jpg",
    },
    {
      date: "1884",
      event: "Medical degree in Madrid",
      description:
        "Completed his medical studies at Universidad Central de Madrid.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Gw_3iFf4N34MIr4HCNw7ZBqGg3GuiMgpdg&s",
    },
    {
      date: "Jun 1887",
      event: "Noli Me Tangere published",
      description:
        "Published his first novel exposing Spanish colonial abuses.",
      image:
        "https://vistalandinternational.com/wp-content/uploads/2024/01/noli-me-tangere.jpg",
    },
    {
      date: "Aug 1887",
      event: "Returned to the Philippines",
      description:
        "Came back after his studies; faced threats due to his writings.",
      image:
        "https://dimasalanglaonglaan.wordpress.com/wp-content/uploads/2014/07/download-1.jpg?w=680",
    },
    {
      date: "Feb 1888",
      event: "Exiled <br/>again",
      description:
        "Left the Philippines due to continuous harassment and threats.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZXO6PApPQ5MJFuF70NNQH9Ek5KTn9R1joQ&s",
    },
    {
      date: "1891",
      event: "El Filibusterismo published",
      description:
        "Published the sequel to Noli Me Tangere, intensifying reformist ideas.",
      image: "https://kahimyang.com/resources/el-filibusterismo-og.jpg",
    },
    {
      date: "Jun 26, <br/>1892",
      event: "Returned to the Philippines",
      description: "Came back to initiate peaceful reforms.",
      image:
        "https://dimasalanglaonglaan.wordpress.com/wp-content/uploads/2014/07/download-1.jpg?w=680",
    },
    {
      date: "Jul 03, <br/>1892",
      event: "Founded La Liga Filipina",
      description: "Established a civic organization for peaceful reforms.",
      image:
        "https://kahimyang.com/resources-7/rizal-la-liga-filipina-rizal.jpg",
    },
    {
      date: "Jul 07, <br/>1892",
      event: "Exiled to <br/> Dapitan",
      description: "Arrested and exiled to Dapitan, Mindanao.",
      image:
        "https://www.vigattintourism.com/assets/article_main_photos/optimize/1347439535V3MjuntO.jpg",
    },
    {
      date: "1896",
      event: "Katipunan uprising",
      description:
        "The revolution started; Rizal was blamed for inciting rebellion.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-tYxbbaqZKRU79GsF5nAHekjPGOQmRR_tg&s",
    },
    {
      date: "Oct 06, <br/>1896",
      event: "Arrested and imprisoned",
      description:
        "Captured on his way to Cuba and imprisoned at Fort Santiago.",
      image:
        "https://xiaochua.net/wp-content/uploads/2012/12/05-630-ng-umaga-nang-simulan-ni-rizal-at-ng-mga-kasama-ang-paglakad-patungo-sa-luneta-de-bagumabayan.jpg?w=584",
    },
    {
      date: "Dec 26, <br/>1896",
      event: "Sentenced to death",
      description:
        "Tried and found guilty of rebellion, sedition, and conspiracy.",
      image: "https://kahimyang.com/resources-13/the-trial-of-jose-rizal.jpg",
    },
    {
      date: "Dec 30, <br/>1896",
      event: "Execution at Bagumbayan",
      description:
        "Executed by firing squad; became a martyr of the Philippine revolution.",
      image:
        "https://www.researchgate.net/publication/374059797/figure/fig1/AS:11431281190282870@1695267503231/The-execution-of-Jose-Rizal-30-December-1896-Bagumbayan-Field-Manila-Source.png",
    },
  ]

  const radius = 210
  const centerX = 300
  const centerY = 300

  const rotateToIndex = useCallback(
    (index) => {
      const anglePerItem = 360 / rizalTimeline.length
      const newRotation = -index * anglePerItem

      setActiveIndex(index)

      if (isZoomed) {
        setRotation(0)
        setHandRotation(index * anglePerItem)
      } else {
        setRotation(newRotation)
      }
    },
    [isZoomed, rizalTimeline.length]
  )

  useEffect(() => {
    setHandRotation(0)
    rotateToIndex(activeIndex)
  }, [isZoomed, activeIndex, rotateToIndex])

  return (
    <Feather setActiveTab={setActiveTab}>
      <div className=" relative w-full h-full">
        <div className="scrollAnim relative w-[90%] flex flex-col m-2  mr-5 ml-auto gap-10">
          <div className="w-full flex flex-col gap-3 mb-1 pl-10 h-min-[600px]">
            <h1
              className="text-[36px] sm:text-[55px] font-extrabold uppercase tracking-wide leading-none font-coustard pl-24 w-full break-words"
              dangerouslySetInnerHTML={{
                __html: rizalTimeline[activeIndex].event,
              }}
            />
            <div className="flex gap-3">
              <img src={Icons.oldclock} alt="Rizal Birth" className="h-10" />
              <h2 className="text-xl sm:text-2xl mt-2 font-bold tracking-wider font-coustard">
                {rizalTimeline[activeIndex].date.replace(/<[^>]+>/g, "")}
              </h2>
            </div>
          </div>

          <p className="-mt-5  text-[1px] sm:text-[17px] leading-relaxed text-left max-w-[50%] min-h-14">
            {rizalTimeline[activeIndex].description}
          </p>

          <img
            src={RizalTimelineImg[activeIndex] || Images.rizalBirth}
            alt={rizalTimeline[activeIndex]?.event || "Rizal"}
            style={{
              position: "absolute",
              top: 40,
              right: -20,
              zIndex: -10,
              width: 450,
              height: 300,
              WebkitMaskImage: `url(${Images.mask})`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "100% 120%",
              WebkitMaskPosition: "center -3em",
              maskImage: `url(${Images.mask})`,
              maskRepeat: "no-repeat",
              maskSize: "100% 120%",
              maskPosition: "center -2.5em",
            }}
          />
        </div>

        {isZoomed && (
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-500 mt-[37px]"
            onClick={() => setIsZoomed((prev) => !prev)}
          />
        )}

        <div
          className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${
            isZoomed
              ? "left-1/2 translate-x-[-50%] bottom-[50%] translate-y-[66%] scale-110 z-50"
              : "left-1/2 translate-x-[-50%] bottom-0 translate-y-[90%] scale-100"
          }`}
          onClick={() => setIsZoomed((prev) => !prev)}
        >
          <div className="relative w-[600px] h-[600px]">
            {/* Rotating Timeline */}
            <div
              className="absolute w-full h-full transition-transform duration-700 ease-in-out"
              style={{
                transform: `rotate(${rotation}deg)`,
              }}
            >
              {rizalTimeline.map((timeline, index) => {
                const angle =
                  (index / rizalTimeline.length) * 2 * Math.PI - Math.PI / 2;

                const x = centerX + radius * Math.cos(angle) - 40;
                const y = centerY + radius * Math.sin(angle) - 10;

                return (
                  <button
                    key={index}
                    title={timeline.event}
                    onClick={(e) => {
                      e.stopPropagation();
                      rotateToIndex(index);
                    }}
                    className={`absolute text-xs font-medium cursor-pointer hover:underline text-center w-[80px] text-3xl ${
                      index === activeIndex ? "text-[#764123]" : "text-white"
                    }`}
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: `rotate(${-rotation}deg)`,
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                      fontWeight: "bolder",
                      background: "none",
                      border: "none",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: timeline.date,
                    }}
                  />
                );
              })}
            </div>

            {/* Clock Body */}
            <img
              className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 -z-10"
              src={Images.clockBody}
              alt="Clock Body"
              draggable={false}
            />

            {/* Clock Hand */}
            <img
              className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 -z-10 rotate-45"
              src={Images.clockHandHour}
              alt="Clock Hand"
              draggable={false}
            />
            <img
              className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -z-10"
              src={Images.clockHandMinute}
              alt="Clock Hand"
              draggable={false}
              style={{
                transform: `translate(-50%, -50%) rotate(${handRotation}deg)`,
                transformOrigin: "50% 50%",
              }}
            />
          </div>
        </div>
      </div>
    </Feather>
  );
}
