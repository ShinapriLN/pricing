import clsx from "clsx";
import Chip from "./chip";
import { FaArrowRight } from "react-icons/fa";

export default function Card({
  className,
  contrast,
  topic,
  other,
}: {
  className?: string;
  contrast?: boolean;
  topic?: boolean;
  other: any;
}) {
  const {
    id,
    plan,
    cost,
    webnum,
    serverstorage,
    db,
    unmeterbw,
    ssd,
    vcplus,
    worldpress,
    serverspeed,
  } = other;

  return (
    <div
      className={clsx(`flex flex-col rounded-2xl select-none ${className}`, {
        "bg-[#121826] text-white": contrast,
      })}
    >
      <div
        className={clsx("mx-12 my-6 gap-4 flex flex-col items-center grow", {
          "text-[#121826]": contrast && topic,
          "text-white": topic,
        })}
      >
        {contrast ? (
          <Chip>{plan}</Chip>
        ) : (
          <div
            className={clsx("font-bold", {
              "text-[#263FA9]": !contrast && !topic,
            })}
          >
            {plan}
          </div>
        )}
        <div className="text-6xl font-semibold ">{cost}</div>
        <div
          className={clsx({
            "text-[#4D5562]": !contrast && !topic,
          })}
        >
          Per month
        </div>
      </div>

      <div
        className={clsx("mx-12 my-4 gap-6 flex flex-col items-center", {
          "!items-start font-semibold truncate": topic,
        })}
      >
        <div>{webnum}</div>
        <div>{serverstorage}</div>
        <div>{db}</div>
        <div>{unmeterbw}</div>
        <div>{ssd}</div>
        <div>{vcplus}</div>
        <div>{worldpress}</div>
        <div>{serverspeed}</div>
      </div>

      <a
        href={`#${id}`}
        className={clsx(
          "p-6 gap-1 rounded-b-2xl w-full flex justify-center font-semibold items-center",
          {
            "bg-yellow-800": contrast,
            "text-[#263FA9]": !contrast,
            hidden: topic,
          }
        )}
      >
        Get Started
        <FaArrowRight />
      </a>
    </div>
  );
}
