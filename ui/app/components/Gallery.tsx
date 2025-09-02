import Tile, { TileProps } from "./Tile";

export type GalleryProps = {
  data: TileProps[];
};

export default function Gallery({ data }: GalleryProps) {
  return (
    <div className="flex gap-4 flex-wrap justify-center items-center m-auto">
      {data.map((item) => (
        <Tile key={item.id} {...item} />
      ))}
    </div>
  );
}
