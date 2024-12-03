import clsx from "clsx";
import Card from "./ui/card";
import { FaCheck } from "react-icons/fa6";

export default function Home() {
  const title = {
    id: 0,
    plan: "None",
    cost: "None",
    webnum: "Website number",
    serverstorage: "Server storage",
    db: "Database",
    unmeterbw: "Unmetered bandwidth",
    ssd: "SSD Disk",
    vcplus: "VCPUS Fontworld",
    worldpress: "Worldpress install",
    serverspeed: "Server speed",
  };
  const tmp = [
    {
      id: 1,
      plan: "Free",
      cost: "$0",
      webnum: "01",
      serverstorage: "100 GB",
      db: "-",
      unmeterbw: "-",
      ssd: "-",
      vcplus: "-",
      worldpress: "-",
      serverspeed: "-",
    },
    {
      id: 2,
      plan: "Team",
      cost: "$59",
      webnum: "10",
      serverstorage: "500 GB",
      db: "15",
      unmeterbw: <FaCheck />,
      ssd: "-",
      vcplus: "-",
      worldpress: "-",
      serverspeed: "-",
    },
    {
      id: 3,
      plan: "Popular",
      cost: "$99",
      webnum: "50",
      serverstorage: "1 TB",
      db: "Unlimited",
      unmeterbw: <FaCheck />,
      ssd: <FaCheck />,
      vcplus: <FaCheck />,
      worldpress: <FaCheck />,
      serverspeed: <FaCheck />,
    },
    {
      id: 4,
      plan: "Enterprise",
      cost: "$299",
      webnum: "Unlimited",
      serverstorage: "Unlimited",
      db: "Unlimited",
      unmeterbw: <FaCheck />,
      ssd: <FaCheck />,
      vcplus: <FaCheck />,
      worldpress: <FaCheck />,
      serverspeed: <FaCheck />,
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-2 items-center p-12">
        <div className="text-3xl font-bold  ">Pricing & Plans</div>
        <div className="text-[#4D5562] flex flex-col items-center text-center xl:w-[440px]">
          Discover the plan that unlocks the transformative power of digital art
          and join our vibrant community today.
        </div>
      </div>

      <div className="m-2 gap-2 grid grid-cols-2 sm:grid-cols-3 sm:m-4 lg:m-16 lg:grid-cols-4 xl:grid-cols-5">
        <Card topic other={title} />
        {tmp.map((info) =>
          info.id === 1 ? (
            <Card
              key={info.id}
              other={info}
              className={clsx({
                "hidden xl:flex": 1,
              })}
            />
          ) : info.id === 2 ? (
            <Card
              key={info.id}
              other={info}
              className={clsx({
                "hidden lg:flex": 1,
              })}
            />
          ) : info.id === 3 ? (
            <Card
              key={info.id}
              contrast
              other={info}
              className={clsx({
                "sm:flex sm:col-start-3 xl:col-start-4 ": 1,
              })}
            />
          ) : info.id === 4 ? (
            <Card
              key={info.id}
              other={info}
              className={clsx({
                "hidden row-start-1 col-start-2 sm:flex lg:col-start-4 xl:col-start-5": 1,
              })}
            />
          ) : (
            <Card key={info.id} other={info} />
          )
        )}
      </div>
    </div>
  );
}
