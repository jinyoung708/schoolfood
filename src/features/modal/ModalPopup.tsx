/**
 * Component: ModalPopup.tsx
 * Description: 모달 팝업 컴포넌트
 */
import { Button } from '@headlessui/react';
import { useState } from 'react';
import { InputCheckbox } from '~/shared/components/form/InputCheckbox';
import { InputDatePicker } from '~/shared/components/form/InputDatePicker';
import { InputRadio } from '~/shared/components/form/InputRadio';
import { InputSearch } from '~/shared/components/form/InputSearch';
import { InputText } from '~/shared/components/form/InputText';
import { TermsOfPrivacy } from '~/shared/components/form/TermsOfPrivacy';
import { Modal1 } from '~/shared/components/modal/Modal1';
import { Modal2 } from '~/shared/components/modal/Modal2';
import { Modal3 } from '~/shared/components/modal/Modal3';
import { Modal4 } from '~/shared/components/modal/Modal4';
import { Toast } from '~/shared/components/modal/Toast';
import { Subtop } from '~/shared/components/subtop';
import { cn } from '~/shared/utils';

export const ModalPopup = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const openModal = (modalId: string) => {
    setActiveId(modalId);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveId(null);
  };

  const openToast = () => {
    setToastOpen(true);
  };

  return (
    <div className="container mx-auto">
      <Subtop />

      <Button className="block btn-primary btn-md mb-[10px]" onClick={() => openModal('modal1')}>
        로그인 필요 안내 팝업
      </Button>
      <Button className="block btn-primary btn-md mb-[10px]" onClick={() => openModal('modal2')}>
        회원 가입 완료
      </Button>
      <Button className="block btn-primary btn-md mb-[10px]" onClick={() => openModal('modal3')}>
        회원 탈퇴
      </Button>
      <Button className="block btn-primary btn-md mb-[10px]" onClick={() => openModal('modal4')}>
        근무처 변경
      </Button>
      <Button className="block btn-primary btn-md mb-[10px]" onClick={() => openModal('modal5')}>
        비밀번호 재설정 요청
      </Button>
      <Button className="block btn-primary btn-md mb-[10px]" onClick={() => openModal('modal6')}>
        만 14세 이상입니다. (필수)
      </Button>
      <Button className="block btn-primary btn-md mb-[10px]" onClick={() => openModal('modal7')}>
        아이디 찾기 / 비밀번호 재설정
      </Button>
      <Button className="block btn-primary btn-md mb-[10px]" onClick={() => openModal('modal8')}>
        일시중단 안내
      </Button>
      <Button className="block btn-primary btn-md mb-[10px]" onClick={() => openModal('modal9')}>
        이벤트 신청1
      </Button>
      <Button className="block btn-primary btn-md mb-[10px]" onClick={() => openModal('modal10')}>
        이벤트 신청2
      </Button>
      <Button className="block btn-primary btn-md mb-[10px]" onClick={() => openModal('modal11')}>
        이벤트 신청 완료
      </Button>
      <Button className="block btn-primary btn-md mb-[10px]" onClick={() => openModal('modal12')}>
        2차 가공 마케팅 사용 동의 (필수)
      </Button>
      <Button className="block btn-primary btn-md mb-[10px]" onClick={openToast}>
        토스트팝업
      </Button>

      {activeId === 'modal1' && (
        <Modal1
          open={open}
          onClose={closeModal}
          desc={
            <>
              회원 전용 서비스입니다.
              <br />
              로그인 후 서비스를 이용해주세요.
            </>
          }
          primaryBtn="확인"
        />
      )}

      {activeId === 'modal2' && (
        <Modal2
          open={open}
          onClose={closeModal}
          title="회원 가입 완료"
          desc={
            <>
              회원가입이 완료 되었습니다.
              <br />
              관리자 승인 시 문자와 메일로 안내드립니다.
            </>
          }
          primaryBtn="확인"
        />
      )}

      {activeId === 'modal3' && (
        <Modal2
          open={open}
          onClose={closeModal}
          title="회원 탈퇴"
          desc={
            <>
              <p>
                회원 탈퇴 시 서비스를 이용할 수 없으며
                <br />
                계정은 복구할 수 없습니다.
                <br />
                최종 확인을 위해 비밀번호를 한번 더 입력해주세요.
              </p>
              <div className="mt-[30px] text-left">
                <InputText type="password" placeholder="비밀번호를 입력해주세요." />
              </div>
            </>
          }
          whiteBtn="탈퇴"
          primaryBtn="취소"
        />
      )}

      {activeId === 'modal4' && (
        <Modal2
          open={open}
          onClose={closeModal}
          title="근무처 변경"
          noScrollbar
          desc={
            <>
              <p>
                근무처 변경은 관리자 재승인 후 가능하며,
                <br />
                승인 전까지 기존 근무처로 서비스 이용 가능합니다.
              </p>
              <div className="mt-[30px] text-left">
                <InputSearch label="변경 근무처" />
              </div>
              <div className="mt-[30px] text-left">
                <InputText required label="변경 식수" placeholder="식수를 숫자만 입력해주세요." />
              </div>
            </>
          }
          whiteBtn="취소"
          primaryBtn="변경요청"
        />
      )}

      {activeId === 'modal5' && (
        <Modal2
          open={open}
          onClose={closeModal}
          title="비밀번호 재설정 요청"
          desc={
            <>
              180일 동안 비밀번호를 변경하지 않았습니다.
              <br />
              소중한 개인 정보보호를 위해
              <br />
              비밀번호를 재설정 후 안전하게 이용해주세요.
            </>
          }
          whiteBtn="180일일 뒤 변경"
          primaryBtn="비밀번호 재설정"
          mobileBtn
        />
      )}

      {activeId === 'modal6' && (
        <Modal2
          open={open}
          onClose={closeModal}
          title={
            <>
              만 14세 이상입니다. <span className="text-point-red">(필수)</span>
            </>
          }
          desc={
            <p className="text-xl text-gray-500 font-medium">
              약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세
              내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관
              상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용
              약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세
              내용 약관 상세 내용 약관 상세 내용
            </p>
          }
          primaryBtn="확인"
        />
      )}

      {activeId === 'modal7' && <Modal3 open={open} onClose={closeModal} />}

      {activeId === 'modal8' && (
        <Modal2
          open={open}
          onClose={closeModal}
          title="일시중단 안내"
          desc={
            <>
              해당 상품은 일시 중단 상품으로
              <br className="block lg:hidden" />
              현재 사용 불가능합니다.
              <br />( 2025-07-01 ~ 2025-09-12 )
            </>
          }
          primaryBtn="확인"
        />
      )}

      {activeId === 'modal9' && (
        <Modal4 open={open} onClose={closeModal} title="이벤트 신청1">
          {/* step1 */}
          <div className="lg:max-h-[calc(100vh-240px)] lg:scrollbar-custom">
            <TermsOfPrivacy />
            <ul className="text-sm text-gray-500 mt-[16px]">
              <li>* 수집항목(필수) : 이름,아이디,학교명</li>
              <li>* 수집목적 : 행사물품 제공 및 당첨자 확인</li>
              <li>* 보유·이용기간 : 이벤트 종료일로 부터 3개월</li>
            </ul>
            <ul className="text-sm text-gray-500 mt-[25px]">
              <li>
                ※ 본 이벤트는 튼튼스쿨 회원에 한하여 참여가 가능하며, 당첨자는 가입하신 회원정보를
                활용하여 안내함을 알려드립니다.
              </li>
              <li>
                ※ 회원님은 개인정보 수집·이용하는데 동의를 거부할 권리가 있습니다. 동의를 거부하실
                경우 본 이벤트 참여가 불가합니다.
              </li>
            </ul>
          </div>
          <div className={cn('flex gap-[8px] mt-[30px]')}>
            <Button onClick={closeModal} className="btn-primary btn-lg grow">
              다음
            </Button>
          </div>
        </Modal4>
      )}

      {activeId === 'modal10' && (
        <Modal4 open={open} onClose={closeModal} title="이벤트 신청2">
          {/* step2 */}
          <div className="lg:max-h-[calc(100vh-240px)] lg:scrollbar-custom">
            <InputRadio
              label="신청관련 선택"
              required
              options={['택1 선택형 옵션', '택1 선택형 옵션2', '택1 선택형 옵션3']}
              defaultValue="택1 선택형 옵션"
            />
            <div className="mt-[30px]">
              <p className="mb-[12px] text-base font-medium">
                사용 상품<span className="text-gray-500">(중복가능)</span>
                <span className="text-point-red">*</span>
              </p>
              <div className="flex flex-col gap-[20px] items-start">
                <InputCheckbox>남도 떡갈비</InputCheckbox>
                <InputCheckbox>도톰 동그랑땡</InputCheckbox>
                <InputCheckbox>중복 선택형 옵션</InputCheckbox>
              </div>
            </div>
            <div className="mt-[30px]">
              <InputDatePicker label="급식일" placeholder="급식일을 입력해주세요." />
            </div>
          </div>
          <div className={cn('flex gap-[8px] mt-[30px]')}>
            <Button onClick={closeModal} className="btn-primary btn-lg grow">
              신청하기
            </Button>
          </div>
        </Modal4>
      )}

      {activeId === 'modal11' && (
        <Modal4 open={open} onClose={closeModal} title="이벤트 신청">
          <p className="text-22 font-medium mb-[4px] text-center pt-[34px] lg:pt-0">
            신청 완료되었습니다.
          </p>
          <p className="text-base text-gray-500 text-center">
            제출한 신청서는 이벤트 화면에서 수정 가능합니다. <br />
            (이벤트 화면 &gt; 신청내역 수정하기 버튼)
          </p>
          <div className={cn('flex gap-[8px] mt-[30px]')}>
            <Button onClick={closeModal} className="btn-primary btn-lg grow">
              확인
            </Button>
          </div>
        </Modal4>
      )}

      {activeId === 'modal12' && (
        <Modal2
          open={open}
          onClose={closeModal}
          title={
            <>
              2차 가공 마케팅 사용 동의 <span className="text-point-red">(필수)</span>
            </>
          }
          desc={
            <p className="text-xl text-gray-500 font-medium">
              약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세
              내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관
              상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용
              약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세 내용 약관 상세
              내용 약관 상세 내용 약관 상세 내용
            </p>
          }
          primaryBtn="확인"
        />
      )}

      {toastOpen && <Toast open={toastOpen} desc="ㅇㅇㅇ이 복사되었습니다." />}
    </div>
  );
};
