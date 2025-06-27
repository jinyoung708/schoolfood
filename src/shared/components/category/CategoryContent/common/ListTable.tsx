import { cn } from '~/shared/utils';

interface ItemType {
  title: string;
  content: string;
}

interface ListTableProps {
  items: ItemType[];
  className?: string;
}

export const ListTable = ({ items, className }: ListTableProps) => {
  return (
    <table className={cn('border-t border-t-gray-500', className)}>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.title + index}>
            <th className="w-[83px] lg:w-[25%] bg-gray-50 p-[16px] lg:p-[30px] text-sm lg:text-lg font-medium text-gray-600 lg:text-left border-b border-b-gray-300">
              {item.title}
            </th>
            <td className="p-[16px] lg:p-[30px] text-sm lg:text-base text-gray-500 border-b border-b-gray-300">
              {item.content}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
