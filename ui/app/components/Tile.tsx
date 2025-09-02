import Image from "next/image";
import Chip from "./Chip";
import Link from "next/link";
import { UUID } from "crypto";

export type TileProps = {
  title: string;
  product_number: string;
  created_date: Date;
  modified_date: Date;
  id: number;
};

export default function Tile({
  title,
  product_number,
  modified_date,
}: TileProps) {
  return (
    <Link href="/32">
      <div className="select-none bg-background w-[350px] flex flex-col p-4 rounded-lg drop-shadow-lg">
        <div className="bg-gray-300 h-[180px] rounded-xl">
          {/* <Image src="./file.svg" alt="Title" width={100} height={100} /> */}
        </div>
        <div className="flex gap-2 pt-2 pb-2">
          {/* Product Title */}
          <h2 className="font-bold flex-2">{title}</h2>
          {/* Published Date */}
          <h3 className="flex-1 text-sm text-right">
            {modified_date.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </h3>
        </div>
        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          <Chip
            text={product_number}
            mode="gradient"
            from="accent1"
            to="accent1B"
          />
          <Chip text="Outdated" mode="destructive" />
        </div>
      </div>
    </Link>
  );
}
