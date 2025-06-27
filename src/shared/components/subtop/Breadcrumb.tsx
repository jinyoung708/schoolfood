import { Link } from 'react-router-dom';
import { Icon } from '../Icon';
import { cn } from '~/shared/utils';

export interface BreadcrumbProps {
  breadcrumb?: string[];
}

export const Breadcrumb = ({ breadcrumb }: BreadcrumbProps) => {
  const linkStyleClass = 'text-gray-500 text-sm';
  return (
    <div className="flex align-center justify-center gap-2">
      {breadcrumb?.map((item, idx) => (
        <span key={item} className="flex items-center gap-2">
          <Link
            to=""
            className={cn(linkStyleClass, idx === breadcrumb.length - 1 && 'text-gray-800')}
          >
            {item}
          </Link>
          {idx < breadcrumb.length - 1 && <Icon src="arrow_breadcrumb.svg" />}
        </span>
      ))}
    </div>
  );
};
