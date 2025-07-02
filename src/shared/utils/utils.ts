/* eslint-disable import/no-extraneous-dependencies */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';

export const sleep = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const cn = (...args: any) => {
  return twMerge(clsx(args));
};

export const timeDistance = (time: string) => {
  const date = dayjs(time);
  const now = dayjs(Date.now());
  const day = now.diff(date, 'day');

  if (day > 0) {
    if (day > 7) {
      return date.format('MMM D, YYYY');
    }

    return `${day}d ago`;
  }

  const hour = now.diff(date, 'hour');
  if (hour > 0) {
    return `${hour}h ago`;
  }

  const min = now.diff(date, 'minute');
  if (min > 0) {
    return `${min}m ago`;
  }

  return `just now`;
};
