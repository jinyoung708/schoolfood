interface ProductTagsProps {
  tags: string[];
}

export const ProductTags = ({ tags }: ProductTagsProps) => {
  return (
    <ul className="flex flex-wrap items-center gap-[8px] lg:gap-[12px]">
      {tags.map((tag, index) => (
        <li key={tag + index}>
          <span className="inline-flex items-center h-[24px] lg:h-[26px] text-xs lg:text-sm px-[4px] lg:px-[6px] bg-gray-100 rounded-[2px]">
            #{tag}
          </span>
        </li>
      ))}
    </ul>
  );
};
