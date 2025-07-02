/**
 * Component: Modal3.tsx
 * Description: 모달3 팝업 컴포넌트
 */

import {
  Dialog,
  DialogPanel,
  Button,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@headlessui/react';
import { cn } from '~/shared/utils';
import styles from '~/shared/css/Modal3.module.css';
import { InputText } from '../form/InputText';

interface Modal3Props {
  open: boolean;
  onClose: () => void;
}

export const Modal3 = ({ open, onClose }: Modal3Props) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-[var(--header-z)]">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-[16px] bg-black/40">
        <DialogPanel className="relative max-w-[560px] w-full bg-white p-[20px] lg:p-[40px] rounded-[8px] lg:rounded-[16px]">
          <TabGroup>
            <TabList className={styles.tab}>
              <Tab>아이디 찾기</Tab>
              <Tab>비밀번호 재설정</Tab>
            </TabList>
            <TabPanels>
              {/* 아이디찾기 */}
              <TabPanel className={cn('max-h-[calc(100vh-160px)] scrollbar-custom', styles.tabCon)}>
                {/* step1 */}
                <div>
                  <InputText
                    placeholder="회원가입 시 등록한 휴대폰 번호를 입력해주세요."
                    btnName="인증번호 전송"
                    btnColor="btn-gray-400"
                    className={cn('mb-[8px]', styles.moFlexCol)}
                  />
                  <InputText placeholder="인증번호를 입력해주세요." />
                  <div className="flex gap-[8px] mt-[30px]">
                    <Button onClick={onClose} className="btn-border-primary btn-lg grow">
                      취소
                    </Button>
                    <Button onClick={onClose} className="btn-primary btn-lg grow">
                      확인
                    </Button>
                  </div>
                </div>
                {/* step2 */}
                <div>
                  <InputText
                    placeholder="회원가입 시 등록한 휴대폰 번호를 입력해주세요."
                    btnName="재전송"
                    btnColor="btn-gray-400"
                    className={cn('mb-[8px]', styles.moFlexCol)}
                  />
                  <InputText placeholder="인증번호를 입력해주세요." time />
                  <div className="flex gap-[8px] mt-[30px]">
                    <Button onClick={onClose} className="btn-border-primary btn-lg grow">
                      취소
                    </Button>
                    <Button onClick={onClose} className="btn-primary btn-lg grow">
                      확인
                    </Button>
                  </div>
                </div>
                {/* step3 */}
                <div>
                  <p className="text-xl font-medium text-center">
                    회원님께서 가입하신 아이디는
                    <br />
                    <span className="text-secondary">Tete******</span> 입니다.
                  </p>
                  <div className="flex gap-[8px] mt-[30px]">
                    <Button onClick={onClose} className="btn-primary btn-lg grow">
                      로그인
                    </Button>
                  </div>
                </div>
              </TabPanel>

              {/* 비밀번호 재설정 */}
              <TabPanel className={cn('max-h-[calc(100vh-160px)] scrollbar-custom', styles.tabCon)}>
                {/* step1 */}
                <div>
                  <p className="mb-[30px] text-base lg:text-xl font-medium text-center">
                    회원가입 시 등록한 휴대폰 번호를 입력해주세요.
                  </p>
                  <InputText
                    btnName="재전송"
                    btnColor="btn-gray-400"
                    className={cn('mb-[8px]', styles.moFlexCol)}
                  />
                  <InputText placeholder="인증번호를 입력해주세요." time />
                  <div className="flex gap-[8px] mt-[30px]">
                    <Button onClick={onClose} className="btn-border-primary btn-lg grow">
                      취소
                    </Button>
                    <Button onClick={onClose} className="btn-primary btn-lg grow">
                      확인
                    </Button>
                  </div>
                </div>
                {/* step2 */}
                <div>
                  <InputText
                    label="새 비밀번호"
                    required
                    placeholder="새로운 비밀번호를 입력해주세요."
                    className="mb-[24px]"
                    desc="8자 이상 영문, 숫자, 특수문자 조합"
                  />
                  <InputText
                    label="새 비밀번호 확인"
                    required
                    placeholder="비밀번호를 한 번 더 입력해주세요."
                  />
                  <ul className="text-sm text-gray-500 mt-[16px]">
                    <li>계정(ID)과 4자리 이상 동일한 패스워드는 사용 불가합니다.</li>
                    <li>4자리 이상 반복되는 문자나 숫자 사용 불가합니다.</li>
                    <li>이전에 사용한 패스워드와 타 사이트와 다른 패스워드를 사용해주세요.</li>
                  </ul>
                  <div className="flex gap-[8px] mt-[30px]">
                    <Button onClick={onClose} className="btn-border-primary btn-lg grow">
                      취소
                    </Button>
                    <Button onClick={onClose} className="btn-primary btn-lg grow">
                      확인
                    </Button>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
