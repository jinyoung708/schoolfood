import { Button } from '@headlessui/react';
import { Header } from '~/features/header';
import { SubContentWrapper } from '~/features/layouts/SubContentWrapper';
import { Icon } from '~/shared/components/Icon';

/* eslint-disable jsx-a11y/anchor-is-valid */
export const NetworkErrorPage = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col relative bg-white">
      <Header />
      <SubContentWrapper>
        <div className="container mx-auto">
          <div className="flex flex-col pb-[30px] lg:pb-[120px] pt-[40px] lg:pt-[140px]">
            <div className="mb-[30px] lg:mb-[40px] text-center">
              <Icon src="error2.svg" className="inline-block" />
            </div>
            <div className="text-center">
              <p className="text-22 lg:text-34 font-medium mb-[8px]">
                일시적으로 서비스를 <br className="block lg:hidden" />
                이용할 수 없습니다.
              </p>
              <p className="text-base lg:text-22 text-gray-500">
                요청을 처리하는 중 문제가 발생했습니다. <br className="block lg:hidden" />
                잠시 후 다시 시도해주세요.
                <br />
                문제가 지속되면
                <span className="text-secondary">(대표 이메일 / 고객센터(해피톡 url)</span>로{' '}
                <br className="block lg:hidden" />
                문의해 주세요.
              </p>
            </div>
            <div className="flex gap-[8px] w-full max-w-[756px] mx-auto mt-[40px] lg:mt-[80px]">
              <Button className="btn-border-primary btn-xl flex-1">새로고침</Button>
              <Button className="btn-primary btn-xl flex-1">메인으로</Button>
            </div>
          </div>
        </div>
      </SubContentWrapper>
    </div>
  );
};
